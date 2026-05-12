/* global window */
window.NorthernVeilContent = {
  restoredThrough: "phase-5-ir",
  phases: {
    "phase-0-overview": {
      id: "phase-0-overview",
      title: "Scenario Orientation",
      subtitle: "Operation Northern Veil",
      domain: null,
      objectiveIds: [],
      inject: `You are the coalition intelligence cell supporting Gorgas leadership. Donovian rhetoric toward Gorgas has sharpened over the past two weeks, with renewed claims that Russian-speaking Zabzimeks are under threat. The commander wants you to integrate multi-domain reporting and warn of cross-border action.`,
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
      inject: `Donovian state media and aligned social accounts have launched a coordinated narrative claiming that Gorgas is preparing ethnic violence against Zabzimeki civilians. The campaign distributes fabricated footage, real documents stripped of context, and amplified social media posts designed to shape international opinion against Gorgas. Coalition signals intelligence has detected coordinated hashtag activity originating from Donovian-linked accounts, reaching audiences in 14 countries within 90 minutes. Open-source researchers have geolocated several video clips to Donovian training grounds - not Gorgas territory. Gorgas issued public denials, but its estimated audience reach was approximately 12 percent of the original campaign's reach. Your intelligence cell has been asked to characterize the IO campaign: identify which dimensions of the Information Environment are being targeted, classify the type of information being used in each report, and clarify the intelligence officer's correct role in supporting the coalition's response.`,
      evidenceCards: [
        {
          id: "e1-1",
          title: 'State Broadcast - "Gorgas Army Moves on Civilians"',
          summary: "Donovian state television claims Gorgas military is mobilizing against Zabzimeki civilians. No independent verification.",
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
            { id: "i1", text: "The Donovian broadcast satellite transmitter and television network infrastructure", correct: "physical" },
            { id: "i2", text: "The fabricated video file distributed across social media platforms", correct: "informational" },
            { id: "i3", text: "The Gorgas general's decision to postpone a border patrol after watching the broadcast", correct: "cognitive" }
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
          instruction: "Classify each item. The key rule: check for intent. If deliberately false - Disinformation. If false but no intent to deceive - Misinformation. If true but released to cause harm - Malinformation.",
          objectiveIds: ["4.6-disinformation"],
          items: [
            { id: "j1", text: "Donovian state broadcast using footage deliberately fabricated and produced for this campaign", correct: "disinformation" },
            { id: "j2", text: "Separatist social post sharing recycled footage - the poster appears to believe it is authentic", correct: "misinformation" },
            { id: "j3", text: "Leaked Gorgas readiness memo - a genuine document published to imply offensive intent", correct: "malinformation" },
            { id: "j4", text: "Gorgas official denial - the Gorgas government believes its own statement is accurate", correct: "misinformation" },
            { id: "j5", text: "Coordinated hashtag amplification - state-directed, knowingly spreading a false narrative", correct: "disinformation" }
          ],
          categories: [
            { id: "disinformation", label: "Disinformation" },
            { id: "misinformation", label: "Misinformation" },
            { id: "malinformation", label: "Malinformation" }
          ],
          feedback: {
            correct: "All five correctly classified. Intent is the determining factor in every case.",
            incorrect: "Apply the intent rule. Disinformation: sender knows it is false and spreads it deliberately. Misinformation: sender believes it is true, even if wrong. Malinformation: content is factually true but released to cause harm. The leaked memo (Card 3) cannot be called false - calling it false would damage the coalition's own credibility.",
            whyMatters: "These distinctions determine the correct response. Disinformation requires counter-messaging and source exposure. Misinformation requires correction and education. Malinformation requires context and framing - you cannot claim it is false without undermining your own credibility.",
            evidenceClue: "Evidence Card 3 is the critical Malinformation example. The memo is genuine. Its weaponization through misleading framing is the operation - this is most commonly confused with Disinformation, but the content itself is real."
          }
        },
        {
          id: "p1a3",
          type: "decision",
          typeLabel: "Activity 3 of 4 - Best Answer",
          points: 1,
          instruction: "Coalition IO planners need analytical support from your cell. What is the intelligence officer's primary role in supporting this IO campaign response?",
          objectiveIds: ["4.6-disinformation"],
          options: [
            { id: "a", text: "Research Donovian audience targeting - identify which populations are being influenced, what psychological vulnerabilities are being exploited, and what the adversary's messaging objectives are. Feed that analysis to MISO planners.", correct: true },
            { id: "b", text: "Broadcast counter-MISO messages directly to Gorgas and Zabzimeki civilian audiences to rebut the Donovian narrative in real time." },
            { id: "c", text: "Produce counter-narrative video content to respond to the Donovian state media broadcast segment." },
            { id: "d", text: "Monitor and manage coalition social media accounts to amplify the Gorgas denial message across the 14 affected countries." }
          ],
          feedback: {
            correct: "Correct. Intelligence officers research and analyze - they do not produce or broadcast IO content. MISO units act on the targeting intelligence that analysts provide.",
            incorrect: "Intelligence officers do not produce or broadcast IO content. Their role is analytical: identify who is being targeted, what the adversary is trying to achieve, and what vulnerabilities are being exploited. MISO units produce and broadcast based on that analysis.",
            whyMatters: "Conflating the intelligence role with MISO leads to two failures: analysts become advocates (bad analysis) or MISO operates without targeting intelligence (bad messaging). The intel officer feeds the MISO planner; the MISO planner executes.",
            evidenceClue: "Evidence Card 5 shows coordinated amplification in 14 countries across four languages. The intel officer's job is to analyze that and tell planners: these are the target audiences, these are the psychological vulnerabilities being exploited, this is what Donovian success looks like."
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
            { type: "slot", id: "slot1", options: ["Physical", "Informational", "Cognitive"], correct: "Cognitive" },
            { type: "text", text: " dimension, because Donovia's objective is not to destroy Gorgas's infrastructure but to change " },
            { type: "slot", id: "slot2", options: ["network bandwidth", "weapons systems", "beliefs and perceptions"], correct: "beliefs and perceptions" },
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
            { id: "m1", text: "Custom malware - not available commercially or on criminal markets", correct: true },
            { id: "m2", text: "Extended dwell time - 6 weeks of undetected access before discovery", correct: true },
            { id: "m3", text: "Destructive objective with no financial motive (no ransom demand)", correct: true },
            { id: "m4", text: "Website defacement using a publicly available hacking tool with political messaging", correct: false },
            { id: "m5", text: "Timing coordinated with an active IO campaign - not random opportunism", correct: true }
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
      inject: `Coalition imagery assets and a commercial electro-optical satellite pass have detected significant military activity north of the Gorgas border. A motor pool 12 kilometers inside Donovian territory shows approximately 40 wheeled vehicles - including fuel tankers - staged in a pattern consistent with pre-movement preparation. A 48-hour Wide-Area Motion Imagery collection window covered the nearest Donovian border town, capturing and recording all vehicle movement across the area. Full Motion Video assets tracked a vehicle convoy moving south along Route 7 for 12 continuous minutes before the collection platform had to reposition. Moving Target Indicator data flagged 15 vehicles transiting the Zabzimek corridor overnight.

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
          summary: "Full Motion Video tracked a vehicle convoy southbound on Route 7 for 12 continuous minutes before the collection platform repositioned.",
          detail: "Collection window: 12 minutes of continuous video on a specific convoy of 8 vehicles moving south along Route 7 toward the Gorgas border. The FMV sensor provided a focused, high-detail view of this specific convoy - sometimes called a soda straw view because the sensor sees clearly but only within a narrow field of view. Lead vehicle type confirmed as a wheeled armored transport. After 12 minutes, the collection platform had to reposition to another task. FMV provides excellent detail on the specific target it is watching but cannot simultaneously cover other areas or reconstruct movement that occurred before the sensor was cued to this convoy."
        },
        {
          id: "e3-4",
          title: "MTI Vehicle Plot - Zabzimek Corridor, Overnight",
          summary: "Moving Target Indicator data flagged 15 vehicles transiting the Zabzimek corridor between 2200L and 0400L.",
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
            { id: "g-fmv", text: "FMV" },
            { id: "g-mti", text: "MTI" },
            { id: "g-wami", text: "WAMI" },
            { id: "g-sar", text: "SAR" }
          ],
          targets: [
            { id: "t-fmv", text: 'Focused, continuous video of a specific target - "soda straw" view; best for tracking one target in detail', correct: "g-fmv" },
            { id: "t-mti", text: "Detects and tracks moving vehicles across a wide area; generates movement plots", correct: "g-mti" },
            { id: "t-wami", text: "Wide-area persistent coverage; all movement recorded continuously and can be rewound for forensic look-back", correct: "g-wami" },
            { id: "t-sar", text: "Emits its own radar energy; provides all-weather, day/night imaging regardless of cloud cover or darkness", correct: "g-sar" }
          ],
          feedback: {
            correct: "All four matched correctly. FMV = focused soda straw continuous video. MTI = wide-area movement detection and tracking. WAMI = persistent recording with forensic look-back. SAR = active radar, all-weather capable.",
            incorrect: "Review the four products. FMV gives a clear, continuous but narrow view of one target. MTI detects and plots anything moving across a wide area. WAMI records everything across a wide area and can be rewound - that is the forensic look-back capability. SAR sends out its own radar signal, making it active and weather-independent.",
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
            { id: "o1", text: "FMV - it provides continuous, high-detail video of specific vehicle movement", correct: false },
            { id: "o2", text: "MTI - it detects moving vehicles and generates historical track plots", correct: false },
            { id: "o3", text: "WAMI - it records all movement across the wide area continuously and supports forensic look-back of past coverage", correct: true },
            { id: "o4", text: "EO satellite image - it provides the highest-resolution snapshot of vehicle positions", correct: false }
          ],
          feedback: {
            correct: "Correct. WAMI's forensic look-back capability is specifically designed for this requirement. The analyst needs to go back in time across a wide area - WAMI recorded everything continuously during that window, so any location can be replayed from any point in the collection period.",
            incorrect: "The key requirement is retrospective: what happened across the whole border town three days ago. FMV only shows what it was cued to watch in real time. MTI generates movement plots but is not the primary forensic tool. EO gives a position snapshot, not movement over time. Only WAMI records everything continuously and enables look-back across the full area.",
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
            { id: "w1", text: "How many personnel are currently inside the warehouse", correct: true },
            { id: "w2", text: "Whether weapons or military equipment are stored inside the building", correct: true },
            { id: "w3", text: "That military vehicles are parked in the area directly outside the warehouse", correct: false },
            { id: "w4", text: "The intent or mission of personnel operating inside the facility", correct: true },
            { id: "w5", text: "What specific activity is occurring inside the building's walls", correct: true }
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
      objectiveIds: ["ems-freq", "ems-elint", "radar-kc", "radar-imm"],
      inject: `As Donovia's IO campaign and cyber disruptions continue, coalition SIGINT collectors begin detecting a surge of radar emissions along the Donovian side of the border. Emissions span multiple frequency bands - from long-range early warning pulses to a brief, alarming Fire Control radar spike that lasted only four seconds before ceasing. A Ground Control Intercept voice intercept was also recorded, consistent with directing fighter aircraft toward a contact.

The current collector position is partially blocked by a ridgeline that interrupts line-of-sight to one of the primary emitter sites. An alternate hilltop position 18 kilometers to the east has been identified with clear line-of-sight to all detected emitters.

Your cell must classify each emission as ELINT or COMINT, apply the kill chain framework to assess how close Donovia is to an engagement decision, and recommend the correct response to the terrain masking problem.`,
      evidenceCards: [
        {
          id: "e4-1",
          domain: "ems",
          title: "Early Warning Radar - Long-Range Detection",
          summary: "VHF-band radar emissions detected at approximately 380 km range. Long pulse, intermittent activation. Assessed as Early Warning radar.",
          detail: "Emissions consistent with an Early Warning (EW) radar: very high frequency (VHF) band, which produces long wavelengths and achieves maximum detection range at the cost of resolution. The long pulse width and intermittent activation pattern are consistent with a search radar sweeping a broad area. EW radar is the Find layer of the Integrated Air Defense System - its activation indicates Donovia is scanning for airborne threats at long range. Detection of EW emissions at 380 km confirms the sensor is active but does not indicate imminent engagement. This is a non-communications electromagnetic emission."
        },
        {
          id: "e4-2",
          domain: "ems",
          title: "Target Acquisition Radar - Three Bursts Over Six Hours",
          summary: "L/S-band radar detected in three separate bursts over 6 hours. Shorter pulse width, higher precision than EW. Assessed as Target Acquisition radar.",
          detail: "Three discrete emission bursts were recorded from an L/S-band radar over a 6-hour window. L/S-band operates at higher frequency than VHF - shorter wavelength, shorter range, but significantly better resolution and precision. This emission profile is consistent with a Target Acquisition (TA) radar that acquires and tracks specific contacts identified by the Early Warning radar. TA radar activation indicates Donovia has moved from broad-area detection to tracking specific contacts - a significant escalation in the IADS operational posture. This is a non-communications electromagnetic emission categorized under ELINT."
        },
        {
          id: "e4-3",
          domain: "ems",
          title: "Fire Control Radar Spike - X-Band, 4 Seconds",
          summary: "X-band emission detected for approximately 4 seconds, then ceased immediately. Very high frequency, narrow beam. Assessed as Fire Control radar. Highest concern.",
          detail: "A 4-second emission burst was detected in the X-band - one of the highest frequency radar bands in operational use. X-band produces very short wavelengths, enabling extremely fine angular resolution and precise range measurement: characteristics required for weapons guidance. A Fire Control (FC) radar lock-on, even briefly, indicates the IADS has moved to the Engage stage of the kill chain. FC radar activation is the most imminent indicator available in an emissions picture - it means a weapon system is being prepared for guidance. The brief duration may indicate a system check, a brief track, or an aborted engagement decision. Regardless, this emission demands immediate attention. This is ELINT."
        },
        {
          id: "e4-4",
          domain: "ems",
          title: "GCI Voice Intercept - Encrypted, Aircraft Coordination",
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
          objectiveIds: ["ems-freq"],
          items: [
            { id: "f-low", text: "Low frequency / long wavelength" },
            { id: "f-high", text: "High frequency / short wavelength" },
            { id: "f-mid", text: "Mid-range frequency" }
          ],
          targets: [
            { id: "t-low", text: "Long detection range, coarser resolution - suited for early warning at maximum distance", correct: "f-low" },
            { id: "t-high", text: "Short range, fine resolution - suited for precision targeting and weapons guidance", correct: "f-high" },
            { id: "t-mid", text: "Balance of range and resolution - suited for target acquisition and tracking", correct: "f-mid" }
          ],
          feedback: {
            correct: "All three matched correctly. Low frequency = long range, coarse resolution (EW radar). High frequency = short range, fine resolution (Fire Control radar). Mid-range = the balance point used for Target Acquisition.",
            incorrect: "Remember the inverse relationship: as frequency increases, wavelength decreases, range decreases, and resolution improves. Low frequency reaches far but sees coarsely. High frequency sees precisely but only at short range. This is why different radar roles use different frequency bands.",
            whyMatters: "The FC radar spike in Card 3 is X-band - the highest frequency in this emissions picture. That high frequency is what makes it capable of guiding a weapon to a target. The EW radar in Card 1 is VHF - low frequency, which is why it can detect targets at 380 km even though it cannot identify them precisely.",
            evidenceClue: "Card 1 (VHF, 380 km range) = low frequency, long range. Card 3 (X-band, 4-second precision spike) = high frequency, short range, fire-control grade. Card 2 (L/S-band, target acquisition) = mid-range balance."
          }
        },
        {
          id: "p4a2",
          type: "classification",
          typeLabel: "Activity 2 of 5 - Classification",
          points: 4,
          instruction: "Classify each intercepted emission as ELINT or COMINT. ELINT = intelligence from non-communications electronic emitters (radars, beacons). COMINT = intelligence from voice and data communications.",
          objectiveIds: ["ems-elint"],
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
          objectiveIds: ["radar-kc"],
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
          objectiveIds: ["radar-imm"],
          items: [
            { id: "r-ew", text: "Early Warning radar activation - VHF-band, long-range detection sweep", correct: 1 },
            { id: "r-gci", text: "GCI voice intercept - encrypted coordination consistent with directing interceptors", correct: 2 },
            { id: "r-ta", text: "Target Acquisition radar bursts - three bursts over 6 hours, precision tracking", correct: 3 },
            { id: "r-fc", text: "Fire Control radar spike - X-band, 4 seconds, weapons-guidance grade precision", correct: 4 }
          ],
          feedback: {
            correct: "Correct ranking. EW = Find stage (1). GCI = coordination to direct interceptors (2). TA = Fix/Track stage (3). FC radar spike = Target/Engage stage - most imminent (4). If FC radar is active, the adversary is at the threshold of firing.",
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
          objectiveIds: ["ems-freq"],
          options: [
            { id: "d1", text: "Stay at the current position - terrain masking is a temporary atmospheric condition that will resolve on its own", correct: false },
            { id: "d2", text: "Move the collector further west to reduce the distance to the emitter sites and improve signal strength", correct: false },
            { id: "d3", text: "Relocate to the eastern hilltop - clear, unobstructed line-of-sight overcomes terrain masking and restores collection on all emitters", correct: true },
            { id: "d4", text: "Request replacement by a space-based collection asset - terrain masking makes ground collection unreliable", correct: false }
          ],
          feedback: {
            correct: "Correct. Terrain masking is a line-of-sight problem, not a signal strength problem. The only solution is repositioning to a location with unobstructed LOS. The eastern hilltop provides that. Moving west increases distance without solving the LOS problem. Space-based assets may supplement but cannot replace the collection flexibility of a repositioned ground system.",
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
      inject: `As Donovia's border pressure increases, coalition aircrews begin reporting more nighttime missile activity along the same corridor. FLIR passes reveal warm vehicle signatures on unimproved tracks, and a suspected IR-guided MANPADS position has been identified near the route. Analysts also note that one newer missile type appears to use an Imaging Infrared seeker rather than a simple hot-spot tracker.

Your cell must identify the primary IR vulnerability on the aircraft, distinguish hot-spot seekers from IIR seekers, and choose the correct countermeasure for each threat type. Remember: IR sees heat, flares are the classic decoy for hot-spot seekers, and IIR seekers are harder to fool because they see the shape of the target rather than just one bright point.`,
      evidenceCards: [
        {
          id: "e5-1",
          domain: "ir",
          title: "Hot Engine Exhaust - Primary IR Vulnerability",
          summary: "The exhaust plume and nozzle glow are the brightest heat source on the airframe and the easiest thing for an IR seeker to lock.",
          detail: "IR seekers look for heat. The hottest, most exposed part of an aircraft is the engine exhaust, especially during high power settings and afterburner use. That bright heat source is the primary vulnerability for an IR-homing missile. Aspect angle matters too: the closer the missile looks straight into the exhaust, the stronger the signature becomes."
        },
        {
          id: "e5-2",
          domain: "ir",
          title: "IR-Homing MANPADS - Hot-Spot Tracker",
          summary: "This seeker locks the hottest point it can see and can be seduced by a hotter flare.",
          detail: "A hot-spot tracker is the classic IR-homing missile seeker. It does not build a full image of the aircraft; it simply chases the hottest point. If a flare is hotter than the aircraft exhaust, the seeker can be pulled away from the airframe and into the decoy. This is why flares remain the standard countermeasure against basic IR-homing threats."
        },
        {
          id: "e5-3",
          domain: "ir",
          title: "Imaging Infrared Seeker - Shape Recognition",
          summary: "IIR seekers build a thermal picture of the target, making them much harder to fool with flares alone.",
          detail: "An Imaging Infrared seeker sees the whole thermal silhouette, not just a single bright dot. That means it can compare shape, contrast, and target patterning. A flare is still a bright point, but the aircraft remains a recognizable thermal object. Because of that, IIR seekers are much harder to defeat with flares alone and typically require tactical maneuver in addition to decoy use."
        },
        {
          id: "e5-4",
          domain: "ir",
          title: "FLIR Overflight - Surface Heat Detection",
          summary: "A forward-looking infrared sensor detects warm vehicles along the tracks at night.",
          detail: "FLIR is a thermal imaging sensor used by aircraft and drones to observe the ground in low light or at night. It detects heat signatures on the surface, making it ideal for spotting vehicles, exhaust plumes, and recent movement. FLIR is a passive sensor: it does not emit energy to collect the picture."
        },
        {
          id: "e5-5",
          domain: "ir",
          title: "IRST - Passive Fighter Sensor",
          summary: "An infrared search-and-track system can detect aircraft heat without emitting radar energy.",
          detail: "IRST is a passive infrared sensor used on fighter aircraft to detect and track other aircraft. Because it does not send out radar energy, it is harder to detect than an active radar system. It is useful for finding hot targets at range and for supporting silent air-to-air search."
        },
        {
          id: "e5-6",
          domain: "ir",
          title: "SBIRS - Space-Based Missile Warning",
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
            { id: "ir1", text: "FLIR" },
            { id: "ir2", text: "IRST" },
            { id: "ir3", text: "SBIRS" },
            { id: "ir4", text: "Hot-spot tracker" },
            { id: "ir5", text: "IIR seeker" }
          ],
          targets: [
            { id: "irt1", text: "Passive thermal imaging for airborne or ground surveillance", correct: "ir1" },
            { id: "irt2", text: "Passive fighter sensor used to find and track aircraft heat signatures", correct: "ir2" },
            { id: "irt3", text: "Space-based missile warning system that detects launch plumes", correct: "ir3" },
            { id: "irt4", text: "Locks onto the hottest point and can be decoyed by a brighter flare", correct: "ir4" },
            { id: "irt5", text: "Forms a thermal image of the target and is harder to fool with flares alone", correct: "ir5" }
          ],
          feedback: {
            correct: "Correct. FLIR is for passive thermal imaging, IRST is a passive air-to-air sensor, SBIRS is space-based missile warning, hot-spot trackers chase the brightest point, and IIR seekers build a fuller thermal picture of the target.",
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
            { id: "i5-4", text: "Imaging Infrared seeker on the missile", correct: "seeker" },
            { id: "i5-5", text: "FLIR sensor on an aircraft or drone", correct: "sensor" }
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
            { id: "ms5-1", text: "Hot engine exhaust is the primary IR vulnerability on an aircraft.", correct: true },
            { id: "ms5-2", text: "Flares are the standard countermeasure against a hot-spot IR seeker.", correct: true },
            { id: "ms5-3", text: "IIR seekers are easily defeated by flares alone.", correct: false },
            { id: "ms5-4", text: "Chaff is the standard countermeasure against an IR seeker.", correct: false },
            { id: "ms5-5", text: "FLIR and IRST are passive thermal sensors.", correct: true },
            { id: "ms5-6", text: "SBIRS is used for missile warning from space.", correct: true }
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
  }
};
