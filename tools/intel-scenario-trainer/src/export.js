function download(filename, mime, content) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function fmtCoverage(coverage) {
  return Object.entries(coverage)
    .map(([f, lvl]) => `- ${f}: ${lvl || 'not touched'}`).join('\n');
}

function fmtTaskValue(v) {
  if (v == null) return '_(no response)_';
  if (Array.isArray(v)) return v.join(', ');
  if (typeof v === 'object') return JSON.stringify(v);
  return String(v);
}

export function exportMarkdown(session, pack) {
  const s = session;
  const scen = pack.scenario;
  const lines = [];
  lines.push(`# ${scen.title || pack.id} — Student Session Summary`);
  lines.push('');
  if (s.finalAssessment.studentName) lines.push(`**Student / Session:** ${s.finalAssessment.studentName}`);
  lines.push(`**Scenario:** ${scen.title || pack.id} (${scen.block || ''})`);
  lines.push(`**Generated:** ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Final Assessment');
  lines.push(`**BLUF:** ${s.finalAssessment.bluf || '_(blank)_'}`);
  lines.push('');
  lines.push(`**Most Likely COA:** ${s.finalAssessment.mostLikelyCoa || '_(blank)_'}`);
  lines.push('');
  lines.push(`**Most Dangerous COA:** ${s.finalAssessment.mostDangerousCoa || '_(blank)_'}`);
  lines.push('');
  lines.push(`**Key Indicators:** ${s.finalAssessment.indicators || '_(blank)_'}`);
  lines.push('');
  lines.push(`**Collection Gaps:** ${s.finalAssessment.gaps || '_(blank)_'}`);
  lines.push('');
  lines.push(`**Recommended Collection:** ${s.finalAssessment.recommendedCollection || '_(blank)_'}`);
  lines.push('');
  lines.push(`**Confidence:** ${s.finalAssessment.confidence}%`);
  lines.push('');
  lines.push('## Objective Coverage');
  lines.push(fmtCoverage(s.objectiveCoverage));
  lines.push('');
  lines.push('## Inject Responses');
  for (const inject of pack.injects) {
    const resp = s.responses[inject.id];
    if (!resp) continue;
    lines.push(`### ${inject.title} (${inject.timestamp || ''})`);
    lines.push(`*Phase:* ${inject.phaseId}`);
    for (const task of (inject.studentTasks || [])) {
      lines.push(`- **${task.prompt}**`);
      lines.push(`  - Response: ${fmtTaskValue(resp[task.id])}`);
    }
    lines.push('');
  }
  download(`session-${pack.id}-${Date.now()}.md`, 'text/markdown', lines.join('\n'));
}

export function exportJSON(session, pack) {
  const payload = {
    scenarioId: pack.id,
    completedAt: new Date().toISOString(),
    responses: session.responses,
    objectiveCoverage: session.objectiveCoverage,
    finalAssessment: session.finalAssessment,
  };
  download(`session-${pack.id}-${Date.now()}.json`, 'application/json', JSON.stringify(payload, null, 2));
}
