/* global window */
//
// Block 6 Trainer — Operation Iron Anvil scenario content
// =====================================================================
// All per-phase content (inject text, evidence cards, activities) for
// the 9 Iron Anvil phases plus a phase-0-overview orientation screen.
// Schema matches Northern Veil (Block 4). Activity types in use:
//   matching | decision | classification | sequencing | ranking | fillslot | multiselect
//
// Engine-side scenario metadata (PIR, situation, actors, glossary,
// objectives, nav) lives at:
//   tools/intel-scenario-trainer/scenarios/block-6-operation-iron-anvil/
// =====================================================================

window.ScenarioContent = {
  config: {
    opName: "IRON ANVIL",
    opCode: "OP-IA-26",
    studentPassword: "OperationIronAnvil",
    sessionKey: "iron-anvil-student-session-v1",
    phaseIds: [
      "phase-0-overview",
      "phase-1-joint-forces",
      "phase-2-tacs",
      "phase-3-aoc",
      "phase-4-srd",
      "phase-5-cpd",
      "phase-6-cod",
      "phase-7-isrd",
      "phase-8-amd",
      "phase-9-synthesis"
    ]
  },
  restoredThrough: "phase-9-synthesis",
  phases: {
    "phase-0-overview": {
      id: "phase-0-overview",
      title: "Scenario Orientation",
      subtitle: "Operation Iron Anvil",
      domain: null,
      objectiveIds: [],
      inject: "Your intelligence team got it right.\n\nIn Block 4, you assessed that Donovia was LIKELY to conduct a limited cross-border operation into Gorgas within 72 hours. Three days later, Donovian 58th Combined Arms Army units crossed the border and seized the Zabzimek Corridor — exactly the MLCOA your team identified.\n\nOne week later, the United States and coalition partners have formed Combined Joint Task Force CAUCASUS (CJTF-CAU). You have just arrived at the Coalition Air Operations Center at Atropian Air Base as an international Liaison Officer. Your mission today is to learn how this AOC functions — who does what, what they produce, how information flows, and who has the authority to make critical decisions — because when the first ATO kicks off, there will be no time to look it up.",
      evidenceCards: [
        {
          id: "ev-cmdr-iron-anvil",
          title: "JFACC Mission Statement — Brig Gen Torres",
          summary: "Achieve and maintain air superiority over Gorgan airspace. Degrade Donovian ground forces in the Zabzimek Corridor. Protect Gorgan civilian infrastructure.",
          detail: "\"Achieve and maintain air superiority over Gorgan airspace. Degrade Donovian ground forces in the Zabzimek Corridor. Protect Gorgan civilian infrastructure. The coalition includes air assets from seven nations in a complex threat environment. Donovia has a capable IADS. We are operating under strict Rules of Engagement — collateral damage is a strategic concern. We have 48 hours to stand up this AOC and execute the first ATO. Every one of you needs to know your role before that clock runs out.\"\n\n— JFACC Brig Gen Torres, AOC Opening Brief, D-Day Minus 48 Hours"
        },
        {
          id: "ev-cjtf-actors",
          title: "CJTF-CAU Key Actors",
          summary: "Multinational task force commanded by Lt Gen Park (USAF). JFACC: Brig Gen Torres (USAF). Seven nations contributing air assets.",
          detail: "CJTF Commander: Lt Gen Sandra Park, USAF.\nJFACC: Brig Gen Michael Torres, USAF — commands all coalition air operations.\nJFLCC: Maj Gen Aram Petrosyan, Gorgan Army.\nJFMCC: Rear Adm James Kowalski, USN.\nJFSOCC: Col Sven Lindqvist, Swedish SOF.\nCoalition Air Partners: 7 nations (Gorgas, Atropia, Poland, France, UK, UAE, and your nation).\nAOC Location: Atropian Air Base, 220 km south of the Gorgas-Donovia border."
        }
      ],
      activities: []
    },
"phase-1-joint-forces": {
    "id": "phase-1-joint-forces",
    "title": "Phase 1 — Establishing the Coalition Command",
    "subtitle": "Lesson 6.1 — Joint Forces",
    "domain": "joint-forces",
    "objectiveIds": [
      "6.1-obj-1",
      "6.1-obj-2",
      "6.1-obj-4"
    ],
    "inject": "Your intelligence team got it right. In Block 4, you assessed that Donovia was LIKELY to conduct a limited cross-border operation into Gorgas within 72 hours. Three days later, Donovian 58th Combined Arms Army units crossed the border and seized the Zabzimek Corridor — exactly the MLCOA your team identified.\n\nNow, one week later, the United States and coalition partners have formed Combined Joint Task Force CAUCASUS (CJTF-CAU). You have just arrived at the Coalition Air Operations Center at Atropian Air Base as an international Liaison Officer. Your first task: understand who commands what — because in coalition operations, command authority determines what you can and cannot do with another nation's forces.",
    "evidenceCards": [
      {
        "id": "e1-1",
        "title": "The Four Command Authorities",
        "summary": "COCOM, OPCON, TACON, and ADCON define who controls what in joint and combined operations.",
        "detail": "COCOM (Combatant Command): The highest authority. Held by a Combatant Commander appointed by the President or SecDef. Cannot be transferred or delegated — ever. Only applies to U.S. forces.\n\nOPCON (Operational Control): Authority to task and organize forces for specific missions. Can be delegated. Coalition partner forces can be placed under OPCON.\n\nTACON (Tactical Control): Limited to local direction of movement and maneuver only. Does NOT include authority to assign separate missions or reorganize forces.\n\nADCON (Administrative Control): Covers support functions — training, readiness, pay, personnel records, and maintenance. Stays with the service or national force even when units are under another commander's OPCON or TACON."
      },
      {
        "id": "e1-2",
        "title": "Joint vs. Combined Operations",
        "summary": "Joint = U.S. services only. Combined = U.S. plus partner or allied nations.",
        "detail": "A JOINT operation involves two or more U.S. military departments operating together. Example: U.S. Army and U.S. Air Force conducting a coordinated strike.\n\nA COMBINED operation involves U.S. forces plus partner or allied nation forces. Example: CJTF-CAU with U.S., Gorgan, Atropian, French, and UK forces operating together.\n\nKey implication: COCOM is a U.S. statutory authority. Partner nation forces placed under U.S. command can be given OPCON or TACON — but never COCOM."
      }
    ],
    "activities": [
      {
        "id": "p1a1",
        "type": "matching",
        "typeLabel": "Activity 1 of 3 — Matching",
        "points": 4,
        "instruction": "Match each command authority to its correct definition.",
        "objectiveIds": [
          "6.1-obj-2"
        ],
        "items": [
          {
            "id": "m1",
            "text": "COCOM",
            "explanation": "COCOM is held by a Combatant Commander appointed by the President. It cannot be transferred or delegated under any circumstances — not even to a subordinate U.S. commander, and never to a partner nation."
          },
          {
            "id": "m2",
            "text": "OPCON",
            "explanation": "OPCON allows a commander to task and organize forces for specific missions. It can be delegated and is the standard authority used for integrating coalition partner forces into an air campaign."
          },
          {
            "id": "m3",
            "text": "TACON",
            "explanation": "TACON is limited to local direction of movement and maneuver only. It does NOT include authority to assign separate missions or reorganize forces — making it insufficient for most coalition air tasking."
          },
          {
            "id": "m4",
            "text": "ADCON",
            "explanation": "ADCON covers support functions — pay, personnel, training, and maintenance. It always stays with the service or national force, regardless of who holds OPCON or TACON over those units."
          }
        ],
        "targets": [
          {
            "id": "t1",
            "text": "Highest command authority; held by a Combatant Commander; cannot be transferred or delegated to any subordinate or partner nation.",
            "correct": "m1"
          },
          {
            "id": "t2",
            "text": "Authority to task and organize forces for specific missions; can be delegated; the standard authority for integrating coalition partner forces.",
            "correct": "m2"
          },
          {
            "id": "t3",
            "text": "Authority limited to local direction of movement and maneuver only; does NOT include the right to assign independent missions.",
            "correct": "m3"
          },
          {
            "id": "t4",
            "text": "Authority over support functions — training, readiness, pay, and personnel records; stays with the national force even under another commander's OPCON.",
            "correct": "m4"
          }
        ],
        "feedback": {
          "correct": "Correct. COCOM cannot be delegated — it is a U.S. statutory authority. OPCON is the standard for tasking coalition forces. TACON is limited to local movement. ADCON always stays with the national force.",
          "incorrect": "Review the four command authorities. The key distinctions: COCOM cannot be transferred; OPCON covers mission tasking and can be given to coalition partners; TACON is limited to local movement only; ADCON is administrative and stays with the service.",
          "whyMatters": "Assigning the wrong command authority creates immediate legal and operational problems. If Torres holds only TACON over Gorgan F-16s, he cannot task them for specific missions — the coalition air campaign cannot function. If he tried to hold COCOM, it would violate U.S. law.",
          "evidenceClue": "See Evidence Card 'The Four Command Authorities' for full definitions, and 'Joint vs. Combined Operations' for partner force integration rules."
        }
      },
      {
        "id": "p1a2",
        "type": "decision",
        "typeLabel": "Activity 2 of 3 — Best Answer",
        "points": 1,
        "instruction": "Brig Gen Torres needs to integrate 24 Gorgan F-16s into the coalition air campaign and task them for specific missions. Which command authority should he hold over these aircraft?",
        "objectiveIds": [
          "6.1-obj-2"
        ],
        "options": [
          {
            "id": "a",
            "text": "COCOM — retains full U.S. statutory authority over all coalition assets for legal accountability.",
            "explanation": "COCOM cannot be held over partner nation forces. It is a U.S.-only statutory authority that applies to U.S. forces — it cannot be extended to Gorgan aircraft."
          },
          {
            "id": "b",
            "text": "OPCON — allows Torres to task and organize the Gorgan F-16s for specific missions while the Gorgan Air Force retains ADCON.",
            "correct": true,
            "explanation": "OPCON is the correct authority. It gives Torres the ability to task and organize the F-16s for missions. The Gorgan Air Force retains ADCON over its own pilots — pay, personnel, and maintenance stay with Gorgas."
          },
          {
            "id": "c",
            "text": "TACON — sufficient authority to coordinate the F-16s with other coalition aircraft during operations.",
            "explanation": "TACON is too limited. It only covers local movement and maneuver — Torres cannot assign missions or reorganize the Gorgan force under TACON."
          },
          {
            "id": "d",
            "text": "ADCON — gives Torres control over Gorgan maintenance and readiness to ensure the F-16s are mission-capable.",
            "explanation": "ADCON is an administrative function, not an operational one. It has nothing to do with tasking aircraft for missions."
          }
        ],
        "feedback": {
          "correct": "Correct. OPCON is the standard authority for integrating coalition partner forces. Torres can task and organize the Gorgan F-16s for tonight's ATO while Gorgas retains ADCON over its pilots.",
          "incorrect": "Torres needs the ability to task and organize — that is OPCON. COCOM cannot be held over partner forces. TACON is too limited for mission tasking. ADCON is administrative only.",
          "whyMatters": "Without OPCON, Torres cannot put Gorgan F-16s on the ATO for specific targets. They become observers, not participants. Getting this right before the first ATO is not a legal formality — it determines what the coalition can actually do in the air.",
          "evidenceClue": "See Evidence Card 'The Four Command Authorities' — specifically the OPCON definition and the note that coalition partners can hold OPCON."
        }
      },
      {
        "id": "p1a3",
        "type": "classification",
        "typeLabel": "Activity 3 of 3 — Joint vs. Combined",
        "points": 4,
        "instruction": "U.S. doctrine distinguishes JOINT operations from COMBINED operations. Classify each scenario by the correct type.",
        "objectiveIds": ["6.1-obj-1"],
        "items": [
          {
            "id": "i1",
            "text": "U.S. Army and U.S. Air Force conducting a coordinated strike against a Donovian armored column inside the Zabzimek Corridor.",
            "correct": "joint",
            "explanation": "Two or more U.S. military departments operating together makes this a JOINT operation. No partner or allied nation forces are involved."
          },
          {
            "id": "i2",
            "text": "CJTF-CAU air operations — U.S., Gorgan, Atropian, French, and UK aircraft flying tonight's ATO together.",
            "correct": "combined",
            "explanation": "U.S. forces operating with partner and allied nation forces makes this a COMBINED operation. CJTF-CAU is the textbook example: U.S. plus six partner nations."
          },
          {
            "id": "i3",
            "text": "A U.S. Navy carrier air wing and a U.S. Marine Corps fixed-wing squadron flying integrated strike packages from the USS Gerald R. Ford.",
            "correct": "joint",
            "explanation": "Two U.S. military departments (Navy and Marine Corps) operating together is JOINT. No partner-nation forces are present in this operation."
          },
          {
            "id": "i4",
            "text": "U.S. Air Force tankers refueling Gorgan and Atropian F-16s during a SEAD mission over the Donovian border.",
            "correct": "combined",
            "explanation": "U.S. forces operating with partner-nation forces (Gorgan, Atropian) is COMBINED. The presence of even one non-U.S. partner makes the operation combined, not joint."
          }
        ],
        "categories": [
          { "id": "joint",    "label": "JOINT — U.S. services only" },
          { "id": "combined", "label": "COMBINED — U.S. plus partner/allied nations" }
        ],
        "feedback": {
          "correct": "Correct. JOINT = two or more U.S. military services operating together. COMBINED = U.S. plus partner or allied nations. The distinction is about WHO is in the operation, not WHAT they are doing.",
          "incorrect": "Apply the U.S. doctrinal rule. JOINT operations involve two or more U.S. military services only (Army + Air Force, Navy + Marines, etc.). COMBINED operations involve U.S. forces plus any partner or allied nation. If even one non-U.S. force is in the operation, it is combined.",
          "whyMatters": "This distinction drives command authority decisions. COCOM is a U.S. statutory authority — it can be held over U.S. forces in a joint operation, but never extended to a partner nation in a combined operation. Mislabeling joint vs combined can lead to assigning command authorities that are not legally valid.",
          "evidenceClue": "See Evidence Card 'Joint vs. Combined Operations' — joint is U.S.-only; combined adds partner/allied forces. CJTF-CAU is a combined operation."
        }
      }
    ]
  },
  "phase-2-tacs": {
    "id": "phase-2-tacs",
    "title": "Phase 2 — Building the Air Control System",
    "subtitle": "Lesson 6.2 — Theater Air Control System (TACS)",
    "domain": "tacs",
    "objectiveIds": [
      "6.2-obj-1",
      "6.2-obj-2",
      "6.2-obj-3"
    ],
    "inject": "The AOC is operational. With the JFACC's coalition command structure now in place, the Theater Air Control System (TACS) is being stood up to manage all air operations across the theater. The TACS is not a single building or headquarters — it is a collection of agencies, people, equipment, and procedures organized into three functional layers, each with its own role in the air fight.\n\nA critical test arrives immediately: the Gorgan Army's 3rd Brigade has made contact with Donovian armored forces in the Zabzimek Corridor and is requesting Close Air Support. The CAS request enters the TACS. Not everyone in the room agrees on how it should be routed — or which agency does what.",
    "evidenceCards": [
      {
        "id": "e2-1",
        "title": "TACS Three-Layer Structure",
        "summary": "The TACS is organized into three layers from theater-level command down to the aircraft overhead.",
        "detail": "Layer 1 — Command and Planning: JFACC, AOC. These elements exercise command authority and produce the Air Tasking Order. They operate at the theater level.\n\nLayer 2 — Coordination and Integration: JACCE, WOC, ASOC, TACP. These elements coordinate between the theater level and the executing forces. The ASOC is the primary agency for CAS support to Army corps and division.\n\nLayer 3 — Execution and Control: CRC, AWACS, TAC(A), FAC(A), JSTARS. These elements directly manage and execute air operations in the fight."
      },
      {
        "id": "e2-2",
        "title": "Key TACS Platform Distinctions",
        "summary": "AWACS watches the sky. JSTARS watches the ground. TAC(A) manages aircraft flow. FAC(A) directs weapons delivery.",
        "detail": "AWACS (E-3 Sentry): Airborne radar that detects and tracks aircraft. Functions as a flying command post managing the air picture — air traffic management with weapons authority.\n\nJSTARS (E-8C): Airborne radar that detects and tracks ground vehicles and troop movements. Looks down, not up.\n\nTAC(A) — Tactical Air Coordinator (Airborne): Airborne controller who coordinates and manages the flow of multiple aircraft in a specific area. The traffic manager.\n\nFAC(A) — Forward Air Controller (Airborne): Airborne controller who directs actual weapons delivery against specific ground targets. Talks directly to the pilot during the attack.\n\nJTAC — Joint Terminal Attack Controller: The specialist within the TACP on the ground who talks directly to aircraft and controls the actual strike."
      }
    ],
    "activities": [
      {
        "id": "p2a1",
        "type": "sequencing",
        "typeLabel": "Activity 1 of 2 — Put in Order",
        "points": 4,
        "instruction": "The Gorgan 3rd Brigade has a target and needs Close Air Support. Arrange these TACS nodes in the correct order — from the ground unit's request to the aircraft executing the strike.",
        "objectiveIds": [
          "6.2-obj-2",
          "6.2-obj-3"
        ],
        "items": [
          {
            "id": "s1",
            "text": "TACP / JTAC — receives the ground commander's request; advises on air support options; communicates directly with aircraft during the strike",
            "explanation": "The TACP is the Air Force team embedded with the Army ground unit. The JTAC within the TACP is the certified specialist who controls the actual weapons delivery."
          },
          {
            "id": "s2",
            "text": "ASOC (Air Support Operations Center) — primary control agency for air support to Army corps and division; processes and coordinates the CAS request",
            "explanation": "The ASOC is co-located with the Army corps or division HQ and manages the flow of CAS requests between the ground force and the AOC."
          },
          {
            "id": "s3",
            "text": "AOC (Air Operations Center) — theater-level command center; allocates aircraft and deconflicts with the ATO",
            "explanation": "The AOC manages the entire theater air picture. CAS requests that exceed local allocation or require deconfliction with the ATO pass through the AOC."
          },
          {
            "id": "s4",
            "text": "Aircraft — executes the strike under JTAC terminal control",
            "explanation": "The pilot receives targeting data and clearance from the JTAC. The JTAC physically clears the aircraft to release weapons on the target."
          }
        ],
        "correct": [
          "s1",
          "s2",
          "s3",
          "s4"
        ],
        "feedback": {
          "correct": "Correct. The CAS chain flows: Ground Commander → TACP/JTAC → ASOC → AOC → Aircraft. The JTAC talks directly to the aircraft throughout and provides final clearance to fire.",
          "incorrect": "The CAS request starts at the ground unit and flows upward through the TACS before the aircraft can execute. The TACP/JTAC is the first node — they are embedded with the ground force. The ASOC processes the request at the corps/division level. The AOC manages theater allocation.",
          "whyMatters": "Routing a CAS request through the wrong chain means the strike either never happens, happens without proper deconfliction, or results in fratricide. Every minute of delay while a ground unit is in contact costs lives.",
          "evidenceClue": "See Evidence Card 'TACS Three-Layer Structure' — the TACP sits in Layer 2, the AOC in Layer 1. The aircraft executes in Layer 3 under JTAC control."
        }
      },
      {
        "id": "p2a2",
        "type": "classification",
        "typeLabel": "Activity 2 of 2 — Classification",
        "points": 4,
        "instruction": "Assign each TACS agency to the correct layer of the Theater Air Control System.",
        "objectiveIds": [
          "6.2-obj-1",
          "6.2-obj-2"
        ],
        "items": [
          {
            "id": "i1",
            "text": "AOC — Air Operations Center",
            "correct": "layer-1",
            "explanation": "The AOC is Layer 1 — Command and Planning. It is the JFACC's primary command tool and operates at the theater level."
          },
          {
            "id": "i2",
            "text": "ASOC — Air Support Operations Center",
            "correct": "layer-2",
            "explanation": "The ASOC is Layer 2 — Coordination and Integration. It is the primary control agency for air support to Army corps and division, co-located with the Army HQ."
          },
          {
            "id": "i3",
            "text": "AWACS — Airborne Warning and Control System",
            "correct": "layer-3",
            "explanation": "AWACS is Layer 3 — Execution and Control. It manages the air picture from the air, providing radar coverage and airborne command and control during execution."
          },
          {
            "id": "i4",
            "text": "TACP — Tactical Air Control Party",
            "correct": "layer-2",
            "explanation": "The TACP is Layer 2 — Coordination and Integration. It is the Air Force team embedded with Army ground units at brigade level and below, providing the critical link between ground commanders and aircraft."
          }
        ],
        "categories": [
          {
            "id": "layer-1",
            "label": "Layer 1 — Command & Planning"
          },
          {
            "id": "layer-2",
            "label": "Layer 2 — Coordination & Integration"
          },
          {
            "id": "layer-3",
            "label": "Layer 3 — Execution & Control"
          }
        ],
        "feedback": {
          "correct": "Correct. The three TACS layers move from theater-level command (Layer 1: JFACC, AOC) through coordination elements (Layer 2: JACCE, WOC, ASOC, TACP) down to execution (Layer 3: CRC, AWACS, TAC(A), FAC(A), JSTARS).",
          "incorrect": "Review the three TACS layers. Layer 1 is command and planning at the theater level (JFACC, AOC). Layer 2 is coordination between theater and executing forces (ASOC, TACP, JACCE, WOC). Layer 3 is execution and direct control (AWACS, CRC, TAC(A), FAC(A), JSTARS).",
          "whyMatters": "Understanding the layers tells you who to call and in what order. A ground commander who tries to call the AOC directly for CAS bypasses the entire coordination layer — his request will get lost. The TACS exists because no single agency can manage everything from the strategic to the tactical level simultaneously.",
          "evidenceClue": "See Evidence Card 'TACS Three-Layer Structure' for the complete list of agencies in each layer."
        }
      }
    ]
  },
  "phase-3-aoc": {
    "id": "phase-3-aoc",
    "title": "Phase 3 — Welcome to the AOC",
    "subtitle": "Lesson 6.3 — Air Operations Center",
    "domain": "aoc",
    "objectiveIds": [
      "6.3-obj-1",
      "6.3-obj-2",
      "6.3-obj-3"
    ],
    "inject": "You have been formally assigned to the Coalition AOC support staff. Your section chief drops a stack of documents on your desk with a single instruction: figure out who produced what, and who you need to talk to for each problem that walks through the door.\n\nThe AOC is a weapon system — formally organized, trained, and equipped. It has five divisions and produces six major planning documents. Three liaison elements represent the other joint force components inside the AOC. Take the next 20 minutes to map the players to the products and the liaisons to the components — by the time the first inject lands on the floor, you need to know exactly who to call.",
    "evidenceCards": [
      {
        "id": "e3-1",
        "title": "The Five AOC Divisions",
        "summary": "The AOC is organized into five divisions, each responsible for a different part of the air tasking cycle.",
        "detail": "Strategy Division (SRD): Develops the command's overall vision and guidance for the air campaign. Produces the Joint Air Operations Plan (JAOP) and issues the Air Operations Directive (AOD). Operates 72-96+ hours ahead of execution.\n\nCombat Plans Division (CPD): Receives the AOD, builds the Master Air Attack Plan (MAAP), and produces the AOC's primary output — the Air Tasking Order (ATO) — along with the Airspace Control Order (ACO) and Special Instructions (SPINS). Provides near-term planning 48 to 96 hours prior to ATO execution.\n\nCombat Operations Division (COD): Executes the current ATO in real time. The Chief of Combat Operations (CCO) leads execution of the current ATO on behalf of the JFACC. Operates 24/7.\n\nISR Division (ISRD): Plans, tasks, and assesses ISR operations. Supports all three other divisions.\n\nAir Mobility Division (AMD): Plans and coordinates airlift, air refueling, and aeromedical evacuation."
      },
      {
        "id": "e3-2",
        "title": "AOC Liaison Elements",
        "summary": "BCD, NALE, and SOLE represent the land, maritime, and special operations components inside the AOC.",
        "detail": "BCD (Battlefield Coordination Detachment): Represents the U.S. Army (land component). Coordinates ground force requirements — air support priorities, CAS requests, and airspace deconfliction — with the AOC air planning staff.\n\nNALE (Naval and Amphibious Liaison Element): Represents the U.S. Navy and Marine Corps (maritime component). Coordinates naval air requirements, including carrier-based aviation integration into the ATO.\n\nSOLE (Special Operations Liaison Element): Represents the special operations component (SOF). Coordinates SOF air support requirements and deconflicts SOF operations with conventional air missions to prevent fratricide."
      }
    ],
    "activities": [
      {
        "id": "p3a1",
        "type": "matching",
        "typeLabel": "Activity 1 of 2 — Matching",
        "points": 4,
        "instruction": "Match each AOC planning document to the description that best explains its purpose and scope.",
        "objectiveIds": [
          "6.3-obj-2"
        ],
        "items": [
          {
            "id": "m1",
            "text": "JAOP (Joint Air Operations Plan)",
            "explanation": "The JAOP is the long-range air campaign plan produced by the Strategy Division. It guides operations over days to weeks and translates the JFC's objectives into an air campaign strategy."
          },
          {
            "id": "m2",
            "text": "AOD (Air Operations Directive)",
            "explanation": "The AOD is cycle-specific guidance issued by the SRD at the start of each ATO planning cycle. It tells the Combat Plans Division what objectives to prioritize and what weight of effort to apply for the next 24-48 hours."
          },
          {
            "id": "m3",
            "text": "MAAP (Master Air Attack Plan)",
            "explanation": "The MAAP is the detailed scheme produced by CPD that matches available air sorties to missions and targets. It is the blueprint that becomes the ATO — built before the ATO is finalized."
          },
          {
            "id": "m4",
            "text": "ATO (Air Tasking Order)",
            "explanation": "The ATO is the formal 24-hour order that assigns specific missions, targets, and aircraft to coalition units. It is the primary product of the Combat Plans Division and the primary execution document for the COD."
          }
        ],
        "targets": [
          {
            "id": "t1",
            "text": "The overarching air campaign plan produced by the Strategy Division; covers days to weeks of operations; translates the JFC's objectives into an air campaign strategy.",
            "correct": "m1"
          },
          {
            "id": "t2",
            "text": "Cycle-specific guidance issued by the Strategy Division at the start of each planning cycle; tells CPD what objectives and priorities to use for the next 24-48 hours.",
            "correct": "m2"
          },
          {
            "id": "t3",
            "text": "Detailed scheme matching available air sorties to missions and targets; the blueprint produced by CPD before the formal tasking order is finalized.",
            "correct": "m3"
          },
          {
            "id": "t4",
            "text": "The AOC's primary output and primary execution document — the formal 24-hour tasking order assigning specific missions, targets, times, and aircraft to all coalition units.",
            "correct": "m4"
          }
        ],
        "feedback": {
          "correct": "Correct. The four documents flow in sequence: JAOP (long-range strategy, SRD) → AOD (cycle guidance, SRD) → MAAP (detailed attack plan, CPD) → ATO (formal execution order, CPD). Each one gets more specific and more tactical.",
          "incorrect": "Remember the product flow: JAOP is the long-range campaign plan (SRD). The AOD is the cycle-specific guidance that drives CPD planning each cycle. The MAAP is the blueprint that CPD builds before finalizing the ATO. The ATO is the formal execution order.",
          "whyMatters": "Confusing the MAAP with the ATO — or the AOD with the JAOP — creates coordination failures across the AOC. When a unit receives the wrong document or misunderstands its authority, missions get executed incorrectly or not at all.",
          "evidenceClue": "See Evidence Card 'The Five AOC Divisions' — the SRD produces the JAOP and AOD, the CPD produces the MAAP and ATO."
        }
      },
      {
        "id": "p3a2",
        "type": "classification",
        "typeLabel": "Activity 2 of 2 — Classification",
        "points": 3,
        "instruction": "Three problems just walked through the AOC door. Classify each one by the correct liaison element that handles it.",
        "objectiveIds": [
          "6.3-obj-3"
        ],
        "items": [
          {
            "id": "i1",
            "text": "The Gorgan Army's 3rd Corps Commander needs air support priorities and CAS requests integrated into tonight's ATO.",
            "correct": "bcd",
            "explanation": "The BCD (Battlefield Coordination Detachment) represents the land component and coordinates ground force requirements — including CAS requests and air support priorities — with the AOC planning staff."
          },
          {
            "id": "i2",
            "text": "The USS Gerald R. Ford carrier strike group's 24 F/A-18E/Fs need to be fully integrated into tonight's ATO.",
            "correct": "nale",
            "explanation": "The NALE (Naval and Amphibious Liaison Element) represents the Navy and Marine Corps. Carrier-based aviation integration into the ATO is a core NALE function."
          },
          {
            "id": "i3",
            "text": "A joint SOF team operating 40 km behind Donovian lines needs deconfliction with tonight's scheduled strike packages to prevent fratricide.",
            "correct": "sole",
            "explanation": "The SOLE (Special Operations Liaison Element) represents the SOF component and is responsible for deconflicting SOF operations with conventional air missions."
          }
        ],
        "categories": [
          {
            "id": "bcd",
            "label": "BCD — Battlefield Coordination Detachment"
          },
          {
            "id": "nale",
            "label": "NALE — Naval and Amphibious Liaison Element"
          },
          {
            "id": "sole",
            "label": "SOLE — Special Operations Liaison Element"
          }
        ],
        "feedback": {
          "correct": "Correct. BCD = land component (Army). NALE = maritime component (Navy/Marines). SOLE = special operations component. These three elements ensure that every joint force component has a voice inside the AOC.",
          "incorrect": "Remember: BCD represents the Army (land), NALE represents the Navy and Marines (maritime), SOLE represents special operations forces. The component they represent determines which liaison element handles the problem.",
          "whyMatters": "If a ground commander's CAS request goes to the SOLE instead of the BCD, it will not be properly coordinated with the Army's requirements. If the Navy's carrier wing goes to the SOLE instead of the NALE, their sorties may not appear in the ATO at all.",
          "evidenceClue": "See Evidence Card 'AOC Liaison Elements' for each element's component and primary responsibility."
        }
      }
    ]
  },
  "phase-4-srd": {
    "id": "phase-4-srd",
    "title": "Phase 4 — The Strategy Team Has a Problem",
    "subtitle": "Lesson 6.4 — Strategy Division (SRD)",
    "domain": "srd",
    "objectiveIds": [
      "6.4-obj-1",
      "6.4-obj-2",
      "6.4-obj-3"
    ],
    "inject": "D-Day minus 36 hours. The Strategy Division (SRD) is building the Joint Air Operations Plan (JAOP) — the long-range air campaign strategy — and is 12 hours from issuing the first Air Operations Directive (AOD) for the initial ATO cycle.\n\nIn Block 4, your intelligence cell identified the indicators and predicted the Donovian invasion. Now you are on the other side of the problem: instead of warning about what Donovia might do, you are inside the headquarters that decides what the coalition will do about it. The SRD is where that decision starts.\n\nThe SRD Chief, Col Patricia Nguyen, is running the planning cell. She needs ISR support — fast. Meanwhile, officers on the staff keep confusing the JAOP with the AOD, and no one can explain how these documents connect to what the Combat Plans Division (CPD) does next.\n\nThink of it this way: the SRD is the coach who calls the play. The CPD is the coordinator who draws it up. The COD is the team that runs it on the field. If the coach's play call is wrong — or if there is no play call at all — everything downstream fails.",
    "evidenceCards": [
      {
        "id": "e4-1",
        "title": "SRD Internal Teams",
        "summary": "The SRD develops the command's overall vision and guidance for the air campaign through four internal teams.",
        "detail": "The Strategy Division's primary function in the air tasking cycle is to develop the command's overall vision and guidance — the strategy that everything downstream supports.\n\nStrategy Plans Team: Develops the long-range Joint Air Operations Plan (JAOP). Thinks in weeks.\n\nStrategy Guidance Team: Produces the Air Operations Directive (AOD) each ATO cycle. Translates long-range strategy into specific 24-48 hour guidance for the Combat Plans Division.\n\nObjectives/Effects Team: Prioritizes desired effects and links them to the JFC's objectives. Ensures the air campaign is actually achieving what the commander wants.\n\nAssessment Team: Evaluates whether current operations are achieving desired effects. Feeds results back to the SRD and CPD for the next planning cycle. Uses BDA (Battle Damage Assessment) results as key inputs."
      },
      {
        "id": "e4-2",
        "title": "JAOP vs. AOD — Same Division, Different Purpose",
        "summary": "Both documents come from the SRD, but the JAOP is long-range and the AOD is cycle-specific.",
        "detail": "JAOP (Joint Air Operations Plan): The overarching air campaign plan. Covers the full campaign — days to weeks. Produced by the Strategy Plans Team. Guides the overall direction of the air campaign.\n\nAOD (Air Operations Directive): Issued by the Strategy Guidance Team each ATO cycle (every 24-48 hours). Translates the JAOP into specific objectives, weight-of-effort guidance, and priorities for the Combat Plans Division to use when building the next ATO.\n\nFlow: JAOP (long-range) → AOD (cycle-specific) → CPD receives AOD → builds MAAP → produces ATO."
      },
      {
        "id": "e4-3",
        "title": "The SRD Starts the Air Tasking Cycle",
        "summary": "The SRD initiates the air tasking cycle by issuing the AOD — without it, no division downstream can do its job.",
        "detail": "The air tasking cycle does not start with the ATO or the MAAP. It starts with the Strategy Division.\n\nThe SRD's primary function is developing the command's overall vision and guidance for the air campaign. It translates the JFC's objectives into an air strategy, then issues the Air Operations Directive (AOD) to kick off each planning cycle.\n\nWhy the AOD matters to CPD: The AOD's guidance and objectives flow directly into the daily air plan. It tells the Combat Plans Division what to prioritize, what weight of effort to apply, and what the JFACC wants to achieve in the next 24-48 hours. Without the AOD, CPD has no direction — they would be building an air plan without knowing what the commander wants right now.\n\nThe cycle: SRD issues the AOD → CPD receives the AOD and builds the MAAP → CPD produces the ATO → COD executes the ATO → Assessment results feed back to SRD for the next cycle.\n\nKey point: The SRD initiates the cycle. Every other division responds to what the SRD produces."
      }
    ],
    "activities": [
      {
        "id": "p4a1",
        "type": "decision",
        "typeLabel": "Activity 1 of 5 — Best Answer",
        "points": 1,
        "instruction": "Col Nguyen needs ISR expertise in her planning cell to help define Priority Intelligence Requirements (PIRs) and assess collection gaps for the campaign. Which ISRD element does she need?",
        "objectiveIds": [
          "6.4-obj-2",
          "6.4-obj-3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Collection Management Cell (CMC) — they formally task ISR assets and produce the RSTA Annex.",
            "explanation": "The CMC formally tasks ISR collection platforms — that is a CPD support function. The CMC is not the element embedded with the SRD for strategy planning."
          },
          {
            "id": "b",
            "text": "ISR Strategists — ISRD personnel specifically embedded with the SRD to align ISR with campaign objectives and PIR development.",
            "correct": true,
            "explanation": "ISR Strategists are the ISRD element that works directly with the SRD. They help define PIRs, assess collection gaps, and ensure ISR assets are aligned with the campaign strategy before CPD builds the ATO."
          },
          {
            "id": "c",
            "text": "ISRDO (ISR Operations Duty Officer) — they manage real-time ISR collection from the COD floor.",
            "explanation": "The ISRDO is embedded on the COD operations floor to manage real-time ISR execution — not in the SRD strategy cell for campaign planning."
          },
          {
            "id": "d",
            "text": "ACF Cell — they fuse multi-source intelligence for the COD floor.",
            "explanation": "The ACF Cell produces fused intelligence products for real-time operations — it does not provide strategy-level support to the SRD planning process."
          }
        ],
        "feedback": {
          "correct": "Correct. ISR Strategists are the ISRD element embedded with (or closely coordinated with) the SRD. They align ISR with campaign objectives, help define PIRs, and identify collection gaps before CPD builds the ATO.",
          "incorrect": "The CMC tasks platforms, the ISRDO manages real-time execution, the ACF fuses data for operations. The element that supports strategy planning is the ISR Strategists — specifically placed to support the SRD's campaign planning work.",
          "whyMatters": "If the SRD defines PIRs without ISR expertise, the collection plan may not be able to answer the commander's key intelligence questions. ISR Strategists bridge the gap between what the commander wants to know and what the ISR enterprise can actually collect.",
          "evidenceClue": "See Evidence Card 'SRD Internal Teams' — the ISR Strategists are an ISRD element that coordinates closely with SRD, not an organic SRD team."
        }
      },
      {
        "id": "p4a2",
        "type": "sequencing",
        "typeLabel": "Activity 2 of 5 — Put in Order",
        "points": 4,
        "instruction": "Arrange these four AOC planning documents in the correct order — from the broadest, longest-range document to the most specific execution document.",
        "objectiveIds": [
          "6.4-obj-1",
          "6.4-obj-3"
        ],
        "items": [
          {
            "id": "s1",
            "text": "JAOP (Joint Air Operations Plan) — the long-range air campaign plan produced by the SRD Strategy Plans Team; guides the overall campaign over days to weeks",
            "explanation": "The JAOP is first — it establishes the overarching campaign strategy that all subsequent documents must support."
          },
          {
            "id": "s2",
            "text": "AOD (Air Operations Directive) — cycle-specific guidance from the SRD issued at the start of each ATO planning cycle; translates JAOP into 24-48 hour priorities for CPD",
            "explanation": "The AOD is second — it takes the long-range JAOP and translates it into actionable guidance for the current planning cycle."
          },
          {
            "id": "s3",
            "text": "MAAP (Master Air Attack Plan) — CPD's detailed scheme matching sorties to targets; the blueprint that becomes the ATO",
            "explanation": "The MAAP is third — CPD receives the AOD and builds the MAAP, which allocates aircraft to missions and sets the sequencing and timing for the strike package."
          },
          {
            "id": "s4",
            "text": "ATO (Air Tasking Order) — the formal 24-hour execution order assigning missions to all coalition aircraft; the primary document that COD executes",
            "explanation": "The ATO is last and most specific — it is compiled from the MAAP and distributed to all coalition units. It is the document the COD uses to execute the air campaign."
          }
        ],
        "correct": [
          "s1",
          "s2",
          "s3",
          "s4"
        ],
        "feedback": {
          "correct": "Correct. The flow is: JAOP (long-range strategy, SRD) → AOD (cycle guidance, SRD) → MAAP (detailed attack plan, CPD) → ATO (formal execution order, CPD). Each document narrows the scope and increases the specificity.",
          "incorrect": "The documents flow from most strategic to most tactical. The JAOP is the overarching campaign plan. The AOD translates it into cycle guidance. The MAAP builds the detailed plan. The ATO is the formal execution order. SRD produces the first two; CPD produces the last two.",
          "whyMatters": "Every CPD planner working on tonight's ATO is working from the AOD — which came from the JAOP. If a planner skips the AOD and goes straight to the ATO, they may plan missions that contradict the campaign strategy. The document chain is not bureaucracy — it is how the JFC's intent flows from concept to execution.",
          "evidenceClue": "See Evidence Card 'JAOP vs. AOD' for the distinction between these two SRD products and how they connect to CPD."
        }
      },
      {
        "id": "p4a3",
        "type": "decision",
        "typeLabel": "Activity 3 of 5 — Best Answer",
        "points": 1,
        "instruction": "A newly arrived coalition officer asks you: 'I understand the SRD writes the JAOP and the AOD — but what is the SRD's primary function in the air tasking cycle? What are they actually doing for the JFACC?'",
        "objectiveIds": ["6.4-obj-1"],
        "options": [
          {
            "id": "a",
            "text": "Developing the command's overall vision and guidance for the air campaign — translating the JFC's objectives into an air strategy that every other division supports.",
            "correct": true,
            "explanation": "The SRD's primary function is developing the command's vision and guidance. The JAOP and AOD are the products of that function, not the function itself. The SRD decides WHERE the air campaign is going; CPD figures out HOW to get there."
          },
          {
            "id": "b",
            "text": "Executing the current Air Tasking Order in real time and managing dynamic targeting decisions on the operations floor.",
            "explanation": "This describes the Combat Operations Division (COD), not the SRD. The COD operates 24/7 and manages real-time execution. The SRD works 48-72 hours ahead — it is a planning division, not an execution division."
          },
          {
            "id": "c",
            "text": "Building the Master Air Attack Plan (MAAP) and producing the Air Tasking Order (ATO) for dissemination to coalition units.",
            "explanation": "This describes the Combat Plans Division (CPD). The CPD builds the MAAP and ATO based on the guidance it receives from the SRD. The SRD provides the direction; CPD turns it into an executable plan."
          },
          {
            "id": "d",
            "text": "Formally tasking ISR collection platforms and producing the RSTA Annex for integration into the ATO.",
            "explanation": "This describes the Collection Management Cell (CMC) within the ISR Division (ISRD). The SRD uses ISR products but does not task ISR platforms — that is the CMC's job."
          }
        ],
        "feedback": {
          "correct": "Correct. The SRD's primary function is developing the command's vision and guidance. Think of the SRD as the coach who calls the play — the JAOP and AOD are the play calls. CPD draws up the play (MAAP/ATO). COD runs it on the field.",
          "incorrect": "The SRD develops the command's vision and guidance — it sets the direction for the entire air campaign. ATO execution belongs to COD. MAAP/ATO production belongs to CPD. ISR collection tasking belongs to ISRD (CMC). The SRD works at the strategic level, ahead of everyone else.",
          "whyMatters": "If you confuse the SRD with the CPD or the COD, you will bring the wrong problem to the wrong division. The SRD answers 'what should we achieve?' — not 'how do we build tonight's ATO' (CPD) or 'what is happening right now' (COD). A staff officer who misunderstands the SRD's role wastes time asking strategy officers to solve tactical problems.",
          "evidenceClue": "See Evidence Card 'SRD Internal Teams' — the first line states the primary function: 'develop the command's overall vision and guidance.'"
        }
      },
      {
        "id": "p4a4",
        "type": "decision",
        "typeLabel": "Activity 4 of 5 — Best Answer",
        "points": 1,
        "instruction": "The AOC is standing up and the air tasking cycle is about to begin for the first time. A CPD planner asks: 'When does our work start? Who kicks off the cycle?' Which statement correctly identifies how the air tasking cycle begins?",
        "objectiveIds": ["6.4-obj-1", "6.4-obj-3"],
        "options": [
          {
            "id": "a",
            "text": "The Combat Plans Division (CPD) initiates the cycle by publishing the Air Tasking Order — the ATO is the first document produced in each cycle.",
            "explanation": "The ATO is the last major document in the cycle, not the first. CPD cannot build the ATO until it receives guidance from the SRD telling it what to prioritize."
          },
          {
            "id": "b",
            "text": "The Strategy Division (SRD) initiates the air tasking cycle by issuing the Air Operations Directive (AOD) — the AOD provides the guidance and objectives that CPD needs to begin planning.",
            "correct": true,
            "explanation": "The SRD initiates the cycle. The AOD tells CPD what to prioritize, what weight of effort to apply, and what the JFACC wants to achieve in the next 24-48 hours. Without the AOD, CPD has no direction."
          },
          {
            "id": "c",
            "text": "The Combat Operations Division (COD) initiates the cycle by executing the previous ATO — execution results automatically trigger the next planning cycle.",
            "explanation": "Execution results and BDA feed back into the next cycle, but the COD does not initiate it. The SRD reviews those results and then issues the AOD to start the next cycle. The COD reacts to the cycle; it does not start it."
          },
          {
            "id": "d",
            "text": "The ISR Division (ISRD) initiates the cycle by issuing the RSTA Annex — ISR collection must be tasked before any other planning can begin.",
            "explanation": "The RSTA Annex is produced by the CMC later in the cycle to integrate ISR tasking into the ATO. The ISRD supports the cycle but does not initiate it — the SRD does."
          }
        ],
        "feedback": {
          "correct": "Correct. The Strategy Division initiates the air tasking cycle by issuing the AOD. The AOD is the starting signal — it tells CPD what to plan, what to prioritize, and what the JFACC wants to achieve. No AOD means no ATO.",
          "incorrect": "The air tasking cycle starts with strategy, not with planning or execution. The SRD issues the AOD → CPD receives it and builds the MAAP/ATO → COD executes the ATO → assessment feeds back to SRD. The SRD is always first.",
          "whyMatters": "A CPD planner who does not wait for the AOD may start building an air plan based on yesterday's guidance — which may no longer reflect the JFACC's priorities. The SRD initiates each cycle so the air campaign can adapt to the changing situation. Skipping the AOD means the coalition flies yesterday's war.",
          "evidenceClue": "See Evidence Card 'The SRD Starts the Air Tasking Cycle' — the cycle begins with the SRD issuing the AOD to CPD."
        }
      },
      {
        "id": "p4a5",
        "type": "decision",
        "typeLabel": "Activity 5 of 5 — Best Answer",
        "points": 1,
        "instruction": "A frustrated CPD planner says: 'We already know the JFACC's mission — achieve air superiority, degrade Donovian forces, protect civilian infrastructure. Why can't we just start building the ATO without waiting for the AOD from the SRD? We are wasting time.' What is the best response?",
        "objectiveIds": ["6.4-obj-3", "6.5-obj-3"],
        "options": [
          {
            "id": "a",
            "text": "You are right — the JFACC mission statement is enough. The AOD is an optional planning document that CPD can skip when time is short.",
            "explanation": "The AOD is not optional. The JFACC's broad mission statement does not change every cycle — but the situation does. The AOD provides the cycle-specific guidance that CPD needs to build a plan that matches today's reality."
          },
          {
            "id": "b",
            "text": "The AOD's guidance and objectives flow into the daily air plan — it tells CPD what to prioritize, what weight of effort to apply, and what the JFACC wants to achieve in this specific cycle. Without it, CPD cannot build an air plan that reflects the current situation.",
            "correct": true,
            "explanation": "The JFACC mission statement is broad and enduring. The AOD translates it into cycle-specific guidance — priority targets, weight of effort, effects to achieve in the next 24-48 hours. Without the AOD, CPD would plan against a static mission statement instead of adapting to what is happening now."
          },
          {
            "id": "c",
            "text": "The AOD contains the formatted ATO template that CPD fills in — without the template, CPD cannot publish the ATO in the correct format.",
            "explanation": "The AOD is not a template or a form. It is strategic guidance — objectives, priorities, and weight-of-effort direction. The ATO format is a CPD responsibility (ATO Production Team), not something the SRD provides."
          },
          {
            "id": "d",
            "text": "The AOD lists every aircraft and tail number available for the cycle — CPD needs this aircraft inventory before it can allocate sorties.",
            "explanation": "The AOD does not list aircraft or tail numbers. Aircraft availability comes from the wings and partner nations. The AOD provides strategic guidance — what to achieve and what to prioritize — not asset inventories."
          }
        ],
        "feedback": {
          "correct": "Correct. The AOD's guidance and objectives flow into the daily air plan. The broad mission statement says 'achieve air superiority' — but the AOD says 'tonight, prioritize SEAD against these radar sites, weight main effort toward the northern corridor, and hold reserve for a possible ground-force CAS request.' That specificity is what CPD needs to build a plan that works right now.",
          "incorrect": "The AOD is not optional, not a template, and not an asset list. It is cycle-specific strategic guidance: what to prioritize, what effects to achieve, what weight of effort to apply. The JFACC's mission statement does not change every 24 hours — but the AOD does, because the battlefield changes.",
          "whyMatters": "If CPD builds the ATO without the AOD, tonight's air plan may repeat yesterday's priorities even though the situation has changed. Yesterday's AOD prioritized SEAD in the northern corridor. Today, Donovian forces shifted south — but without a new AOD, CPD builds another northern SEAD package while the real threat moves unopposed. The AOD is how strategy adapts.",
          "evidenceClue": "See Evidence Card 'The SRD Starts the Air Tasking Cycle' — specifically the section 'Why the AOD matters to CPD.'"
        }
      }
    ]
  },
  "phase-5-cpd": {
    "id": "phase-5-cpd",
    "title": "Phase 5 — The Planning Frenzy",
    "subtitle": "Lesson 6.5 — Combat Plans Division (CPD)",
    "domain": "cpd",
    "objectiveIds": [
      "6.5-obj-1",
      "6.5-obj-2",
      "6.5-obj-3"
    ],
    "inject": "D-Day minus 24 hours. The Combat Plans Division (CPD) is in full sprint. If the SRD decides WHAT the air campaign should achieve, the CPD decides HOW — which aircraft, which targets, which timing, which airspace. The CPD provides near-term planning 48 to 96 hours prior to ATO execution, and the first ATO of the campaign must be complete and disseminated in 18 hours.\n\nFour simultaneous planning tasks hit the floor. The CPD Chief needs them routed to the right team immediately — there is no time for confusion about who does what.\n\nThe CPD has four key internal teams: the MAAP Team (allocates sorties to missions and sets timing and sequencing), the Targeting Effects Team or TET (nominates and vets targets, conducts weaponeering and Collateral Damage Estimation), the C2 Planning Team (produces the Airspace Control Order and SPINS, integrates ROE), and the ATO Production Team (compiles and publishes the final ATO).",
    "evidenceCards": [
      {
        "id": "e5-1",
        "title": "CPD's Four Key Teams",
        "summary": "Each CPD team handles a distinct part of building the ATO.",
        "detail": "MAAP Team: Allocates available air sorties to missions; sets timing, sequencing, and weight of effort; matches the right aircraft to the right target type. Produces the Master Air Attack Plan. Think of the MAAP Team as the architect drawing tomorrow's blueprint.\n\nTargeting Effects Team (TET): Nominates and vets targets to achieve strategy goals; develops and refines the Joint Integrated Prioritized Target List (JIPTL); determines which munition achieves the desired effect for each approved target (weaponeering); conducts Collateral Damage Estimation (CDE); ensures target-level compliance with ROE and LOAC. The MAAP Team decides WHICH targets and HOW MANY aircraft; TET decides WHAT WEAPON and checks civilian risk.\n\nC2 Planning Team: Plans the airspace control architecture; produces the Air Control Order (ACO) and Special Instructions (SPINS) — which integrate cycle ROE supplements and special procedures into the daily plan; deconflicts with ground and naval C2 nodes. The ACO defines airspace control measures, boundaries, and communication procedures for the cycle.\n\nATO Production Team: Compiles all inputs from the three planning teams into the formatted ATO document; ensures accuracy and on-time dissemination to all coalition units. Think of the ATO Production Team as the publisher."
      },
      {
        "id": "e5-2",
        "title": "CPD in the Air Tasking Cycle",
        "summary": "CPD turns the SRD's guidance into an executable plan. It works 48 to 96 hours ahead of execution.",
        "detail": "CPD's place in the cycle: The SRD issues the Air Operations Directive (AOD). CPD receives the AOD and turns its guidance into an executable plan — the MAAP first, then the ATO.\n\nPlanning horizon: CPD provides near-term planning 48 to 96 hours prior to ATO execution. This window gives CPD enough time to build the MAAP, coordinate targeting, deconflict airspace, and compile the ATO before it must be disseminated to all coalition units.\n\nMAAP vs. ATO — the key distinction: The MAAP is the detailed execution plan — it allocates sorties to targets, sets timing and sequencing, and builds the strike packages. The ATO is the formal, published order — it is the document that goes to every coalition unit and tells them exactly what to fly, when, and where. The MAAP comes first; the ATO comes second. The MAAP is the plan; the ATO is the order.\n\nWhat CPD hands off: CPD delivers the ATO, ACO, and SPINS to the COD for execution. Once the ATO is published, it belongs to the COD — CPD is already working on the next cycle."
      }
    ],
    "activities": [
      {
        "id": "p5a1",
        "type": "classification",
        "typeLabel": "Activity 1 of 5 — Classification",
        "points": 4,
        "instruction": "Four planning tasks hit the CPD floor simultaneously. Classify each task by the correct CPD team responsible for executing it.",
        "objectiveIds": [
          "6.5-obj-2"
        ],
        "items": [
          {
            "id": "i1",
            "text": "Match available air sorties to missions; set the timing, sequencing, and weight of effort for the strike package against the Donovian logistics depot.",
            "correct": "maap",
            "explanation": "Allocating sorties, setting sequencing and timing, and determining weight of effort is the MAAP Team's core function. They are the architects of the attack plan."
          },
          {
            "id": "i2",
            "text": "Nominate and vet the hardened radar bunker at Grid 447 for the JIPTL, determine the correct munition, and complete Collateral Damage Estimation — there is a hospital 800 meters to the west.",
            "correct": "tet",
            "explanation": "Nominating and vetting targets for the JIPTL, weaponeering (selecting the right munition), and Collateral Damage Estimation (CDE) are all TET functions. TET also ensures the target meets ROE and LOAC requirements before it goes on the ATO."
          },
          {
            "id": "i3",
            "text": "Produce the Airspace Control Order (ACO) and Special Instructions (SPINS) to deconflict the fighter sweep, SEAD package, and Navy air wing using the same airspace tonight.",
            "correct": "c2",
            "explanation": "Producing the ACO and SPINS, and deconflicting airspace between multiple forces, is the C2 Planning Team's function. They prevent fratricide through airspace management."
          },
          {
            "id": "i4",
            "text": "Compile all planning inputs into the final formatted ATO document and disseminate to all coalition units by 2000.",
            "correct": "atoprod",
            "explanation": "Compiling the inputs and publishing the final ATO on time is the ATO Production Team's job. They are the last stop before the ATO goes out to the units."
          }
        ],
        "categories": [
          {
            "id": "maap",
            "label": "MAAP Team"
          },
          {
            "id": "tet",
            "label": "Targeting Effects Team (TET)"
          },
          {
            "id": "c2",
            "label": "C2 Planning Team"
          },
          {
            "id": "atoprod",
            "label": "ATO Production Team"
          }
        ],
        "feedback": {
          "correct": "Correct. Each CPD team has a distinct function: MAAP Team allocates sorties, TET handles targeting and CDE, C2 Planning Team produces ACO and SPINS, ATO Production Team compiles and publishes the final ATO.",
          "incorrect": "Review the four CPD teams. MAAP Team = allocate sorties to missions. TET = select munitions and conduct CDE. C2 Planning Team = ACO, SPINS, airspace control. ATO Production Team = compile and publish the final ATO document.",
          "whyMatters": "If the wrong team gets a task, it does not get done correctly. TET not conducting CDE means a strike could cause unacceptable civilian casualties. The C2 Planning Team not producing the ACO means multiple aircraft could fly into the same airspace at the same time.",
          "evidenceClue": "See Evidence Card 'CPD's Four Key Teams' for each team's primary function and product."
        }
      },
      {
        "id": "p5a2",
        "type": "fillslot",
        "typeLabel": "Activity 2 of 5 — Fill the Assessment",
        "points": 3,
        "instruction": "Complete the sentence that explains the relationship between the MAAP and the ATO.",
        "objectiveIds": [
          "6.5-obj-2",
          "6.5-obj-3"
        ],
        "sentence": [
          {
            "type": "text",
            "text": "The MAAP is the "
          },
          {
            "type": "slot",
            "id": "slot1",
            "options": [
              "blueprint",
              "execution order",
              "assessment report"
            ],
            "correct": "blueprint",
            "explanation": "The MAAP is the blueprint — it is the detailed planning document that allocates sorties, sets targeting, and sequences the strike package. It becomes the foundation the ATO is built from."
          },
          {
            "type": "text",
            "text": " that CPD produces "
          },
          {
            "type": "slot",
            "id": "slot2",
            "options": [
              "before",
              "after",
              "simultaneously with"
            ],
            "correct": "before",
            "explanation": "The MAAP is produced before the ATO. CPD builds the MAAP first — once the attack plan is approved, the ATO Production Team compiles it into the formal ATO document."
          },
          {
            "type": "text",
            "text": " the ATO, and it is compiled into the final execution order by the "
          },
          {
            "type": "slot",
            "id": "slot3",
            "options": [
              "MAAP Team",
              "ATO Production Team",
              "Targeting Effects Team"
            ],
            "correct": "ATO Production Team",
            "explanation": "The ATO Production Team takes the completed MAAP (and inputs from TET and C2 Planning Team) and compiles them into the formatted, final ATO document for dissemination."
          }
        ],
        "feedback": {
          "correct": "Correct. The MAAP is the blueprint — built first. The ATO Production Team then compiles it into the formal execution order. The MAAP is like the architect's drawings; the ATO is the building permit that goes to the contractors.",
          "incorrect": "The MAAP comes before the ATO — it is the blueprint. The ATO Production Team takes the MAAP and compiles it into the formal ATO document. The ATO does not come first; the MAAP is the planning document that becomes the ATO.",
          "whyMatters": "Understanding that the MAAP comes before the ATO tells you where in the process to intervene. If a commander wants to change tonight's targets, he talks to the MAAP Team before the ATO is finalized — not the ATO Production Team after the fact.",
          "evidenceClue": "See Evidence Card 'CPD's Four Key Teams' — the MAAP Team produces the Master Air Attack Plan, the ATO Production Team produces the final ATO from it."
        }
      },
      {
        "id": "p5a3",
        "type": "decision",
        "typeLabel": "Activity 3 of 5 — Best Answer",
        "points": 1,
        "instruction": "Tonight's ATO has French Rafales, Gorgan F-16s, and U.S. Navy F/A-18s all operating in overlapping airspace over the Zabzimek Corridor. To prevent fratricide, someone must produce a document that defines who flies where, when, and on what frequencies. What does the Air Control Order (ACO) define?",
        "objectiveIds": ["6.5-obj-2"],
        "options": [
          {
            "id": "a",
            "text": "Airspace control measures, boundaries, and communication procedures for the cycle — it is the document that prevents aircraft from different nations and missions from colliding or engaging each other.",
            "correct": true,
            "explanation": "The ACO defines airspace control measures (who owns what airspace), boundaries (where each force may operate), and communication procedures (frequencies and call signs). It is produced by the C2 Planning Team and published alongside the ATO."
          },
          {
            "id": "b",
            "text": "Target priorities and weapons selection for each strike package — it tells each aircraft which target to hit and what munition to use.",
            "explanation": "Target priorities and weapons selection are handled by the Targeting Effects Team (TET) and the MAAP Team, not by the ACO. The ACO controls airspace, not targeting."
          },
          {
            "id": "c",
            "text": "Intelligence collection requirements and ISR platform tasking — it assigns ISR assets to specific collection areas for the cycle.",
            "explanation": "ISR collection tasking is handled by the RSTA Annex, produced by the Collection Management Cell (CMC) in the ISR Division. The ACO manages airspace, not ISR collection."
          },
          {
            "id": "d",
            "text": "The JFACC's campaign strategy and long-range objectives — it defines the overall direction of the air campaign for the next several weeks.",
            "explanation": "Long-range campaign strategy belongs to the JAOP, produced by the SRD. The ACO is a cycle-specific airspace document that accompanies the ATO, not a strategy document."
          }
        ],
        "feedback": {
          "correct": "Correct. The ACO defines airspace control measures, boundaries, and communication procedures. Think of the ATO as telling you WHAT to do; the ACO tells you WHERE you may go; the SPINS tell you the fine print (frequencies, IFF codes, ROE supplements).",
          "incorrect": "The ACO is about airspace control — not targeting (TET/MAAP), not ISR collection (CMC/RSTA Annex), and not campaign strategy (JAOP/SRD). It defines the measures, boundaries, and communication procedures that keep seven nations' aircraft from running into each other.",
          "whyMatters": "With seven coalition nations flying in the same airspace, the ACO is what prevents a Polish F-16 and a French Rafale from occupying the same block of sky at the same time. Without it, the risk of midair collision or fratricide is unacceptable — especially in a contested environment with active Donovian IADS.",
          "evidenceClue": "See Evidence Card 'CPD's Four Key Teams' — the C2 Planning Team entry defines the ACO's content: airspace control measures, boundaries, and communication procedures."
        }
      },
      {
        "id": "p5a4",
        "type": "decision",
        "typeLabel": "Activity 4 of 5 — Best Answer",
        "points": 1,
        "instruction": "A coalition LNO asks: 'How far in advance does the CPD start planning the ATO? When does their work begin relative to execution?' Which answer correctly describes the CPD's planning horizon?",
        "objectiveIds": ["6.5-obj-1"],
        "options": [
          {
            "id": "a",
            "text": "CPD provides near-term planning 48 to 96 hours prior to ATO execution — enough time to receive the AOD, build the MAAP, coordinate targeting and airspace, and compile the ATO before dissemination.",
            "correct": true,
            "explanation": "The CPD works 48 to 96 hours ahead of execution. This window gives CPD time to receive the AOD from SRD, build the MAAP, coordinate with the TET, produce the ACO and SPINS, and compile the final ATO."
          },
          {
            "id": "b",
            "text": "CPD plans 1 to 6 hours before execution — the ATO is built in real time as the situation develops on the operations floor.",
            "explanation": "1 to 6 hours is the COD's domain — real-time execution and dynamic targeting. CPD works much further ahead. An ATO built in real time would have no coordination, no CDE, and no airspace deconfliction."
          },
          {
            "id": "c",
            "text": "CPD plans 7 to 14 days ahead — the ATO is a long-range document covering the entire campaign.",
            "explanation": "7 to 14 days is the SRD's planning horizon for the JAOP. The ATO is a cycle-specific document covering roughly 24 hours. CPD works on the next cycle, not the next week."
          },
          {
            "id": "d",
            "text": "CPD has no fixed planning horizon — the ATO is published whenever the commander decides the plan is ready.",
            "explanation": "The ATO follows a disciplined cycle tied to the air tasking cycle. CPD must publish the ATO on a predictable schedule (typically every 24 hours) so coalition units can prepare. Unpredictable publication would paralyze the coalition."
          }
        ],
        "feedback": {
          "correct": "Correct. CPD provides near-term planning 48 to 96 hours prior to ATO execution. This 2-to-4-day window ensures there is enough time for every CPD team to do its work — MAAP, targeting, airspace, and production — before the ATO goes out the door.",
          "incorrect": "CPD's planning horizon is 48 to 96 hours before execution. That is not real-time (COD), not weeks ahead (SRD/JAOP), and not open-ended. The cycle is predictable and disciplined — every coalition unit depends on receiving the ATO on time.",
          "whyMatters": "If a staff officer does not understand CPD's planning horizon, they may bring a request too late or too early. A CDE request submitted 6 hours before execution may not have time for TET review. A strategy question submitted to CPD should go to the SRD instead — CPD works 48 to 96 hours out, not weeks out.",
          "evidenceClue": "See Evidence Card 'CPD in the Air Tasking Cycle' — the planning horizon section states 48 to 96 hours prior to ATO execution."
        }
      },
      {
        "id": "p5a5",
        "type": "decision",
        "typeLabel": "Activity 5 of 5 — Best Answer",
        "points": 1,
        "instruction": "An officer new to the AOC says: 'I keep hearing people talk about the MAAP and the ATO like they are different things. Aren't they the same document?' What is the key difference between the MAAP and the ATO?",
        "objectiveIds": ["6.5-obj-2", "6.5-obj-3"],
        "options": [
          {
            "id": "a",
            "text": "The MAAP is the detailed execution plan that allocates sorties to targets and sets timing; the ATO is the formal, published order that goes to every coalition unit.",
            "correct": true,
            "explanation": "The MAAP is the plan — it is the detailed scheme where CPD works out which aircraft hit which targets, in what order, with what support. The ATO is the order — it is the formal, published document that goes to every coalition unit and tells them exactly what to fly. The MAAP comes first; the ATO is built from it."
          },
          {
            "id": "b",
            "text": "The MAAP covers the entire campaign over weeks; the ATO covers a single 24-hour cycle.",
            "explanation": "Both the MAAP and the ATO are cycle-specific documents — neither covers weeks. The long-range campaign plan is the JAOP, produced by the SRD. The MAAP and ATO serve the same cycle; they differ in function, not timeframe."
          },
          {
            "id": "c",
            "text": "The MAAP is produced by the Strategy Division; the ATO is produced by the Combat Plans Division.",
            "explanation": "Both the MAAP and the ATO are produced by the Combat Plans Division. The SRD produces the JAOP and AOD. The CPD produces the MAAP first, then the ATO Production Team compiles it into the formal ATO."
          },
          {
            "id": "d",
            "text": "They are the same document — 'MAAP' is the informal name and 'ATO' is the formal name for the same product.",
            "explanation": "They are not the same document. The MAAP is the planning document that comes first — the internal working product. The ATO is the formal order that comes second — the published product distributed to units. Confusing the two causes coordination failures."
          }
        ],
        "feedback": {
          "correct": "Correct. The MAAP is the detailed execution plan; the ATO is the formal, published order. The MAAP comes first — CPD works out the plan. Then the ATO Production Team compiles it into the ATO — the order that goes to every coalition unit.",
          "incorrect": "The MAAP and the ATO are two different documents produced by CPD in sequence. The MAAP is the detailed plan (which aircraft, which targets, which timing). The ATO is the formal order (the published document units receive). They serve the same cycle but have different roles — plan vs. order.",
          "whyMatters": "If a staff officer treats the MAAP and the ATO as the same thing, they may try to change the ATO directly instead of going back to the MAAP Team. Changes to the plan must happen during MAAP development — once the ATO is published, changes require dynamic targeting authority from the CCO on the COD floor.",
          "evidenceClue": "See Evidence Card 'CPD in the Air Tasking Cycle' — the 'MAAP vs. ATO' section explains the distinction: plan vs. order."
        }
      }
    ]
  },
  "phase-6-cod": {
    "id": "phase-6-cod",
    "title": "Phase 6 — The Heat of Execution",
    "subtitle": "Lesson 6.6 — Combat Operations Division (COD)",
    "domain": "cod",
    "objectiveIds": [
      "6.6-obj-1",
      "6.6-obj-2",
      "6.6-obj-3",
      "6.6-obj-4"
    ],
    "inject": "D-Day plus 2 hours. The ATO is executing. The COD operations floor is fully manned. Brig Gen Torres is in his battle chair. The Chief of Combat Operations (CCO), Col David Kim, is managing execution on behalf of the JFACC.\n\nThink of it this way: CPD writes the script; COD performs the play — and improvises when the stage catches fire. The COD operates 24/7 during combat operations. The CCO has specific personal authorities — approving time-sensitive targets, redirecting missions, applying ROE — that cannot be delegated to anyone. Every other problem has a team or position responsible for handling it.\n\nFour crises hit the floor simultaneously. Who handles what?",
    "evidenceCards": [
      {
        "id": "e6-1",
        "title": "COD Teams and Positions",
        "summary": "The COD has four organic teams plus the embedded ISRDO from the ISR Division.",
        "detail": "CCO (Chief of Combat Operations): Senior decision-maker on the operations floor. Leads the execution of the current Air Tasking Order on behalf of the JFACC during real-time operations. Has personal authority to approve time-sensitive targets, redirect missions, divert aircraft, and apply ROE. Cannot delegate these decisions.\n\nOffensive Operations Team: Monitors execution of all offensive air missions — strike, interdiction, CAS. Tracks aircraft status and BDA.\n\nDefensive Operations Team: Manages oversight of the execution of theater air defense operations. Monitors Defensive Counter-Air (DCA) and theater missile defense. Tracks threats to friendly aircraft and bases.\n\nACF Team (Analysis, Correlation and Fusion): Provides near-real-time intelligence fusion to the operations floor. Fuses ELINT, IMINT, and other feeds to deliver threat warnings and immediate target analysis that support CCO decision-making and dynamic targeting.\n\nICT (Interface Control Team): Manages data links and the Common Operating Picture (COP). Ensures all nodes are connected and the air picture is accurate and shared across the operations floor. Without ICT, the COD is blind — no one can see where any friendly aircraft are.\n\nISRDO (ISR Operations Duty Officer): Embedded from the ISR Division — belongs to the ISRD, not the COD. The ISRDO sits on the COD floor to manage real-time ISR collection and re-tasking during execution. This is a dashed-line relationship: ISRDO serves the COD's real-time needs but reports to the ISRD Chief."
      },
      {
        "id": "e6-2",
        "title": "Dynamic Targeting — When the Plan Changes",
        "summary": "Dynamic targeting is the process of engaging targets that arise during ATO execution and were not planned. Only the CCO can approve.",
        "detail": "Deliberate targeting: Targets that are planned into the ATO before execution begins. CPD nominates them through the TET, weaponeers them, completes CDE, and places them on the ATO. This is the normal planning process.\n\nDynamic targeting: The process of engaging targets that arise during ATO execution and were not planned. A Donovian BTR column that appears on a road 30 minutes after the ATO was published is a dynamic target — it was not on the ATO. Only the CCO has the authority to approve engagement of a dynamic or time-sensitive target. The CCO acts on behalf of the JFACC for these real-time decisions.\n\nHow the COD supports dynamic targeting: The ACF Team provides threat warnings and immediate target analysis — confirming the target is real, identifying what it is, and assessing collateral risk. The ISRDO re-tasks ISR platforms to collect on the new target. The Offensive Ops Team tracks available aircraft that can be redirected. The CCO makes the engagement decision based on all of this input.\n\nKey term: A Time-Sensitive Target (TST) is a target that requires immediate engagement because the opportunity to strike will disappear. TSTs are always dynamic targets — they were not on the ATO."
      }
    ],
    "activities": [
      {
        "id": "p6a1",
        "type": "classification",
        "typeLabel": "Activity 1 of 4 — Classification",
        "points": 4,
        "instruction": "Four crises hit the COD operations floor simultaneously. Classify each one by the correct COD team or position that has primary responsibility.",
        "objectiveIds": [
          "6.6-obj-2",
          "6.6-obj-3"
        ],
        "items": [
          {
            "id": "i1",
            "text": "Viper 11 is 90 seconds from weapons release. The target area is now surrounded by civilians not present during planning. ROE compliance cannot be confirmed. A weapons release decision is needed immediately.",
            "correct": "cco",
            "explanation": "ROE decisions and weapons release authority are CCO functions. The CCO acts on behalf of the JFACC and has personal authority over this type of decision. It cannot be delegated to a team — the CCO must make the call."
          },
          {
            "id": "i2",
            "text": "Donovian SA-15 Gauntlet battery moved to a new location directly under the ingress route. The threat picture needs an immediate update to protect the inbound strike package.",
            "correct": "defensive",
            "explanation": "Tracking and updating air defense threats to friendly aircraft is the Defensive Operations Team's core function — specifically Defensive Counter-Air (DCA). They monitor the threat picture and alert the operations floor."
          },
          {
            "id": "i3",
            "text": "The data link feeding the Common Operating Picture dropped offline. No one on the operations floor can see where any friendly aircraft are.",
            "correct": "ict",
            "explanation": "The ICT (Interface Control Team) manages data links and the Common Operating Picture. A COP outage is squarely in the ICT's lane — they troubleshoot and restore connectivity."
          },
          {
            "id": "i4",
            "text": "A Gorgan ground commander spotted a Donovian BTR column moving toward a critical bridge. This is a time-sensitive target not on the ATO — a re-tasking of an ISR platform is needed to confirm before engagement.",
            "correct": "isrdo",
            "explanation": "Re-tasking an ISR platform in real time is the ISRDO's function. The ISRDO is embedded on the COD floor precisely to manage these dynamic collection requests during execution."
          }
        ],
        "categories": [
          {
            "id": "cco",
            "label": "CCO — Chief of Combat Operations"
          },
          {
            "id": "defensive",
            "label": "Defensive Operations Team"
          },
          {
            "id": "ict",
            "label": "ICT — Interface Control Team"
          },
          {
            "id": "isrdo",
            "label": "ISRDO — ISR Operations Duty Officer"
          }
        ],
        "feedback": {
          "correct": "Correct. The CCO holds personal authority for ROE and weapons decisions. The Defensive Ops Team handles threat tracking and DCA. The ICT manages the COP and data links. The ISRDO handles real-time ISR re-tasking.",
          "incorrect": "Review the COD team functions. CCO = ROE, time-sensitive targeting, weapons decisions. Defensive Ops = air defense threats, DCA. ICT = data links, Common Operating Picture. ISRDO = real-time ISR re-tasking.",
          "whyMatters": "On an active operations floor, the wrong team getting a crisis means it does not get resolved fast enough. A ROE decision made by anyone other than the CCO may not be legally valid. An ISR re-tasking request that goes to the wrong team means the target is not confirmed before the engagement window closes.",
          "evidenceClue": "See Evidence Card 'COD Teams and Positions' for each team's primary responsibility and the ISRDO's cross-division role."
        }
      },
      {
        "id": "p6a2",
        "type": "decision",
        "typeLabel": "Activity 2 of 4 — Best Answer",
        "points": 1,
        "instruction": "The CCO (Chief of Combat Operations) has specific personal authorities during ATO execution. Which of the following actions is specifically within the CCO's personal authority?",
        "objectiveIds": [
          "6.6-obj-2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Producing the Air Operations Directive for the next planning cycle.",
            "explanation": "The AOD is produced by the Strategy Division — specifically the Strategy Guidance Team. It is a planning function, not an execution function, and it does not involve the CCO."
          },
          {
            "id": "b",
            "text": "Approving engagement of a time-sensitive target that was not on the original ATO.",
            "correct": true,
            "explanation": "Dynamic targeting — engaging targets not on the ATO — requires CCO authority. The CCO acts on behalf of the JFACC during execution and has the authority to approve or deny this engagement."
          },
          {
            "id": "c",
            "text": "Publishing the Air Tasking Order to all coalition units.",
            "explanation": "The ATO is published by the ATO Production Team within the Combat Plans Division — not the COD. By the time execution begins, the ATO is already in the hands of the units."
          },
          {
            "id": "d",
            "text": "Formally tasking ISR collection platforms for the next ATO cycle.",
            "explanation": "Formally tasking ISR platforms is the CMC's function within the ISR Division. The CCO manages real-time execution — not the next cycle's collection planning."
          }
        ],
        "feedback": {
          "correct": "Correct. Dynamic targeting — approving the engagement of a time-sensitive target not on the ATO — is a CCO function. This is exactly the kind of decision that cannot wait for a planning cycle and cannot be delegated to a team.",
          "incorrect": "The CCO's personal authorities are execution-focused and time-critical: approving time-sensitive targets, redirecting missions, diverting aircraft, and applying ROE. These are not planning functions (AOD, ATO) and not ISR tasking functions (CMC).",
          "whyMatters": "A Donovian BTR column moving toward a critical bridge is a time-sensitive target. If no one has authority to approve engagement, the window closes and the bridge is lost. The CCO exists precisely for this — real-time authority during execution when there is no time to go back to the planning cycle.",
          "evidenceClue": "See Evidence Card 'COD Teams and Positions' — the CCO entry specifically lists dynamic targeting approval as a personal authority."
        }
      },
      {
        "id": "p6a3",
        "type": "multiselect",
        "typeLabel": "Activity 3 of 4 — Select All That Apply",
        "points": 4,
        "instruction": "Five events hit the COD floor within two minutes of each other. Select ALL events that require the CCO's personal authority — meaning Col Kim himself must make the decision, and no one else on the floor can handle it for him.",
        "objectiveIds": ["6.6-obj-2", "6.6-obj-3"],
        "options": [
          {
            "id": "ms1",
            "text": "A Donovian BTR column is moving toward the Kazbegi Bridge. It was not on the ATO. An F-16 flight has ordnance and is 4 minutes away — but the target has not been approved for engagement.",
            "correct": true,
            "explanation": "This is a time-sensitive target (TST) not on the ATO. Approving engagement of a dynamic target is the CCO's personal authority. No one else on the floor can authorize this strike."
          },
          {
            "id": "ms2",
            "text": "Viper 11 is in the target area but reports civilians near the aim point. The JTAC on the ground confirms civilian presence. A weapons release decision under ROE is needed immediately.",
            "correct": true,
            "explanation": "ROE decisions — especially weapons release calls with civilian presence — are the CCO's personal authority. This decision cannot be delegated because it carries legal and strategic consequences."
          },
          {
            "id": "ms3",
            "text": "The data link feeding the Common Operating Picture has dropped. No one on the floor can see friendly aircraft positions.",
            "correct": false,
            "explanation": "The ICT (Interface Control Team) handles data link and COP issues. This is critical and urgent, but it is a technical problem — the ICT team restores connectivity. The CCO does not need to make this decision personally."
          },
          {
            "id": "ms4",
            "text": "An ELINT report shows the Donovian SA-15 Gauntlet battery has relocated directly under the inbound strike package's ingress route. The threat picture needs an immediate update.",
            "correct": false,
            "explanation": "Updating the threat picture is the Defensive Operations Team's function. They track and update air defense threats. The CCO needs to know, but the Defensive Ops Team handles the update — the CCO does not personally update the threat picture."
          },
          {
            "id": "ms5",
            "text": "The JFACC wants to divert two F/A-18s from their planned SEAD mission to provide emergency CAS to the Gorgan 3rd Brigade, which is under direct fire. Changing the ATO in real time requires authorization.",
            "correct": true,
            "explanation": "Redirecting missions and diverting aircraft — changing the ATO in real time — is the CCO's personal authority. Diverting assets from one mission to another has operational consequences that only the CCO (acting for the JFACC) can authorize."
          }
        ],
        "feedback": {
          "correct": "Correct. Three events require the CCO personally: the time-sensitive target (dynamic targeting approval), the ROE/weapons release decision (civilian presence), and the mission diversion (changing the ATO in real time). The COP outage goes to ICT. The threat update goes to Defensive Ops.",
          "incorrect": "The CCO's personal authorities are: approving time-sensitive/dynamic targets, applying ROE (especially weapons release with civilians present), and redirecting/diverting missions (changing the ATO in real time). Technical problems (COP outage → ICT) and threat picture updates (SA-15 relocation → Defensive Ops) are team-level responsibilities — urgent, but not CCO-personal.",
          "whyMatters": "If everything goes to the CCO, he is overwhelmed and the real CCO-level decisions — the ones with legal and strategic consequences — get delayed. If a CCO-level decision goes to a team instead, it may not have legal authority. Knowing which decisions require the CCO personally and which a team can handle is what makes an operations floor function under pressure.",
          "evidenceClue": "See Evidence Card 'COD Teams and Positions' for the CCO's personal authorities and Evidence Card 'Dynamic Targeting' for the TST engagement process."
        }
      },
      {
        "id": "p6a4",
        "type": "decision",
        "typeLabel": "Activity 4 of 4 — Best Answer",
        "points": 1,
        "instruction": "During ATO execution, the ACF Team reports that a Donovian logistics convoy has appeared on Route 7 near the Zabzimek Corridor — it was not on the ATO. Col Kim (CCO) needs to decide whether to engage. What is the correct term for the process of engaging a target that arises during execution and was not planned into the ATO?",
        "objectiveIds": ["6.6-obj-3"],
        "options": [
          {
            "id": "a",
            "text": "Deliberate targeting — the standard process of nominating targets through the TET and placing them on the ATO during the planning cycle.",
            "explanation": "Deliberate targeting is what happens BEFORE execution — targets are planned into the ATO by CPD/TET. This convoy appeared DURING execution and was not on the ATO. That makes it the opposite of deliberate targeting."
          },
          {
            "id": "b",
            "text": "Dynamic targeting — the process of engaging targets that arise during ATO execution and were not planned.",
            "correct": true,
            "explanation": "Dynamic targeting is the correct term. It applies to any target that arises during execution and was not on the ATO. Time-Sensitive Targets (TSTs) are a subset of dynamic targets — targets where the engagement window is closing fast."
          },
          {
            "id": "c",
            "text": "Collection management — the process of tasking ISR platforms to locate and track new targets for the next planning cycle.",
            "explanation": "Collection management is an ISRD function (CMC). While the ISRDO may re-task ISR to confirm the convoy, collection management is the ISR tasking process — not the engagement process. The question asks about engaging the target, not collecting on it."
          },
          {
            "id": "d",
            "text": "Battle Damage Assessment — the process of evaluating whether a previous strike achieved its intended effect.",
            "explanation": "BDA happens after a strike, not before. BDA evaluates the results of an engagement. This convoy has not been struck yet — the decision is whether to engage it."
          }
        ],
        "feedback": {
          "correct": "Correct. Dynamic targeting is the process of engaging targets that arise during ATO execution and were not planned. The key distinction: deliberate targeting happens during CPD's planning cycle (before execution); dynamic targeting happens during COD's execution (in real time). Only the CCO can approve dynamic engagements.",
          "incorrect": "The process of engaging an unplanned target during execution is called dynamic targeting. Deliberate targeting is the normal CPD planning process (before execution). Collection management is ISR tasking (ISRD/CMC). BDA is post-strike assessment. Dynamic targeting is the CCO's real-time engagement authority.",
          "whyMatters": "If a staff officer confuses dynamic targeting with deliberate targeting, they may try to send the convoy target through CPD's planning cycle — which takes 48 to 96 hours. By then the convoy is gone. Dynamic targeting exists because the battlefield does not wait for the next ATO cycle.",
          "evidenceClue": "See Evidence Card 'Dynamic Targeting — When the Plan Changes' for the distinction between deliberate and dynamic targeting and the CCO's role."
        }
      }
    ]
  },
  "phase-7-isrd": {
    "id": "phase-7-isrd",
    "title": "Phase 7 — Eyes Everywhere",
    "subtitle": "Lesson 6.7 — ISR Division (ISRD)",
    "domain": "isrd",
    "objectiveIds": [
      "6.7-obj-1",
      "6.7-obj-2",
      "6.7-obj-3"
    ],
    "inject": "D-Day plus 4 hours. The air campaign is in full swing, and the ISR Division is the intelligence engine driving every decision across the AOC. The ISRD simultaneously supports strategy planning for the next cycle, feeds targeting data to Combat Plans, and manages real-time ISR collection on the operations floor.\n\nThe ISRD has three primary cells — the ACF Cell, the ISR Operations Team, and the Collection Management Cell (CMC) — plus two embedded positions: ISR Strategists with the SRD, and the ISRDO on the COD floor. Tasks arrive simultaneously, and the ISRD Chief needs each one routed to the right cell immediately.",
    "evidenceCards": [
      {
        "id": "e7-1",
        "title": "ISRD Internal Cells",
        "summary": "The ISRD has three primary cells plus two embedded positions that support the rest of the AOC.",
        "detail": "ACF Cell (Analysis, Correlation and Fusion): Primary analysis and production cell. Takes raw intelligence from multiple sources (IMINT, SIGINT, MASINT, HUMINT) and fuses them into finished intelligence products for the COD operations floor and other AOC divisions. ACF also supports the COD with threat warnings and immediate target analysis for dynamic targeting.\n\nISR Operations Team (ISR Ops): Manages and executes ISR collection operations. Ensures PED (Processing, Exploitation, and Dissemination) is planned for all scheduled ISR missions. Produces the PED Tasking Order.\n\nCMC (Collection Management Cell): Formally tasks ISR collection platforms. Produces the RSTA Annex — the document that formally assigns collection tasks to ISR platforms for integration into the ATO.\n\nISR Strategists (embedded): ISRD personnel embedded with (or coordinated closely with) the SRD. Support campaign strategy planning, PIR development, and collection gap assessment.\n\nISRDO — ISR Operations Duty Officer (embedded): Embedded on the COD operations floor during execution. Manages real-time ISR collection and re-tasking to meet dynamic requirements."
      },
      {
        "id": "e7-2",
        "title": "PED — Processing, Exploitation, and Dissemination",
        "summary": "PED is the three-stage process that turns raw ISR data into finished intelligence.",
        "detail": "Processing: Converting raw data collected by ISR platforms into a usable format. Example: converting raw radar returns into imagery, or decoding intercepted signals.\n\nExploitation: Analyzing the processed data to extract intelligence value. Example: imagery analysts examining processed satellite imagery to identify vehicle types and count.\n\nDissemination: Getting the finished intelligence product to the decision-makers who need it — in the right format, at the right time. Example: pushing a finished imagery product to the COD operations floor for a dynamic targeting decision.\n\nThe ISR Ops Cell ensures PED is planned for every scheduled ISR mission and produces the PED Tasking Order to formalize this planning. Without PED planning, data collected by expensive ISR platforms sits unprocessed and is never turned into intelligence."
      }
    ],
    "activities": [
      {
        "id": "p7a1",
        "type": "classification",
        "typeLabel": "Activity 1 of 3 — Classification",
        "points": 3,
        "instruction": "Three tasks arrive at the ISRD simultaneously. Classify each task by the correct ISRD cell responsible for handling it.",
        "objectiveIds": [
          "6.7-obj-2"
        ],
        "items": [
          {
            "id": "i1",
            "text": "Fuse incoming IMINT, SIGINT, and MASINT feeds on Donovian armored movements in the Zabzimek Corridor into a coherent intelligence picture for the COD operations floor.",
            "correct": "acf",
            "explanation": "Fusing multi-source intelligence into finished intelligence products is the ACF Cell's primary function. They are the analysis and production hub of the ISRD."
          },
          {
            "id": "i2",
            "text": "Ensure PED is planned for all ISR missions in tonight's ATO — including the MQ-9 sorties, the U-2, and the RC-135 Rivet Joint. Produce the PED Tasking Order.",
            "correct": "isrops",
            "explanation": "The ISR Operations Team ensures PED is planned for every scheduled ISR mission and produces the PED Tasking Order. Without this, collected data may never be processed or exploited."
          },
          {
            "id": "i3",
            "text": "Formally task the two MQ-9s, one U-2S, and the RC-135 for tomorrow's ATO. Produce the document that formally assigns collection tasks to these platforms.",
            "correct": "cmc",
            "explanation": "The CMC (Collection Management Cell) formally tasks ISR collection platforms and produces the RSTA Annex — the document that integrates ISR collection tasking into the ATO."
          }
        ],
        "categories": [
          {
            "id": "acf",
            "label": "ACF Cell — Analysis, Correlation and Fusion"
          },
          {
            "id": "isrops",
            "label": "ISR Operations Team"
          },
          {
            "id": "cmc",
            "label": "CMC — Collection Management Cell"
          }
        ],
        "feedback": {
          "correct": "Correct. ACF = fuse multi-source data into finished intelligence. ISR Operations Team = ensure PED is planned, produce PED Tasking Order. CMC = formally task platforms, produce the RSTA Annex.",
          "incorrect": "Review the three ISRD cells. ACF = analysis and intelligence production. ISR Operations Team = PED planning and PED Tasking Order. CMC = formal collection tasking and RSTA Annex.",
          "whyMatters": "Routing a fusion request to the CMC instead of the ACF Cell means the COD does not get finished intelligence in time. Routing a collection tasking request to the ACF Cell means no RSTA Annex is produced and the platforms are never formally tasked.",
          "evidenceClue": "See Evidence Card 'ISRD Internal Cells' for each cell's primary function and the documents they produce."
        }
      },
      {
        "id": "p7a2",
        "type": "fillslot",
        "typeLabel": "Activity 2 of 3 — Fill the Assessment",
        "points": 3,
        "instruction": "Complete the definition of PED — the three-stage process by which raw ISR data is turned into finished intelligence.",
        "objectiveIds": [
          "6.7-obj-2"
        ],
        "sentence": [
          {
            "type": "text",
            "text": "PED stands for "
          },
          {
            "type": "slot",
            "id": "slot1",
            "options": [
              "Processing",
              "Planning",
              "Prioritization",
              "Publishing"
            ],
            "correct": "Processing",
            "explanation": "Processing is the first stage — converting raw data collected by ISR platforms into a usable format before analysis can begin."
          },
          {
            "type": "text",
            "text": ", "
          },
          {
            "type": "slot",
            "id": "slot2",
            "options": [
              "Exploitation",
              "Evaluation",
              "Execution",
              "Extraction"
            ],
            "correct": "Exploitation",
            "explanation": "Exploitation is the second stage — analyzing the processed data to extract intelligence value. This is where trained analysts examine the data and identify what it means."
          },
          {
            "type": "text",
            "text": ", and "
          },
          {
            "type": "slot",
            "id": "slot3",
            "options": [
              "Dissemination",
              "Destruction",
              "Deployment",
              "Documentation"
            ],
            "correct": "Dissemination",
            "explanation": "Dissemination is the third and final stage — getting finished intelligence to the decision-makers who need it, in the right format, at the right time."
          },
          {
            "type": "text",
            "text": ". The ISR Ops Cell ensures PED is planned for all scheduled ISR missions and produces the PED Tasking Order."
          }
        ],
        "feedback": {
          "correct": "Correct. PED = Processing, Exploitation, and Dissemination. The ISR Ops Cell is responsible for ensuring every ISR mission has PED planned — without it, collected data never becomes intelligence.",
          "incorrect": "PED stands for Processing (convert raw data), Exploitation (analyze the data), and Dissemination (deliver finished intelligence to decision-makers). The ISR Ops Cell owns PED planning.",
          "whyMatters": "An MQ-9 can fly a 16-hour mission and collect terabytes of video — but if no one has planned who processes it, who analyzes it, and who receives it, that collection effort produces zero intelligence. PED planning is what turns data into decisions.",
          "evidenceClue": "See Evidence Card 'PED — Processing, Exploitation, and Dissemination' for the full three-stage explanation."
        }
      },
      {
        "id": "p7a3",
        "type": "decision",
        "typeLabel": "Activity 3 of 3 — Best Answer",
        "points": 1,
        "instruction": "The Combat Plans Division needs ISR collection platforms formally tasked for tomorrow's ATO. Which ISRD cell handles this, and what document does it produce?",
        "objectiveIds": [
          "6.7-obj-2",
          "6.7-obj-3"
        ],
        "options": [
          {
            "id": "a",
            "text": "ACF Cell — fuses multi-source intelligence into finished products for the COD operations floor.",
            "explanation": "The ACF Cell fuses multi-source intelligence for the COD — but it does not formally task ISR collection platforms or produce the document that places them on the ATO. That is a different ISRD function."
          },
          {
            "id": "b",
            "text": "ISR Operations Team — produces the PED Tasking Order to formally task ISR platforms for the ATO.",
            "explanation": "The ISR Operations Team produces the PED Tasking Order — which formalizes Processing, Exploitation, and Dissemination planning for scheduled missions. The PED Tasking Order is NOT the document that formally tasks collection platforms; that is the RSTA Annex."
          },
          {
            "id": "c",
            "text": "Collection Management Cell (CMC) — produces the RSTA Annex to formally task ISR collection assets for integration into the ATO.",
            "correct": true,
            "explanation": "The CMC is the correct answer. It formally tasks ISR collection platforms and produces the RSTA Annex — the document that integrates ISR collection requirements into the ATO so platforms are formally assigned their collection missions."
          },
          {
            "id": "d",
            "text": "ISR Strategists — embedded with SRD; produce the Air Operations Directive (AOD) for the next planning cycle.",
            "explanation": "ISR Strategists support the SRD's campaign strategy planning and PIR development. They do not produce the AOD (that is the SRD's Strategy Guidance Team) and they do not formally task ISR platforms (that is the CMC)."
          }
        ],
        "feedback": {
          "correct": "Correct. The CMC (Collection Management Cell) produces the RSTA Annex to formally task ISR collection platforms for integration into the ATO. This is how ISR collection missions appear in the ATO alongside strike and other missions.",
          "incorrect": "The CMC produces the RSTA Annex — this is the document that formally tasks ISR platforms and integrates collection missions into the ATO. The ACF Cell does analysis. The ISR Ops Cell ensures PED is planned. ISR Strategists support the SRD.",
          "whyMatters": "Without the RSTA Annex, ISR platforms are not formally tasked and their missions do not appear in the ATO. Aircrew and ground controllers do not know the ISR platform is out there — creating deconfliction hazards and uncoordinated collection that may duplicate or miss priority targets.",
          "evidenceClue": "See Evidence Card 'ISRD Internal Cells' — the CMC entry specifically names the RSTA Annex as its key product."
        }
      }
    ]
  },
  "phase-8-amd": {
    "id": "phase-8-amd",
    "title": "Phase 8 — Crisis at Forward Operating Base Ararat",
    "subtitle": "Lesson 6.8 — Air Mobility Division (AMD)",
    "domain": "amd",
    "objectiveIds": [
      "6.8-obj-1",
      "6.8-obj-2",
      "6.8-obj-3",
      "6.8-obj-4",
      "6.8-obj-5"
    ],
    "inject": "D-Day plus 6 hours. Three crises arrive within 30 minutes of each other. All three involve aircraft moving people or fuel — but not all three belong to the Air Mobility Division. Brig Gen Torres has made his expectation clear: 'I will hear no confusion on this point. Aeromedical Evacuation is NOT the same as Combat Search and Rescue. Get it wrong in this AOC and people die. Know your lane.'\n\nThe AMD has three core mission sets: Airlift (moving personnel and equipment), Air Refueling (in-flight fuel transfer), and Aeromedical Evacuation (AE — moving sick and wounded patients to medical facilities). Combat Search and Rescue (CSAR) is NOT an AMD function — it belongs to the Combat Operations Division, coordinated through the Personnel Recovery Coordination Cell (PRCC).",
    "evidenceCards": [
      {
        "id": "e8-1",
        "title": "AE vs. CSAR — Critical Distinction",
        "summary": "Aeromedical Evacuation (AE) is an AMD function. Combat Search and Rescue (CSAR) is a COD function.",
        "detail": "Aeromedical Evacuation (AE): Moving sick and wounded patients by air from a forward location to a medical facility. The environment is permissive or semi-permissive — patients are already in friendly hands. AMD's Aeromedical Evacuation Control Team (AECT) plans and coordinates AE missions.\n\nCombat Search and Rescue (CSAR): Recovering isolated personnel (downed pilots, evaders) from hostile or denied areas. The environment is contested — the person may be evading enemy forces. CSAR may require armed escort, SEAD support, and special tactics teams. COD executes CSAR through the Personnel Recovery Coordination Cell (PRCC).\n\nKey handoff: Once a CSAR mission recovers a person and brings them to a forward location, AE may then coordinate the medical transport leg — but the rescue itself belongs to COD."
      },
      {
        "id": "e8-2",
        "title": "AMD's Four Teams",
        "summary": "The AMD has four teams that cover airlift, refueling, medical evacuation, and execution monitoring.",
        "detail": "ALCT (Airlift Control Team): Plans and coordinates airlift missions — moving cargo, personnel, and equipment.\n\nARCT (Air Refueling Control Team): Plans and coordinates tanker support and in-flight refueling for receiver aircraft.\n\nAECT (Aeromedical Evacuation Control Team): Plans and coordinates movement of injured patients by air to medical facilities. Works with medical authorities to match patient needs to aircraft and medical crews.\n\nAMCT (Air Mobility Control Team): Monitors and tracks execution of all air mobility missions. Provides situational awareness to the Chief of Mobility Division (CMD).\n\nCMD (Chief of Mobility Division): JFACC's primary advisor on all air mobility matters. Coordinates with AMC's Tanker Airlift Control Center (TACC)."
      }
    ],
    "activities": [
      {
        "id": "p8a1",
        "type": "classification",
        "typeLabel": "Activity 1 of 3 — Classification",
        "points": 3,
        "instruction": "Three crises arrive simultaneously. Classify each one by the AOC division that has primary responsibility.",
        "objectiveIds": [
          "6.8-obj-5"
        ],
        "items": [
          {
            "id": "i1",
            "text": "KC-135 tanker (Texaco 41) has a hydraulic failure. The F-16 strike package needs 8,000 lbs of fuel to reach its target and return. An alternate tanker must be sourced or the package is cancelled.",
            "correct": "amd",
            "explanation": "Air Refueling is one of AMD's three core mission sets. The ARCT (Air Refueling Control Team) within AMD coordinates tanker support. This is squarely an AMD function."
          },
          {
            "id": "i2",
            "text": "Gorgan F-16 pilot SPARROW 03 ejected over Donovian-controlled territory. He is transmitting on his emergency beacon. A hostile SA-8 battery is within 25 km of his position. A rescue package must be assembled immediately.",
            "correct": "cod",
            "explanation": "Recovering an isolated person from hostile territory is CSAR — a COD function, not AMD. The COD coordinates CSAR through the Personnel Recovery Coordination Cell (PRCC). CSAR may require armed escort and SEAD."
          },
          {
            "id": "i3",
            "text": "Twelve wounded Gorgan soldiers — two critical — are at FOB Ararat. The coalition hospital ship is 340 km away. Medical aircraft are needed to move the patients.",
            "correct": "amd",
            "explanation": "Moving wounded patients from a forward location to a medical facility is Aeromedical Evacuation (AE) — an AMD function handled by the Aeromedical Evacuation Control Team (AECT). The environment is permissive; patients are already in friendly hands."
          }
        ],
        "categories": [
          {
            "id": "amd",
            "label": "Air Mobility Division (AMD)"
          },
          {
            "id": "cod",
            "label": "Combat Operations Division (COD)"
          }
        ],
        "feedback": {
          "correct": "Correct. Tanker coordination = AMD (ARCT). Recovering a pilot from hostile territory = COD (CSAR, through PRCC). Moving wounded soldiers to a hospital = AMD (AE, through AECT).",
          "incorrect": "The key distinction: CSAR (recovering personnel from hostile areas) is a COD/PRCC function. AE (moving patients already in friendly hands to medical facilities) is an AMD/AECT function. Air refueling is always AMD/ARCT.",
          "whyMatters": "If you send the CSAR request to AMD, they will tell you they do not do CSAR — and time is lost while SPARROW 03 evades on the ground with an SA-8 25 km away. Getting the division right is not a bureaucratic nicety — it determines whether the rescue package launches in time.",
          "evidenceClue": "See Evidence Card 'AE vs. CSAR — Critical Distinction' for the full comparison of these two mission types and which division owns each."
        }
      },
      {
        "id": "p8a2",
        "type": "multiselect",
        "typeLabel": "Activity 2 of 3 — Select All That Apply",
        "points": 4,
        "instruction": "Select ALL of the mission sets that belong to the Air Mobility Division (AMD). Do not select any that do not belong to AMD.",
        "objectiveIds": [
          "6.8-obj-1"
        ],
        "options": [
          {
            "id": "ms1",
            "text": "Airlift — moving personnel, equipment, and supplies by air",
            "correct": true,
            "explanation": "Airlift is one of AMD's three core mission sets. The ALCT plans and coordinates airlift missions."
          },
          {
            "id": "ms2",
            "text": "Air Refueling (AR) — providing fuel to aircraft in flight to extend range and endurance",
            "correct": true,
            "explanation": "Air Refueling is one of AMD's three core mission sets. The ARCT plans and coordinates tanker support."
          },
          {
            "id": "ms3",
            "text": "Aeromedical Evacuation (AE) — moving sick and wounded patients by air to medical facilities",
            "correct": true,
            "explanation": "AE is one of AMD's three core mission sets. The AECT plans and coordinates movement of patients to medical facilities."
          },
          {
            "id": "ms4",
            "text": "Combat Search and Rescue (CSAR) — recovering isolated personnel from hostile or denied areas",
            "correct": false,
            "explanation": "CSAR is NOT an AMD mission set. CSAR belongs to the Combat Operations Division, coordinated through the Personnel Recovery Coordination Cell (PRCC). This is the most commonly confused distinction in the AMD lesson."
          }
        ],
        "feedback": {
          "correct": "Correct. AMD's three mission sets are Airlift, Air Refueling, and Aeromedical Evacuation. CSAR is not an AMD function — it belongs to the COD/PRCC.",
          "incorrect": "AMD has exactly three mission sets: Airlift, Air Refueling (AR), and Aeromedical Evacuation (AE). CSAR is explicitly NOT an AMD mission — it belongs to COD. This distinction is directly evaluated on the Block 6 test.",
          "whyMatters": "This distinction appears on the Block 6 test because it is a real operational confusion point. AMD and COD must both be ready to respond to a downed pilot — but to very different missions. COD launches the rescue; AMD may later transport the recovered pilot for medical care. Mixing up the two creates command confusion at the worst possible moment.",
          "evidenceClue": "See Evidence Card 'AE vs. CSAR — Critical Distinction' for the full explanation of why CSAR belongs to COD."
        }
      },
      {
        "id": "p8a3",
        "type": "matching",
        "typeLabel": "Activity 3 of 3 — AMD Team-Level Matching",
        "points": 5,
        "instruction": "Inside the Air Mobility Division, each AMD position or team owns a specific mission. Match each AMD element to the responsibility it owns.",
        "objectiveIds": ["6.8-obj-3", "6.8-obj-4"],
        "items": [
          {
            "id": "m1",
            "text": "ALCT — Airlift Control Team",
            "explanation": "The ALCT plans and coordinates airlift missions — moving cargo, personnel, and equipment by air. Tonight's airlift mission planning and integration with the ATO is an ALCT function."
          },
          {
            "id": "m2",
            "text": "ARCT — Air Refueling Control Team",
            "explanation": "The ARCT plans and coordinates tanker support and in-flight refueling for receiver aircraft. The KC-135 shortfall and replacement tanker call goes here."
          },
          {
            "id": "m3",
            "text": "AECT — Aeromedical Evacuation Control Team",
            "explanation": "The AECT plans and coordinates the movement of sick and wounded patients by air to medical facilities. The wounded Gorgan soldiers at FOB Ararat needing transport to the hospital ship is an AECT call."
          },
          {
            "id": "m4",
            "text": "AMCT — Air Mobility Control Team",
            "explanation": "The AMCT monitors and tracks execution of all air mobility missions, providing situational awareness to the Chief of Mobility Division (CMD). Think of it as the execution monitoring cell for AMD."
          },
          {
            "id": "m5",
            "text": "CMD — Chief of Mobility Division",
            "explanation": "The CMD is the JFACC's primary advisor on all air mobility matters. The CMD coordinates with AMC's TACC and is responsible for the AMD's three mission sets — airlift, air refueling, and aeromedical evacuation — at the division level."
          }
        ],
        "targets": [
          {
            "id": "t1",
            "text": "Plans and coordinates airlift missions — moving cargo, personnel, and equipment by air; integrates airlift requirements into the ATO.",
            "correct": "m1"
          },
          {
            "id": "t2",
            "text": "Plans and coordinates tanker support and in-flight refueling; finds the replacement tanker when Texaco 41 goes down.",
            "correct": "m2"
          },
          {
            "id": "t3",
            "text": "Plans and coordinates movement of injured personnel by air to medical facilities; works with medical authorities to match patient needs to aircraft and crews.",
            "correct": "m3"
          },
          {
            "id": "t4",
            "text": "Monitors and tracks execution of all air mobility missions; provides situational awareness on AMD operations to the Chief of Mobility Division.",
            "correct": "m4"
          },
          {
            "id": "t5",
            "text": "Primary advisor to the JFACC on all air mobility matters; coordinates air refueling, intratheater airlift, and aeromedical missions at the division level.",
            "correct": "m5"
          }
        ],
        "feedback": {
          "correct": "Correct. ALCT = airlift. ARCT = air refueling. AECT = aeromedical evacuation. AMCT = mission monitoring and situational awareness. CMD = JFACC's primary mobility advisor and division-level coordinator.",
          "incorrect": "Match each AMD element to its specific function. ALCT handles airlift. ARCT handles air refueling. AECT handles aeromedical evacuation (medical transport of patients). AMCT monitors execution of all AMD missions. The CMD advises the JFACC and coordinates all three mission sets at the division level.",
          "whyMatters": "The Block 6 test asks for these team-level distinctions specifically. Knowing the right AMD division for a problem is not enough — you have to route it to the right team within AMD. The wounded soldier transport call goes to AECT, not just 'AMD.' The tanker shortfall call goes to ARCT, not just 'AMD.'",
          "evidenceClue": "See Evidence Card 'AMD's Four Teams' for each team's primary mission and product, plus the CMD's role as the JFACC's primary advisor on mobility matters."
        }
      }
    ]
  },
  "phase-9-synthesis": {
    "id": "phase-9-synthesis",
    "title": "Phase 9 — Final Synthesis",
    "subtitle": "All Block 6 Lessons — Full AOC Review",
    "domain": "synthesis",
    "objectiveIds": [
      "6.1-obj-2",
      "6.3-obj-1",
      "6.3-obj-2",
      "6.6-obj-2",
      "6.7-obj-3",
      "6.8-obj-5"
    ],
    "inject": "D-Day plus 12 hours. Brig Gen Torres calls all AOC staff together for a rapid battle rhythm review. Twelve hours of live execution. He wants to confirm that every officer on his staff understands the AOC as an integrated system — not just the piece they touched today.\n\n'I have watched you all respond to individual problems over the past 12 hours. Now I want to see if you can put the whole picture together. Five activities. Every lesson. No excuses.'\n\nThe last two activities pivot from how the AOC is built to what the JFACC needs as an intelligence assessment: a calibrated BLUF on what Donovia will do next, expressed in ICD 203 likelihood language, plus a sort of candidate Donovian COAs into Most Likely, Most Dangerous, and implausible. Block 4 trained the indicator side. Iron Anvil now uses it.",
    "evidenceCards": [
      {
        "id": "e9-1",
        "title": "The Complete Air Tasking Cycle",
        "summary": "The air tasking cycle flows from JFC guidance through five AOC divisions to execution and back.",
        "detail": "1. JFC issues guidance to the JFACC.\n2. SRD develops the JAOP (long-range) and issues the AOD (cycle guidance) to CPD.\n3. CPD receives the AOD, builds the MAAP, and produces the ATO, ACO, and SPINS.\n4. COD executes the current ATO. The CCO is the senior decision-maker. COD operates 24/7.\n5. ISRD supports SRD (ISR Strategists), CPD (CMC produces RSTA Annex), and COD (ISRDO embedded on the floor).\n6. AMD submits requirements to CPD for inclusion in the ATO. AMD owns AE (AECT). COD owns CSAR (PRCC).\n7. Assessment and BDA feed back from COD to SRD and CPD for the next planning cycle."
      },
      {
        "id": "e9-2",
        "title": "ICD 203 Likelihood Language",
        "summary": "Intelligence Community Directive 203 sets the calibrated probability terms every IC product must use.",
        "detail": "ICD 203 (Analytic Standards) defines the only approved likelihood terms for IC assessments. Use these words — and only these words — when expressing the probability of an event:\n\n• ALMOST NO CHANCE / REMOTE        (01-05%)\n• VERY UNLIKELY / HIGHLY IMPROBABLE (05-20%)\n• UNLIKELY / IMPROBABLE             (20-45%)\n• ROUGHLY EVEN CHANCE / EVEN ODDS   (45-55%)\n• LIKELY / PROBABLE                 (55-80%)\n• VERY LIKELY / HIGHLY PROBABLE     (80-95%)\n• ALMOST CERTAIN / NEARLY CERTAIN   (95-99%)\n\nNote what is NOT on the list: 'possible', 'could', 'may', 'might', 'cannot rule out'. These hedge-words are vague — they communicate uncertainty without committing to a calibrated estimate, and they are not acceptable in finished IC products. Pick the ICD 203 band and own it.\n\nWhy this matters: your BLUF will be read by people who know the standard. Using 'possible' tells them the analyst was not willing to commit to a band. Using 'likely' tells them the analyst placed the assessment in the 55-80% range and is prepared to defend it."
      },
      {
        "id": "e9-3",
        "title": "MLCOA vs. MDCOA — Threshold Logic",
        "summary": "MLCOA is what the indicators converge on. MDCOA is the highest-impact COA the indicators do not preclude. Other COAs are implausible.",
        "detail": "Most Likely Course of Action (MLCOA): the COA most consistent with the convergence of all current indicators. It is what the evidence is actually pointing at. Use ICD 203 'likely' or 'very likely' for the MLCOA band depending on how strong the convergence is.\n\nMost Dangerous Course of Action (MDCOA): the highest-impact COA the indicators do not yet preclude. The commander must remain prepared for it even if probability is lower (typically 'unlikely' to 'roughly even chance' per ICD 203). MDCOA drives branch planning.\n\nImplausible / Contradicted: a COA the current indicators rule out. Examples: a Donovian stand-down while the IADS is active and EW jamming continues, or a kinetic ASAT strike with no space-attack indicators present. These COAs are excluded from the assessment.\n\nFor Iron Anvil specifically, the indicator carryover from Northern Veil is what you sort against: active IADS, ongoing EW, occupation forces in the Zabzimek Corridor, continued IO and cyber pressure."
      }
    ],
    "activities": [
      {
        "id": "p9a1",
        "type": "sequencing",
        "typeLabel": "Activity 1 of 5 — Put in Order",
        "points": 5,
        "instruction": "Arrange these air tasking cycle steps in the correct sequence — from the start of planning to execution and assessment.",
        "objectiveIds": [
          "6.3-obj-1",
          "6.4-obj-1",
          "6.5-obj-1",
          "6.6-obj-1"
        ],
        "items": [
          {
            "id": "s1",
            "text": "JFC issues guidance to the JFACC, establishing objectives and intent for the air campaign.",
            "explanation": "The cycle starts with the JFC — the JFACC derives authority and objectives from the JFC's guidance."
          },
          {
            "id": "s2",
            "text": "SRD develops the JAOP and issues the AOD to CPD — translating JFC guidance into cycle-specific planning priorities.",
            "explanation": "The SRD is the first AOC division in the cycle. It takes the JFC's guidance and produces the long-range JAOP and the cycle-specific AOD before CPD can build the ATO."
          },
          {
            "id": "s3",
            "text": "CPD receives the AOD, builds the MAAP, and produces the ATO, ACO, and SPINS — the full execution package.",
            "explanation": "CPD is second. It receives the AOD from SRD and translates it into an executable air plan — the MAAP first, then the ATO, ACO, and SPINS."
          },
          {
            "id": "s4",
            "text": "COD executes the current ATO in real time, with the CCO as senior decision-maker managing dynamic events.",
            "explanation": "COD is third — it executes what CPD planned. The CCO has personal authority over time-sensitive targeting, ROE, and mission redirection during execution."
          },
          {
            "id": "s5",
            "text": "BDA and assessment feed back from COD to SRD and CPD, informing the next planning cycle.",
            "explanation": "The cycle closes with assessment — did the strikes achieve the desired effects? BDA results feed back to SRD and CPD so the next cycle can adjust targeting, weight of effort, and collection priorities."
          }
        ],
        "correct": [
          "s1",
          "s2",
          "s3",
          "s4",
          "s5"
        ],
        "feedback": {
          "correct": "Correct. The full cycle: JFC guidance → SRD (JAOP/AOD) → CPD (MAAP/ATO/ACO/SPINS) → COD (execution) → BDA/Assessment → back to SRD/CPD. Understanding this flow is the foundation of working in any AOC.",
          "incorrect": "The cycle flows from strategic to tactical and back. JFC sets the objectives. SRD translates them into planning guidance (AOD). CPD builds the execution package (ATO). COD executes. Assessment feeds back to restart the cycle.",
          "whyMatters": "Every officer in the AOC needs to understand where they fit in this cycle. If CPD builds an ATO without the AOD, it may contradict the campaign strategy. If assessment results do not feed back to SRD, the same ineffective approach repeats in the next cycle.",
          "evidenceClue": "See Evidence Card 'The Complete Air Tasking Cycle' for the full step-by-step sequence with all five divisions."
        }
      },
      {
        "id": "p9a2",
        "type": "classification",
        "typeLabel": "Activity 2 of 5 — Classification",
        "points": 4,
        "instruction": "Classify each scenario by the correct command authority it describes.",
        "objectiveIds": [
          "6.1-obj-2"
        ],
        "items": [
          {
            "id": "i1",
            "text": "The JFC's authority over assigned U.S. forces — the highest level of authority, which cannot be transferred or delegated under any circumstances.",
            "correct": "cocom",
            "explanation": "COCOM is the highest command authority, held only by a Combatant Commander over U.S. forces. It cannot be delegated — not to a subordinate and not to a partner nation."
          },
          {
            "id": "i2",
            "text": "The authority Brig Gen Torres holds over Gorgan F-16s — allows him to task and organize them for specific missions in the ATO.",
            "correct": "opcon",
            "explanation": "OPCON is the correct authority for coalition partner forces. It allows Torres to task and organize the Gorgan F-16s for missions while the Gorgan Air Force retains ADCON."
          },
          {
            "id": "i3",
            "text": "The authority placing a Gorgan battalion under a U.S. brigade for local movement coordination in the Zabzimek Corridor — local direction only.",
            "correct": "tacon",
            "explanation": "TACON covers local direction of movement and maneuver only. It does NOT include the right to assign separate missions or reorganize the force."
          },
          {
            "id": "i4",
            "text": "The authority the Gorgan Air Force retains over its pilots — covering pay, personnel records, training, and maintenance — regardless of who holds OPCON.",
            "correct": "adcon",
            "explanation": "ADCON covers administrative support functions and always stays with the service or national force. Even when Gorgan F-16s are under OPCON, Gorgas retains ADCON."
          }
        ],
        "categories": [
          {
            "id": "cocom",
            "label": "COCOM"
          },
          {
            "id": "opcon",
            "label": "OPCON"
          },
          {
            "id": "tacon",
            "label": "TACON"
          },
          {
            "id": "adcon",
            "label": "ADCON"
          }
        ],
        "feedback": {
          "correct": "Correct. COCOM = highest, cannot be delegated. OPCON = mission tasking for coalition forces. TACON = local movement only. ADCON = administrative functions, always stays with the national force.",
          "incorrect": "Review the four command authorities. COCOM: highest, cannot be transferred. OPCON: task and organize forces for missions, can be held by coalition partners. TACON: local movement only. ADCON: pay, personnel, training, maintenance — stays with the service.",
          "whyMatters": "These four authorities appear on the Block 6 test and in real coalition operations every day. Misidentifying who holds what authority creates command confusion — and in a coalition air campaign, command confusion translates directly into missed sorties, fratricide risk, and failed missions.",
          "evidenceClue": "See Phase 1 Evidence Card 'The Four Command Authorities' for the full definitions."
        }
      },
      {
        "id": "p9a3",
        "type": "decision",
        "typeLabel": "Activity 3 of 5 — Best Answer",
        "points": 1,
        "instruction": "SPARROW 03 (Gorgan F-16 pilot) ejected over Donovian-controlled territory and has just been recovered by the CSAR package. He is now at FOB Ararat with injuries requiring medical air transport to the hospital ship. Which statement correctly describes the handoff between CSAR and Aeromedical Evacuation?",
        "objectiveIds": [
          "6.8-obj-5"
        ],
        "options": [
          {
            "id": "a",
            "text": "Both CSAR and AE are AMD functions. The AMD plans the rescue and the medical transport as a continuous operation.",
            "explanation": "CSAR is not an AMD function. AMD cannot plan or execute combat rescue from hostile territory. CSAR belongs to COD through the PRCC."
          },
          {
            "id": "b",
            "text": "CSAR is a COD function (executed through the PRCC). Once SPARROW 03 is safely at FOB Ararat and needs medical transport, that becomes an AE mission coordinated by AMD's AECT.",
            "correct": true,
            "explanation": "This is correct. The COD/PRCC executed the rescue from hostile territory. Now that SPARROW 03 is safely at FOB Ararat in friendly hands, the medical transport leg is AE — an AMD function handled by the AECT."
          },
          {
            "id": "c",
            "text": "AE is a COD function because injured pilots are a combat priority. AMD only handles cargo airlift and refueling.",
            "explanation": "AE is an AMD function, not COD. AMD handles all three: Airlift, Air Refueling, and Aeromedical Evacuation. COD owns CSAR — not AE."
          },
          {
            "id": "d",
            "text": "CSAR and AE are interchangeable terms for the same mission — the distinction is only administrative.",
            "explanation": "CSAR and AE are completely different missions owned by completely different divisions. CSAR = hostile recovery (COD/PRCC). AE = medical patient transport (AMD/AECT). The distinction is operational, not administrative."
          }
        ],
        "feedback": {
          "correct": "Correct. The rescue from hostile territory is CSAR — COD/PRCC. Once SPARROW 03 is at FOB Ararat in friendly hands and needs medical transport, that leg is AE — AMD/AECT. The handoff is at the point of recovery into friendly hands.",
          "incorrect": "Remember: CSAR = COD/PRCC (hostile environment, combat recovery). AE = AMD/AECT (permissive environment, medical transport). The handoff between the two occurs when the person is safely recovered into friendly hands.",
          "whyMatters": "This distinction is directly evaluated on the Block 6 test. In real operations, confusion between CSAR and AE means the wrong AOC division gets the call — and either a rescue package is never launched or a wounded pilot never gets to a hospital. Knowing the handoff point is as important as knowing who owns each mission.",
          "evidenceClue": "See Phase 8 Evidence Card 'AE vs. CSAR — Critical Distinction' for the full comparison and the handoff rule."
        }
      },
      {
        "id": "p9a4",
        "type": "fillslot",
        "typeLabel": "Activity 4 of 5 — Build the BLUF",
        "points": 3,
        "instruction": "Brig Gen Torres wants a calibrated BLUF on Donovia's most likely course of action against the coalition air campaign. Build the BLUF below using ICD 203 likelihood language. Carry the indicator picture from Block 4 (active IADS, ongoing EW, occupation forces in the Zabzimek Corridor, continued IO/cyber pressure) into the assessment.",
        "objectiveIds": [
          "6.4-obj-1",
          "6.6-obj-3"
        ],
        "sentence": [
          { "type": "text", "text": "BLUF: Over the next " },
          { "type": "slot", "id": "bluf-timeframe", "options": ["72 hours", "7 days", "30 days"], "correct": "7 days", "explanation": "Iron Anvil is in the early days of a sustained air campaign. Major Donovian reinforcement-or-withdrawal decisions and force movements play out over roughly a week — long enough for reinforcement to arrive, short enough to bound the JFACC's planning horizon. '72 hours' is too tight for major repositioning; '30 days' is past the relevant decision window for the current ATO cycles." },
          { "type": "text", "text": ", Donovia is " },
          { "type": "slot", "id": "bluf-likelihood", "options": ["almost certain", "very likely", "likely", "roughly even chance", "unlikely", "very unlikely", "almost no chance"], "correct": "likely", "explanation": "ICD 203 places 'likely' at 55–80 percent. The indicator convergence is strong (active IADS, ongoing EW, occupation forces in place, continued cyber/IO pressure) but the final Donovian decision has not been observed and some attribution gaps remain. 'Very likely' overstates given those gaps; 'roughly even chance' understates given the convergence. 'Possible' is NOT an ICD 203 term — it is the kind of hedge-word ICD 203 was written to eliminate." },
          { "type": "text", "text": " to " },
          { "type": "slot", "id": "bluf-coa", "options": ["withdraw forces from the Zabzimek Corridor and accept ceasefire terms", "reinforce occupation forces in the Zabzimek Corridor and continue coercive pressure across the IO and cyber domains", "open a second front against Atropia or Pertuni", "hold a passive defensive posture with no further movement or pressure"], "correct": "reinforce occupation forces in the Zabzimek Corridor and continue coercive pressure across the IO and cyber domains", "explanation": "Donovian forces remain in the corridor, the IADS is active, EW jamming is ongoing, and IO/cyber operations continue. None of those indicators are consistent with a withdrawal or with a passive posture. A second-front COA against Atropia or Pertuni is not supported by any indicator — there is no staging there. The convergent read is reinforcement plus continued multi-domain pressure." },
          { "type": "text", "text": "." }
        ],
        "feedback": {
          "correct": "Correct BLUF. 'Likely' is the ICD 203-calibrated word for this picture. Reinforcement plus continued coercive pressure is what the indicator set actually supports. 7 days is the right horizon for major movement decisions and for the JFACC's near-term planning cycle.",
          "incorrect": "Build the BLUF against ICD 203. The likelihood word MUST be one of: almost no chance, very unlikely, unlikely, roughly even chance, likely, very likely, almost certain. 'Possible' is not on that list and is not acceptable in a finished IC product. For the COA, ask which option is consistent with EVERY indicator. Active IADS + ongoing EW + corridor occupation + continued cyber/IO operations rule out withdrawal and rule out passive defense. No second-front staging rules out the Atropia/Pertuni option.",
          "whyMatters": "Calibrated language is the difference between an assessment that withstands a peer challenge and one that does not. The JFACC will brief this BLUF to higher headquarters; the people in that room know ICD 203. Using 'likely' tells them you placed the assessment at 55–80 percent and are ready to defend it. Using 'possible' tells them you were not willing to commit.",
          "evidenceClue": "See Evidence Card 'ICD 203 Likelihood Language' for the seven approved bands. Use the Block 4 indicator carryover plus Iron Anvil's IADS, EW, and corridor posture to anchor the COA selection."
        }
      },
      {
        "id": "p9a5",
        "type": "classification",
        "typeLabel": "Activity 5 of 5 — MLCOA / MDCOA Sort",
        "points": 4,
        "instruction": "Sort each candidate Donovian COA into Most Likely COA (MLCOA), Most Dangerous COA (MDCOA), or implausible / contradicted by current indicators. Apply the threshold logic from the evidence card — MLCOA is what indicators converge on; MDCOA is the highest-impact COA the indicators do not preclude; implausible COAs contradict the indicators or have no supporting indicators at all.",
        "objectiveIds": [
          "6.6-obj-3"
        ],
        "items": [
          {
            "id": "coa-1",
            "text": "Reinforce occupation forces in the Zabzimek Corridor and continue IO/EW/cyber pressure while testing coalition ROE limits with small probing actions along the line of contact.",
            "correct": "mlcoa",
            "explanation": "This COA matches every indicator on the board: active IADS, continued EW jamming, ongoing IO/cyber pressure, occupation forces still in the corridor. It is the convergent read and the MLCOA the JFACC must plan against."
          },
          {
            "id": "coa-2",
            "text": "Launch a full conventional thrust into central Gorgas combined with a kinetic anti-satellite strike against a coalition LEO ISR satellite to blind the air campaign.",
            "correct": "mdcoa",
            "explanation": "Higher impact than the current indicator picture supports — but the coalition cannot rule it out. Donovia retains conventional combat power and demonstrated non-kinetic counterspace capability in Block 4 (GNSS denial). A kinetic ASAT would be a major escalation, not a routine option, but the JFACC must remain prepared for it. This is the MDCOA the AOC's branch plans must address."
          },
          {
            "id": "coa-3",
            "text": "Complete withdrawal from the Zabzimek Corridor, stand down the IADS, and accept UN-brokered ceasefire terms within 72 hours.",
            "correct": "implausible",
            "explanation": "Contradicts every active indicator. The IADS is up. EW is ongoing. Occupation forces remain in place. No diplomatic or media signals support a withdrawal posture at this time. ICD 203 'almost no chance' is the band — but the cleaner classification is implausible / contradicted: the current indicators rule it out."
          },
          {
            "id": "coa-4",
            "text": "Open a second front against Atropia or Pertuni to threaten the AOC's basing at Atropian Air Base and disrupt coalition rear-area operations.",
            "correct": "implausible",
            "explanation": "No staging, no force movements toward the Atropian or Pertuni borders, and no political signaling supports a second-front COA. The Donovian indicator picture is concentrated on the Gorgas-Zabzimek axis. Without supporting indicators, this COA is implausible, not merely unlikely."
          }
        ],
        "categories": [
          { "id": "mlcoa",       "label": "Most Likely COA" },
          { "id": "mdcoa",       "label": "Most Dangerous COA" },
          { "id": "implausible", "label": "Implausible / Contradicted by Indicators" }
        ],
        "feedback": {
          "correct": "Correct. MLCOA = the reinforce-and-pressure COA that the indicators converge on. MDCOA = the full-conventional-thrust-plus-kinetic-ASAT COA the indicators do not preclude. Withdrawal and second-front COAs are implausible because the active indicator picture rules them out (withdrawal) or because no indicators support them at all (second front).",
          "incorrect": "Apply the threshold logic. MLCOA is what the indicators converge on — reinforcement and continued pressure. MDCOA is the highest-impact COA still consistent with what could happen — full conventional plus kinetic counterspace. A COA that contradicts active indicators (withdrawal while IADS is up and EW is jamming) is implausible. A COA with zero supporting indicators (second front against Atropia with no staging there) is also implausible.",
          "whyMatters": "Commanders plan against MLCOA and prepare branches against MDCOA. Collapsing the two leads to over-reacting to the worst case or missing the warning the evidence actually supports. Calling an implausible COA the MDCOA wastes coalition planning capacity on something that is not going to happen.",
          "evidenceClue": "Evidence Card 'MLCOA vs. MDCOA — Threshold Logic' gives the rule. Carry the Block 4 indicator matrix forward: active IADS rules out withdrawal; no Atropia-direction staging rules out the second front."
        }
      }
    ]
  }
  }
};
