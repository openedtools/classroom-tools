/* global window */
window.NorthernVeilContent = {
  config: {
    opName: "NORTHERN VEIL",
    opCode: "OP-NV-26",
    studentPassword: "OperationNorthernV3il",
    sessionKey: "onv-student-session-v1",
    phaseIds: [
      "phase-0-overview",
      "phase-1-info",
      "phase-2-cyber",
      "phase-3-geoint",
      "phase-4-emsradar",
      "phase-5-ir",
      "phase-6-isr",
      "phase-7-space",
      "phase-8-final"
    ],
  },
  restoredThrough: "phase-8-final",
  phases: {
    "phase-0-overview": {
      id: "phase-0-overview",
      title: "Scenario Orientation",
      subtitle: "Operation Northern Veil",
      domain: null,
      objectiveIds: [],
      inject: `You are the coalition intelligence cell supporting Gorgas leadership. Donovian rhetoric toward Gorgas has sharpened over the past two weeks, with renewed claims that Donovian-language Zabzimeks are under threat. The commander wants you to integrate multi-domain reporting and warn of cross-border action.`,
      evidenceCards: [
        {
          id: "ev-cmdr-001",
          title: "Commander Priority Intelligence Requirement",
          summary: "Will Donovia conduct a limited cross-border operation into Gorgas within the next 72 hours?",
          detail: "The commander wants a BLUF, most likely COA, most dangerous COA, key indicators, and collection gaps."
        }
      ],
      activities: []
    },
    "phase-1-info": {
      id: "phase-1-info",
      title: "Phase 1 - Information Shaping",
      subtitle: "Lesson 4.6 - Information Operations",
      domain: "io",
      objectiveIds: ["4.6-ie-dimensions", "4.6-disinformation"],
      inject: `Donovian state media and aligned social accounts have launched a coordinated narrative claiming that Gorgas is preparing ethnic violence against Zabzimeki civilians. The campaign distributes fabricated footage, recycled clips stripped of context, and amplified social media posts designed to shape international opinion against Gorgas. Coalition signals intelligence has detected coordinated hashtag activity originating from Donovian-linked accounts, reaching audiences in 14 countries within 90 minutes. Open-source researchers have geolocated several video clips to Donovian training grounds - not Gorgas territory.

Your intelligence cell has been asked to characterize the IO campaign: identify which dimensions of the Information Environment are being targeted, classify the type of information being used in each report, and clarify the intelligence officer's correct role in supporting the coalition's response.`,
      evidenceCards: [
        {
          id: "e1-1",
          title: 'State Broadcast - "Gorgas Army Moves on Civilians"',
          summary: "Donovian state television claims Gorgas military is mobilizing against Zabzimeki civilians. The claim is fabricated and part of a coordinated narrative.",
          detail: "Broadcast aired at 1423L. The segment uses inflammatory framing and unverified footage. Within two hours, the same broadcast was re-aired by three Donovian-aligned regional networks. An open-source researcher later identified the visual material as footage from a Donovian military exercise conducted in 2023 - geolocated to Donovia, not Gorgas. The broadcast was produced and distributed intentionally."
        },
        {
          id: "e1-2",
          title: "Separatist Social Post - Viral Video",
          summary: "A separatist-aligned social media account posted footage of armed troops, claiming it shows events in Zabzimek.",
          detail: "The account has approximately 140,000 followers. Video metadata shows geolocation tags were stripped before posting. A reverse image search located the same footage on a Donovian military forum dated March 2023. Based on account behavior and posting history, the account appears to have shared the content believing it was current and authentic - there is no evidence of deliberate intent to deceive on the part of this specific account."
        },
        {
          id: "e1-3",
          title: "Leaked Gorgas Readiness Memo",
          summary: "A genuine Gorgas Ministry of Defense memo was published by a separatist channel and framed as proof of imminent offensive operations.",
          detail: "The memo has been verified as authentic. It describes standard defensive readiness procedures, not offensive planning. The separatist channel published it with deliberately misleading framing to imply aggressive Gorgas intent. The content itself is factually accurate - it is the context and framing that constitute the information operation. This is an important and frequently misunderstood category."
        },
        {
          id: "e1-4",
          title: "Gorgas Official Denial - Press Conference",
          summary: "The Gorgas MoD held a press conference at 1600L denying all claims of offensive military operations.",
          detail: "No independent external verification was cited. Estimated audience reach was approximately 12 percent of the original Donovian broadcast reach. The denial did not specifically address the leaked memo or geolocated footage, reducing its effectiveness. The Gorgas government believes its own statement is accurate and complete."
        },
        {
          id: "e1-5",
          title: "Hashtag Coordination Analysis - OSINT",
          summary: "Three campaign hashtags appeared simultaneously in 14 countries within 90 minutes of the initial broadcast.",
          detail: "Timing analysis shows a synchronized initial push from accounts with nearly identical creation dates, follower patterns, and posting cadence. The pattern is inconsistent with organic spread. OSINT analysts assess the campaign as consistent with state-directed IO amplification. Target languages include English, German, French, and Georgian - indicating deliberate audience targeting across NATO member states and Gorgas itself."
        }
      ],
      activities: [
        {
          id: "p1a1",
          type: "classification",
          typeLabel: "Activity 1 of 4 - Classification",
          points: 3,
          instruction: "Assign each item to the dimension of the Information Environment it primarily represents.",
          objectiveIds: ["4.6-ie-dimensions"],
          items: [
            { id: "i1", text: "The Donovian broadcast satellite transmitter and television network infrastructure", correct: "physical", explanation: "This is the hardware layer. Physical dimension = transmitters, servers, cables, and other infrastructure." },
            { id: "i2", text: "The fabricated video file distributed across social media platforms", correct: "informational", explanation: "This is the content being carried. Informational dimension = the data, file, or message itself." },
            { id: "i3", text: "The Gorgas general's decision to postpone a border patrol after watching the broadcast", correct: "cognitive", explanation: "This is the human decision effect. Cognitive dimension = beliefs, perceptions, and decisions." }
          ],
          categories: [
            { id: "physical", label: "Physical Dimension" },
            { id: "informational", label: "Informational Dimension" },
            { id: "cognitive", label: "Cognitive Dimension" }
          ],
          feedback: {
            correct: "All three correctly identified. Physical = hardware and infrastructure. Informational = data, files, and content. Cognitive = minds, beliefs, and decisions.",
            incorrect: "Review the three dimensions. Physical = the hardware and infrastructure (transmitters, servers, cables). Informational = the data and content traveling through it (the video file, the text). Cognitive = what happens in human minds as a result (the general's changed decision is a cognitive effect).",
            whyMatters: "All IO ultimately aims at the Cognitive dimension - the satellite and the video file are only valuable if they change what someone believes and then decides. Donovia's goal is not to destroy infrastructure; it is to change minds.",
            evidenceClue: "Evidence Card 1 describes the broadcast satellite and network (Physical). The video content file is Informational. The general's postponed patrol is the Cognitive effect - the changed decision is exactly what Donovia's campaign was designed to produce."
          }
        },
        {
          id: "p1a2",
          type: "classification",
          typeLabel: "Activity 2 of 4 - Classification",
          points: 5,
          instruction: "Classify each item as Disinformation or Misinformation. Use the intent rule: deliberate falsehood = Disinformation; false content shared without intent to deceive = Misinformation.",
          objectiveIds: ["4.6-disinformation"],
          items: [
            { id: "j1", text: "Donovian state broadcast using footage deliberately fabricated and produced for this campaign", correct: "disinformation", explanation: "The broadcaster knows the footage is false and is using it to deceive, so this is disinformation." },
            { id: "j2", text: "Separatist social post sharing recycled footage - the poster appears to believe it is authentic", correct: "misinformation", explanation: "The poster appears to believe the clip is real, so the falsehood is being shared without intent to deceive." },
            { id: "j3", text: "Donovian state media publishes a digitally altered 'leaked' Gorgas readiness memo with false dates and headers to imply offensive intent", correct: "disinformation", explanation: "The document has been altered to create a false impression, so this is deliberate deception rather than an honest mistake." },
            { id: "j4", text: "Gorgas social-media user reposting an edited clip believing it came from this morning's border crossing", correct: "misinformation", explanation: "The user believes the edited clip is authentic, so this is an honest but false repost rather than deliberate deception." },
            { id: "j5", text: "Coordinated hashtag amplification - state-directed, knowingly spreading a false narrative", correct: "disinformation", explanation: "This is coordinated and intentional. The actors know the narrative is false and are spreading it anyway." }
          ],
          categories: [
            { id: "disinformation", label: "Disinformation" },
            { id: "misinformation", label: "Misinformation" }
          ],
          feedback: {
            correct: "All five correctly classified. Intent is the key discriminator between disinformation and misinformation.",
            incorrect: "Apply the intent rule. Disinformation is false content spread deliberately to deceive. Misinformation is false content shared without intent to deceive. If the poster believes the claim is true, it is misinformation even if the content is wrong.",
            whyMatters: "The category tells you how to respond. Deliberate falsehood needs exposure and counter-messaging. Honest error needs correction. The same false clip can be handled differently depending on what the sender knew and intended.",
            evidenceClue: "Card 1 is deliberate fabrication, Card 2 is accidental sharing of false context, Card 3 is weaponized genuine material framed as something else, Card 4 is a mistaken repost, and Card 5 is coordinated deliberate amplification."
          }
        },
        {
          id: "p1a3",
          type: "decision",
          typeLabel: "Activity 3 of 4 - Best Answer",
          points: 1,
          instruction: "Coalition IO planners need analytical support from your cell. How should the intelligence officer distinguish MISO from MILDEC while supporting this IO campaign response?",
          objectiveIds: ["4.6-disinformation"],
          options: [
            { id: "a", text: "Assess the target audience, the vulnerability being exploited, and whether the operation is intended to persuade a foreign audience (MISO) or deceive adversary decision-makers about intent and capability (MILDEC), then pass that analysis to planners.", correct: true, explanation: "The intelligence officer's job is analysis: identify the audience, effect, and deception intent, then hand that distinction to the planners." },
            { id: "b", text: "Broadcast counter-MISO messages directly to Gorgas and Zabzimeki civilian audiences to rebut the Donovian narrative in real time.", explanation: "That is a messaging task, not an intelligence task." },
            { id: "c", text: "Call every false narrative MILDEC, because all propaganda is the same thing.", explanation: "MISO and MILDEC are related but not identical; the intent and audience differ." },
            { id: "d", text: "Produce counter-narrative video content to respond to the Donovian state media broadcast segment.", explanation: "Creating the content is MISO work, not the intelligence officer's role." }
          ],
          feedback: {
            correct: "Correct. Intelligence officers analyze the audience and effect, then tell planners whether the activity is MISO shaping or MILDEC deception.",
            incorrect: "The intelligence role is analytic, not operational. MISO seeks to influence a foreign audience. MILDEC seeks to deceive decision-makers about intent or capability. Your job is to identify which one the activity fits and why, not to write the message yourself.",
            whyMatters: "If you blur MISO and MILDEC, you risk misreading the enemy's goal. A persuasive narrative aimed at foreign audiences is not the same thing as a deception plan aimed at decision-makers.",
            evidenceClue: "The campaign is already reaching multiple countries in multiple languages. That is an influence problem for MISO analysis, but it is not the same as MILDEC unless the adversary is masking friendly intent or capability from decision-makers."
          }
        },
        {
          id: "p1a4",
          type: "fillslot",
          typeLabel: "Activity 4 of 4 - Fill the Assessment",
          points: 2,
          instruction: "Complete the intelligence assessment sentence using the correct terms from each dropdown.",
          objectiveIds: ["4.6-ie-dimensions"],
          sentence: [
            { type: "text", text: "The ultimate target of the Donovian IO campaign is the " },
            { type: "slot", id: "slot1", options: ["Physical", "Informational", "Cognitive"], correct: "Cognitive", explanation: "IO is trying to change beliefs and decisions, so the target is the Cognitive dimension." },
            { type: "text", text: " dimension, because Donovia's objective is not to destroy Gorgas's infrastructure but to change " },
            { type: "slot", id: "slot2", options: ["network bandwidth", "weapons systems", "beliefs and perceptions"], correct: "beliefs and perceptions", explanation: "The campaign is meant to alter what audiences think, not to damage hardware or weapons." },
            { type: "text", text: " about Gorgas's intent among international audiences." }
          ],
          feedback: {
            correct: "Correct. The Cognitive dimension is the end goal of all IO. Physical and Informational are the delivery mechanisms - not the purpose.",
            incorrect: "All IO aims at the Cognitive dimension. Donovia is not trying to destroy Gorgas's transmitters or corrupt its data files - the goal is to change what international audiences and decision-makers believe about Gorgas.",
            whyMatters: "Understanding that Cognitive is the target helps you assess whether the IO campaign is succeeding. Success is not measured in transmitters destroyed or files corrupted - it is measured in changed beliefs, changed decisions, and changed policy positions.",
            evidenceClue: "Evidence Card 5 shows synchronized amplification in 14 countries and four languages. This is not an attack on a single transmitter - it is a simultaneous operation against millions of minds. That is a Cognitive-dimension campaign at scale."
          }
        }
      ]
    },
    "phase-2-cyber": {
      id: "phase-2-cyber",
      title: "Phase 2 - Cyber Disruption",
      subtitle: "Lesson 4.5 - Cyber Intelligence",
      domain: "cyber",
      objectiveIds: ["4.5-cyber-actors"],
      inject: `As Donovia's IO campaign continues, Gorgas experiences a surge of coordinated cyber activity. Logistics contractors supporting border operations receive spearphishing emails spoofing the Gorgas Ministry of Defense. The border crossing management database goes offline for three hours following a destructive malware incident. Municipal government websites are defaced with political slogans and Donovian imagery. Separately, official Gorgas government social media accounts begin posting content that contradicts Gorgas's stated positions - accounts that analysts assess have been compromised.

Coalition intelligence is tasked to assess: Is this criminal opportunism exploiting the crisis, or a coordinated state-directed operation? Your analysis must characterize the threat actors involved, apply the Cyber Kill Chain to the phishing incident, and correctly distinguish which events represent a Cyber Threat versus a Cyber-Enabled Threat.`,
      evidenceCards: [
        {
          id: "e2-1",
          title: "Spearphishing - Logistics Contractor",
          summary: "Spoofed MoD domain, custom malware payload, C2 beacon established.",
          detail: "A spearphishing email spoofing the Gorgas Ministry of Defense was delivered to logistics contractors supporting border operations. The email contained a document with an embedded payload. On execution, custom malware - not commercially available - was installed on the victim system and established a Command and Control (C2) channel to an external server. The malware remained undetected for approximately 6 weeks before discovery. Extended dwell time, custom tooling, and the use of a spoofed government identity are indicators associated with nation-state actors, who prioritize long-term access over quick financial gain."
        },
        {
          id: "e2-2",
          title: "Municipal Website Defacement",
          summary: "Political slogans, Donovian imagery, low-sophistication publicly available tools.",
          detail: "At least nine Gorgas municipal government websites were defaced within a 90-minute window. Defacement content included pro-Donovian slogans, Zabzimek separatist imagery, and a message claiming Gorgas was oppressing its own people. Forensic review found the attacker used a publicly available hacking tool - consistent with hacktivist tradecraft rather than a nation-state operation. No persistent access tools were installed. The attacker deleted some access logs, suggesting basic operational security awareness despite low technical sophistication. The visible political messaging is a hallmark of hacktivist activity."
        },
        {
          id: "e2-3",
          title: "Border Database Outage - Destructive Malware",
          summary: "3-hour outage, destructive malware, no ransom demand.",
          detail: "The Gorgas border crossing management database experienced a 3-hour outage after destructive malware corrupted primary and backup data. No ransom demand was made - the attacker's goal was destruction, not financial gain. The timing, occurring 18 hours after the IO campaign launched, is assessed as unlikely to be coincidental. This incident directly targeted the availability of Gorgas's network infrastructure - the attack was on the pipe itself, designed to deny Gorgas access to its own systems and disrupt border operations."
        },
        {
          id: "e2-4",
          title: "Compromised Gorgas Social Media Accounts",
          summary: "Official accounts posting contradictory content; assessed as compromised.",
          detail: "Three official Gorgas government social media accounts began posting content inconsistent with Gorgas's stated policy positions, including claims that Gorgas was preparing to abandon Zabzimek and that key officials had acknowledged Donovian sovereignty claims. The posts were deleted within hours by Gorgas authorities, who confirmed the accounts had been accessed from outside the country. In this case, the network was not the target - it was used as a medium to deliver a false message to an audience, amplifying the Donovian IO narrative. The goal was cognitive effect on international observers, not network disruption."
        },
        {
          id: "e2-5",
          title: "Attribution Analysis - Threat Actor Indicators",
          summary: "Analyst note on attribution methodology: TTPs, dwell time, custom malware.",
          detail: "Attribution in cyberspace is probabilistic - it is rarely absolute. Analysts use Tactics, Techniques, and Procedures (TTPs), malware characteristics, and behavioral patterns to assess likely actor. Nation-state indicators include: custom or zero-day malware (not available on criminal markets), extended dwell time (months, not days), objectives aligned with strategic goals rather than financial gain, and technical sophistication beyond hacktivist capability. The Diamond Model of Intrusion Analysis provides a framework: every cyber intrusion has four vertices - Adversary, Capability, Infrastructure, and Victim. Mapping these vertices across multiple incidents can link attacks to a common actor even when direct attribution is not possible."
        }
      ],
      activities: [
        {
          id: "p2a1",
          type: "classification",
          typeLabel: "Activity 1 of 4 - Classification",
          points: 4,
          instruction: "Classify each observed behavior according to the most likely threat actor type. Four categories are available - each represents one of the four cyber threat actor types covered in your lesson.",
          objectiveIds: ["4.5-cyber-actors"],
          items: [
            { id: "i1", text: "Spearphishing with custom malware, C2 channel established, 6 weeks of undetected access - no financial demand made", correct: "nation-state" },
            { id: "i2", text: "Government websites defaced with political slogans using publicly available tools", correct: "hacktivist" },
            { id: "i3", text: "Ransomware encrypts logistics contractor files and demands cryptocurrency payment", correct: "criminal" },
            { id: "i4", text: "A Gorgas IT contractor with database access creates unauthorized user accounts and exports sensitive records before disappearing", correct: "insider" }
          ],
          categories: [
            { id: "nation-state", label: "Nation-State" },
            { id: "hacktivist", label: "Hacktivist" },
            { id: "criminal", label: "Criminal" },
            { id: "insider", label: "Insider" }
          ],
          feedback: {
            correct: "Correct. Nation-state actors use custom malware, seek long dwell time, and pursue strategic objectives. Hacktivists rely on public tools and prioritize visible political messaging. Criminal actors are financially motivated. Insider threats come from trusted individuals with legitimate access who misuse it.",
            incorrect: "Review the four actor types from your lesson. Key discriminators: Nation-State = custom tools + strategic objectives + long dwell time. Hacktivist = political messaging + public tools. Criminal = financial motive (ransom, data sale). Insider = trusted access abused from within.",
            whyMatters: "Correct actor attribution shapes the intelligence assessment and the commander's response. A nation-state operation requires a different response than criminal ransomware. Misidentifying the actor means the response targets the wrong threat.",
            evidenceClue: "Card 1 describes custom malware and 6 weeks of dwell time - nation-state hallmarks from your lesson. Card 2 shows public tools and political messaging - hacktivist. Card 5 explains how TTPs and custom malware drive attribution analysis."
          }
        },
        {
          id: "p2a2",
          type: "sequencing",
          typeLabel: "Activity 2 of 4 - Sequencing",
          points: 3,
          instruction: "Place the five stages of the Cyber Kill Chain in the correct order, from first to last. Use the up/down arrows to reorder.",
          objectiveIds: ["4.5-cyber-actors"],
          items: [
            { id: "ckc1", text: "Reconnaissance - identify the target; research logistics contractors and key personnel" },
            { id: "ckc2", text: "Weaponization / Delivery - build and deliver the malware via spearphishing email" },
            { id: "ckc3", text: "Exploitation / Installation - victim opens the document; malware installs and establishes a foothold" },
            { id: "ckc4", text: "Command & Control (C2) - malware beacons out to an external server; attacker gains remote access" },
            { id: "ckc5", text: "Actions on Objectives - attacker collects data, pre-positions for destructive payload, or triggers disruption" }
          ],
          correct: ["ckc1", "ckc2", "ckc3", "ckc4", "ckc5"],
          feedback: {
            correct: "Correct. The Kill Chain is a sequential process - the attacker must complete each stage to reach Actions on Objectives. Defenders only need to break the chain at one link to stop the attack.",
            incorrect: "The five stages are: Reconnaissance -> Weaponization/Delivery -> Exploitation/Installation -> Command & Control -> Actions on Objectives. Think: find the target, build and send the weapon, trigger it and get in, phone home, then act.",
            whyMatters: "The Kill Chain tells you how far the attacker has progressed. If C2 is already established (Stage 4), the attacker is inside and active. If only Delivery was attempted (Stage 2), there may be no active compromise yet. Stage analysis drives the urgency and type of response.",
            evidenceClue: "Card 1 describes the phishing delivery (Stage 2), custom malware installation (Stage 3), and the C2 beacon (Stage 4). The attacker reached Stage 4 - Command & Control - before being discovered 6 weeks later."
          }
        },
        {
          id: "p2a3",
          type: "decision",
          typeLabel: "Activity 3 of 4 - Decision",
          points: 1,
          instruction: "Gorgas's official social media accounts are compromised and used to post false statements undermining Gorgas's diplomatic position. The goal is to influence international audiences. Select the correct characterization of this incident.",
          objectiveIds: ["4.5-cyber-actors"],
          options: [
            { id: "o1", text: "Cyber Threat - the attack targets Gorgas's network infrastructure to deny, degrade, or destroy its systems", correct: false },
            { id: "o2", text: "Cyber-Enabled Threat - the network is used as a medium to deliver influence; the goal is cognitive effect, not infrastructure destruction", correct: true },
            { id: "o3", text: "Kinetic Threat - the attack involves physical destruction of communications hardware", correct: false },
            { id: "o4", text: "Not a cyber incident - this is purely an Information Operations problem with no cyber component", correct: false }
          ],
          feedback: {
            correct: "Correct. A Cyber-Enabled Threat uses the network as the delivery medium to achieve a non-network effect - in this case, influencing international perceptions of Gorgas. The pipe was not the target; the pipe carried the weapon. The appropriate response is counter-messaging and IO response, not network defense.",
            incorrect: "A Cyber Threat targets the pipe itself - denying, degrading, or destroying network infrastructure (like the database wipe in Card 3). A Cyber-Enabled Threat uses the pipe to deliver an effect in another domain - influence, espionage. The compromised accounts are used to reach minds, not destroy systems.",
            whyMatters: "This distinction determines the response lane. A Cyber Threat -> network defense and incident response. A Cyber-Enabled Threat -> counter-messaging and IO response. Sending a cybersecurity team to patch servers does not stop a disinformation campaign being run through compromised accounts.",
            evidenceClue: "Card 4 is the cyber-enabled example: the network was used as the medium to post false content to international audiences. Card 3 (database wipe) is the cyber threat example: the attack targeted and destroyed data infrastructure directly."
          }
        },
        {
          id: "p2a4",
          type: "multiselect",
          typeLabel: "Activity 4 of 4 - Multi-Select",
          points: 3,
          instruction: "Select ALL indicators that most strongly support nation-state attribution for this cyber campaign. Some indicators are ambiguous or counter-indicative.",
          objectiveIds: ["4.5-cyber-actors"],
          options: [
            { id: "m1", text: "Custom malware - not available commercially or on criminal markets", correct: true, explanation: "Custom malware requires significant development resources and targeting intelligence. Criminal and hacktivist groups rely on commercially available or leaked tools. Bespoke capability is a nation-state signature." },
            { id: "m2", text: "Extended dwell time - 6 weeks of undetected access before discovery", correct: true, explanation: "Six weeks of undetected persistence requires discipline, counter-detection tradecraft, and a strategic objective that rewards patience. Financial criminals extract quickly and leave. Nation-states park inside networks for long-term intelligence collection." },
            { id: "m3", text: "Destructive objective with no financial motive (no ransom demand)", correct: true, explanation: "No ransom demand rules out criminal actors. Destruction against a strategic target with no payout points to a state operation aimed at degrading an adversary's capability, not extracting money." },
            { id: "m4", text: "Website defacement using a publicly available hacking tool with political messaging", correct: false, explanation: "This is hacktivist behavior. Publicly available tools, visible defacement, and political messaging are the signature of low-sophistication actors or state-tolerated proxies - not the state operation itself. It weakens attribution to a nation-state." },
            { id: "m5", text: "Timing coordinated with an active IO campaign - not random opportunism", correct: true, explanation: "Synchronization with a broader IO campaign indicates centralized planning and strategic coordination. Random opportunists do not time their attacks to coincide with state disinformation operations." }
          ],
          feedback: {
            correct: "Correct. Nation-state indicators from your lesson: custom/zero-day malware, extended dwell time, strategic objectives (no financial motive), and TTPs coordinated with broader operations. The defacement is hacktivist behavior - counter-indicative for state attribution.",
            incorrect: "Review your lesson's nation-state indicators: custom or zero-day malware, long dwell time, objectives aligned with strategic goals. The defacement (public tool, political messaging) points to hacktivist activity - not nation-state. It may be tolerated by Donovia but is not the state operation.",
            whyMatters: "Multi-actor cyber campaigns deliberately mix threat actors to complicate attribution. A state can direct sophisticated operations while hacktivist noise runs in parallel. Analysts must separate the state-directed threads from opportunistic activity to give commanders an accurate threat characterization.",
            evidenceClue: "Cards 1 and 5 contain the key nation-state indicators: custom malware, extended dwell time, and TTPs. Card 2 (defacement with public tool) actually weakens the state attribution picture for that specific incident."
          }
        }
      ]
    },
    "phase-3-geoint": {
      id: "phase-3-geoint",
      title: "Phase 3 - GEOINT and Border Activity",
      subtitle: "Lesson 4.1 - Geospatial Intelligence",
      domain: "geoint",
      objectiveIds: ["4.1-geoint-elements", "4.1-geoint-limits"],
      inject: `Coalition imagery assets and a commercial electro-optical satellite pass have detected significant military activity north of the Gorgas border. A motor pool 12 kilometers inside Donovian territory shows approximately 40 wheeled vehicles - including fuel tankers - staged in a pattern consistent with pre-movement preparation. A 48-hour Wide-Area Motion Imagery (WAMI) collection window covered the nearest Donovian border town, capturing and recording all vehicle movement across the area. Full Motion Video (FMV) assets tracked a vehicle convoy moving south along Route 7 for 12 continuous minutes before the collection platform had to reposition. Moving Target Indicator (MTI) data flagged 15 vehicles transiting the Zabzimek corridor overnight.

Your intelligence cell must now analyze the imagery picture: identify which GEOINT product provides what type of coverage, determine which product best supports a retrospective analysis of historical vehicle movement, and correctly assess what the imagery can and cannot confirm - particularly regarding a warehouse on the northeast edge of the motor pool that is showing a heat signature.`,
      evidenceCards: [
        {
          id: "e3-1",
          title: "EO Satellite Image - Motor Pool, D-3",
          summary: "Commercial electro-optical image shows approximately 40 vehicles and fuel tankers staged at a Donovian motor pool 12 km north of the Gorgas border.",
          detail: "Image timestamp: D-3 (three days before the current reporting window). Resolution sufficient to distinguish wheeled vehicle types and count fuel tankers. Approximately 40 vehicles observed, staged in columns consistent with movement preparation. Two fuel tankers visible on the eastern edge of the motor pool. This sensor depends on ambient light - nighttime collection is not possible with an electro-optical system. Cloud cover at time of collection was minimal. This is a single-point snapshot: it shows what was present at that moment, not movement over time."
        },
        {
          id: "e3-2",
          title: "WAMI Coverage - Border Town, 48-Hour Window",
          summary: "Wide-area persistent imagery captured 48 hours of movement across the Donovian border town. Vehicle patterns have been reconstructed.",
          detail: "WAMI collection window: 48 hours ending at 0600L today. The sensor covered an area approximately 10 km x 10 km - the full border town and surrounding road network. Because WAMI records all movement continuously across the wide area, analysts can rewind and replay any location within that area at any point during the 48-hour window. Vehicle movement from three days ago can be reconstructed. Five separate vehicle clusters were tracked from assembly areas to staging positions. This forensic look-back capability is the defining feature that distinguishes WAMI from FMV."
        },
        {
          id: "e3-3",
          title: "FMV Clip - Route 7 Convoy, 12 Minutes",
          summary: "Full Motion Video (FMV) tracked a vehicle convoy southbound on Route 7 for 12 continuous minutes before the collection platform repositioned.",
          detail: "Collection window: 12 minutes of continuous video on a specific convoy of 8 vehicles moving south along Route 7 toward the Gorgas border. The FMV sensor provided a focused, high-detail view of this specific convoy - sometimes called a soda straw view because the sensor sees clearly but only within a narrow field of view. Lead vehicle type confirmed as a wheeled armored transport. After 12 minutes, the collection platform had to reposition to another task. FMV provides excellent detail on the specific target it is watching but cannot simultaneously cover other areas or reconstruct movement that occurred before the sensor was cued to this convoy."
        },
        {
          id: "e3-4",
          title: "Moving Target Indicator (MTI) Vehicle Plot - Zabzimek Corridor, Overnight",
          summary: "Moving Target Indicator (MTI) data flagged 15 vehicles transiting the Zabzimek corridor between 2200L and 0400L.",
          detail: "MTI detected and flagged movement of 15 vehicles transiting a route between Donovia and the Zabzimek region overnight. MTI works by detecting and flagging moving objects - it can identify that vehicles are moving and plot their tracks across a wide area, but unlike FMV it does not provide continuous detailed video of any single vehicle. MTI is valuable for detecting movement at night or in poor visibility. The track data shows a consistent movement pattern suggesting deliberate, organized transit rather than routine civilian traffic."
        },
        {
          id: "e3-5",
          title: "Analyst Note - Northeast Warehouse, Heat Signature",
          summary: "Thermal imagery shows a heat signature at a warehouse on the northeast edge of the motor pool. Interior activity is unknown.",
          detail: "A thermal sensor detected a heat signature consistent with human or equipment activity inside a warehouse on the northeast edge of the motor pool complex. The heat signature indicates the building is occupied or has active equipment, but the sensor cannot see through the warehouse walls. GEOINT - regardless of sensor type - cannot penetrate solid structures to determine what is inside. Analysts can confirm: the building has a heat signature indicating activity. Analysts cannot confirm from imagery alone: how many personnel are inside, what equipment or weapons are stored there, or the intent of anyone operating inside the facility. This is a fundamental limitation of all imagery-based collection."
        }
      ],
      activities: [
        {
          id: "p3a1",
          type: "matching",
          typeLabel: "Activity 1 of 4 - Matching",
          points: 4,
          instruction: "Match each GEOINT product to its defining characteristic. Click a term on the left, then click the correct description on the right.",
          objectiveIds: ["4.1-geoint-elements"],
          items: [
            { id: "g-fmv", text: "Full Motion Video (FMV)" },
            { id: "g-mti", text: "Moving Target Indicator (MTI)" },
            { id: "g-wami", text: "Wide-Area Motion Imagery (WAMI)" },
            { id: "g-sar", text: "Synthetic Aperture Radar (SAR)" }
          ],
          targets: [
            { id: "t-fmv", text: 'Focused, continuous video of a specific target - "soda straw" view; best for tracking one target in detail', correct: "g-fmv" },
            { id: "t-mti", text: "Detects and tracks moving vehicles across a wide area; generates movement plots", correct: "g-mti" },
            { id: "t-wami", text: "Wide-area persistent coverage; all movement recorded continuously and can be rewound for forensic look-back", correct: "g-wami" },
            { id: "t-sar", text: "Emits its own radar energy; provides all-weather, day/night imaging regardless of cloud cover or darkness", correct: "g-sar" }
          ],
          feedback: {
            correct: "All four matched correctly. Full Motion Video (FMV) = focused soda straw continuous video. Moving Target Indicator (MTI) = wide-area movement detection and tracking. Wide-Area Motion Imagery (WAMI) = persistent recording with forensic look-back. Synthetic Aperture Radar (SAR) = active radar, all-weather capable.",
            incorrect: "Review the four products. Full Motion Video (FMV) gives a clear, continuous but narrow view of one target. Moving Target Indicator (MTI) detects and plots anything moving across a wide area. Wide-Area Motion Imagery (WAMI) records everything across a wide area and can be rewound - that is the forensic look-back capability. Synthetic Aperture Radar (SAR) sends out its own radar signal, making it active and weather-independent.",
            whyMatters: "Knowing which product to request for which intelligence question is a core GEOINT tasking skill. Requesting FMV when you need historical look-back, or WAMI when you only need a focused 12-minute track, wastes collection time and leaves gaps in the intelligence picture.",
            evidenceClue: "Cards 2, 3, and 4 show WAMI, FMV, and MTI in action. Card 3 uses the phrase soda straw to describe FMV. Card 2 describes the forensic look-back that is unique to WAMI. SAR does not appear in the collected evidence but is a testable product from your lesson."
          }
        },
        {
          id: "p3a2",
          type: "decision",
          typeLabel: "Activity 2 of 4 - Decision",
          points: 1,
          instruction: "An analyst needs to reconstruct all vehicle movement around the border town from three days ago - before any specific convoy was being tracked. Which GEOINT product best answers this requirement?",
          objectiveIds: ["4.1-geoint-elements"],
          options: [
            { id: "o1", text: "Full Motion Video (FMV) - it provides continuous, high-detail video of specific vehicle movement", correct: false },
            { id: "o2", text: "Moving Target Indicator (MTI) - it detects moving vehicles and generates historical track plots", correct: false },
            { id: "o3", text: "Wide-Area Motion Imagery (WAMI) - it records all movement across the wide area continuously and supports forensic look-back of past coverage", correct: true },
            { id: "o4", text: "Electro-Optical (EO) satellite image - it provides the highest-resolution snapshot of vehicle positions", correct: false }
          ],
          feedback: {
            correct: "Correct. Wide-Area Motion Imagery (WAMI)'s forensic look-back capability is specifically designed for this requirement. The analyst needs to go back in time across a wide area - WAMI recorded everything continuously during that window, so any location can be replayed from any point in the collection period.",
            incorrect: "The key requirement is retrospective: what happened across the whole border town three days ago. Full Motion Video (FMV) only shows what it was cued to watch in real time. Moving Target Indicator (MTI) generates movement plots but is not the primary forensic tool. Electro-Optical (EO) gives a position snapshot, not movement over time. Only WAMI records everything continuously and enables look-back across the full area.",
            whyMatters: "Forensic look-back is WAMI's defining capability. When you need to reconstruct past movement over a wide area without having pre-tasked a sensor to a specific location, WAMI is the only motion imagery product that can do it.",
            evidenceClue: "Evidence Card 2 describes this exactly: WAMI captured 48 hours of movement and analysts can rewind and replay any location within that area at any point during the 48-hour window. That is forensic look-back applied to this scenario."
          }
        },
        {
          id: "p3a3",
          type: "classification",
          typeLabel: "Activity 3 of 4 - Classification",
          points: 3,
          instruction: "Classify each sensor as Active or Passive. Active sensors emit their own energy. Passive sensors detect energy from an external source.",
          objectiveIds: ["4.1-geoint-elements"],
          items: [
            { id: "s1", text: "Electro-optical (EO) camera - captures reflected sunlight to produce imagery", correct: "passive" },
            { id: "s2", text: "SAR (Synthetic Aperture Radar) - emits radar pulses and records the return signal", correct: "active" },
            { id: "s3", text: "FLIR thermal sensor - detects heat energy emitted by vehicles and people", correct: "passive" }
          ],
          categories: [
            { id: "active", label: "Active Sensor" },
            { id: "passive", label: "Passive Sensor" }
          ],
          feedback: {
            correct: "All three correct. EO waits for sunlight (passive). SAR generates its own radar signal (active). FLIR detects heat that objects already emit - the sensor only receives, it does not emit (passive).",
            incorrect: "Key question: does the sensor emit its own energy, or wait for energy from another source? EO cameras need sunlight - they receive, not emit (passive). SAR sends out radar pulses - it emits (active). FLIR detects heat radiated by objects - the objects emit, the sensor detects (passive).",
            whyMatters: "Active sensors like SAR are detectable because they emit energy that adversaries can intercept or jam. Passive sensors like EO and FLIR emit nothing. Active sensors work in all weather and at night; passive EO sensors require ambient light. These trade-offs determine which sensor you task based on conditions and adversary awareness.",
            evidenceClue: "The EO satellite image in Card 1 required daylight - passive sensor. The warehouse heat signature in Card 5 was detected by a thermal sensor detecting emitted heat - also passive. SAR was not used in this collection but is a critical testable product because of its all-weather advantage."
          }
        },
        {
          id: "p3a4",
          type: "multiselect",
          typeLabel: "Activity 4 of 4 - Multi-Select",
          points: 2,
          instruction: "The analyst note (Card 5) reports a heat signature at the northeast warehouse. Select ALL intelligence questions that GEOINT imagery CANNOT answer about that warehouse.",
          objectiveIds: ["4.1-geoint-limits"],
          options: [
            { id: "w1", text: "How many personnel are currently inside the warehouse", correct: true, explanation: "Sensors cannot resolve individual bodies through solid walls. The heat signature indicates occupancy or active equipment, but a headcount requires a sensor that penetrates structures - which no current imagery system can do." },
            { id: "w2", text: "Whether weapons or military equipment are stored inside the building", correct: true, explanation: "Imagery identifies shape, heat, and position - not cargo. A heat signature tells you the building is active, not what is inside. Claiming weapons are present would require corroborating HUMINT or SIGINT." },
            { id: "w3", text: "That military vehicles are parked in the area directly outside the warehouse", correct: false, explanation: "Vehicles outside the building are in the open - EO imagery can clearly image, count, and type them without penetrating anything. This is exactly what GEOINT can confirm." },
            { id: "w4", text: "The intent or mission of personnel operating inside the facility", correct: true, explanation: "Intent cannot be read from a sensor feed. Even if you could see inside, people moving around does not reveal their purpose. Determining intent requires combining imagery with HUMINT, SIGINT, or pattern-of-life analysis." },
            { id: "w5", text: "What specific activity is occurring inside the building's walls", correct: true, explanation: "Sensors cannot penetrate solid structures. Whether personnel are conducting maintenance, planning, or loading weapons is completely invisible to all imagery. The analyst can say the building is occupied - everything beyond that exceeds what the data supports." }
          ],
          feedback: {
            correct: "Correct selections. GEOINT cannot penetrate solid structures. It cannot count personnel inside, identify stored equipment, determine intent, or observe interior activity. It can confirm exterior evidence: vehicle positions, access patterns, heat signatures from outside.",
            incorrect: "The fundamental limitation: sensors cannot see through solid walls. Personnel count inside, weapons storage, intent, and interior activity are all invisible to imagery. What imagery can confirm is outside: vehicles parked in the lot, access patterns, and heat signatures detected at the surface. Option C - vehicles parked outside - is something GEOINT can show. Do not select it.",
            whyMatters: "Over-claiming from imagery damages analytical credibility and misleads commanders. A heat signature was detected is a finding. The warehouse contains weapons exceeds what imagery can confirm without corroborating collection. Knowing the limits of your sensors is as important as knowing their capabilities.",
            evidenceClue: "Card 5 states directly: the sensor cannot see through the warehouse walls and lists what analysts cannot confirm - personnel count, stored equipment, and intent. That language is the lesson applied to the scenario."
          }
        }
      ]
    },
    "phase-4-emsradar": {
      id: "phase-4-emsradar",
      title: "Phase 4 - EMS, ELINT & Radar Kill Chain",
      subtitle: "Lessons 4.2 & 4.3 - EM Theory & Radar",
      domain: "ems",
      objectiveIds: ["4.2-em-basics", "4.2-elint-vs-comint", "4.3-radar-kill-chain"],
      inject: `As Donovia's IO campaign and cyber disruptions continue, coalition SIGINT collectors begin detecting a surge of radar emissions along the Donovian side of the border. Emissions span multiple frequency bands - from long-range Early Warning (EW) pulses to a brief, alarming Fire Control (FC) spike that lasted only four seconds before ceasing. A Ground Control Intercept (GCI) voice intercept was also recorded, consistent with directing fighter aircraft toward a contact.

The current collector position is partially blocked by a ridgeline that interrupts line-of-sight to one of the primary emitter sites. An alternate hilltop position 18 kilometers to the east has been identified with clear line-of-sight to all detected emitters.

In this phase, classify each emission as ELINT or COMINT, apply the kill chain framework to assess how close Donovia is to an engagement decision, and recommend the correct response to the terrain masking problem.`,
      evidenceCards: [
        {
          id: "e4-1",
          domain: "ems",
          title: "Early Warning Radar (EW) - Long-Range Detection",
          summary: "VHF-band radar emissions detected at approximately 380 km range. Long pulse, intermittent activation. Assessed as Early Warning radar.",
          detail: "Emissions consistent with an Early Warning (EW) radar: very high frequency (VHF) band, which produces long wavelengths and achieves maximum detection range at the cost of resolution. The long pulse width and intermittent activation pattern are consistent with a search radar sweeping a broad area. EW radar is the Find layer of the Integrated Air Defense System - its activation indicates Donovia is scanning for airborne threats at long range. Detection of EW emissions at 380 km confirms the sensor is active but does not indicate imminent engagement. This is a non-communications electromagnetic emission."
        },
        {
          id: "e4-2",
          domain: "ems",
          title: "Target Acquisition Radar (TA) - Three Bursts Over Six Hours",
          summary: "L/S-band radar detected in three separate bursts over 6 hours. Shorter pulse width, higher precision than EW. Assessed as Target Acquisition radar.",
          detail: "Three discrete emission bursts were recorded from an L/S-band radar over a 6-hour window. L/S-band operates at higher frequency than VHF - shorter wavelength, shorter range, but significantly better resolution and precision. This emission profile is consistent with a Target Acquisition (TA) radar that acquires and tracks specific contacts identified by the Early Warning radar. TA radar activation indicates Donovia has moved from broad-area detection to tracking specific contacts - a significant escalation in the IADS operational posture. This is a non-communications electromagnetic emission categorized under ELINT."
        },
        {
          id: "e4-3",
          domain: "ems",
          title: "Fire Control Radar (FC) Spike - X-Band, 4 Seconds",
          summary: "X-band emission detected for approximately 4 seconds, then ceased immediately. Very high frequency, narrow beam. Assessed as Fire Control radar. Highest concern.",
          detail: "A 4-second emission burst was detected in the X-band - one of the highest frequency radar bands in operational use. X-band produces very short wavelengths, enabling extremely fine angular resolution and precise range measurement: characteristics required for weapons guidance. A Fire Control (FC) radar lock-on, even briefly, indicates the IADS has moved to the Engage stage of the kill chain. FC radar activation is the most imminent indicator available in an emissions picture - it means a weapon system is being prepared for guidance. The brief duration may indicate a system check, a brief track, or an aborted engagement decision. Regardless, this emission demands immediate attention. This is ELINT."
        },
        {
          id: "e4-4",
          domain: "ems",
          title: "Ground Control Intercept (GCI) Voice Intercept - Encrypted, Aircraft Coordination",
          summary: "Encrypted voice transmission intercepted on a frequency consistent with Ground Control Intercept operations. Content assessed as aircraft intercept coordination.",
          detail: "A voice radio transmission was intercepted from a frequency and emitter location consistent with a Ground Control Intercept (GCI) station. The transmission was encrypted, but transmission timing, frequency, and call patterns are consistent with a GCI controller directing fighter aircraft toward an airborne contact. GCI is the communications and coordination layer of the IADS - it orchestrates the intercept by directing fighters based on radar track data. Unlike the other emissions in this picture, this is a communications intercept - voice and data communications content - not a radar emission. That distinction determines which SIGINT category it falls under."
        },
        {
          id: "e4-5",
          domain: "ems",
          title: "Terrain Masking - Ridgeline Blocks Line-of-Sight",
          summary: "A ridgeline between the current SIGINT collector position and the Donovian EW radar site is blocking electromagnetic line-of-sight. Collection of EW emissions is intermittent.",
          detail: "Electromagnetic waves travel in straight lines - they cannot bend around terrain features. A ridgeline approximately 60 km from the current collector position creates a physical obstruction that blocks the direct line-of-sight path to the Donovian Early Warning radar site. Collection from this emitter is intermittent - only possible when atmospheric conditions produce slight diffraction. This is not a sensor malfunction; it is a fundamental physics constraint. No amount of signal processing can recover emissions blocked by terrain. The solution is repositioning - placing the collector where it has unobstructed line-of-sight to the target emitter."
        },
        {
          id: "e4-6",
          domain: "ems",
          title: "Alternate Collector Position - Eastern Hilltop",
          summary: "A hilltop 18 km to the east has been identified. Analysis confirms clear line-of-sight to all four identified emitter sites from this position.",
          detail: "A terrain analysis of potential alternate collection positions identified a hilltop 18 km to the east of the current position. Elevation and azimuth analysis confirms unobstructed line-of-sight from this hilltop to all four identified emitter sites: the EW radar, the TA radar, the FC radar location, and the GCI station. Repositioning to this hilltop would resolve the current terrain masking problem and improve collection continuity on all emitters. The trade-off is that relocation takes time and creates a collection gap during movement. However, continued intermittent collection from the current position provides an incomplete emissions picture at a critical moment."
        }
      ],
      activities: [
        {
          id: "p4a1",
          type: "matching",
          typeLabel: "Activity 1 of 5 - Matching",
          points: 3,
          instruction: "Match each frequency characteristic to its operational effect. Click a term on the left, then the correct description on the right.",
          objectiveIds: ["4.2-em-basics"],
          items: [
            { id: "f-low", text: "Low frequency / long wavelength" },
            { id: "f-high", text: "High frequency / short wavelength" },
            { id: "f-mid", text: "Mid-range frequency" }
          ],
          targets: [
            { id: "t-low", text: "Long detection range, coarser resolution - suited for Early Warning (EW) at maximum distance", correct: "f-low" },
            { id: "t-high", text: "Short range, fine resolution - suited for Fire Control (FC) precision targeting and weapons guidance", correct: "f-high" },
            { id: "t-mid", text: "Balance of range and resolution - suited for Target Acquisition (TA) and tracking", correct: "f-mid" }
          ],
          feedback: {
            correct: "All three matched correctly. Low frequency = long range, coarse resolution (Early Warning radar). High frequency = short range, fine resolution (Fire Control radar). Mid-range = the balance point used for Target Acquisition.",
            incorrect: "Remember the inverse relationship: as frequency increases, wavelength decreases, range decreases, and resolution improves. Low frequency reaches far but sees coarsely. High frequency sees precisely but only at short range. This is why different radar roles use different frequency bands.",
            whyMatters: "The Fire Control radar spike in Card 3 is X-band - the highest frequency in this emissions picture. That high frequency is what makes it capable of guiding a weapon to a target. The Early Warning radar in Card 1 is VHF - low frequency, which is why it can detect targets at 380 km even though it cannot identify them precisely.",
            evidenceClue: "Card 1 (VHF, 380 km range) = low frequency, long range. Card 3 (X-band, 4-second precision spike) = high frequency, short range, fire-control grade. Card 2 (L/S-band, target acquisition) = mid-range balance."
          }
        },
        {
          id: "p4a2",
          type: "classification",
          typeLabel: "Activity 2 of 5 - Classification",
          points: 4,
          instruction: "Classify each intercepted emission as ELINT or COMINT. ELINT = intelligence from non-communications electronic emitters (radars, beacons). COMINT = intelligence from voice and data communications.",
          objectiveIds: ["4.2-elint-vs-comint"],
          items: [
            { id: "em1", text: "Early Warning radar pulse - a non-communications radar emission used for air surveillance", correct: "elint" },
            { id: "em2", text: "Fire Control radar spike - a precision radar emission guiding a weapon system", correct: "elint" },
            { id: "em3", text: "GCI encrypted voice transmission - a radio communication between controller and aircrew", correct: "comint" },
            { id: "em4", text: "Logistics convoy radio check - voice communications between vehicles on a route", correct: "comint" }
          ],
          categories: [
            { id: "elint", label: "ELINT" },
            { id: "comint", label: "COMINT" }
          ],
          feedback: {
            correct: "All four correctly classified. Radars (EW, FC, TA) are non-communications emitters - ELINT. Voice and data radio communications are COMINT, regardless of whether the content is encrypted or not.",
            incorrect: "The key discriminator is the type of emitter, not the content. ELINT comes from non-communications devices: radars, beacons, jammers - devices designed to emit EM energy for purposes other than communication. COMINT comes from voice or data communications, even if encrypted. The GCI voice intercept is COMINT even though the content is encrypted.",
            whyMatters: "ELINT and COMINT are processed, analyzed, and reported through different systems and chains. Misclassifying an emission means it goes to the wrong analyst team. The FC radar spike (ELINT) goes to an electronic warfare analyst. The GCI voice intercept (COMINT) goes to a linguist or signals analyst.",
            evidenceClue: "Cards 1, 2, and 3 all describe radar emissions - non-communications emitters, all ELINT. Card 4 describes the GCI voice intercept - a radio communication between a controller and aircrew, which is COMINT even though the content is encrypted."
          }
        },
        {
          id: "p4a3",
          type: "sequencing",
          typeLabel: "Activity 3 of 5 - Sequencing",
          points: 3,
          instruction: "Place the six stages of the kill chain in the correct order from first to last. Use the up/down arrows to reorder.",
          objectiveIds: ["4.3-radar-kill-chain"],
          items: [
            { id: "kc1", text: "Find - detect the target at long range; the Early Warning radar activation stage", correct: 1 },
            { id: "kc2", text: "Fix - precisely locate and identify the specific target", correct: 2 },
            { id: "kc3", text: "Track - maintain continuous contact with the moving target as it maneuvers", correct: 3 },
            { id: "kc4", text: "Target - assign a weapon system and prepare for engagement", correct: 4 },
            { id: "kc5", text: "Engage - fire weapon at the target", correct: 5 },
            { id: "kc6", text: "Assess - evaluate the results of the engagement (battle damage assessment)", correct: 6 }
          ],
          feedback: {
            correct: "Correct. Find -> Fix -> Track -> Target -> Engage -> Assess. The kill chain must be completed in sequence - and defenders only need to break one link to stop the engagement.",
            incorrect: "The six stages are: Find -> Fix -> Track -> Target -> Engage -> Assess. Think of it as: detect it, identify it, keep watching it, assign a weapon to it, fire, then check results. Each stage must precede the next - you cannot Target something you have not Tracked.",
            whyMatters: "Kill chain stage analysis tells you how much time remains before an adversary engages. If you are seeing Find-stage indicators (EW radar), you likely have time. If you are seeing Engage-stage indicators (FC radar spike), the window is extremely short. The analyst's job is to place the adversary on the kill chain and update that assessment as new emissions are detected.",
            evidenceClue: "The emissions picture in this phase maps directly onto the kill chain: Card 1 (EW radar) = Find stage. Card 2 (TA radar) = Fix/Track stages. Card 3 (FC radar spike) = Target/Engage stage - the most alarming indicator in the picture."
          }
        },
        {
          id: "p4a4",
          type: "ranking",
          typeLabel: "Activity 4 of 5 - Ranking",
          points: 3,
          instruction: "Rank these four radar events from least imminent (1) to most imminent (4) based on where each places Donovia in the kill chain. Rank 1 = earliest stage, least threatening right now. Rank 4 = closest to weapons release.",
          objectiveIds: ["4.3-radar-kill-chain"],
          items: [
            { id: "r-ew", text: "Early Warning radar activation - VHF-band, long-range detection sweep", correct: 1, explanation: "EW radar is the Find layer — it scans for airborne contacts at long range. This is the earliest and least imminent stage; Donovia is watching, not targeting anyone." },
            { id: "r-gci", text: "Ground Control Intercept (GCI) voice intercept - encrypted coordination consistent with directing interceptors", correct: 2, explanation: "GCI means a contact has been detected and Donovia is now coordinating fighters toward it. The adversary has moved from passive detection to active intercept management." },
            { id: "r-ta", text: "Target Acquisition radar bursts - three bursts over 6 hours, precision tracking", correct: 3, explanation: "TA radar represents the Fix/Track layer — Donovia has shifted from broad search to precision tracking of a specific contact. A weapon has not been assigned yet, but targeting is underway." },
            { id: "r-fc", text: "Fire Control radar spike - X-band, 4 seconds, weapons-guidance grade precision", correct: 4, explanation: "FC radar is the Engage layer — a weapon system was actively guiding on a target. Even a 4-second spike means the IADS reached engagement state. This is the most imminent indicator in the entire collection picture." }
          ],
          feedback: {
            correct: "Correct ranking. Early Warning radar = Find stage (1). Ground Control Intercept (GCI) = coordination to direct interceptors (2). Target Acquisition radar = Fix/Track stage (3). Fire Control radar spike = Target/Engage stage - most imminent (4). If Fire Control radar is active, the adversary is at the threshold of firing.",
            incorrect: "Map each radar to its kill chain stage. EW is the Find layer - earliest, least imminent. GCI directs interceptors, indicating a contact has been detected and fighters are being vectored. TA is the Fix layer - the adversary is tracking a specific target. FC is the Engage layer - a weapon is being guided. FC is always the most imminent indicator.",
            whyMatters: "A commander receiving an intelligence update needs to know: is Donovia at the watching stage or the shooting stage? EW activation is a watch indicator. FC radar activation is a shoot indicator. That difference drives whether advisories go out, aircraft maneuver, or ordnance is employed.",
            evidenceClue: "Card 3 (FC radar spike, 4 seconds) is the most alarming emission in this entire picture - it placed Donovia at the Engage stage of the kill chain, if only briefly. Card 1 (EW radar) indicates active surveillance but no imminent action. The picture has escalated across the collection window."
          }
        },
        {
          id: "p4a5",
          type: "decision",
          typeLabel: "Activity 5 of 5 - Decision",
          points: 1,
          instruction: "The current collector position has intermittent line-of-sight to the Early Warning radar site due to a ridgeline. An alternate hilltop position 18 km to the east provides clear line-of-sight to all emitters. What should the collection team do?",
          objectiveIds: ["4.2-em-basics"],
          options: [
            { id: "d1", text: "Stay at the current position - terrain masking is a temporary atmospheric condition that will resolve on its own", correct: false },
            { id: "d2", text: "Move the collector further west to reduce the distance to the emitter sites and improve signal strength", correct: false },
            { id: "d3", text: "Relocate to the eastern hilltop - clear, unobstructed line-of-sight overcomes terrain masking and restores collection on all emitters", correct: true },
            { id: "d4", text: "Request replacement by a space-based collection asset - terrain masking makes ground collection unreliable", correct: false }
          ],
          feedback: {
            correct: "Correct. Terrain masking is a line-of-sight problem, not a signal strength problem. The only solution is repositioning to a location with unobstructed line-of-sight (LOS). The eastern hilltop provides that. Moving west increases distance without solving the LOS problem. Space-based assets may supplement but cannot replace the collection flexibility of a repositioned ground system.",
            incorrect: "Terrain masking is caused by the loss of electromagnetic line-of-sight - a ridge physically blocks the straight-line path between the sensor and the emitter. Atmospheric conditions do not cause it and cannot resolve it. Moving west increases distance without solving the geometry. The fix is always to restore line-of-sight - and the eastern hilltop does exactly that.",
            whyMatters: "SIGINT collector siting is an intelligence task, not just a logistics decision. A collector placed behind terrain is effectively blind to anything that ridge blocks, regardless of its technical capability. Intelligence officers must understand LOS geometry to correctly advise on collection positioning - and to recognize when a collection gap is a terrain problem versus a system problem.",
            evidenceClue: "Card 5 explains the terrain masking problem explicitly - the ridge creates a physical obstruction, not a signal degradation. Card 6 identifies the solution: the eastern hilltop with confirmed clear LOS to all emitters. The physics determines the answer."
          }
        }
      ]
    },
    "phase-5-ir": {
      id: "phase-5-ir",
      title: "Phase 5 - Infrared Threats 101",
      subtitle: "Lesson 4.4 - IR Threats & Airframe Survival",
      domain: "ir",
      objectiveIds: ["4.4-ir-signatures"],
      inject: `As Donovia's border pressure increases, coalition aircrews supporting patrols through the Zabzimek corridor begin reporting more nighttime missile activity along the same route. Forward-Looking Infrared (FLIR) passes from a coalition aircraft reveal warm vehicle signatures on unimproved tracks, and a suspected IR-guided Man-Portable Air Defense System (MANPADS) position has been identified near the route. Analysts also note that one newer missile type appears to use an Imaging Infrared (IIR) seeker rather than a simple hot-spot tracker.

In this phase, identify the primary IR vulnerability on the aircraft, distinguish hot-spot seekers from IIR seekers, and choose the correct countermeasure for each threat type. Remember: IR sees heat, flares are the classic decoy for hot-spot seekers, and IIR seekers are harder to fool because they see the shape of the target rather than just one bright point.`,
      evidenceCards: [
        {
          id: "e5-1",
          domain: "ir",
          title: "Hot Engine Exhaust - Primary Infrared (IR) Vulnerability",
          summary: "The exhaust plume and nozzle glow are the brightest heat source on the airframe and the easiest thing for an IR seeker to lock.",
          detail: "IR seekers look for heat. The hottest, most exposed part of an aircraft is the engine exhaust, especially during high power settings and afterburner use. That bright heat source is the primary vulnerability for an IR-homing missile. Aspect angle matters too: the closer the missile looks straight into the exhaust, the stronger the signature becomes."
        },
        {
          id: "e5-2",
          domain: "ir",
          title: "IR-Homing Man-Portable Air Defense System (MANPADS) - Hot-Spot Tracker",
          summary: "This seeker locks the hottest point it can see and can be seduced by a hotter flare.",
          detail: "A hot-spot tracker is the classic IR-homing missile seeker. It does not build a full image of the aircraft; it simply chases the hottest point. If a flare is hotter than the aircraft exhaust, the seeker can be pulled away from the airframe and into the decoy. This is why flares remain the standard countermeasure against basic IR-homing threats."
        },
        {
          id: "e5-3",
          domain: "ir",
          title: "Imaging Infrared (IIR) Seeker - Shape Recognition",
          summary: "IIR seekers build a thermal picture of the target, making them much harder to fool with flares alone.",
          detail: "An Imaging Infrared seeker sees the whole thermal silhouette, not just a single bright dot. That means it can compare shape, contrast, and target patterning. A flare is still a bright point, but the aircraft remains a recognizable thermal object. Because of that, IIR seekers are much harder to defeat with flares alone and typically require tactical maneuver in addition to decoy use."
        },
        {
          id: "e5-4",
          domain: "ir",
          title: "Forward-Looking Infrared (FLIR) Overflight - Surface Heat Detection",
          summary: "A forward-looking infrared sensor detects warm vehicles along the tracks at night.",
          detail: "FLIR is a thermal imaging sensor used by aircraft and drones to observe the ground in low light or at night. It detects heat signatures on the surface, making it ideal for spotting vehicles, exhaust plumes, and recent movement. FLIR is a passive sensor: it does not emit energy to collect the picture."
        },
        {
          id: "e5-5",
          domain: "ir",
          title: "Infrared Search and Track (IRST) - Passive Fighter Sensor",
          summary: "An infrared search-and-track system can detect aircraft heat without emitting radar energy.",
          detail: "IRST is a passive infrared sensor used on fighter aircraft to detect and track other aircraft. Because it does not send out radar energy, it is harder to detect than an active radar system. It is useful for finding hot targets at range and for supporting silent air-to-air search."
        },
        {
          id: "e5-6",
          domain: "ir",
          title: "Space-Based Infrared System (SBIRS) - Missile Warning",
          summary: "A satellite sensor watches for launch plumes and rocket exhaust to provide missile warning.",
          detail: "SBIRS is a space-based infrared system built to detect rocket motor exhaust and launch plumes. Its purpose is missile warning and strategic alerting, not air-to-air guidance. In the lesson context, it is one of the best examples of a space-based IR sensor doing a specific warning mission."
        }
      ],
      activities: [
        {
          id: "p5a1",
          type: "matching",
          typeLabel: "Activity 1 of 5 - Matching",
          points: 5,
          instruction: "Match each IR system or seeker to its best description. Click a term on the left, then the matching description on the right.",
          objectiveIds: ["4.4-ir-signatures"],
          items: [
            { id: "ir1", text: "Forward-Looking Infrared (FLIR)" },
            { id: "ir2", text: "Infrared Search and Track (IRST)" },
            { id: "ir3", text: "Space-Based Infrared System (SBIRS)" },
            { id: "ir4", text: "Hot-spot tracker" },
            { id: "ir5", text: "Imaging Infrared (IIR) seeker" }
          ],
          targets: [
            { id: "irt1", text: "Passive thermal imaging for airborne or ground surveillance", correct: "ir1" },
            { id: "irt2", text: "Passive fighter sensor used to find and track aircraft heat signatures", correct: "ir2" },
            { id: "irt3", text: "Space-based missile warning system that detects launch plumes", correct: "ir3" },
            { id: "irt4", text: "Locks onto the hottest point and can be decoyed by a brighter flare", correct: "ir4" },
            { id: "irt5", text: "Forms a thermal image of the target and is harder to fool with flares alone", correct: "ir5" }
          ],
          feedback: {
            correct: "Correct. Forward-Looking Infrared (FLIR) is passive thermal imaging, Infrared Search and Track (IRST) is a passive air-to-air sensor, Space-Based Infrared System (SBIRS) is space-based missile warning, hot-spot trackers chase the brightest point, and Imaging Infrared (IIR) seekers build a fuller thermal picture of the target.",
            incorrect: "Review the difference between an IR sensor and an IR seeker. FLIR, IRST, and SBIRS are sensor systems. Hot-spot trackers and IIR seekers are missile seekers. The key distinction is whether the system is observing or trying to guide a weapon.",
            whyMatters: "If you can name the sensor or seeker correctly, you can pick the right countermeasure and avoid mixing passive sensors with threat seekers.",
            evidenceClue: "Cards 4, 5, and 6 cover FLIR, IRST, and SBIRS. Cards 2 and 3 cover the two seeker types you need to distinguish."
          }
        },
        {
          id: "p5a2",
          type: "classification",
          typeLabel: "Activity 2 of 5 - Classification",
          points: 4,
          instruction: "Classify each item by what it most accurately is. Use the lesson terms: IR signature, countermeasure, seeker, or sensor/system.",
          objectiveIds: ["4.4-ir-signatures"],
          items: [
            { id: "i5-1", text: "Hot engine exhaust on the aircraft", correct: "signature" },
            { id: "i5-2", text: "Flares released from the aircraft", correct: "countermeasure" },
            { id: "i5-3", text: "Chaff bundle released from the aircraft", correct: "radar-countermeasure" },
            { id: "i5-4", text: "Imaging Infrared (IIR) seeker on the missile", correct: "seeker" },
            { id: "i5-5", text: "Forward-Looking Infrared (FLIR) sensor on an aircraft or drone", correct: "sensor" }
          ],
          categories: [
            { id: "signature", label: "IR Signature" },
            { id: "countermeasure", label: "IR Countermeasure" },
            { id: "radar-countermeasure", label: "Radar Countermeasure" },
            { id: "seeker", label: "Seeker" },
            { id: "sensor", label: "Sensor / System" }
          ],
          feedback: {
            correct: "Correct. Hot exhaust is the IR signature, flares are the IR countermeasure, chaff is for radar-guided threats, IIR is a seeker type, and FLIR is a sensor system.",
            incorrect: "Use the lesson's distinctions. IR sees heat, so the exhaust plume is the signature. Flares are the classic IR decoy. Chaff is for radar threats, not infrared. IIR is a seeker, and FLIR is a passive sensor.",
            whyMatters: "Knowing which thing is the signature, which thing is the sensor, and which thing is the countermeasure keeps the response matched to the threat instead of wasting the wrong tool.",
            evidenceClue: "Card 1 identifies the exhaust as the signature. Card 2 explains the hot-spot tracker. Card 5 and Card 6 show passive sensor systems rather than missile seekers."
          }
        },
        {
          id: "p5a3",
          type: "decision",
          typeLabel: "Activity 3 of 5 - Decision",
          points: 1,
          instruction: "A basic IR-homing MANPADS has locked onto the aircraft's exhaust plume. What is the best first countermeasure?",
          objectiveIds: ["4.4-ir-signatures"],
          options: [
            { id: "ir-d1", text: "Deploy chaff", correct: false },
            { id: "ir-d2", text: "Deploy flares", correct: true },
            { id: "ir-d3", text: "Turn on the radar jammer", correct: false },
            { id: "ir-d4", text: "Do nothing and rely on speed alone", correct: false }
          ],
          feedback: {
            correct: "Correct. Flares are the standard countermeasure against a basic IR-homing hot-spot seeker because they create a hotter target than the aircraft exhaust.",
            incorrect: "For a basic IR-homing missile, the correct response is flares. Chaff and radar jamming are for radar threats, and speed alone does not create a hotter decoy.",
            whyMatters: "The survival tool has to match the guidance method. IR sees heat, so you defeat it with a heat source.",
            evidenceClue: "Card 2 explains why hot-spot trackers are vulnerable to flares. That is the exact threat this decision is asking about."
          }
        },
        {
          id: "p5a4",
          type: "sequencing",
          typeLabel: "Activity 4 of 5 - Sequencing",
          points: 4,
          instruction: "Order the immediate IR-response steps from first to last when a heat-seeking missile threat is detected.",
          objectiveIds: ["4.4-ir-signatures"],
          items: [
            { id: "rs1", text: "Detect the launch cue or missile warning", correct: 1 },
            { id: "rs2", text: "Dispense flares to create a hotter decoy", correct: 2 },
            { id: "rs3", text: "Maneuver hard to break the missile's track", correct: 3 },
            { id: "rs4", text: "Assess whether the seeker has broken away", correct: 4 }
          ],
          feedback: {
            correct: "Correct. Detect the cue, dispense flares, maneuver, then assess whether the missile has broken lock. The exact timing can overlap, but the doctrinal logic is cue, counter, maneuver, assess.",
            incorrect: "The lesson sequence is simple: detect the threat, create a hotter decoy with flares, maneuver to spoil the track, then assess the result. If the seeker is an IIR type, maneuver becomes even more important.",
            whyMatters: "IR defense is time-sensitive. The pilot has only seconds to get the missile off the aircraft, so the response has to be immediate and deliberate.",
            evidenceClue: "Card 3 explains why IIR seekers are harder to fool. Card 2 explains why flares work on hot-spot trackers. The response sequence follows those facts."
          }
        },
        {
          id: "p5a5",
          type: "multiselect",
          typeLabel: "Activity 5 of 5 - Multi-Select",
          points: 4,
          instruction: "Select all statements that are true about IR threats, sensors, and countermeasures.",
          objectiveIds: ["4.4-ir-signatures"],
          options: [
            { id: "ms5-1", text: "Hot engine exhaust is the primary IR vulnerability on an aircraft.", correct: true, explanation: "Exhaust is consistently hot, visible in multiple IR bands, and trails the aircraft - making it the primary aim point for heat-seeking missiles. It is the signature the seeker locks onto." },
            { id: "ms5-2", text: "Flares are the standard countermeasure against a hot-spot IR seeker.", correct: true, explanation: "Flares create a hotter, off-axis heat source that pulls a first-generation hot-spot seeker away from the aircraft's exhaust plume. They are the standard point-defense against basic IR missiles." },
            { id: "ms5-3", text: "IIR seekers are easily defeated by flares alone.", correct: false, explanation: "Imaging Infrared (IIR) seekers compare the full thermal shape of the target against a known silhouette. Flares do not match the aircraft's shape signature, so IIR seekers can reject them. They are significantly harder to defeat than simple hot-spot seekers." },
            { id: "ms5-4", text: "Chaff is the standard countermeasure against an IR seeker.", correct: false, explanation: "Chaff creates false radar returns to fool radar-guided missiles. IR seekers track heat, not radar - chaff has no effect on them. The correct countermeasure against IR threats is flares, not chaff." },
            { id: "ms5-5", text: "FLIR and IRST are passive thermal sensors.", correct: true, explanation: "FLIR and IRST receive heat emitted by other objects - they do not transmit any signal themselves. Passive sensors are harder to detect and jam because they give away no emissions of their own." },
            { id: "ms5-6", text: "SBIRS is used for missile warning from space.", correct: true, explanation: "SBIRS (Space-Based Infrared System) detects the intense heat signatures of ballistic missile launches from orbit, providing near-instantaneous global missile warning. It is a sensor system, not a weapon seeker." }
          ],
          feedback: {
            correct: "Correct. The true statements are the ones that match the lesson: exhaust is the vulnerability, flares defeat basic IR seekers, FLIR and IRST are passive sensors, and SBIRS provides missile warning.",
            incorrect: "Review the lesson distinctions: IR sees heat, hot exhaust is the vulnerable point, flares are the classic decoy, IIR seekers are harder to fool, chaff is for radar, and FLIR/IRST/SBIRS are sensor systems rather than missile seekers.",
            whyMatters: "This is the core IR takeaway: match the countermeasure to the threat type and do not confuse passive sensors with weapon seekers.",
            evidenceClue: "Cards 1 through 6 break out the vulnerability, the two seeker types, the passive sensors, and the space-based warning system."
          }
        }
      ]
    }
    ,
    "phase-6-isr": {
      id: "phase-6-isr",
      title: "Phase 6 - ISR Fundamentals",
      subtitle: "Lesson 4.7 - ISR Cycle & Tasking",
      domain: "isr",
      objectiveIds: ["4.7-isr-cycle"],
      inject: `The commander has issued a new Priority Intelligence Requirement (PIR): determine whether Donovia is preparing a limited cross-border operation within the next 72 hours. The Coalition J2 just released it down to your cell. Below is a snapshot of what is already in motion: the PIR tasking memo, the current ISR collection plan, the DCGS exploitation queue, the border surveillance feed, and the Route 7 reconnaissance task order.

Your job is to convert that one question into a real collection plan, run incoming sensor feeds through Processing & Exploitation, keep persistent surveillance separate from directed reconnaissance, and route the results back through the cycle.`,
      evidenceCards: [
        {
          id: "e6-1",
          domain: "isr",
          title: "PIR Tasking Memo - Coalition J2 to Intel Cell",
          summary: "Released PIR: 'Will Donovia conduct a limited cross-border operation into Gorgas within the next 72 hours?'",
          detail: "Released by Coalition J2 at 0500Z. Designated as the top-priority intelligence requirement for the next 72 hours. Routing: enters the ISR cycle at Planning & Direction; the intelligence cell converts the PIR into specific intelligence requirements (SIRs), then into specific collection tasks against named sensors and units. The PIR is not itself a collection report and not an intelligence product - it is the question that drives the work. All ISR tasking, processing, and reporting for the next 72 hours should be traceable back to this single line."
        },
        {
          id: "e6-2",
          domain: "isr",
          title: "ISR Collection Plan - Current Tasking",
          summary: "Five-stage cycle in motion: P&D -> Collection -> P&E -> Analysis & Production -> Dissemination & Integration.",
          detail: "Stage 1 - Planning & Direction: PIR translated into seven domain-specific collection tasks (GEOINT motor pool, EMS emitter watch, IR corridor, cyber attribution, IO monitoring, ISR recon, space PNT). Stage 2 - Collection: assets tasked include commercial EO satellite pass, WAMI window, FMV platform, MTI sweep, SIGINT collector (current hilltop), and a tasked recon team. Stage 3 - Processing & Exploitation: DCGS processing feeds (see Card 3). Stage 4 - Analysis & Production: intelligence cell synthesizing across domains. Stage 5 - Dissemination & Integration: brief to the commander on schedule. The cycle is sequential - each stage depends on the one before it."
        },
        {
          id: "e6-3",
          domain: "isr",
          title: "DCGS Exploitation Queue - Current State",
          summary: "Distributed Common Ground System holding three feeds in the P&E stage, awaiting analyst review.",
          detail: "Queue snapshot: (1) WAMI 48-hour border-town window - exploited, vehicle tracks reconstructed, ready for analyst pickup; (2) FMV Route 7 convoy clip (12 min) - exploited, lead vehicle identified as wheeled armored transport, ready for analyst pickup; (3) MTI Zabzimek corridor overnight - exploited, 15 vehicle tracks plotted, ready for analyst pickup. DCGS is the Distributed Common Ground System - the primary Processing & Exploitation node that turns raw sensor data into something analysts can actually review. DCGS sits in Stage 3 of the ISR cycle. Material does not skip from Collection directly to Analysis - it has to be exploited first."
        },
        {
          id: "e6-4",
          domain: "isr",
          title: "Persistent Surveillance Feed - Gorgas Border Corridor",
          summary: "Continuous, broad-area watch maintained 24/7 over the corridor and Donovian approaches.",
          detail: "Surveillance means persistent, ongoing watch over an area or subject. The border corridor surveillance feed has been live for 11 days and is intended to detect pattern changes over time - not to answer one narrow question on a deadline. Current coverage: WAMI persistent imagery on the border town, MTI overnight sweep on the Zabzimek corridor, and continuous EMS monitoring from the eastern hilltop collector. Surveillance is broad and time-unbounded. Compare to reconnaissance (Card 5), which is narrow and time-limited."
        },
        {
          id: "e6-5",
          domain: "isr",
          title: "Reconnaissance Task Order - Route 7 Probe",
          summary: "Time-limited recon task issued to probe Route 7 for crossing indicators within 18 hours.",
          detail: "Task-organized recon team launched in response to the Phase 3 FMV detection of an 8-vehicle southbound convoy on Route 7. Mission: confirm or deny vehicle staging at named grid coordinates along the route, identify unit markings if visible, and report by 2200Z. Reconnaissance is directed and time-limited - it answers one specific intelligence question for one specific commander. That distinguishes it from surveillance (Card 4), which keeps a continuous, broad watch on the area. Both contribute to the same PIR but through different collection logics."
        }
      ],
      activities: [
        {
          id: "p6a1",
          type: "matching",
          typeLabel: "Activity 1 of 5 - Matching",
          points: 5,
          instruction: "Match each ISR cycle stage to its primary function. Click a term on the left, then the correct description on the right.",
          objectiveIds: ["4.7-isr-cycle"],
          items: [
            { id: "isr1", text: "Planning & Direction (P&D)", explanation: "This is where the commander's PIR is converted into intelligence requirements and collection tasks." },
            { id: "isr2", text: "Collection", explanation: "This is the gathering of raw information from sensors, patrols, and reports." },
            { id: "isr3", text: "Processing & Exploitation (P&E)", explanation: "This is where raw data is turned into usable information for analysts." },
            { id: "isr4", text: "Analysis & Production", explanation: "This is where analysts interpret the processed information and create intelligence." },
            { id: "isr5", text: "Dissemination & Integration", explanation: "This is the delivery of finished intelligence to the customer and its use in planning." }
          ],
          targets: [
            { id: "ist1", text: "Convert the commander's question into collection tasks and priorities", correct: "isr1" },
            { id: "ist2", text: "Gather raw data from sensors, reporting, and other sources", correct: "isr2" },
            { id: "ist3", text: "Turn raw collection into usable information for analysis", correct: "isr3" },
            { id: "ist4", text: "Interpret the processed information and produce intelligence", correct: "isr4" },
            { id: "ist5", text: "Deliver the finished product and put it into use", correct: "isr5" }
          ],
          feedback: {
            correct: "All five matched correctly. The ISR cycle moves from direction, to collection, to processing, to analysis, to dissemination.",
            incorrect: "The ISR cycle is a sequence. Planning & Direction turns the PIR into tasks. Collection gathers raw data. Processing & Exploitation turns raw data into usable form. Analysis & Production interprets it. Dissemination & Integration gets it to the customer and into use.",
            whyMatters: "If you place the PIR in the wrong stage, you break the tasking chain. If you confuse processing with analysis, you risk sending raw data straight to the commander without making it usable.",
            evidenceClue: "Card 2 lays out the five stages directly. Card 3 shows DCGS in the processing stage. Card 1 shows the commander question that starts the cycle."
          }
        },
        {
          id: "p6a2",
          type: "sequencing",
          typeLabel: "Activity 2 of 5 - Sequencing",
          points: 4,
          instruction: "Place the five ISR cycle stages in the correct order from first to last. Use the up/down arrows to reorder.",
          objectiveIds: ["4.7-isr-cycle"],
          items: [
            { id: "s1", text: "Planning & Direction (P&D)", correct: 1, explanation: "The commander's PIR enters the cycle here and becomes a collection requirement." },
            { id: "s2", text: "Collection", correct: 2, explanation: "This is where the tasked sensors and collectors gather raw information." },
            { id: "s3", text: "Processing & Exploitation (P&E)", correct: 3, explanation: "DCGS and similar systems process the raw material here." },
            { id: "s4", text: "Analysis & Production", correct: 4, explanation: "Analysts turn processed data into intelligence at this stage." },
            { id: "s5", text: "Dissemination & Integration", correct: 5, explanation: "The finished intelligence is delivered to the customer and used in planning." }
          ],
          feedback: {
            correct: "Correct. The sequence is P&D -> Collection -> P&E -> Analysis & Production -> Dissemination & Integration.",
            incorrect: "The cycle begins with Planning & Direction, then moves to Collection, then Processing & Exploitation, then Analysis & Production, and finally Dissemination & Integration. If you move the stages out of order, the intelligence process breaks down.",
            whyMatters: "The ISR cycle is a workflow. Each stage produces the input for the next stage. The commander's question does not jump straight to analysis; it starts with tasking.",
            evidenceClue: "Card 1 is the PIR, Card 3 is the processing node, and Card 2 shows the five-stage board in order."
          }
        },
        {
          id: "p6a3",
          type: "decision",
          typeLabel: "Activity 3 of 5 - Decision",
          points: 1,
          instruction: "Where does the commander's PIR enter the ISR cycle?",
          objectiveIds: ["4.7-isr-cycle"],
          options: [
            { id: "d1", text: "Planning & Direction (P&D) - the PIR is converted into collection tasks here", correct: true, explanation: "PIRs are routed into the cycle at Planning & Direction because that is where requirements become tasking." },
            { id: "d2", text: "Collection - the PIR is already a finished report at this point", correct: false, explanation: "Collection gathers raw data, but it does not start the cycle." },
            { id: "d3", text: "Processing & Exploitation (P&E) - the PIR waits until DCGS receives the feed", correct: false, explanation: "P&E handles raw collection after tasking has already happened." },
            { id: "d4", text: "Dissemination & Integration - the PIR is briefed after the intelligence is finished", correct: false, explanation: "Dissemination is the end of the process, not the starting point." }
          ],
          feedback: {
            correct: "Correct. The PIR enters at Planning & Direction, where the commander's question becomes a collection requirement.",
            incorrect: "The commander's PIR starts the cycle at Planning & Direction. That is the stage where analysts and planners turn the question into collection tasks. The PIR is not a report that appears after analysis; it is the requirement that drives the work.",
            whyMatters: "If you start at the wrong stage, you can collect the wrong information or deliver the answer too late. ISR works because the requirement is translated into tasking from the beginning.",
            evidenceClue: "Card 1 is the PIR itself. Card 2 shows the cycle board. The starting point is Planning & Direction."
          }
        },
        {
          id: "p6a4",
          type: "classification",
          typeLabel: "Activity 4 of 5 - Classification",
          points: 3,
          instruction: "Classify each activity as Surveillance or Reconnaissance.",
          objectiveIds: ["4.7-isr-cycle"],
          items: [
            { id: "sur1", text: "A continuous feed watching the border corridor all day and all night", correct: "surveillance", explanation: "This is persistent watch over an area, which is surveillance." },
            { id: "sur2", text: "A task-organized patrol sent to probe Route 7 for crossing indicators", correct: "reconnaissance", explanation: "This is a directed, time-limited probe for specific information, which is reconnaissance." },
            { id: "sur3", text: "A long-term watch on the motor pool to spot pattern changes over time", correct: "surveillance", explanation: "Continuous observation over time is surveillance." },
            { id: "sur4", text: "A one-day collection mission sent to answer the commander's specific question about a bridge", correct: "reconnaissance", explanation: "Focused, time-limited collection to answer a specific question is reconnaissance." }
          ],
          categories: [
            { id: "surveillance", label: "Surveillance" },
            { id: "reconnaissance", label: "Reconnaissance" }
          ],
          feedback: {
            correct: "All four classified correctly. Surveillance is continuous watch over an area or subject. Reconnaissance is a directed mission to answer a specific question.",
            incorrect: "Use the scope and purpose test. Surveillance is broad, continuous, and persistent. Reconnaissance is narrow, task-organized, and time-limited. If the mission is to keep watch, it is surveillance. If the mission is to go get a specific answer, it is reconnaissance.",
            whyMatters: "These are different collection modes with different tasking logic. Confusing them leads to poor sensor use and wasted coverage.",
            evidenceClue: "Card 4 is surveillance. Card 5 is reconnaissance. Card 1 and Card 2 show the commander's requirement that drives both."
          }
        },
        {
          id: "p6a5",
          type: "multiselect",
          typeLabel: "Activity 5 of 5 - Multi-Select",
          points: 3,
          instruction: "Select all statements that are true about ISR, DCGS, and the PIR process.",
          objectiveIds: ["4.7-isr-cycle"],
          options: [
            { id: "ms6-1", text: "Planning & Direction is where the commander's PIR is turned into tasking.", correct: true, explanation: "Planning & Direction is the entry point for the PIR." },
            { id: "ms6-2", text: "DCGS is used during Processing & Exploitation.", correct: true, explanation: "DCGS is a processing and exploitation system." },
            { id: "ms6-3", text: "Reconnaissance is the same thing as continuous surveillance.", correct: false, explanation: "Reconnaissance is specific and time-limited; surveillance is continuous." },
            { id: "ms6-4", text: "Surveillance means persistent watch over an area or subject.", correct: true, explanation: "That is the defining feature of surveillance." },
            { id: "ms6-5", text: "The ISR cycle begins with dissemination.", correct: false, explanation: "Dissemination is the last stage, not the first." }
          ],
          feedback: {
            correct: "Correct. The true statements are the ones that match the lesson: Planning & Direction starts the cycle, DCGS belongs in Processing & Exploitation, and surveillance means persistent watch.",
            incorrect: "Check each statement against the ISR cycle and the surveillance/recon distinction. The PIR enters at Planning & Direction, DCGS works in Processing & Exploitation, surveillance is continuous watch, and reconnaissance is a task-organized mission for a specific answer.",
            whyMatters: "ISR works only when the requirement, the collector, the processing tool, and the analyst are all in the right place in the cycle.",
            evidenceClue: "Cards 1 through 5 cover the PIR, the cycle, DCGS, surveillance, and reconnaissance."
          }
        }
      ]
    }
    ,
    "phase-7-space": {
      id: "phase-7-space",
      title: "Phase 7 - Space Operations",
      subtitle: "Lesson 4.8 - Orbit Regimes & Counterspace",
      domain: "space",
      objectiveIds: ["4.8-orbits", "4.8-counterspace"],
      inject: `The intelligence cell now shifts to the space domain. Coalition ground units inside the Gorgas border corridor are reporting sudden GPS position errors and loss of timing lock - assessed as Donovian GNSS jamming in the user segment. The MEO navigation constellation itself is unaffected; only forces inside the corridor are degraded. The commander also wants to know how to characterize space threats: when is an action kinetic, when is it non-kinetic, and which response is more escalatory?

Your job is to match orbit to mission, distinguish the counterspace effect, identify why kinetic ASAT is the most escalatory option in the lesson set, and confirm that no kinetic counterspace activity has been observed in this scenario.`,
      evidenceCards: [
        {
          id: "e7-1",
          domain: "space",
          title: "Geostationary Earth Orbit (GEO) - Persistent Theater Coverage",
          summary: "A satellite parked over the equator provides continuous coverage of one region for communications and missile warning.",
          detail: "Geostationary Earth Orbit sits about 35,786 km above the equator and remains fixed relative to one spot on Earth. That makes it ideal for persistent coverage, especially communications and missile warning. GEO is the classic 'staring' orbit."
        },
        {
          id: "e7-2",
          domain: "space",
          title: "Low Earth Orbit (LEO) - High-Resolution Imaging",
          summary: "A reconnaissance satellite in low orbit provides the clearest imagery and the shortest revisit times.",
          detail: "Low Earth Orbit sits roughly 160 to 2,000 km above Earth. Because it is close to the surface, it can support high-resolution imagery and quick revisits. The tradeoff is that any one satellite moves quickly across the area of interest, so persistence requires a constellation."
        },
        {
          id: "e7-3",
          domain: "space",
          title: "Medium Earth Orbit (MEO) - Navigation Constellation",
          summary: "Navigation satellites in MEO provide positioning, navigation, and timing (PNT) for coalition forces.",
          detail: "Medium Earth Orbit sits between LEO and GEO and is commonly used for navigation constellations such as GPS / NAVSTAR. MEO is the backbone of position, navigation, and timing (PNT) services that coalition forces depend on for everything from maneuver to targeting."
        },
        {
          id: "e7-4",
          domain: "space",
          title: "Polar Orbit - Global Coverage Including the Poles",
          summary: "A polar orbit passes over both poles and gives global coverage, including northern and southern latitudes.",
          detail: "A polar orbit passes close to or over both poles as Earth rotates underneath. This gives broad global coverage, including the Arctic and Antarctic regions that GEO cannot watch well. It is useful for reconnaissance and weather missions that need world-wide reach."
        },
        {
          id: "e7-5",
          domain: "space",
          title: "Donovian GNSS Denial Event - Gorgas Border Corridor",
          summary: "Coalition PNT degraded inside the border corridor; GPS position errors and timing loss reported by ground units.",
          detail: "Beginning at 0420Z, coalition ground units operating inside the Gorgas border corridor reported sudden GPS position errors, intermittent loss of timing lock, and degraded navigation. The denial footprint is geographically bounded to the corridor and the immediate Zabzimek approaches; coalition forces outside that footprint retain normal PNT. The effect is consistent with a ground-based GNSS jammer in the user segment - non-kinetic counterspace. Non-kinetic counterspace denies, degrades, disrupts, or deceives space support without physically destroying the satellite. The MEO GPS / NAVSTAR constellation itself is unaffected. Attribution to a specific Donovian unit is not yet confirmed. The timing of the denial event coincides with Target Acquisition radar activity from Phase 4, raising the assessed likelihood that the jamming is part of the coordinated multi-domain campaign."
        },
        {
          id: "e7-6",
          domain: "space",
          title: "Kinetic Counterspace - Escalation Reference (No Indicators)",
          summary: "Concept reference: kinetic ASAT physically destroys a satellite and creates long-lived debris. No such activity has been observed in this scenario.",
          detail: "Kinetic counterspace is the most escalatory category of space attack in the lesson set because it physically destroys the target spacecraft and can create debris that threatens other satellites in the same orbit. Even a single kinetic intercept can have long-lasting effects on the orbital environment. Important for this scenario: no Donovian kinetic counterspace activity has been observed. All space-domain interference to date is non-kinetic (Card 5). This card is the escalation reference the commander asks about - what would change if Donovia crossed from jamming to destruction. Today, the answer is: they have not."
        }
      ],
      activities: [
        {
          id: "p7a1",
          type: "matching",
          typeLabel: "Activity 1 of 5 - Matching",
          points: 4,
          instruction: "Match each orbital regime to the mission it best supports.",
          objectiveIds: ["4.8-orbits"],
          items: [
            { id: "sp1", text: "Low Earth Orbit (LEO)", explanation: "LEO is closest to Earth, so it is best for high-resolution imagery and quick revisit." },
            { id: "sp2", text: "Medium Earth Orbit (MEO)", explanation: "MEO is the navigation layer used for GPS / NAVSTAR and other PNT services." },
            { id: "sp3", text: "Geostationary Earth Orbit (GEO)", explanation: "GEO stays fixed over one region, making it ideal for persistent communications and missile warning." },
            { id: "sp4", text: "Polar Orbit", explanation: "Polar orbit gives global coverage, including the poles, which GEO cannot cover well." }
          ],
          targets: [
            { id: "spt1", text: "High-resolution imagery and short revisit time for reconnaissance", correct: "sp1" },
            { id: "spt2", text: "Positioning, Navigation, and Timing (PNT) / GPS mission", correct: "sp2" },
            { id: "spt3", text: "Persistent communications and missile warning over one theater", correct: "sp3" },
            { id: "spt4", text: "Global coverage, including Arctic and Antarctic latitudes", correct: "sp4" }
          ],
          feedback: {
            correct: "Correct. LEO gives the best resolution and revisit, MEO supports PNT, GEO provides persistent theater coverage, and polar orbit gives global reach including the poles.",
            incorrect: "Match the mission to the orbit: LEO is for the closest, clearest imagery; MEO is for navigation and timing; GEO is for persistent staring over one region; polar orbit is for global coverage including the poles.",
            whyMatters: "If you task the wrong orbit, you either miss the target, lose persistence, or waste an asset on a mission it is not suited to perform.",
            evidenceClue: "Cards 1 through 4 describe the four orbit regimes and their primary missions."
          }
        },
        {
          id: "p7a2",
          type: "classification",
          typeLabel: "Activity 2 of 5 - Classification",
          points: 4,
          instruction: "Classify each space-related action as kinetic counterspace or non-kinetic counterspace.",
          objectiveIds: ["4.8-counterspace"],
          items: [
            { id: "c7-1", text: "A jammer denies GPS signals to coalition vehicles", correct: "non-kinetic", explanation: "This degrades the service without physically destroying the satellite." },
            { id: "c7-2", text: "An ASAT missile physically destroys a satellite", correct: "kinetic", explanation: "This is a physical strike against the space asset itself." },
            { id: "c7-3", text: "Cyber effects target the ground segment controlling a satellite", correct: "non-kinetic", explanation: "The space system is disrupted without breaking apart the satellite in orbit." },
            { id: "c7-4", text: "A laser dazzles a sensor payload and temporarily degrades collection", correct: "non-kinetic", explanation: "The sensor is denied or degraded, but the satellite is not destroyed." },
            { id: "c7-5", text: "A co-orbital vehicle collides with and destroys the satellite", correct: "kinetic", explanation: "This is a destructive physical attack in orbit." }
          ],
          categories: [
            { id: "kinetic", label: "Kinetic Counterspace" },
            { id: "non-kinetic", label: "Non-Kinetic Counterspace" }
          ],
          feedback: {
            correct: "Correct. Kinetic counterspace physically destroys or damages the satellite. Non-kinetic counterspace disrupts, deceives, jams, dazzles, or degrades without physical destruction.",
            incorrect: "Use the physical-destruction test. If the action breaks the satellite, it is kinetic. If it denies, degrades, disrupts, or deceives without destroying the space object, it is non-kinetic.",
            whyMatters: "Kinetic ASAT is much more escalatory because it creates debris and can threaten other space assets. Non-kinetic options are usually more proportional and more reversible.",
            evidenceClue: "Card 5 shows the observed Donovian non-kinetic event (GNSS denial in the corridor). Card 6 is the kinetic ASAT escalation reference - no such activity is present in this scenario."
          }
        },
        {
          id: "p7a3",
          type: "decision",
          typeLabel: "Activity 3 of 5 - Decision",
          points: 1,
          instruction: "The commander wants persistent missile warning over one theater. Which orbit best supports the mission?",
          objectiveIds: ["4.8-orbits"],
          options: [
            { id: "o7-1", text: "Geostationary Earth Orbit (GEO)", correct: true, explanation: "GEO stays fixed over one region, which is ideal for persistent theater missile warning." },
            { id: "o7-2", text: "Low Earth Orbit (LEO)", correct: false, explanation: "LEO gives great resolution, but one satellite does not provide fixed persistent staring." },
            { id: "o7-3", text: "Medium Earth Orbit (MEO)", correct: false, explanation: "MEO is primarily used for navigation and timing." },
            { id: "o7-4", text: "Polar Orbit", correct: false, explanation: "Polar orbit is best for global coverage, not fixed theater staring." }
          ],
          feedback: {
            correct: "Correct. GEO is the best choice for persistent missile warning over one region because it stays fixed relative to that theater.",
            incorrect: "The mission is persistent warning over one theater, which points to GEO. LEO is for high-resolution imagery, MEO is for navigation and timing, and polar orbit is for global coverage.",
            whyMatters: "Mission fit matters in space. The wrong orbit can leave you with excellent collection that still misses the commander’s timing requirement.",
            evidenceClue: "Card 1 describes GEO as the persistent staring orbit used for missile warning and communications."
          }
        },
        {
          id: "p7a4",
          type: "ranking",
          typeLabel: "Activity 4 of 5 - Ranking",
          points: 4,
          instruction: "Rank these space actions from least escalatory (1) to most escalatory (4).",
          objectiveIds: ["4.8-counterspace"],
          items: [
            { id: "r7-1", text: "Cyber attack against the satellite ground segment", correct: 1, explanation: "This is disruptive, but it does not physically destroy the satellite." },
            { id: "r7-2", text: "GPS jamming against users in the field", correct: 2, explanation: "This denies service without destroying the spacecraft." },
            { id: "r7-3", text: "Laser dazzling against a sensor payload", correct: 3, explanation: "This degrades the sensor and can be temporary, but it is more escalatory than jamming." },
            { id: "r7-4", text: "Kinetic anti-satellite (ASAT) intercept", correct: 4, explanation: "This physically destroys the satellite and creates debris, making it the most escalatory." }
          ],
          feedback: {
            correct: "Correct ranking. Cyber against the ground segment is least escalatory here, then GPS jamming, then laser dazzling, and kinetic ASAT is the most escalatory.",
            incorrect: "The lesson logic is based on physical destruction and debris. Non-kinetic actions are generally less escalatory than kinetic ASAT. The more you move toward physically destroying a satellite, the more escalatory the action becomes.",
            whyMatters: "Commanders need to understand escalation before they choose a counterspace response. A kinetic ASAT strike can create debris that affects the wider orbital environment.",
            evidenceClue: "Card 5 is the actual non-kinetic GNSS denial Donovia is running in the corridor. Card 6 is the kinetic ASAT reference - more escalatory but not observed in this scenario."
          }
        },
        {
          id: "p7a5",
          type: "multiselect",
          typeLabel: "Activity 5 of 5 - Multi-Select",
          points: 4,
          instruction: "Select all statements that are true about space operations and counterspace.",
          objectiveIds: ["4.8-orbits", "4.8-counterspace"],
          options: [
            { id: "m7-1", text: "LEO is well suited for high-resolution imagery.", correct: true, explanation: "LEO is close to Earth, which helps resolution." },
            { id: "m7-2", text: "MEO is commonly used for GPS and navigation.", correct: true, explanation: "MEO supports PNT services such as GPS / NAVSTAR." },
            { id: "m7-3", text: "GEO provides persistent coverage over one region.", correct: true, explanation: "That fixed position makes GEO the staring orbit." },
            { id: "m7-4", text: "A kinetic ASAT is less escalatory than a non-kinetic jammer.", correct: false, explanation: "Kinetic ASAT is more escalatory because it physically destroys a satellite." },
            { id: "m7-5", text: "Non-kinetic counterspace can include jamming and cyber effects.", correct: true, explanation: "Those methods degrade or disrupt without physical destruction." }
          ],
          feedback: {
            correct: "Correct. The true statements are the ones that match the orbit and counterspace lesson: LEO for imagery, MEO for navigation, GEO for persistence, and non-kinetic effects such as jamming or cyber for disruption without destruction.",
            incorrect: "Review the orbit-mission fit and the escalation logic. LEO is for resolution, MEO for navigation, GEO for persistence, and kinetic ASAT is the most escalatory option because it destroys the satellite.",
            whyMatters: "Space support underpins navigation, collection, and communication. Choosing the wrong orbit or the wrong counterspace response can create collection gaps or unnecessary escalation.",
            evidenceClue: "Cards 1 through 6 cover the orbit missions and the difference between non-kinetic disruption and kinetic destruction."
          }
        }
      ]
    }
    ,
    "phase-8-final": {
      id: "phase-8-final",
      title: "Phase 8 - Commander Synthesis Brief",
      subtitle: "Final Review - PIR Answer & Multi-Domain Integration",
      domain: "review",
      objectiveIds: ["4.1-geoint-elements", "4.2-em-basics", "4.3-radar-kill-chain", "4.4-ir-signatures", "4.5-cyber-actors", "4.6-ie-dimensions", "4.7-isr-cycle", "4.8-orbits", "4.8-counterspace"],
      inject: `The J3 will brief the commander in 30 minutes. Your intelligence cell now owns the synthesis product: a defensible answer to the commander Priority Intelligence Requirement, built from every domain you have worked through.

Recall the question: "Will Donovia conduct a limited cross-border operation into Gorgas within the next 72 hours?" The commander wants a structured product: a BLUF, the indicators that drive it, a Most Likely and Most Dangerous Course of Action, the collection gaps you still carry, and a final PIR call. No new evidence will be injected in this phase. Pull from the GEOINT motor pool picture, the EMS kill-chain emissions, the IR threat picture along the corridor, the cyber actor attribution, the IO campaign assessment, the ISR cycle you ran, and the space-domain interference reporting - and put them on one page.`,
      evidenceCards: [
        {
          id: "e8-1",
          domain: "review",
          title: "Commander PIR - Restated for the Brief",
          summary: "Will Donovia conduct a limited cross-border operation into Gorgas within the next 72 hours?",
          detail: "This is the question the commander will be asked to answer. Your synthesis must include: (1) BLUF - a graded judgment with confidence and timeline; (2) the strongest indicator from each domain; (3) the Most Likely Course of Action (MLCOA); (4) the Most Dangerous Course of Action (MDCOA); (5) the collection gaps that still constrain the assessment; (6) a final PIR call. The commander does not want a domain-by-domain recap - they want one integrated judgment."
        },
        {
          id: "e8-2",
          domain: "review",
          title: "Indicator Roll-Up - Physical & Emitter Picture",
          summary: "GEOINT, EMS/RADAR, and IR indicators consolidated from Phases 3, 4, and 5.",
          detail: "GEOINT: approximately 40 wheeled vehicles and fuel tankers staged at a motor pool 12 km north of the Gorgas border; WAMI reconstructed five movement clusters; FMV tracked an 8-vehicle convoy southbound on Route 7; MTI flagged 15 overnight vehicle transits in the Zabzimek corridor. EMS/RADAR: Early Warning radar at 380 km range, Target Acquisition bursts (three over six hours), and a 4-second X-band Fire Control radar spike placing Donovia at the Engage stage of the kill chain - the most imminent indicator in the picture. IR: nighttime FLIR detected warm vehicle signatures on unimproved tracks; a suspected IR-guided MANPADS position has been identified adjacent to the same corridor."
        },
        {
          id: "e8-3",
          domain: "review",
          title: "Indicator Roll-Up - Influence & Cyber Pressure",
          summary: "IO and Cyber indicators consolidated from Phases 1 and 2.",
          detail: "IO: a coordinated state-directed disinformation campaign claims Gorgas is preparing ethnic violence against Zabzimeki civilians; synchronized hashtag amplification reached 14 countries in 90 minutes across four languages, including NATO members and Gorgas itself. The cognitive-dimension objective is humanitarian precondition-setting for international audiences. Cyber: spearphishing with custom (non-commercial) malware established a 6-week dwell C2 channel on Gorgas logistics contractors; a destructive malware event took the border crossing database offline for 3 hours with no ransom demand; compromised official Gorgas accounts pushed messaging consistent with the IO narrative - a Cyber-Enabled Threat overlaying a Cyber Threat. Attribution indicators converge on a nation-state actor."
        },
        {
          id: "e8-4",
          domain: "review",
          title: "Indicator Roll-Up - Collection State, ISR & Space",
          summary: "ISR posture and space-domain interference from Phases 6 and 7.",
          detail: "ISR: the PIR has been converted at Planning & Direction into collection tasks. Persistent surveillance covers the border corridor; a Route 7 reconnaissance task is launched against the convoy track from Phase 3. DCGS is exploiting new sensor feeds in the Processing & Exploitation stage. Space: Donovia is interfering with coalition Positioning, Navigation, and Timing (PNT) in the border corridor; the activity is consistent with non-kinetic counterspace (jamming the user segment / GNSS denial), not kinetic ASAT. Coalition LEO imagery and MEO PNT remain available outside the denied corridor. There is no indication of an imminent kinetic counterspace event."
        },
        {
          id: "e8-5",
          domain: "review",
          title: "Threshold Logic - MLCOA vs MDCOA",
          summary: "How to grade the Most Likely vs Most Dangerous Course of Action.",
          detail: "Most Likely Course of Action (MLCOA): the COA most consistent with the convergence of all current indicators. It is what the evidence is actually pointing at. Most Dangerous Course of Action (MDCOA): the highest-impact COA the indicators do not yet preclude - what the commander must remain prepared for, even if probability is lower. A COA is implausible when it contradicts the indicators in hand (for example, a Donovian stand-down despite Fire Control radar activity is implausible; a kinetic ASAT against a coalition satellite is implausible because no space-attack indicators are present). Use the indicator roll-ups in cards 2-4 to sort each candidate COA into MLCOA, MDCOA, or implausible."
        }
      ],
      activities: [
        {
          id: "p8a1",
          type: "fillslot",
          typeLabel: "Activity 1 of 5 - Build the BLUF",
          points: 3,
          instruction: "Build the BLUF for the commander brief. Complete each blank using the indicator roll-ups above. The BLUF must be defensible from the evidence in Phases 1 through 7.",
          objectiveIds: ["4.1-geoint-elements", "4.3-radar-kill-chain", "4.5-cyber-actors", "4.6-ie-dimensions"],
          sentence: [
            { type: "text", text: "BLUF: Donovia is " },
            { type: "slot", id: "bluf-likelihood", options: ["LIKELY", "POSSIBLE", "UNLIKELY"], correct: "LIKELY", explanation: "Multi-domain indicators converge: motor pool pre-movement signatures, a Fire Control radar spike, IO precondition-setting, and a coordinated cyber campaign. The convergence supports LIKELY, not merely possible." },
            { type: "text", text: " to conduct a " },
            { type: "slot", id: "bluf-coa", options: ["limited cross-border operation", "full armored invasion", "IO-only pressure campaign"], correct: "limited cross-border operation", explanation: "The staging footprint is too large for IO-only but too small for a full conventional thrust. The IO narrative (Zabzimek protection) and the FC-stage emissions are consistent with a limited, deniable cross-border action." },
            { type: "text", text: " into Gorgas within " },
            { type: "slot", id: "bluf-window", options: ["the next 72 hours", "the next 7 days", "the next 30 days"], correct: "the next 72 hours", explanation: "Fire Control radar activity and the cyber-IO synchronization point at the near-term window the commander PIR asked about: 72 hours." },
            { type: "text", text: "." }
          ],
          feedback: {
            correct: "Correct BLUF. LIKELY / limited cross-border / 72 hours is the integrated read of the evidence and matches the commander PIR window.",
            incorrect: "Rebuild the BLUF against the indicators. UNLIKELY contradicts the FC radar at the Engage stage. A full armored invasion is the Most Dangerous COA, not the Most Likely. The 72-hour window is the explicit PIR window and is supported by the cyber-IO synchronization with the staging picture.",
            whyMatters: "BLUFs are graded on calibration. Overstating CERTAIN locks the commander into action; understating UNLIKELY denies the commander the warning the evidence supports. LIKELY communicates real risk while preserving the gaps you will declare in Activity 4.",
            evidenceClue: "Card 2 (FC spike, 40-vehicle motor pool, MANPADS adjacency), Card 3 (custom-malware cyber + 14-country IO synchronization), and Card 4 (PNT denial in the corridor) all point to LIKELY / limited cross-border / 72 hours."
          }
        },
        {
          id: "p8a2",
          type: "matching",
          typeLabel: "Activity 2 of 5 - Indicator Matrix",
          points: 7,
          instruction: "Match each domain to its single strongest indicator from this scenario. These are the indicators you will cite in the brief. Click a domain on the left, then the matching indicator on the right.",
          objectiveIds: ["4.1-geoint-elements", "4.2-em-basics", "4.3-radar-kill-chain", "4.4-ir-signatures", "4.5-cyber-actors", "4.6-ie-dimensions", "4.7-isr-cycle", "4.8-counterspace"],
          items: [
            { id: "d-geoint", text: "GEOINT", explanation: "GEOINT is the imagery and geospatial intelligence domain. In this scenario, the strongest GEOINT signal is the staging footprint: about 40 wheeled vehicles and fuel tankers parked 12 km north of the Gorgas border. That picture matches pre-movement preparation, not routine activity. When you build the indicator matrix, this is your GEOINT line." },
            { id: "d-ems",    text: "EMS / RADAR", explanation: "EMS and RADAR cover emissions in the electromagnetic spectrum. The key signal here is the 4-second X-band Fire Control radar spike. Fire Control radar is the last step before a weapon is fired, so this places Donovia at the Engage stage of the kill chain. It is the most imminent indicator in the whole picture." },
            { id: "d-ir",     text: "Infrared (IR)", explanation: "Infrared is the heat-detection domain. The strongest IR signal in this scenario is the suspected IR-guided MANPADS position seen on a nighttime FLIR pass near the same border corridor. MANPADS is a shoulder-fired heat-seeking missile and a real threat to coalition aircraft. Its presence raises the risk for any low-altitude or rotary-wing collection in that corridor." },
            { id: "d-cyber",  text: "Cyber", explanation: "Cyber covers actions against and through networks. The strongest cyber signal is the custom (non-commercial) malware that sat undetected on Gorgas logistics contractors for six weeks. Custom malware and long dwell time are nation-state signatures, not criminal or hacktivist behavior. This raises confidence that the cyber pressure is part of one coordinated Donovian operation." },
            { id: "d-io",     text: "Information Operations", explanation: "Information Operations are planned actions that target what audiences believe. The key IO signal here is the synchronized hashtag campaign across 14 countries in 90 minutes, in four languages. That speed and reach is not natural - it is state-directed shaping of the story, framing Gorgas as the aggressor before any Donovian move." },
            { id: "d-isr",    text: "ISR", explanation: "ISR is the intelligence collection cycle. The strongest ISR fact here is the chain you actually ran: the commander PIR was turned into collection tasks at Planning & Direction, DCGS exploited the incoming feeds, and a Route 7 reconnaissance task was launched. That chain is what allows the indicator matrix to exist at all." },
            { id: "d-space",  text: "Space", explanation: "Space covers orbital assets and the services they provide. The strongest space-domain signal here is the GNSS / PNT denial in the border corridor. This is non-kinetic counterspace - jamming the user signal, not destroying a satellite. There is no kinetic ASAT activity in this scenario, so the space picture is degradation, not destruction." }
          ],
          targets: [
            { id: "t-geoint", text: "Approximately 40 wheeled vehicles and fuel tankers staged at a motor pool 12 km north of the Gorgas border", correct: "d-geoint" },
            { id: "t-ems",    text: "X-band Fire Control radar emission for four seconds - placing Donovia at the Engage stage of the kill chain", correct: "d-ems" },
            { id: "t-ir",     text: "Suspected IR-guided MANPADS position identified along the same border corridor on a nighttime FLIR pass", correct: "d-ir" },
            { id: "t-cyber",  text: "Custom (non-commercial) malware on Gorgas logistics contractors with six weeks of undetected C2 dwell", correct: "d-cyber" },
            { id: "t-io",     text: "Synchronized hashtag campaign across 14 countries in 90 minutes, four languages, framing Gorgas as the aggressor", correct: "d-io" },
            { id: "t-isr",    text: "Commander PIR converted into collection tasks at Planning & Direction; DCGS exploiting new feeds; Route 7 reconnaissance launched", correct: "d-isr" },
            { id: "t-space",  text: "GNSS / PNT denial in the border corridor consistent with Donovian non-kinetic counterspace - no kinetic ASAT indicators present", correct: "d-space" }
          ],
          feedback: {
            correct: "Correct. These are the seven indicators you cite in the commander brief - one strongest signal per domain. Together they form the indicator matrix backing the BLUF.",
            incorrect: "Match each domain to the indicator that most directly raises confidence in the BLUF. GEOINT = the staging footprint. EMS = the FC radar at Engage stage. IR = the MANPADS position. Cyber = custom malware with long dwell (the nation-state signature). IO = the hashtag synchronization. ISR = the PIR-to-tasking chain you actually ran. Space = the corridor PNT denial.",
            whyMatters: "A commander brief without a clean indicator matrix is just an opinion. The matrix is what makes the BLUF defensible if a peer challenges your assessment.",
            evidenceClue: "Cards 2, 3, and 4 in this phase consolidate every indicator above. Each one was already collected in Phases 1 through 7."
          }
        },
        {
          id: "p8a3",
          type: "classification",
          typeLabel: "Activity 3 of 5 - MLCOA / MDCOA Sort",
          points: 4,
          instruction: "Classify each candidate Donovian course of action as the Most Likely COA, the Most Dangerous COA, or implausible (contradicted by current indicators).",
          objectiveIds: ["4.3-radar-kill-chain", "4.5-cyber-actors", "4.6-ie-dimensions", "4.8-counterspace"],
          items: [
            { id: "coa-1", text: "Limited cross-border action into the Zabzimek region under a humanitarian-protection narrative, with continued IO and cyber pressure as cover", correct: "mlcoa", explanation: "This COA matches every indicator in the matrix: motor pool staging at the right scale, FC radar at Engage stage, IO precondition-setting, and cyber pre-positioning. It is the MLCOA." },
            { id: "coa-2", text: "Full conventional armored thrust into Gorgas timed to coincide with cyber blackout of border systems and GNSS denial of coalition PNT", correct: "mdcoa", explanation: "Higher impact than the staging picture supports, but the indicators do not preclude escalation. The commander must remain prepared for it. This is the MDCOA." },
            { id: "coa-3", text: "Complete Donovian stand-down and a diplomatic walkback following the international response to the hashtag campaign", correct: "implausible", explanation: "A stand-down contradicts the Fire Control radar activity, the staged motor pool, and the continued cyber and PNT denial activity. The indicators rule this out." },
            { id: "coa-4", text: "Kinetic anti-satellite (ASAT) strike against a coalition LEO ISR satellite as a pre-invasion blinding move", correct: "implausible", explanation: "No space-attack indicators are present. Donovian counterspace activity is non-kinetic (GNSS denial only). A kinetic ASAT would be the most escalatory option in the lesson set and is not supported by any indicator collected." }
          ],
          categories: [
            { id: "mlcoa",        label: "Most Likely COA" },
            { id: "mdcoa",        label: "Most Dangerous COA" },
            { id: "implausible",  label: "Implausible / Contradicted by Indicators" }
          ],
          feedback: {
            correct: "Correct. MLCOA = the limited cross-border action the indicators are actually pointing at. MDCOA = the full conventional thrust the indicators do not preclude. The stand-down and the kinetic ASAT are implausible given the picture you have.",
            incorrect: "Use Card 5's threshold logic. MLCOA is what the indicators converge on. MDCOA is the highest-impact COA still consistent with the indicators. A COA that contradicts evidence (FC radar plus stand-down) is implausible. A COA with no supporting evidence (kinetic ASAT with no space-attack indicators) is also implausible.",
            whyMatters: "Commanders plan against MLCOA and prepare branches for MDCOA. If you collapse the two, you either over-react to the worst case or miss the warning the evidence actually supports.",
            evidenceClue: "Card 2 supports MLCOA - the staging scale and FC spike. Card 4 (no kinetic ASAT indicators) is what makes COA-4 implausible. Card 3 (custom malware, continuing IO) is what makes the stand-down COA-3 implausible."
          }
        },
        {
          id: "p8a4",
          type: "multiselect",
          typeLabel: "Activity 4 of 5 - Collection Gaps",
          points: 4,
          instruction: "Select ALL remaining collection gaps that should be declared in the commander brief. Do not select gaps that have already been resolved by collection in Phases 1 through 7.",
          objectiveIds: ["4.1-geoint-limits", "4.7-isr-cycle"],
          options: [
            { id: "gap-1", text: "Interior contents of the northeast warehouse showing a heat signature - personnel count, stored equipment, and intent inside the structure", correct: true, explanation: "GEOINT cannot penetrate walls. The interior of the warehouse remains a confirmed gap." },
            { id: "gap-2", text: "Specific Donovian senior-leader decision-cycle intent - whether the order to cross has been issued", correct: true, explanation: "HUMINT into the Donovian decision cycle is the classic gap behind any warning intelligence question. It remains unresolved." },
            { id: "gap-3", text: "Positive ELINT identification (system type and unit) of the Fire Control radar emitter that briefly illuminated", correct: true, explanation: "The FC spike was characterized by band and duration but the specific emitter has not been positively identified to a unit. A gap." },
            { id: "gap-4", text: "Attribution of the GNSS / PNT denial to a specific Donovian unit or ground-segment cyber action", correct: true, explanation: "The effect is observed and characterized as non-kinetic; the responsible Donovian element has not been attributed. A gap." },
            { id: "gap-5", text: "Whether the Gorgas Ministry of Defense readiness memo from Phase 1 is authentic", correct: false, explanation: "Not a gap. The memo was verified as authentic in Phase 1 - the IO was the deceptive framing, not the document itself." },
            { id: "gap-6", text: "Whether the Donovian IO campaign is reaching foreign audiences", correct: false, explanation: "Not a gap. OSINT in Phase 1 confirmed 14-country reach in 90 minutes across four languages. This is established." }
          ],
          feedback: {
            correct: "Correct. The four real gaps are warehouse interior, Donovian leadership intent, FC radar positive ID, and PNT denial attribution. The memo authenticity and IO reach are already confirmed and should not be re-listed as gaps.",
            incorrect: "A gap is what the commander still does not know. The warehouse interior, Donovian leadership intent, FC emitter unit ID, and PNT denial attribution are open. The memo authenticity and IO reach were settled by collection in Phase 1 - they do not belong in the gaps section.",
            whyMatters: "Declaring gaps is what separates a competent intelligence product from an overstatement. The commander needs to know what you do not know so they can task additional collection or weight the BLUF accordingly.",
            evidenceClue: "Phase 3 Card 5 named the warehouse interior limit. Phase 4 named the FC emitter only by band. Phase 7 characterized the PNT denial without attributing it. Phase 1 Card 3 verified the leaked memo, so it is not a gap."
          }
        },
        {
          id: "p8a5",
          type: "decision",
          typeLabel: "Activity 5 of 5 - Final PIR Call",
          points: 2,
          instruction: "Final answer to the commander PIR: 'Will Donovia conduct a limited cross-border operation into Gorgas within the next 72 hours?' Choose the assessment that integrates the BLUF, the indicator matrix, the MLCOA/MDCOA sort, and the declared gaps.",
          objectiveIds: ["4.1-geoint-elements", "4.3-radar-kill-chain", "4.5-cyber-actors", "4.6-ie-dimensions", "4.7-isr-cycle"],
          options: [
            { id: "pir-1", text: "ASSESS LIKELY: multi-domain indicators converge on a limited cross-border action inside the 72-hour window. MLCOA is the Zabzimek-flagged limited operation; MDCOA is a full conventional thrust with cyber and PNT denial; declared gaps include warehouse interior, leadership intent, FC emitter ID, and PNT attribution.", correct: true, explanation: "This integrates the BLUF, the indicator matrix, the COA sort, and the declared gaps in a single defensible call. It is the synthesis the commander needs." },
            { id: "pir-2", text: "ASSESS UNLIKELY: indicators are inconsistent or single-source; recommend continued monitoring only and no warning at this time.", correct: false, explanation: "Inconsistent with the picture. The FC radar at Engage stage, the staged motor pool, the synchronized cyber-IO campaign, and the PNT denial converge - they are not single-source." },
            { id: "pir-3", text: "ASSESS CERTAIN: Donovian invasion will occur within 72 hours; recommend immediate kinetic preemption by coalition forces.", correct: false, explanation: "Over-claim. The warehouse interior, the Donovian decision cycle, and FC emitter ID remain open gaps. CERTAIN is not defensible and recommending preemption exceeds the intelligence role." },
            { id: "pir-4", text: "ASSESS NO RESPONSE NEEDED: the IO campaign is the entire Donovian operation and no kinetic action is planned.", correct: false, explanation: "Contradicted by the FC radar spike, the motor pool staging, the suspected MANPADS position, and the PNT denial. An IO-only read ignores the rest of the indicator matrix." }
          ],
          feedback: {
            correct: "Correct. This is the integrated PIR answer: a calibrated LIKELY judgment, the indicator matrix behind it, both COAs sorted, and the gaps declared. That is the commander's synthesis product.",
            incorrect: "The PIR call must reflect all four prior activities. UNLIKELY contradicts the indicator matrix. CERTAIN over-claims past the declared gaps and crosses into an operational recommendation that is not the intelligence officer's role. NO RESPONSE NEEDED ignores the kinetic and emitter indicators.",
            whyMatters: "This is the line of effort the entire scenario was designed to test. A coherent multi-domain answer to a 72-hour warning question - graded, supported, and bounded by gaps - is the headline product an intelligence cell owes a commander.",
            evidenceClue: "Cards 1 through 5 in this phase are the brief in miniature: PIR, three indicator roll-ups, and the COA threshold logic. The correct option restates all of them in one assessment line."
          }
        }
      ]
    }
  }
};
