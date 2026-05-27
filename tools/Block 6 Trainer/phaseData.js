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
  "config": {
    "opName": "IRON ANVIL",
    "opCode": "OP-IA-26",
    "studentPassword": "OperationIronAnvil",
    "sessionKey": "iron-anvil-student-session-v1",
    "phaseIds": [
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
  "restoredThrough": "phase-9-synthesis",
  "phases": {
    "phase-0-overview": {
      "id": "phase-0-overview",
      "title": "Scenario Orientation",
      "subtitle": "Operation Iron Anvil",
      "domain": null,
      "objectiveIds": [],
      "inject": "Your intelligence team got it right.\n\nIn Block 4, you assessed that Donovia was LIKELY to conduct a limited cross-border operation into Gorgas within 72 hours. Three days later, Donovian 58th Combined Arms Army units crossed the border and seized the Zabzimek Corridor — exactly the MLCOA your team identified.\n\nOne week later, the United States and coalition partners have formed Combined Joint Task Force CAUCASUS (CJTF-CAU). You have just arrived at the Coalition Air Operations Center at Atropian Air Base as an international Liaison Officer. Your mission today is to learn how this AOC functions — who does what, what they produce, how information flows, and who has the authority to make critical decisions — because when the first ATO kicks off, there will be no time to look it up.",
      "evidenceCards": [
        {
          "id": "ev-cmdr-iron-anvil",
          "title": "JFACC Mission Statement — Brig Gen Torres",
          "summary": "Achieve and maintain air superiority over Gorgan airspace. Degrade Donovian ground forces in the Zabzimek Corridor. Protect Gorgan civilian infrastructure.",
          "detail": "\"Achieve and maintain air superiority over Gorgan airspace. Degrade Donovian ground forces in the Zabzimek Corridor. Protect Gorgan civilian infrastructure. The coalition includes air assets from seven nations in a complex threat environment. Donovia has a capable IADS. We are operating under strict Rules of Engagement — collateral damage is a strategic concern. We have 48 hours to stand up this AOC and execute the first ATO. Every one of you needs to know your role before that clock runs out.\"\n\n— JFACC Brig Gen Torres, AOC Opening Brief, D-Day Minus 48 Hours"
        },
        {
          "id": "ev-cjtf-actors",
          "title": "CJTF-CAU Key Actors",
          "summary": "Multinational task force commanded by Lt Gen Park (USAF). JFACC: Brig Gen Torres (USAF). Seven nations contributing air assets.",
          "detail": "CJTF Commander: Lt Gen Sandra Park, USAF.\nJFACC: Brig Gen Michael Torres, USAF — commands all coalition air operations.\nJFLCC: Maj Gen Aram Petrosyan, Gorgan Army.\nJFMCC: Rear Adm James Kowalski, USN.\nJFSOCC: Col Sven Lindqvist, Swedish SOF.\nCoalition Air Partners: 7 nations (Gorgas, Atropia, Poland, France, UK, UAE, and your nation).\nAOC Location: Atropian Air Base, 220 km south of the Gorgas-Donovia border."
        }
      ],
      "activities": []
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
      "evidenceCards": [],
      "activities": [
        {
          "id": "p1a1",
          "type": "matching",
          "typeLabel": "Activity 1 of 4 — Matching",
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
            "whyMatters": "Assigning the wrong command authority creates immediate legal and operational problems. If Torres holds only TACON over Gorgan F-16s, he cannot task them for specific missions — the coalition air campaign cannot function. If he tried to hold COCOM, it would violate U.S. law."
          }
        },
        {
          "id": "p1a2",
          "type": "decision",
          "typeLabel": "Activity 2 of 4 — Best Answer",
          "points": 1,
          "instruction": "Brig Gen Torres needs to integrate 24 Gorgan F-16s into the coalition air campaign and task them for specific missions. Which command authority should he hold over these aircraft?",
          "objectiveIds": [
            "6.1-obj-2"
          ],
          "options": [
            {
              "id": "a",
              "text": "COCOM — the highest U.S. command authority, giving Torres permanent statutory control over Gorgan forces for the campaign.",
              "explanation": "COCOM cannot be held over partner nation forces. It is a U.S.-only statutory authority that applies to U.S. forces — it cannot be extended to Gorgan aircraft."
            },
            {
              "id": "b",
              "text": "OPCON — authority to task and organize the Gorgan F-16s for specific missions each ATO cycle while Gorgas retains ADCON.",
              "correct": true,
              "explanation": "OPCON is the correct authority. It gives Torres the ability to task and organize the F-16s for missions. The Gorgan Air Force retains ADCON over its own pilots — pay, personnel, and maintenance stay with Gorgas."
            },
            {
              "id": "c",
              "text": "TACON — authority to direct the Gorgan F-16s in combat, including assigning them specific strike missions on the ATO.",
              "explanation": "TACON is too limited. It only covers local movement and maneuver — Torres cannot assign missions or reorganize the Gorgan force under TACON."
            },
            {
              "id": "d",
              "text": "ADCON — authority over Gorgan pilot readiness, maintenance, and training, ensuring the F-16s meet coalition standards.",
              "explanation": "ADCON is an administrative function, not an operational one. It has nothing to do with tasking aircraft for missions."
            }
          ],
          "feedback": {
            "correct": "Correct. OPCON is the standard authority for integrating coalition partner forces. Torres can task and organize the Gorgan F-16s for tonight's ATO while Gorgas retains ADCON over its pilots.",
            "incorrect": "Torres needs the ability to task and organize — that is OPCON. COCOM cannot be held over partner forces. TACON is too limited for mission tasking. ADCON is administrative only.",
            "whyMatters": "Without OPCON, Torres cannot put Gorgan F-16s on the ATO for specific targets. They become observers, not participants. Getting this right before the first ATO is not a legal formality — it determines what the coalition can actually do in the air."
          }
        },
        {
          "id": "p1a3",
          "type": "classification",
          "typeLabel": "Activity 3 of 4 — Joint vs. Combined",
          "points": 4,
          "instruction": "U.S. doctrine distinguishes JOINT operations from COMBINED operations. Classify each scenario by the correct type.",
          "objectiveIds": [
            "6.1-obj-1"
          ],
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
            {
              "id": "joint",
              "label": "JOINT — U.S. services only"
            },
            {
              "id": "combined",
              "label": "COMBINED — U.S. plus partner/allied nations"
            }
          ],
          "feedback": {
            "correct": "Correct. JOINT = two or more U.S. military services operating together. COMBINED = U.S. plus partner or allied nations. The distinction is about WHO is in the operation, not WHAT they are doing.",
            "incorrect": "Apply the U.S. doctrinal rule. JOINT operations involve two or more U.S. military services only (Army + Air Force, Navy + Marines, etc.). COMBINED operations involve U.S. forces plus any partner or allied nation. If even one non-U.S. force is in the operation, it is combined.",
            "whyMatters": "This distinction drives command authority decisions. COCOM is a U.S. statutory authority — it can be held over U.S. forces in a joint operation, but never extended to a partner nation in a combined operation. Mislabeling joint vs combined can lead to assigning command authorities that are not legally valid."
          }
        },
        {
          "id": "p1a4",
          "type": "decision",
          "typeLabel": "Activity 4 of 4 — Best Answer",
          "points": 1,
          "instruction": "Two Gorgan F-16 pilots assigned to the coalition air campaign are due for their annual flight physicals. Their aircraft are under Brig Gen Torres's OPCON for tonight's ATO. Who is responsible for scheduling and conducting their flight physicals?",
          "objectiveIds": [
            "6.1-obj-4"
          ],
          "options": [
            {
              "id": "a",
              "text": "Brig Gen Torres's staff — he holds OPCON, so all aspects of Gorgan pilot readiness fall under his authority during the campaign.",
              "explanation": "OPCON covers mission tasking and force organization — not administrative support. Flight physicals, pay, personnel records, and training are administrative functions that stay with the national force, not the OPCON commander."
            },
            {
              "id": "b",
              "text": "The Gorgan Air Force — ADCON stays with the national force, so Gorgas handles its own pilots' administrative and medical requirements.",
              "correct": true,
              "explanation": "ADCON covers training, readiness, pay, personnel, and maintenance — including flight physicals. It always stays with the service or national force. Even though the Gorgan F-16s are under Torres's OPCON, the Gorgan Air Force retains ADCON over its own pilots."
            },
            {
              "id": "c",
              "text": "The CJTF-CAU joint medical section — the combined task force provides centralized medical support for all coalition forces during operations.",
              "explanation": "The CJTF may coordinate theater-level medical support, but routine administrative medical requirements like flight physicals remain with the national force under ADCON. The CJTF does not take over every nation's administrative functions."
            },
            {
              "id": "d",
              "text": "The AOC's combat operations staff — the COD is responsible for readiness tracking of all coalition aircrew flying the current ATO.",
              "explanation": "Flight physicals and readiness requirements are not suspended during operations. They are critical to ensuring pilots are medically fit to fly. The national force manages them through ADCON, which continues regardless of combat operations."
            }
          ],
          "feedback": {
            "correct": "Correct. ADCON stays with the national force — always. The Gorgan Air Force schedules its own pilots' flight physicals, manages their pay, conducts their training, and maintains their aircraft. Torres holds OPCON to task the jets for missions, but he does not take over Gorgan administrative functions.",
            "incorrect": "ADCON covers administrative functions: training, readiness, pay, personnel records, maintenance, and medical requirements like flight physicals. ADCON always stays with the service or national force — even when OPCON is held by a coalition commander. Torres tasks the aircraft; Gorgas takes care of its people.",
            "whyMatters": "In your home military, your nation retains ADCON over you even when you serve under a coalition commander's OPCON. This protects your rights, your pay, and your readiness. If ADCON transferred with OPCON, a coalition commander could change your training standards, reassign your personnel, or neglect your maintenance — none of which your nation would accept."
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
      "evidenceCards": [],
      "activities": [
        {
          "id": "p2a1",
          "type": "sequencing",
          "typeLabel": "Activity 1 of 4 — Put in Order",
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
              "explanation": "The TACP is the Air Force team embedded with the Army ground unit. Every person assigned to a TACP must be JTAC-qualified — meaning they are certified to control terminal weapons delivery. However, not all JTACs serve in TACPs. JTAC-qualified personnel also serve as Combat Controllers, FAC(A) pilots, and in other roles across the joint force."
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
            "whyMatters": "Routing a CAS request through the wrong chain means the strike either never happens, happens without proper deconfliction, or results in fratricide. Every minute of delay while a ground unit is in contact costs lives."
          }
        },
        {
          "id": "p2a2",
          "type": "classification",
          "typeLabel": "Activity 2 of 4 — Classification",
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
              "explanation": "The TACP is organizationally assigned to Layer 2 — Coordination and Integration. However, the TACP's JTAC function — terminal attack control — is an execution task that spans into Layer 3. The TACP coordinates with the ground commander (Layer 2) AND controls the actual strike (Layer 3 execution). It is the critical link between the ground fight and the air fight."
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
            "correct": "Correct. The three TACS layers move from theater-level command (Layer 1: JFACC, AOC) through coordination elements (Layer 2: JACCE, WOC, ASOC, TACP) down to execution (Layer 3: CRC, AWACS, TAC(A), FAC(A), JSTARS). Note: the TACP sits organizationally in Layer 2 but its JTAC function — terminal attack control — spans into Layer 3 execution.",
            "incorrect": "Review the three TACS layers. Layer 1 is command and planning at the theater level (JFACC, AOC). Layer 2 is coordination between theater and executing forces (ASOC, TACP, JACCE, WOC). Layer 3 is execution and direct control (AWACS, CRC, TAC(A), FAC(A), JSTARS).",
            "whyMatters": "Understanding the layers tells you who to call and in what order. A ground commander who tries to call the AOC directly for CAS bypasses the entire coordination layer — his request will get lost. The TACS exists because no single agency can manage everything from the strategic to the tactical level simultaneously."
          }
        },
        {
          "id": "p2a3",
          "type": "decision",
          "typeLabel": "Activity 3 of 4 — Best Answer",
          "points": 1,
          "instruction": "The Gorgan Army's 2nd Brigade commander says: 'I need someone embedded with my unit who can advise me on what air and space power can do for my troops — and when I need Close Air Support, I need someone who can control the strike directly.' Which TACS agency provides this capability?",
          "objectiveIds": [
            "6.2-obj-2",
            "6.2-obj-3"
          ],
          "options": [
            {
              "id": "a",
              "text": "TACP — an Air Force team embedded with the ground unit that advises the commander on air power and controls CAS through its JTAC.",
              "correct": true,
              "explanation": "The TACP is the Air Force team embedded with Army ground units at brigade level and below. Its primary role is twofold: advise the ground commander on what air and space power can and cannot do, and control CAS through the JTAC. Every person assigned to a TACP must be JTAC-qualified. Not all JTACs serve in TACPs — JTAC-qualified personnel also fill roles like Combat Controller and FAC(A) pilot."
            },
            {
              "id": "b",
              "text": "ASOC — the corps-level agency that embeds liaison teams with each brigade to advise ground commanders and manage all CAS requests.",
              "explanation": "The ASOC processes and coordinates CAS requests at the corps/division level — it is not embedded with brigade-level ground units. The ASOC is a coordination center, not a team that deploys with a ground commander. And the ASOC does not directly control aircraft — that is the JTAC within the TACP."
            },
            {
              "id": "c",
              "text": "AWACS — the airborne platform that provides direct advisory support to ground commanders and coordinates CAS strikes from overhead.",
              "explanation": "AWACS provides the airborne air picture and manages air traffic — it watches the sky. AWACS does not advise ground commanders, does not embed with ground units, and does not control CAS terminal attacks. CAS control belongs to the JTAC within the TACP."
            },
            {
              "id": "d",
              "text": "CRC — the ground-based radar agency that assigns air advisors to ground units and provides terminal attack control for all CAS.",
              "explanation": "The AOC is the theater-level command center — it allocates aircraft and produces the ATO, but it does not embed with ground units or control individual strikes. A ground commander cannot call the AOC directly for CAS — the request flows through the TACP and ASOC first."
            }
          ],
          "feedback": {
            "correct": "Correct. The TACP is the Air Force team embedded with ground units. Its primary role is to advise ground commanders on air and space power capabilities and limitations, and to control CAS through the JTAC. Every TACP member must be JTAC-qualified — but not all JTACs serve in TACPs.",
            "incorrect": "The TACP is the only TACS agency that embeds with ground units at brigade level. The ASOC sits at corps/division HQ. AWACS is airborne. The AOC is theater-level. The TACP's JTAC is the only person certified to control terminal weapons delivery for CAS.",
            "whyMatters": "If a ground commander does not have a TACP, he has no one to advise him on what air power can do — and no one qualified to control a CAS strike when he needs one. The TACP is not optional in a combined arms fight. Without it, the ground force either gets no air support or gets uncontrolled air support, which risks fratricide."
          }
        },
        {
          "id": "p2a4",
          "type": "decision",
          "typeLabel": "Activity 4 of 4 — Best Answer",
          "points": 1,
          "instruction": "The Gorgan Army corps commander needs a single agency to serve as the primary control point for all air operations supporting his land forces — processing CAS requests, coordinating air support priorities, and managing the flow of air support between his units and the AOC. Which TACS agency fills this role?",
          "objectiveIds": [
            "6.2-obj-2",
            "6.2-obj-3"
          ],
          "options": [
            {
              "id": "a",
              "text": "ASOC — the primary control agency for air operations in direct support of the land component, co-located with the corps or division HQ.",
              "correct": true,
              "explanation": "The ASOC is the primary control agency for air operations in direct support of land operations. It sits at the corps or division level, co-located with the Army HQ, and manages the flow of CAS requests and air support coordination between ground forces and the AOC."
            },
            {
              "id": "b",
              "text": "TACP — the primary control agency for all air support to land forces, embedded at brigade level and managing the full CAS flow to the AOC.",
              "explanation": "The TACP is embedded at brigade level and below — not at the corps level. The TACP handles individual CAS requests for a single ground unit. The ASOC manages the flow for the entire corps/division, coordinating between multiple TACPs and the AOC."
            },
            {
              "id": "c",
              "text": "CRC — the ground-based radar and control agency responsible for managing close air support coordination between ground forces and the AOC.",
              "explanation": "The CRC is a Layer 3 execution agency that provides ground-based radar and air traffic control. It manages airspace and tracks aircraft — it does not process CAS requests or coordinate ground-force air support priorities. That is the ASOC."
            },
            {
              "id": "d",
              "text": "JACCE — the joint coordination element inside the land component HQ that serves as the primary air support control agency for all land ops.",
              "explanation": "The JACCE is a JFACC-provided liaison element inside the land or maritime HQ — the JFACC's ambassadors. It coordinates component-level requirements but is not the primary control agency for air support to land forces. The ASOC holds that role."
            }
          ],
          "feedback": {
            "correct": "Correct. The ASOC is the TACS primary control agency for air operations in direct support of the land component. Think of the ASOC as the gate agent at one airport — the AOC is airline headquarters, and the ASOC manages the specific airport where the Army's air support flows through.",
            "incorrect": "The ASOC is the corps/division-level agency that manages all air support for land operations. The TACP is at brigade level (too low). The CRC tracks aircraft (wrong function). The JACCE is a liaison element (coordinates, does not control). The ASOC is the primary control agency.",
            "whyMatters": "If a corps-level air support request goes directly to the AOC instead of through the ASOC, it bypasses the coordination that prevents conflicts between different ground units' CAS priorities. The ASOC exists to manage the flow — without it, competing requests from multiple brigades would arrive at the AOC uncoordinated."
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
      "evidenceCards": [],
      "activities": [
        {
          "id": "p3a1",
          "type": "matching",
          "typeLabel": "Activity 1 of 4 — Matching",
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
            "whyMatters": "Confusing the MAAP with the ATO — or the AOD with the JAOP — creates coordination failures across the AOC. When a unit receives the wrong document or misunderstands its authority, missions get executed incorrectly or not at all."
          }
        },
        {
          "id": "p3a2",
          "type": "classification",
          "typeLabel": "Activity 2 of 4 — Classification",
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
            "whyMatters": "If a ground commander's CAS request goes to the SOLE instead of the BCD, it will not be properly coordinated with the Army's requirements. If the Navy's carrier wing goes to the SOLE instead of the NALE, their sorties may not appear in the ATO at all."
          }
        },
        {
          "id": "p3a3",
          "type": "decision",
          "typeLabel": "Activity 3 of 4 — Best Answer",
          "points": 1,
          "instruction": "A coalition officer says: 'The JFACC and the AOC are the same thing, right? When we say JFACC, we mean the AOC.' Is this correct?",
          "objectiveIds": [
            "6.3-obj-1"
          ],
          "options": [
            {
              "id": "a",
              "text": "No — the JFACC is the commander (a person); the AOC is the weapon system (a headquarters). The JFACC commands through the AOC.",
              "correct": true,
              "explanation": "The JFACC (Brig Gen Torres) is a person — the Joint Force Air Component Commander. The AOC is a formally designated weapon system — the headquarters through which the JFACC plans, tasks, executes, and assesses air operations. The JFACC commands THROUGH the AOC."
            },
            {
              "id": "b",
              "text": "Yes — JFACC and AOC are two designations for the same organization, used interchangeably throughout joint and combined doctrine.",
              "explanation": "They are not the same. JFACC is a command position held by a person (Brig Gen Torres). AOC is a weapon system — a formally organized, trained, and equipped headquarters. You can have a JFACC without an AOC (in theory), or an AOC without the JFACC physically present."
            },
            {
              "id": "c",
              "text": "No — the AOC is the higher headquarters that commands the JFACC and directs all air operations across the joint force.",
              "explanation": "This is backwards. The JFACC is the commander; the AOC is the tool. The JFACC commands THROUGH the AOC — the AOC does not command the JFACC."
            },
            {
              "id": "d",
              "text": "Yes — in a combined environment, the JFACC title replaces the AOC organizational structure and they merge into one entity.",
              "explanation": "The relationship between JFACC and AOC does not change in a combined environment. The JFACC is still the commander; the AOC is still the headquarters. The distinction is about role (person vs. organization), not about whether the operation is joint or combined."
            }
          ],
          "feedback": {
            "correct": "Correct. The JFACC is the commander (Brig Gen Torres). The AOC is the weapon system — the headquarters through which the JFACC exercises command. Think of it this way: Torres can leave the building, but the AOC keeps functioning. Torres is still the JFACC even when he is not physically in the AOC.",
            "incorrect": "The JFACC is a person (the commander). The AOC is a weapon system (the headquarters). The JFACC commands through the AOC. They are not interchangeable terms, not the same organization, and the AOC does not command the JFACC.",
            "whyMatters": "If a staff officer treats them as the same thing, they may confuse command decisions (JFACC) with staff actions (AOC divisions). Only the JFACC can make certain command decisions — the AOC divisions prepare options and execute orders. Blurring this line leads to staff officers making command decisions they do not have authority for."
          }
        },
        {
          "id": "p3a4",
          "type": "classification",
          "typeLabel": "Activity 4 of 4 — Classification",
          "points": 4,
          "instruction": "Four problems arrive at the AOC. Classify each one by the AOC division that should handle it.",
          "objectiveIds": [
            "6.3-obj-1"
          ],
          "items": [
            {
              "id": "i1",
              "text": "The JFACC wants a new set of campaign objectives and long-range guidance developed for the next week of operations.",
              "correct": "srd",
              "explanation": "Long-range campaign planning and developing the command's vision and guidance is the Strategy Division's primary function. The SRD produces the JAOP and AOD."
            },
            {
              "id": "i2",
              "text": "Tonight's ATO needs to be built — sorties allocated to targets, airspace deconflicted, and the final order published to all coalition units.",
              "correct": "cpd",
              "explanation": "Building the ATO is the Combat Plans Division's primary function. The CPD's MAAP Team allocates sorties, the C2 Planning Team handles airspace (ACO/SPINS), and the ATO Production Team publishes the final order."
            },
            {
              "id": "i3",
              "text": "A time-sensitive target just appeared on the operations floor during ATO execution. A real-time engagement decision is needed.",
              "correct": "cod",
              "explanation": "Real-time execution decisions — including dynamic targeting of time-sensitive targets — belong to the Combat Operations Division. The CCO has personal authority to approve engagement."
            },
            {
              "id": "i4",
              "text": "ISR collection platforms need to be formally tasked for tomorrow's ATO, and the intelligence team needs to fuse multi-source reporting into finished products for the operations floor.",
              "correct": "isrd",
              "explanation": "ISR collection tasking (CMC → RSTA Annex) and intelligence fusion (ACF Cell) are both ISR Division functions. The ISRD supports every other division with intelligence."
            }
          ],
          "categories": [
            {
              "id": "srd",
              "label": "Strategy Division (SRD)"
            },
            {
              "id": "cpd",
              "label": "Combat Plans Division (CPD)"
            },
            {
              "id": "cod",
              "label": "Combat Operations Division (COD)"
            },
            {
              "id": "isrd",
              "label": "ISR Division (ISRD)"
            }
          ],
          "feedback": {
            "correct": "Correct. SRD = campaign strategy and guidance. CPD = building the ATO. COD = executing the ATO in real time. ISRD = ISR tasking and intelligence production. Think of the AOC as a kitchen: SRD is the head chef (decides the menu), CPD is the prep team (builds tonight's dishes), COD is the line cooks (executing orders now), ISRD is the sourcing and quality team (provides the ingredients and checks the results).",
            "incorrect": "Route by time horizon: SRD works days-to-weeks ahead (strategy). CPD works 48-96 hours ahead (planning). COD works right now (execution). ISRD supports all three with intelligence. Campaign guidance → SRD. ATO building → CPD. Real-time decisions → COD. Intelligence → ISRD.",
            "whyMatters": "Bringing a real-time targeting decision to the SRD wastes time — the SRD works days ahead, not in real time. Bringing a long-range strategy question to the CPD wastes their planning bandwidth on something that is not their job. Routing to the right division is the first skill an LNO needs."
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
      "evidenceCards": [],
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
              "text": "Collection Management Cell (CMC) — the ISRD cell assigned to the SRD to formally task ISR platforms and align collection with strategy.",
              "explanation": "The CMC formally tasks ISR collection platforms — that is a CPD support function. The CMC is not the element embedded with the SRD for strategy planning."
            },
            {
              "id": "b",
              "text": "ISR Strategists — ISRD personnel embedded with the SRD to support PIR development, collection alignment, and gap assessment.",
              "correct": true,
              "explanation": "ISR Strategists are the ISRD element that works directly with the SRD. They help define PIRs, assess collection gaps, and ensure ISR assets are aligned with the campaign strategy before CPD builds the ATO."
            },
            {
              "id": "c",
              "text": "ISRDO — the ISR duty officer embedded with the SRD planning cell to manage real-time ISR collection for campaign strategy.",
              "explanation": "The ISRDO is embedded on the COD operations floor to manage real-time ISR execution — not in the SRD strategy cell for campaign planning."
            },
            {
              "id": "d",
              "text": "ACF Cell — the ISRD analysis team that produces fused intelligence assessments and threat products directly for the SRD staff.",
              "explanation": "The ACF Cell produces fused intelligence products for real-time operations — it does not provide strategy-level support to the SRD planning process."
            }
          ],
          "feedback": {
            "correct": "Correct. ISR Strategists are the ISRD element embedded with (or closely coordinated with) the SRD. They align ISR with campaign objectives, help define PIRs, and identify collection gaps before CPD builds the ATO.",
            "incorrect": "The CMC tasks platforms, the ISRDO manages real-time execution, the ACF fuses data for operations. The element that supports strategy planning is the ISR Strategists — specifically placed to support the SRD's campaign planning work.",
            "whyMatters": "If the SRD defines PIRs without ISR expertise, the collection plan may not be able to answer the commander's key intelligence questions. ISR Strategists bridge the gap between what the commander wants to know and what the ISR enterprise can actually collect."
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
            "whyMatters": "Every CPD planner working on tonight's ATO is working from the AOD — which came from the JAOP. If a planner skips the AOD and goes straight to the ATO, they may plan missions that contradict the campaign strategy. The document chain is not bureaucracy — it is how the JFC's intent flows from concept to execution."
          }
        },
        {
          "id": "p4a3",
          "type": "decision",
          "typeLabel": "Activity 3 of 5 — Best Answer",
          "points": 1,
          "instruction": "A newly arrived coalition officer asks you: 'I understand the SRD writes the JAOP and the AOD — but what is the SRD's primary function in the air tasking cycle? What are they actually doing for the JFACC?'",
          "objectiveIds": [
            "6.4-obj-1"
          ],
          "options": [
            {
              "id": "a",
              "text": "Developing the command's overall vision and guidance — translating the JFC's objectives into an air campaign strategy.",
              "correct": true,
              "explanation": "The SRD's primary function is developing the command's vision and guidance. The JAOP and AOD are the products of that function, not the function itself. The SRD decides WHERE the air campaign is going; CPD figures out HOW to get there."
            },
            {
              "id": "b",
              "text": "Executing the current Air Tasking Order in real time and managing dynamic targeting decisions during combat operations.",
              "explanation": "This describes the Combat Operations Division (COD), not the SRD. The COD operates 24/7 and manages real-time execution. The SRD works 48-72 hours ahead — it is a planning division, not an execution division."
            },
            {
              "id": "c",
              "text": "Building the Master Air Attack Plan and producing the Air Tasking Order for dissemination to all coalition units.",
              "explanation": "This describes the Combat Plans Division (CPD). The CPD builds the MAAP and ATO based on the guidance it receives from the SRD. The SRD provides the direction; CPD turns it into an executable plan."
            },
            {
              "id": "d",
              "text": "Formally tasking ISR collection platforms and producing the RSTA Annex for integration into the Air Tasking Order.",
              "explanation": "This describes the Collection Management Cell (CMC) within the ISR Division (ISRD). The SRD uses ISR products but does not task ISR platforms — that is the CMC's job."
            }
          ],
          "feedback": {
            "correct": "Correct. The SRD's primary function is developing the command's vision and guidance. Think of the SRD as the coach who calls the play — the JAOP and AOD are the play calls. CPD draws up the play (MAAP/ATO). COD runs it on the field.",
            "incorrect": "The SRD develops the command's vision and guidance — it sets the direction for the entire air campaign. ATO execution belongs to COD. MAAP/ATO production belongs to CPD. ISR collection tasking belongs to ISRD (CMC). The SRD works at the strategic level, ahead of everyone else.",
            "whyMatters": "If you confuse the SRD with the CPD or the COD, you will bring the wrong problem to the wrong division. The SRD answers 'what should we achieve?' — not 'how do we build tonight's ATO' (CPD) or 'what is happening right now' (COD). A staff officer who misunderstands the SRD's role wastes time asking strategy officers to solve tactical problems."
          }
        },
        {
          "id": "p4a4",
          "type": "decision",
          "typeLabel": "Activity 4 of 5 — Best Answer",
          "points": 1,
          "instruction": "The AOC is standing up and the air tasking cycle is about to begin for the first time. A CPD planner asks: 'When does our work start? Who kicks off the cycle?' Which statement correctly identifies how the air tasking cycle begins?",
          "objectiveIds": [
            "6.4-obj-1",
            "6.4-obj-3"
          ],
          "options": [
            {
              "id": "a",
              "text": "The CPD initiates the cycle by publishing the Air Tasking Order — the ATO is the first document and triggers planning across all divisions.",
              "explanation": "The ATO is the last major document in the cycle, not the first. CPD cannot build the ATO until it receives guidance from the SRD telling it what to prioritize."
            },
            {
              "id": "b",
              "text": "The SRD initiates the cycle by issuing the Air Operations Directive — the AOD provides the guidance that CPD needs to begin planning.",
              "correct": true,
              "explanation": "The SRD initiates the cycle. The AOD tells CPD what to prioritize, what weight of effort to apply, and what the JFACC wants to achieve in the next 24-48 hours. Without the AOD, CPD has no direction."
            },
            {
              "id": "c",
              "text": "The COD initiates the cycle by completing execution of the previous ATO — execution results automatically trigger the next planning cycle.",
              "explanation": "Execution results and BDA feed back into the next cycle, but the COD does not initiate it. The SRD reviews those results and then issues the AOD to start the next cycle. The COD reacts to the cycle; it does not start it."
            },
            {
              "id": "d",
              "text": "The ISRD initiates the cycle by issuing the RSTA Annex — ISR collection must be formally tasked before any other planning can begin.",
              "explanation": "The RSTA Annex is produced by the CMC later in the cycle to integrate ISR tasking into the ATO. The ISRD supports the cycle but does not initiate it — the SRD does."
            }
          ],
          "feedback": {
            "correct": "Correct. The Strategy Division initiates the air tasking cycle by issuing the AOD. The AOD is the starting signal — it tells CPD what to plan, what to prioritize, and what the JFACC wants to achieve. No AOD means no ATO.",
            "incorrect": "The air tasking cycle starts with strategy, not with planning or execution. The SRD issues the AOD → CPD receives it and builds the MAAP/ATO → COD executes the ATO → assessment feeds back to SRD. The SRD is always first.",
            "whyMatters": "A CPD planner who does not wait for the AOD may start building an air plan based on yesterday's guidance — which may no longer reflect the JFACC's priorities. The SRD initiates each cycle so the air campaign can adapt to the changing situation. Skipping the AOD means the coalition flies yesterday's war."
          }
        },
        {
          "id": "p4a5",
          "type": "decision",
          "typeLabel": "Activity 5 of 5 — Best Answer",
          "points": 1,
          "instruction": "A frustrated CPD planner says: 'We already know the JFACC's mission — achieve air superiority, degrade Donovian forces, protect civilian infrastructure. Why can't we just start building the ATO without waiting for the AOD from the SRD? We are wasting time.' What is the best response?",
          "objectiveIds": [
            "6.4-obj-3",
            "6.5-obj-3"
          ],
          "options": [
            {
              "id": "a",
              "text": "The AOD is an optional planning aid — the JFACC's broad mission statement provides enough direction for CPD to build the ATO independently.",
              "explanation": "The AOD is not optional. The JFACC's broad mission statement does not change every cycle — but the situation does. The AOD provides the cycle-specific guidance that CPD needs to build a plan that matches today's reality."
            },
            {
              "id": "b",
              "text": "The AOD's guidance and objectives flow into the daily air plan — without it, CPD has no direction for the current cycle's priorities.",
              "correct": true,
              "explanation": "The JFACC mission statement is broad and enduring. The AOD translates it into cycle-specific guidance — priority targets, weight of effort, effects to achieve in the next 24-48 hours. Without the AOD, CPD would plan against a static mission statement instead of adapting to what is happening now."
            },
            {
              "id": "c",
              "text": "The AOD contains the formatted ATO template and standard formatting — without the template, CPD cannot produce the order correctly.",
              "explanation": "The AOD is not a template or a form. It is strategic guidance — objectives, priorities, and weight-of-effort direction. The ATO format is a CPD responsibility (ATO Production Team), not something the SRD provides."
            },
            {
              "id": "d",
              "text": "The AOD lists all available aircraft by tail number and readiness status — CPD needs this inventory before it can allocate sorties.",
              "explanation": "The AOD does not list aircraft or tail numbers. Aircraft availability comes from the wings and partner nations. The AOD provides strategic guidance — what to achieve and what to prioritize — not asset inventories."
            }
          ],
          "feedback": {
            "correct": "Correct. The AOD's guidance and objectives flow into the daily air plan. The broad mission statement says 'achieve air superiority' — but the AOD says 'tonight, prioritize SEAD against these radar sites, weight main effort toward the northern corridor, and hold reserve for a possible ground-force CAS request.' That specificity is what CPD needs to build a plan that works right now.",
            "incorrect": "The AOD is not optional, not a template, and not an asset list. It is cycle-specific strategic guidance: what to prioritize, what effects to achieve, what weight of effort to apply. The JFACC's mission statement does not change every 24 hours — but the AOD does, because the battlefield changes.",
            "whyMatters": "If CPD builds the ATO without the AOD, tonight's air plan may repeat yesterday's priorities even though the situation has changed. Yesterday's AOD prioritized SEAD in the northern corridor. Today, Donovian forces shifted south — but without a new AOD, CPD builds another northern SEAD package while the real threat moves unopposed. The AOD is how strategy adapts."
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
      "evidenceCards": [],
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
            "whyMatters": "If the wrong team gets a task, it does not get done correctly. TET not conducting CDE means a strike could cause unacceptable civilian casualties. The C2 Planning Team not producing the ACO means multiple aircraft could fly into the same airspace at the same time."
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
            "whyMatters": "Understanding that the MAAP comes before the ATO tells you where in the process to intervene. If a commander wants to change tonight's targets, he talks to the MAAP Team before the ATO is finalized — not the ATO Production Team after the fact."
          }
        },
        {
          "id": "p5a3",
          "type": "decision",
          "typeLabel": "Activity 3 of 5 — Best Answer",
          "points": 1,
          "instruction": "Tonight's ATO has French Rafales, Gorgan F-16s, and U.S. Navy F/A-18s all operating in overlapping airspace over the Zabzimek Corridor. To prevent fratricide, someone must produce a document that defines who flies where, when, and on what frequencies. What does the Air Control Order (ACO) define?",
          "objectiveIds": [
            "6.5-obj-2"
          ],
          "options": [
            {
              "id": "a",
              "text": "Airspace control measures, boundaries, and communication procedures — it coordinates who flies where and on what frequencies each cycle.",
              "correct": true,
              "explanation": "The ACO defines airspace control measures (who owns what airspace), boundaries (where each force may operate), and communication procedures (frequencies and call signs). It is produced by the C2 Planning Team and published alongside the ATO."
            },
            {
              "id": "b",
              "text": "Target priorities and weapons selection for each strike package — it assigns which aircraft hits which target with what munition.",
              "explanation": "Target priorities and weapons selection are handled by the Targeting Effects Team (TET) and the MAAP Team, not by the ACO. The ACO controls airspace, not targeting."
            },
            {
              "id": "c",
              "text": "Intelligence collection requirements and ISR platform assignments — it directs which sensors cover which areas during the cycle.",
              "explanation": "ISR collection tasking is handled by the RSTA Annex, produced by the Collection Management Cell (CMC) in the ISR Division. The ACO manages airspace, not ISR collection."
            },
            {
              "id": "d",
              "text": "The JFACC's campaign strategy and long-range guidance — it defines the overall direction of the air campaign for the coming weeks.",
              "explanation": "Long-range campaign strategy belongs to the JAOP, produced by the SRD. The ACO is a cycle-specific airspace document that accompanies the ATO, not a strategy document."
            }
          ],
          "feedback": {
            "correct": "Correct. The ACO defines airspace control measures, boundaries, and communication procedures. Think of the ATO as telling you WHAT to do; the ACO tells you WHERE you may go; the SPINS tell you the fine print (frequencies, IFF codes, ROE supplements).",
            "incorrect": "The ACO is about airspace control — not targeting (TET/MAAP), not ISR collection (CMC/RSTA Annex), and not campaign strategy (JAOP/SRD). It defines the measures, boundaries, and communication procedures that keep seven nations' aircraft from running into each other.",
            "whyMatters": "With seven coalition nations flying in the same airspace, the ACO is what prevents a Polish F-16 and a French Rafale from occupying the same block of sky at the same time. Without it, the risk of midair collision or fratricide is unacceptable — especially in a contested environment with active Donovian IADS."
          }
        },
        {
          "id": "p5a4",
          "type": "decision",
          "typeLabel": "Activity 4 of 5 — Best Answer",
          "points": 1,
          "instruction": "A coalition LNO asks: 'How far in advance does the CPD start planning the ATO? When does their work begin relative to execution?' Which answer correctly describes the CPD's planning horizon?",
          "objectiveIds": [
            "6.5-obj-1"
          ],
          "options": [
            {
              "id": "a",
              "text": "48 to 96 hours prior to ATO execution — enough time to receive the AOD, build the MAAP, coordinate targeting, and compile the ATO.",
              "correct": true,
              "explanation": "The CPD works 48 to 96 hours ahead of execution. This window gives CPD time to receive the AOD from SRD, build the MAAP, coordinate with the TET, produce the ACO and SPINS, and compile the final ATO."
            },
            {
              "id": "b",
              "text": "1 to 6 hours before execution — the ATO is built in near-real-time as the tactical situation develops on the operations floor.",
              "explanation": "1 to 6 hours is the COD's domain — real-time execution and dynamic targeting. CPD works much further ahead. An ATO built in real time would have no coordination, no CDE, and no airspace deconfliction."
            },
            {
              "id": "c",
              "text": "7 to 14 days ahead of execution — the ATO is a long-range document covering the campaign's full operational sequence.",
              "explanation": "7 to 14 days is the SRD's planning horizon for the JAOP. The ATO is a cycle-specific document covering roughly 24 hours. CPD works on the next cycle, not the next week."
            },
            {
              "id": "d",
              "text": "No fixed planning horizon — the ATO is published whenever the JFACC determines that the operational plan is ready for execution.",
              "explanation": "The ATO follows a disciplined cycle tied to the air tasking cycle. CPD must publish the ATO on a predictable schedule (typically every 24 hours) so coalition units can prepare. Unpredictable publication would paralyze the coalition."
            }
          ],
          "feedback": {
            "correct": "Correct. CPD provides near-term planning 48 to 96 hours prior to ATO execution. This 2-to-4-day window ensures there is enough time for every CPD team to do its work — MAAP, targeting, airspace, and production — before the ATO goes out the door.",
            "incorrect": "CPD's planning horizon is 48 to 96 hours before execution. That is not real-time (COD), not weeks ahead (SRD/JAOP), and not open-ended. The cycle is predictable and disciplined — every coalition unit depends on receiving the ATO on time.",
            "whyMatters": "If a staff officer does not understand CPD's planning horizon, they may bring a request too late or too early. A CDE request submitted 6 hours before execution may not have time for TET review. A strategy question submitted to CPD should go to the SRD instead — CPD works 48 to 96 hours out, not weeks out."
          }
        },
        {
          "id": "p5a5",
          "type": "decision",
          "typeLabel": "Activity 5 of 5 — Best Answer",
          "points": 1,
          "instruction": "An officer new to the AOC says: 'I keep hearing people talk about the MAAP and the ATO like they are different things. Aren't they the same document?' What is the key difference between the MAAP and the ATO?",
          "objectiveIds": [
            "6.5-obj-2",
            "6.5-obj-3"
          ],
          "options": [
            {
              "id": "a",
              "text": "The MAAP is the detailed execution plan that allocates sorties to targets; the ATO is the formal, published order distributed to all units.",
              "correct": true,
              "explanation": "The MAAP is the plan — it is the detailed scheme where CPD works out which aircraft hit which targets, in what order, with what support. The ATO is the order — it is the formal, published document that goes to every coalition unit and tells them exactly what to fly. The MAAP comes first; the ATO is built from it."
            },
            {
              "id": "b",
              "text": "The MAAP covers the entire campaign over weeks of operations; the ATO covers a single 24-hour execution cycle within that campaign.",
              "explanation": "Both the MAAP and the ATO are cycle-specific documents — neither covers weeks. The long-range campaign plan is the JAOP, produced by the SRD. The MAAP and ATO serve the same cycle; they differ in function, not timeframe."
            },
            {
              "id": "c",
              "text": "The MAAP is produced by the Strategy Division based on campaign objectives; the ATO is produced by the Combat Plans Division separately.",
              "explanation": "Both the MAAP and the ATO are produced by the Combat Plans Division. The SRD produces the JAOP and AOD. The CPD produces the MAAP first, then the ATO Production Team compiles it into the formal ATO."
            },
            {
              "id": "d",
              "text": "They are the same document — MAAP is the internal working name used by the CPD staff, and ATO is the formal designation for distribution.",
              "explanation": "They are not the same document. The MAAP is the planning document that comes first — the internal working product. The ATO is the formal order that comes second — the published product distributed to units. Confusing the two causes coordination failures."
            }
          ],
          "feedback": {
            "correct": "Correct. The MAAP is the detailed execution plan; the ATO is the formal, published order. The MAAP comes first — CPD works out the plan. Then the ATO Production Team compiles it into the ATO — the order that goes to every coalition unit.",
            "incorrect": "The MAAP and the ATO are two different documents produced by CPD in sequence. The MAAP is the detailed plan (which aircraft, which targets, which timing). The ATO is the formal order (the published document units receive). They serve the same cycle but have different roles — plan vs. order.",
            "whyMatters": "If a staff officer treats the MAAP and the ATO as the same thing, they may try to change the ATO directly instead of going back to the MAAP Team. Changes to the plan must happen during MAAP development — once the ATO is published, changes require dynamic targeting authority from the CCO on the COD floor."
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
      "evidenceCards": [],
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
            "whyMatters": "On an active operations floor, the wrong team getting a crisis means it does not get resolved fast enough. A ROE decision made by anyone other than the CCO may not be legally valid. An ISR re-tasking request that goes to the wrong team means the target is not confirmed before the engagement window closes."
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
              "text": "Producing the Air Operations Directive and issuing cycle guidance to the Combat Plans Division.",
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
              "text": "Publishing the Air Tasking Order and disseminating it to all coalition units before execution.",
              "explanation": "The ATO is published by the ATO Production Team within the Combat Plans Division — not the COD. By the time execution begins, the ATO is already in the hands of the units."
            },
            {
              "id": "d",
              "text": "Formally tasking ISR collection platforms and producing the RSTA Annex for the next cycle.",
              "explanation": "Formally tasking ISR platforms is the CMC's function within the ISR Division. The CCO manages real-time execution — not the next cycle's collection planning."
            }
          ],
          "feedback": {
            "correct": "Correct. Dynamic targeting — approving the engagement of a time-sensitive target not on the ATO — is a CCO function. This is exactly the kind of decision that cannot wait for a planning cycle and cannot be delegated to a team.",
            "incorrect": "The CCO's personal authorities are execution-focused and time-critical: approving time-sensitive targets, redirecting missions, diverting aircraft, and applying ROE. These are not planning functions (AOD, ATO) and not ISR tasking functions (CMC).",
            "whyMatters": "A Donovian BTR column moving toward a critical bridge is a time-sensitive target. If no one has authority to approve engagement, the window closes and the bridge is lost. The CCO exists precisely for this — real-time authority during execution when there is no time to go back to the planning cycle."
          }
        },
        {
          "id": "p6a3",
          "type": "multiselect",
          "typeLabel": "Activity 3 of 4 — Select All That Apply",
          "points": 4,
          "instruction": "Five events hit the COD floor within two minutes of each other. Select ALL events that require the CCO's personal authority — meaning Col Kim himself must make the decision, and no one else on the floor can handle it for him.",
          "objectiveIds": [
            "6.6-obj-2",
            "6.6-obj-3"
          ],
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
            "whyMatters": "If everything goes to the CCO, he is overwhelmed and the real CCO-level decisions — the ones with legal and strategic consequences — get delayed. If a CCO-level decision goes to a team instead, it may not have legal authority. Knowing which decisions require the CCO personally and which a team can handle is what makes an operations floor function under pressure."
          }
        },
        {
          "id": "p6a4",
          "type": "decision",
          "typeLabel": "Activity 4 of 4 — Best Answer",
          "points": 1,
          "instruction": "During ATO execution, the ACF Team reports that a Donovian logistics convoy has appeared on Route 7 near the Zabzimek Corridor — it was not on the ATO. Col Kim (CCO) needs to decide whether to engage. What is the correct term for the process of engaging a target that arises during execution and was not planned into the ATO?",
          "objectiveIds": [
            "6.6-obj-3"
          ],
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
            "whyMatters": "If a staff officer confuses dynamic targeting with deliberate targeting, they may try to send the convoy target through CPD's planning cycle — which takes 48 to 96 hours. By then the convoy is gone. Dynamic targeting exists because the battlefield does not wait for the next ATO cycle."
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
      "evidenceCards": [],
      "activities": [
        {
          "id": "p7a1",
          "type": "classification",
          "typeLabel": "Activity 1 of 4 — Classification",
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
            "whyMatters": "Routing a fusion request to the CMC instead of the ACF Cell means the COD does not get finished intelligence in time. Routing a collection tasking request to the ACF Cell means no RSTA Annex is produced and the platforms are never formally tasked."
          }
        },
        {
          "id": "p7a2",
          "type": "fillslot",
          "typeLabel": "Activity 2 of 4 — Fill the Assessment",
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
            "whyMatters": "An MQ-9 can fly a 16-hour mission and collect terabytes of video — but if no one has planned who processes it, who analyzes it, and who receives it, that collection effort produces zero intelligence. PED planning is what turns data into decisions."
          }
        },
        {
          "id": "p7a3",
          "type": "decision",
          "typeLabel": "Activity 3 of 4 — Best Answer",
          "points": 1,
          "instruction": "The Combat Plans Division needs ISR collection platforms formally tasked for tomorrow's ATO. Which ISRD cell handles this, and what document does it produce?",
          "objectiveIds": [
            "6.7-obj-2",
            "6.7-obj-3"
          ],
          "options": [
            {
              "id": "a",
              "text": "ACF Cell — fuses multi-source intelligence and produces the RSTA Annex to formally task ISR platforms for integration into the ATO.",
              "explanation": "The ACF Cell fuses multi-source intelligence for the COD — but it does not formally task ISR collection platforms or produce the document that places them on the ATO. That is a different ISRD function."
            },
            {
              "id": "b",
              "text": "ISR Operations Team — produces the RSTA Annex and ensures PED is planned for all ISR collection platforms tasked in each ATO cycle.",
              "explanation": "The ISR Operations Team produces the PED Tasking Order — which formalizes Processing, Exploitation, and Dissemination planning for scheduled missions. The PED Tasking Order is NOT the document that formally tasks collection platforms; that is the RSTA Annex."
            },
            {
              "id": "c",
              "text": "CMC (Collection Management Cell) — formally tasks ISR collection platforms and produces the RSTA Annex for integration into the ATO.",
              "correct": true,
              "explanation": "The CMC is the correct answer. It formally tasks ISR collection platforms and produces the RSTA Annex — the document that integrates ISR collection requirements into the ATO so platforms are formally assigned their collection missions."
            },
            {
              "id": "d",
              "text": "ISR Strategists — embedded with the SRD, they produce the RSTA Annex that aligns ISR collection with the JFACC's campaign strategy.",
              "explanation": "ISR Strategists support the SRD's campaign strategy planning and PIR development. They do not produce the AOD (that is the SRD's Strategy Guidance Team) and they do not formally task ISR platforms (that is the CMC)."
            }
          ],
          "feedback": {
            "correct": "Correct. The CMC (Collection Management Cell) produces the RSTA Annex to formally task ISR collection platforms for integration into the ATO. This is how ISR collection missions appear in the ATO alongside strike and other missions.",
            "incorrect": "The CMC produces the RSTA Annex — this is the document that formally tasks ISR platforms and integrates collection missions into the ATO. The ACF Cell does analysis. The ISR Ops Cell ensures PED is planned. ISR Strategists support the SRD.",
            "whyMatters": "Without the RSTA Annex, ISR platforms are not formally tasked and their missions do not appear in the ATO. Aircrew and ground controllers do not know the ISR platform is out there — creating deconfliction hazards and uncoordinated collection that may duplicate or miss priority targets."
          }
        },
        {
          "id": "p7a4",
          "type": "matching",
          "typeLabel": "Activity 4 of 4 — Matching",
          "points": 3,
          "instruction": "The ISRD does not just sit in one room — it embeds personnel across the AOC. Match each ISRD element to the AOC division it directly supports.",
          "objectiveIds": [
            "6.7-obj-3"
          ],
          "items": [
            {
              "id": "m1",
              "text": "ISR Strategists",
              "explanation": "ISR Strategists are ISRD personnel embedded with (or closely coordinated with) the Strategy Division. They align ISR collection with campaign objectives and help define PIRs."
            },
            {
              "id": "m2",
              "text": "CMC (Collection Management Cell)",
              "explanation": "The CMC produces the RSTA Annex — the document that formally tasks ISR collection platforms for the ATO. This directly supports the Combat Plans Division's ATO production process."
            },
            {
              "id": "m3",
              "text": "ISRDO (ISR Ops Duty Officer)",
              "explanation": "The ISRDO is embedded on the Combat Operations Division floor. The ISRDO manages real-time ISR collection and re-tasking during ATO execution — serving the COD's dynamic needs while reporting back to the ISRD Chief."
            }
          ],
          "targets": [
            {
              "id": "t1",
              "text": "Strategy Division (SRD) — supports campaign planning, PIR development, and collection gap assessment for the long-range air plan.",
              "correct": "m1"
            },
            {
              "id": "t2",
              "text": "Combat Plans Division (CPD) — produces the RSTA Annex that integrates ISR collection tasking into the ATO for the next cycle.",
              "correct": "m2"
            },
            {
              "id": "t3",
              "text": "Combat Operations Division (COD) — manages real-time ISR collection and re-tasking on the operations floor during ATO execution.",
              "correct": "m3"
            }
          ],
          "feedback": {
            "correct": "Correct. ISR Strategists support the SRD (campaign planning). The CMC supports CPD (RSTA Annex for the ATO). The ISRDO supports the COD (real-time collection on the ops floor). The ISRD touches every division — it is the intelligence backbone of the AOC.",
            "incorrect": "The ISRD embeds forward into three divisions: ISR Strategists → SRD (strategy and PIRs). CMC → CPD (RSTA Annex for the ATO). ISRDO → COD (real-time collection during execution). Each element serves a different time horizon: weeks ahead, next cycle, and right now.",
            "whyMatters": "If you need ISR support for a strategy question, you go to the ISR Strategists — not the ISRDO. If you need a platform formally tasked for tomorrow's ATO, you go to the CMC — not the ACF Cell. If you need an ISR platform re-tasked right now during execution, you go to the ISRDO on the COD floor. Routing ISR requests to the wrong ISRD element means the request lands in the wrong time horizon."
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
      "evidenceCards": [],
      "activities": [
        {
          "id": "p8a1",
          "type": "classification",
          "typeLabel": "Activity 1 of 4 — Classification",
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
            "whyMatters": "If you send the CSAR request to AMD, they will tell you they do not do CSAR — and time is lost while SPARROW 03 evades on the ground with an SA-8 25 km away. Getting the division right is not a bureaucratic nicety — it determines whether the rescue package launches in time."
          }
        },
        {
          "id": "p8a2",
          "type": "multiselect",
          "typeLabel": "Activity 2 of 4 — Select All That Apply",
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
            "whyMatters": "This distinction appears on the Block 6 test because it is a real operational confusion point. AMD and COD must both be ready to respond to a downed pilot — but to very different missions. COD launches the rescue; AMD may later transport the recovered pilot for medical care. Mixing up the two creates command confusion at the worst possible moment."
          }
        },
        {
          "id": "p8a3",
          "type": "matching",
          "typeLabel": "Activity 3 of 4 — AMD Team-Level Matching",
          "points": 5,
          "instruction": "Inside the Air Mobility Division, each AMD position or team owns a specific mission. Match each AMD element to the responsibility it owns.",
          "objectiveIds": [
            "6.8-obj-3",
            "6.8-obj-4"
          ],
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
            "whyMatters": "The Block 6 test asks for these team-level distinctions specifically. Knowing the right AMD division for a problem is not enough — you have to route it to the right team within AMD. The wounded soldier transport call goes to AECT, not just 'AMD.' The tanker shortfall call goes to ARCT, not just 'AMD.'"
          }
        },
        {
          "id": "p8a4",
          "type": "ranking",
          "typeLabel": "Activity 4 of 4 — Priority Ranking",
          "points": 4,
          "instruction": "Four air mobility requests arrive at the AMD within 15 minutes of each other. All four are legitimate. The CMD (Chief of Mobility Division) must prioritize them according to the JFACC's guidance: mission-critical combat support first, then life-threatening medical needs, then routine sustainment, then non-mission requests. Rank them from highest priority (1) to lowest priority (4).",
          "objectiveIds": [
            "6.8-obj-2"
          ],
          "items": [
            {
              "id": "r1",
              "text": "Two critical trauma patients at FOB Ararat need AE transport to the hospital ship CNS Hippocrates within 2 hours or they will die.",
              "correct": 2,
              "explanation": "Life-threatening AE is the second-highest priority. The patients will die without transport — but the strike tanker directly enables tonight's combat mission, which the JFACC prioritized. AE for critical patients comes immediately after mission-critical combat support."
            },
            {
              "id": "r2",
              "text": "Tonight's SEAD strike package cannot reach the target area without a replacement tanker — Texaco 41 is down with a hydraulic failure. Without a tanker, the entire SEAD package is cancelled.",
              "correct": 1,
              "explanation": "This is the highest priority. The SEAD strike package is a mission-critical combat operation on tonight's ATO. Without the tanker, the JFACC's primary combat mission for the cycle fails. The CMD prioritizes per the JFACC's guidance — combat mission support comes first."
            },
            {
              "id": "r3",
              "text": "A coalition general officer needs transport from Atropian Air Base to the CJTF headquarters for a planning conference tomorrow morning.",
              "correct": 4,
              "explanation": "A VIP transport for a planning conference is the lowest priority. It is not combat-critical, not life-threatening, and not time-sensitive sustainment. The general can videoconference, delay travel, or use ground transport. Rank does not set AMD priorities — the JFACC's guidance does."
            },
            {
              "id": "r4",
              "text": "An ammunition resupply airlift is needed to restock the Gorgan 3rd Brigade, which expended 60% of its air defense munitions in yesterday's engagement. The resupply is scheduled for tomorrow.",
              "correct": 3,
              "explanation": "Ammunition resupply is important sustainment — the brigade needs it — but it is scheduled for tomorrow and is not immediately life-threatening or mission-critical for tonight's ATO. It ranks above the VIP transport but below the combat tanker and the critical AE patients."
            }
          ],
          "feedback": {
            "correct": "Correct. Priority order: (1) Strike tanker — tonight's mission fails without it. (2) Critical AE patients — they will die without transport. (3) Ammo resupply — important but scheduled for tomorrow. (4) VIP transport — not mission-critical. The CMD prioritizes per the JFACC's guidance, not per who calls first or who has the highest rank.",
            "partial": "Partially correct. The key principle: the CMD prioritizes per the JFACC's guidance — mission-critical combat support first, life-threatening medical needs second, routine sustainment third, non-mission requests last. A caller's rank does not change the priority.",
            "incorrect": "The CMD does not prioritize by rank, by who calls first, or by who shouts loudest. The JFACC's guidance sets the priority: (1) mission-critical combat support, (2) life-threatening medical, (3) routine sustainment, (4) non-mission requests. The general's ride is last because a planning conference is not a combat mission.",
            "whyMatters": "In a real AOC, a coalition general officer who calls the AMD and says 'my transport is the top priority' will hear 'sir, the CMD prioritizes per the JFACC's guidance.' The CMD exists precisely to make these decisions — and to push back on requests that do not align with the JFACC's priorities. If the AMD prioritized by rank, the general's ride would bump the critical patients and the strike tanker."
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
        },
        {
          "id": "e9-4",
          "title": "Current Donovian Indicator Picture — D+12 Hours",
          "summary": "Structured summary of active, absent, and ambiguous indicators for Donovian operations in the Zabzimek Corridor.",
          "detail": "ACTIVE INDICATORS (observed and continuing):\n\n1. IADS — Donovian integrated air defense system is fully active along the corridor and border zone. SA-21 and SA-22 systems confirmed operational. No stand-down signals detected.\n\n2. ELECTRONIC WARFARE — Continuous EW jamming against coalition communications and GPS frequencies. Jamming intensity has not decreased since D-Day.\n\n3. OCCUPATION FORCES — Donovian 58th Combined Arms Army units remain in the Zabzimek Corridor. No withdrawal movements detected. Defensive positions are being improved.\n\n4. IO / CYBER PRESSURE — Ongoing information operations targeting coalition partner publics. Cyber probing of coalition logistics networks continues.\n\nNOT OBSERVED (absent indicators):\n\n• No withdrawal movements or stand-down orders detected.\n• No diplomatic or media signals supporting ceasefire or de-escalation.\n• No force staging toward Atropia or Pertuni borders — no indicators of a second-front option.\n• No confirmed kinetic anti-satellite preparations — though non-kinetic counterspace (GNSS denial) was demonstrated in Block 4.\n\nAMBIGUOUS:\n\n• Donovian 58th CAA reserve elements have not been committed. Could indicate a holding posture or preparation for a second echelon push.\n• Coalition HUMINT reporting on Donovian political decision-making is limited. The final decision to reinforce or hold has not been directly observed.\n\nUse this picture to anchor your ICD 203 likelihood assessment and MLCOA/MDCOA sort. Active indicators rule out certain COAs. Absent indicators constrain others."
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
              "text": "Both CSAR and AE are AMD functions — the AMD plans the rescue from hostile territory and the medical transport as a single continuous operation.",
              "explanation": "CSAR is not an AMD function. AMD cannot plan or execute combat rescue from hostile territory. CSAR belongs to COD through the PRCC."
            },
            {
              "id": "b",
              "text": "CSAR is a COD function executed through the PRCC; once the pilot is safely at FOB Ararat, medical transport becomes AE — an AMD/AECT function.",
              "correct": true,
              "explanation": "This is correct. The COD/PRCC executed the rescue from hostile territory. Now that SPARROW 03 is safely at FOB Ararat in friendly hands, the medical transport leg is AE — an AMD function handled by the AECT."
            },
            {
              "id": "c",
              "text": "AE is a COD function because injured pilots are a combat priority — AMD handles only cargo airlift, air refueling, and routine transport.",
              "explanation": "AE is an AMD function, not COD. AMD handles all three: Airlift, Air Refueling, and Aeromedical Evacuation. COD owns CSAR — not AE."
            },
            {
              "id": "d",
              "text": "CSAR and AE are interchangeable terms for the same mission — the distinction between them is an administrative classification, not operational.",
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
            {
              "type": "text",
              "text": "BLUF: Over the next "
            },
            {
              "type": "slot",
              "id": "bluf-timeframe",
              "options": [
                "72 hours",
                "7 days",
                "30 days"
              ],
              "correct": "7 days",
              "explanation": "Iron Anvil is in the early days of a sustained air campaign. Major Donovian reinforcement-or-withdrawal decisions and force movements play out over roughly a week — long enough for reinforcement to arrive, short enough to bound the JFACC's planning horizon. '72 hours' is too tight for major repositioning; '30 days' is past the relevant decision window for the current ATO cycles."
            },
            {
              "type": "text",
              "text": ", Donovia is "
            },
            {
              "type": "slot",
              "id": "bluf-likelihood",
              "options": [
                "almost certain",
                "very likely",
                "likely",
                "roughly even chance",
                "unlikely",
                "very unlikely",
                "almost no chance"
              ],
              "correct": "likely",
              "explanation": "ICD 203 places 'likely' at 55–80 percent. The indicator convergence is strong (active IADS, ongoing EW, occupation forces in place, continued cyber/IO pressure) but the final Donovian decision has not been observed and some attribution gaps remain. 'Very likely' overstates given those gaps; 'roughly even chance' understates given the convergence. 'Possible' is NOT an ICD 203 term — it is the kind of hedge-word ICD 203 was written to eliminate."
            },
            {
              "type": "text",
              "text": " to "
            },
            {
              "type": "slot",
              "id": "bluf-coa",
              "options": [
                "withdraw forces from the Zabzimek Corridor and accept ceasefire terms",
                "reinforce occupation forces in the Zabzimek Corridor and continue coercive pressure across the IO and cyber domains",
                "open a second front against Atropia or Pertuni",
                "hold a passive defensive posture with no further movement or pressure"
              ],
              "correct": "reinforce occupation forces in the Zabzimek Corridor and continue coercive pressure across the IO and cyber domains",
              "explanation": "Donovian forces remain in the corridor, the IADS is active, EW jamming is ongoing, and IO/cyber operations continue. None of those indicators are consistent with a withdrawal or with a passive posture. A second-front COA against Atropia or Pertuni is not supported by any indicator — there is no staging there. The convergent read is reinforcement plus continued multi-domain pressure."
            },
            {
              "type": "text",
              "text": "."
            }
          ],
          "feedback": {
            "correct": "Correct BLUF. 'Likely' is the ICD 203-calibrated word for this picture. Reinforcement plus continued coercive pressure is what the indicator set actually supports. 7 days is the right horizon for major movement decisions and for the JFACC's near-term planning cycle.",
            "incorrect": "Build the BLUF against ICD 203. The likelihood word MUST be one of: almost no chance, very unlikely, unlikely, roughly even chance, likely, very likely, almost certain. 'Possible' is not on that list and is not acceptable in a finished IC product. For the COA, ask which option is consistent with EVERY indicator. Active IADS + ongoing EW + corridor occupation + continued cyber/IO operations rule out withdrawal and rule out passive defense. No second-front staging rules out the Atropia/Pertuni option.",
            "whyMatters": "Calibrated language is the difference between an assessment that withstands a peer challenge and one that does not. The JFACC will brief this BLUF to higher headquarters; the people in that room know ICD 203. Using 'likely' tells them you placed the assessment at 55–80 percent and are ready to defend it. Using 'possible' tells them you were not willing to commit.",
            "evidenceClue": "See Evidence Card 'ICD 203 Likelihood Language' for the seven approved bands and 'Current Donovian Indicator Picture' for the indicators to reason against."
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
            {
              "id": "mlcoa",
              "label": "Most Likely COA"
            },
            {
              "id": "mdcoa",
              "label": "Most Dangerous COA"
            },
            {
              "id": "implausible",
              "label": "Implausible / Contradicted by Indicators"
            }
          ],
          "feedback": {
            "correct": "Correct. MLCOA = the reinforce-and-pressure COA that the indicators converge on. MDCOA = the full-conventional-thrust-plus-kinetic-ASAT COA the indicators do not preclude. Withdrawal and second-front COAs are implausible because the active indicator picture rules them out (withdrawal) or because no indicators support them at all (second front).",
            "incorrect": "Apply the threshold logic. MLCOA is what the indicators converge on — reinforcement and continued pressure. MDCOA is the highest-impact COA still consistent with what could happen — full conventional plus kinetic counterspace. A COA that contradicts active indicators (withdrawal while IADS is up and EW is jamming) is implausible. A COA with zero supporting indicators (second front against Atropia with no staging there) is also implausible.",
            "whyMatters": "Commanders plan against MLCOA and prepare branches against MDCOA. Collapsing the two leads to over-reacting to the worst case or missing the warning the evidence actually supports. Calling an implausible COA the MDCOA wastes coalition planning capacity on something that is not going to happen.",
            "evidenceClue": "Evidence Card 'MLCOA vs. MDCOA — Threshold Logic' gives the sorting rule. Evidence Card 'Current Donovian Indicator Picture' gives the indicators. Active IADS rules out withdrawal; no Atropia-direction staging rules out the second front."
          }
        }
      ]
    }
  }
};
