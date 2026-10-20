window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m1",
 "order": 1,
 "code": "Value",
 "title": "Service Value System and Guiding Principles",
 "subtitle": "What services are for, how an organisation turns demand into value, and the principles that steer every decision",
 "outcomes": [
  "Explain services in terms of outcomes, costs and risks, and the roles in a service relationship",
  "Describe the service value system and diagnose where value is lost",
  "Apply the seven guiding principles together to real decisions",
  "Distinguish governance from management and run continual improvement as a habit"
 ],
 "lessons": [
  {
   "id": "m1-l1",
   "title": "Services, Value and Co-creation",
   "subtitle": "Why a service only matters when someone gains an outcome from it",
   "minutes": 30,
   "objectives": [
    "Define a service in terms of outcomes, costs and risks rather than technology",
    "Distinguish the roles of customer, user and sponsor in a service relationship",
    "Explain utility and warranty and why both are needed for value",
    "Describe how value is co-created by provider and consumer"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most IT departments describe themselves by what they run: servers, networks, applications, a help desk. Consumers do not care about any of these directly. They care about what they can **achieve** because the service exists: a nurse can see a patient's allergy history at the bedside, a garment buyer in Gazipur can confirm shipment dates, a mobile wallet user in Sylhet can pay a utility bill at midnight. Service management is the discipline of organising people, information, partners and work so that those outcomes happen reliably, at an acceptable cost and with acceptable risk."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A **service** is a way of helping someone achieve outcomes they want, while the provider takes on specific costs and risks that the consumer would otherwise carry. The consumer does not need to own the servers, hire the engineers or manage the supplier contracts; they get the outcome and pay, directly or indirectly, for the provider to carry the rest.",
     "title": "Service, in plain terms"
    },
    {
     "type": "framework",
     "title": "The three things every service changes for a consumer",
     "items": [
      {
       "label": "O",
       "title": "Outcomes enabled",
       "text": "The results the consumer can now achieve: faster admissions, fewer payment failures, accurate stock counts. Outcomes are what people would describe if you asked why they use the service."
      },
      {
       "label": "C",
       "title": "Costs",
       "text": "Costs removed (no need to buy and run their own system) and costs added (subscription fees, training time, process changes). Value improves when the balance moves in the consumer's favour."
      },
      {
       "label": "R",
       "title": "Risks",
       "text": "Risks removed (a provider with redundant data centres) and risks added (dependency on that provider, data leaving the organisation). Mature providers make both visible."
      }
     ]
    },
    {
     "type": "table",
     "title": "Roles in a service relationship",
     "head": [
      "Role",
      "What they do",
      "Example: hospital patient-records service"
     ],
     "rows": [
      [
       "Customer",
       "Defines requirements and agrees service levels; accountable for the outcomes being right",
       "Director of Clinical Services who agrees what the records system must support"
      ],
      [
       "User",
       "Uses the service day to day; experiences its quality first-hand",
       "Ward nurses, doctors and admission clerks"
      ],
      [
       "Sponsor",
       "Authorises the budget and funds consumption",
       "Chief Financial Officer approving the annual service charge"
      ],
      [
       "Provider",
       "Designs, runs and improves the service, taking on costs and risks",
       "The hospital IT department plus its cloud and software partners"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "In a small clinic the same doctor may be customer, user and sponsor at once. In a large bank the three roles sit in different departments with different priorities: users want speed, customers want features, sponsors want lower cost. Designing a service means listening to all three and making the trade-offs explicit.",
     "title": "One person, several roles"
    },
    {
     "type": "compare",
     "title": "Utility versus warranty",
     "columns": [
      {
       "title": "Utility: fit for purpose",
       "items": [
        "What the service does",
        "Functions and features that support an outcome",
        "Example: the payroll system calculates overtime and festival bonuses correctly",
        "Missing utility: the service works but does not help"
       ]
      },
      {
       "title": "Warranty: fit for use",
       "items": [
        "How well the service performs",
        "Availability, capacity, security, continuity",
        "Example: payroll runs on the 25th without failing, even at year end",
        "Missing warranty: the service helps but cannot be trusted"
       ]
      }
     ]
    },
    {
     "type": "matrix",
     "title": "Utility and warranty together create value",
     "x": "Warranty: fit for use (available, secure, fast enough)",
     "y": "Utility: fit for purpose (does what the consumer needs)",
     "quadrants": [
      {
       "title": "Useful but untrusted",
       "items": [
        "Right features, frequent failures",
        "Users keep spreadsheets 'just in case'"
       ]
      },
      {
       "title": "Value delivered",
       "items": [
        "Right features, reliably delivered",
        "Payroll correct and on time every 25th"
       ]
      },
      {
       "title": "No value",
       "items": [
        "Wrong features and unreliable",
        "Candidate to retire or redesign"
       ]
      },
      {
       "title": "Reliable but unhelpful",
       "items": [
        "Always up, does not help the outcome",
        "A fast portal for a task nobody needs"
       ]
      }
     ],
     "caption": "A service reaches the top-right only when utility and warranty are both high. Spending on warranty alone moves a service to the right, never upwards."
    },
    {
     "type": "text",
     "text": "Value is **co-created**. A provider can supply an excellent learning platform to a university, but if lecturers never upload materials and students are not shown how to submit work, no value appears. The consumer contributes data, time, adoption effort and feedback. This is why modern service management treats the relationship, not just the service, as the unit of design: onboarding, training, communication and feedback loops are part of how value is produced."
    },
    {
     "type": "keypoints",
     "items": [
      "A **product** is a configuration of the provider's resources (people, technology, partners, processes) designed to be valuable to a consumer group.",
      "A **service offering** is how part of a product is presented to a consumer: goods transferred, access to resources granted, and service actions performed.",
      "One product can support many offerings: a cloud platform product can be offered as a basic tier for start-ups and a regulated tier for banks.",
      "Consumers see offerings; providers manage products. Confusing the two leads to catalogues full of internal components nobody can order."
     ],
     "title": "Products, offerings and services"
    },
    {
     "type": "tree",
     "title": "One product, several offerings",
     "root": {
      "label": "Product: cloud hosting platform",
      "text": "People, technology, partners and processes run by the provider",
      "children": [
       {
        "label": "Offering: start-up tier",
        "children": [
         {
          "label": "Access granted",
          "text": "Shared compute and storage"
         },
         {
          "label": "Actions performed",
          "text": "Business-hours support"
         }
        ]
       },
       {
        "label": "Offering: regulated tier",
        "children": [
         {
          "label": "Goods transferred",
          "text": "Hardware security tokens"
         },
         {
          "label": "Access granted",
          "text": "Dedicated in-country hosting"
         },
         {
          "label": "Actions performed",
          "text": "24/7 support and audit reports"
         }
        ]
       }
      ]
     },
     "caption": "Consumers order offerings; the provider manages the product behind them. Each offering is a mix of goods transferred, access granted and actions performed."
    },
    {
     "type": "scenario",
     "title": "Defining the service properly",
     "situation": "The IT team of a mobile financial services provider in Dhaka publishes a service catalogue listing 'Core Banking Database Cluster', 'API Gateway' and 'SMS Aggregator Link'. Merchant support staff say they cannot find anything they can ask for. What is the best improvement?",
     "options": [
      {
       "text": "Add detailed technical descriptions, owners and dependency diagrams to each component so that support staff understand what it does",
       "feedback": "More detail on components does not help people who think in terms of merchants and settlements; it keeps the provider's point of view.",
       "best": false
      },
      {
       "text": "Train the merchant support staff on the technical architecture",
       "feedback": "This shifts the burden to the consumer. Services should be understandable without knowing the architecture.",
       "best": false
      },
      {
       "text": "Rename entries around consumer outcomes such as 'Merchant settlement', with components mapped underneath",
       "feedback": "Correct. Consumers recognise outcomes. Components still matter, but they belong in the provider's internal view and in configuration data, linked to the services they support.",
       "best": true
      },
      {
       "text": "Remove the catalogue and route all requests through email to the IT manager",
       "feedback": "This removes visibility and creates a bottleneck; the problem is the catalogue's framing, not its existence.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Service value statement",
     "purpose": "Describe one service from the consumer's side before you manage it.",
     "columns": [
      "Service",
      "Consumer group",
      "Outcomes enabled",
      "Costs removed / added",
      "Risks removed / added",
      "Utility and warranty must-haves"
     ],
     "example": [
      [
       "Merchant settlement",
       "Retail merchants",
       "Next-morning cash in bank account",
       "Removed: manual reconciliation / Added: monthly fee",
       "Removed: cash handling / Added: platform dependency",
       "Correct netting; 99.9% availability 06:00–24:00"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Service",
       "def": "A means of enabling outcomes for a consumer while the provider carries specified costs and risks on the consumer's behalf."
      },
      {
       "term": "Outcome",
       "def": "A result the consumer wants to achieve, such as faster admissions or fewer failed payments."
      },
      {
       "term": "Co-creation of value",
       "def": "The idea that value appears only when provider and consumer both contribute: the provider supplies resources, the consumer adopts and uses them."
      },
      {
       "term": "Utility",
       "def": "The functionality of a service: what it does to support an outcome; fitness for purpose."
      },
      {
       "term": "Warranty",
       "def": "Assurance that a service meets agreed requirements for availability, capacity, security and continuity; fitness for use."
      },
      {
       "term": "Service offering",
       "def": "A formal description of one or more services as presented to a consumer group, combining goods, access to resources and service actions."
      },
      {
       "term": "Sponsor",
       "def": "The person or body that authorises budget for service consumption."
      },
      {
       "term": "Service relationship",
       "def": "The cooperation between provider and consumer, including provision, consumption and relationship management activities."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick one service your organisation provides. Write one sentence describing it in your team's language and one in the language of its users. How different are they?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A service enables outcomes while the provider carries costs and risks the consumer would otherwise hold.",
      "Customer, user and sponsor are different roles with different priorities; design for all three.",
      "Value needs both utility (fit for purpose) and warranty (fit for use).",
      "Value is co-created: adoption, data and feedback from consumers are part of producing it.",
      "Catalogues should show offerings in consumer language, not internal components."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A provider says its new HR portal is 'excellent' because it has 40 features. Users still email HR for most requests. Which concept best explains the gap?",
       "options": [
        "The sponsor has not yet funded enough features to make the portal attractive to users",
        "Value is co-created, so adoption is part of producing value",
        "Users are not part of the service relationship",
        "The portal lacks warranty because it has too many features"
       ],
       "answer": 1,
       "explain": "Features (utility) do not produce value unless consumers adopt the service. Onboarding, design and communication are part of value co-creation. Warranty, funding and user roles do not explain low adoption here."
      },
      {
       "q": "Which statement describes warranty rather than utility?",
       "options": [
        "The service is available 99.95% of business hours",
        "The service lets agents reset customer PINs after verifying identity",
        "The service shows stock levels for each warehouse",
        "The service calculates VAT on each invoice"
       ],
       "answer": 0,
       "explain": "Availability is an assurance property: fitness for use. The other three describe functions the service performs: utility."
      },
      {
       "q": "In a university, the Registrar defines what the admissions system must do, students use it and the Finance Committee approves its budget. Who is the sponsor?",
       "options": [
        "The Registrar",
        "The Finance Committee",
        "The students",
        "The IT department as service provider"
       ],
       "answer": 1,
       "explain": "The sponsor authorises budget. The Registrar acts as customer, students are users, and IT is the provider."
      },
      {
       "q": "Why should a service catalogue be organised around consumer outcomes rather than technical components?",
       "options": [
        "Technical components never change, so they need no catalogue",
        "Consumers recognise and request outcomes, not components",
        "Components are confidential and must never be documented",
        "Outcome-based catalogues remove the need for any configuration data about components"
       ],
       "answer": 1,
       "explain": "The catalogue is a consumer-facing tool. Components still need documenting, but in configuration data linked to services, not as the items consumers order."
      },
      {
       "q": "A cloud migration removes the cost of a hospital's own data centre but adds dependency on one provider's region. How should a service manager present this?",
       "options": [
        "As a shift in both costs and risks for the customer to weigh",
        "As a technical matter that the customer need not see",
        "As a warranty failure that blocks the migration",
        "As pure cost saving, since the data centre and its staff are no longer needed"
       ],
       "answer": 0,
       "explain": "Every service removes some costs and risks and introduces others. Making both visible lets the customer judge value honestly."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l2",
   "title": "The Service Value System",
   "subtitle": "How demand becomes value through one connected operating model",
   "minutes": 35,
   "objectives": [
    "Describe the components of the service value system and how they connect",
    "Explain why silos destroy value and how the system view counters them",
    "Relate organisational agility and resilience to the design of the value system"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A service organisation is not a list of processes. It is a **system**: a set of parts whose interactions produce something none of them can produce alone. The **service value system** is a model of how all the parts of an organisation work together to turn opportunity and demand into value. Its power is that it forces leaders to see the whole: strategy, governance, everyday work and improvement as one machine."
    },
    {
     "type": "layers",
     "title": "The service value system at a glance",
     "items": [
      {
       "label": "Value",
       "parts": [
        "Outcomes for consumers and stakeholders",
        "Measured by benefit, cost and risk"
       ]
      },
      {
       "label": "Service value chain",
       "parts": [
        "Plan",
        "Improve",
        "Engage",
        "Design and transition",
        "Obtain or build",
        "Deliver and support"
       ]
      },
      {
       "label": "Practices",
       "parts": [
        "Organisational resources for specific work",
        "Service desk, incident, change and many more"
       ]
      },
      {
       "label": "Guiding principles and governance",
       "parts": [
        "Seven principles steer decisions",
        "Governance evaluates, directs and monitors"
       ]
      },
      {
       "label": "Continual improvement",
       "parts": [
        "Runs at every level and in every component"
       ]
      },
      {
       "label": "Opportunity and demand",
       "parts": [
        "Ideas, needs and requests that trigger value creation"
       ]
      }
     ]
    },
    {
     "type": "flow",
     "title": "From demand to value",
     "items": [
      {
       "label": "Opportunity / demand",
       "text": "A need or an idea arrives: a new regulation, a customer request, an outage"
      },
      {
       "label": "Principles & governance",
       "text": "Decide whether and how to respond"
      },
      {
       "label": "Value chain",
       "text": "Activities combine in a value stream to respond"
      },
      {
       "label": "Practices",
       "text": "Supply the capabilities each activity needs"
      },
      {
       "label": "Value",
       "text": "Outcomes are realised and measured"
      }
     ]
    },
    {
     "type": "table",
     "title": "Components and what goes wrong without them",
     "head": [
      "Component",
      "Purpose",
      "Symptom when it is weak"
     ],
     "rows": [
      [
       "Guiding principles",
       "Shared rules of thumb for decisions in any situation",
       "Every team argues from first principles; decisions are inconsistent"
      ],
      [
       "Governance",
       "Direction and oversight by those accountable",
       "Activity without priorities; risk taken without anyone knowing"
      ],
      [
       "Service value chain",
       "Operating model of six activities",
       "Work handed over the wall between disconnected departments"
      ],
      [
       "Practices",
       "Sets of resources for specific types of work",
       "Heroics replace capability; knowledge sits in individuals"
      ],
      [
       "Continual improvement",
       "Ongoing alignment with changing needs",
       "The organisation is optimised for last year's problems"
      ]
     ]
    },
    {
     "type": "tree",
     "title": "Components of the service value system",
     "root": {
      "label": "Service value system",
      "text": "Opportunity and demand in, value out",
      "children": [
       {
        "label": "Guiding principles",
        "text": "Seven rules of thumb for any decision"
       },
       {
        "label": "Governance",
        "text": "Evaluate, direct, monitor"
       },
       {
        "label": "Service value chain",
        "text": "Plan · Improve · Engage · Design and transition · Obtain/build · Deliver and support"
       },
       {
        "label": "Practices",
        "children": [
         {
          "label": "General management",
          "text": "e.g. risk, portfolio, workforce"
         },
         {
          "label": "Service management",
          "text": "e.g. incident, change, service desk"
         },
         {
          "label": "Technical management",
          "text": "e.g. deployment, infrastructure"
         }
        ]
       },
       {
        "label": "Continual improvement",
        "text": "At every level, all the time"
       }
      ]
     },
     "caption": "Five components sit between demand and value. When one is weak, the symptom usually appears somewhere else: as delay, inconsistency or unmanaged risk."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Silos form when each department optimises its own measures: the service desk closes tickets fast, development ships features fast, operations keeps change low. Each looks good; the consumer still waits two weeks for a working fix. The value system view asks one question of every team: how does your work move value towards the consumer?",
     "title": "The silo trap"
    },
    {
     "type": "compare",
     "title": "Agility and resilience",
     "columns": [
      {
       "title": "Organisational agility",
       "items": [
        "Ability to move and adapt quickly",
        "Short feedback loops",
        "Decisions taken close to the work",
        "Example: an e-commerce team releasing a new payment option before Eid in two weeks"
       ]
      },
      {
       "title": "Organisational resilience",
       "items": [
        "Ability to absorb shocks and recover",
        "Redundancy, rehearsed recovery, diverse suppliers",
        "Example: a bank continuing card payments through a regional power failure"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Agility and resilience are often presented as opposites, but a well-designed value system needs both. Automated testing and small changes increase speed **and** reduce failure impact. Clear governance lets teams move fast inside agreed boundaries. The master-level skill is to design the system so that speed and safety reinforce each other instead of competing."
    },
    {
     "type": "steps",
     "title": "Using the value system as a diagnostic",
     "items": [
      {
       "title": "Start from a real demand",
       "text": "Choose a recent, important piece of demand: a major incident, a new branch opening, a regulatory change."
      },
      {
       "title": "Trace it through",
       "text": "Follow it from arrival to value realised. Note every handover, queue and decision point."
      },
      {
       "title": "Check each component",
       "text": "Were principles applied? Did governance set priorities? Which value chain activities and practices were used?"
      },
      {
       "title": "Find the weakest link",
       "text": "Identify where time, quality or information was lost the most."
      },
      {
       "title": "Improve deliberately",
       "text": "Feed that weakness into the improvement backlog with an owner and a measure."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Choosing where to intervene",
     "situation": "A power distribution company in Khulna reports that customer complaints about billing errors take 25 days to resolve. The service desk logs them in an hour, billing analysts fix them in two days, but cases wait weeks for approval from a finance committee that meets monthly. What should the service manager do first?",
     "options": [
      {
       "text": "Hire more billing analysts to speed up corrections",
       "feedback": "Analysts already finish in two days; more of them will not shorten a wait caused by approval cadence.",
       "best": false
      },
      {
       "text": "Set a stricter target for the service desk to log every complaint within 15 minutes and report compliance weekly to management",
       "feedback": "Logging is already fast. Optimising a non-constraint looks good locally and changes nothing for the customer.",
       "best": false
      },
      {
       "text": "Show the end-to-end flow to governance and propose delegated approval limits for small corrections",
       "feedback": "Correct. The constraint is a governance decision point, not the desk or the analysts. Delegating low-value corrections within agreed limits addresses the real delay.",
       "best": true
      },
      {
       "text": "Automate the complaint form so customers enter more data",
       "feedback": "Better data may help a little, but it ignores the 25-day approval queue.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Value system health check",
     "items": [
      "We can name our most important services and the outcomes they enable",
      "Governance sets priorities that teams can see and apply",
      "Our guiding principles are known and referenced in decisions",
      "We can trace any important demand end to end",
      "Practices have named owners and measurable capability",
      "Improvement work is visible, prioritised and resourced",
      "We measure agility (lead time) and resilience (recovery time) together"
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Service value system (SVS)",
       "def": "A model of how all components and activities of an organisation work together to turn opportunity and demand into value."
      },
      {
       "term": "Opportunity",
       "def": "A possibility to add value for stakeholders or improve the organisation, not yet requested by a consumer."
      },
      {
       "term": "Demand",
       "def": "Need or desire for products and services from internal and external consumers."
      },
      {
       "term": "Practice",
       "def": "A set of organisational resources designed for performing work or accomplishing an objective."
      },
      {
       "term": "Silo",
       "def": "A team or department that optimises its own work and measures at the expense of the end-to-end flow of value."
      },
      {
       "term": "Organisational agility",
       "def": "The ability of an organisation to move and adapt quickly, flexibly and decisively."
      },
      {
       "term": "Organisational resilience",
       "def": "The ability of an organisation to anticipate, absorb and recover from disruption."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Trace one important piece of demand your organisation handled this year. Where did it wait longest, and which part of the value system owned that wait?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The service value system shows how every part of the organisation turns demand into value.",
      "Its components are guiding principles, governance, the value chain, practices and continual improvement.",
      "Silos that optimise local measures slow the end-to-end flow the consumer experiences.",
      "Agility and resilience can rise together through small, automated, reversible changes.",
      "Trace real demand through the system to find the weakest link before redesigning anything."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the main purpose of the service value system model?",
       "options": [
        "To replace governance with a set of practices",
        "To define the technical architecture that underpins each service",
        "To show how all parts of an organisation turn demand into value",
        "To list every process an IT department must document and audit"
       ],
       "answer": 2,
       "explain": "The SVS is an operating view of the whole organisation. It is not a process list, a replacement for governance, or a technical architecture."
      },
      {
       "q": "Each department in a company meets its targets, yet customers still wait weeks for fixes. What is the most likely cause?",
       "options": [
        "Too few guiding principles",
        "Silos optimising local measures instead of end-to-end flow",
        "A lack of service desk staff to log and route customer requests",
        "Excessive automation of handovers"
       ],
       "answer": 1,
       "explain": "When every part looks good locally but the outcome is poor, the gaps are in the handovers and local measures. That is the silo pattern."
      },
      {
       "q": "Which statement about agility and resilience is most accurate?",
       "options": [
        "Good design can raise both, for example with small automated changes",
        "Resilience matters only to infrastructure teams",
        "They are opposites, so leaders must consciously choose one over the other",
        "Agility means removing governance entirely"
       ],
       "answer": 0,
       "explain": "Small, tested, automated changes increase speed and reduce the blast radius of failure. Governance sets boundaries rather than being removed."
      },
      {
       "q": "In the value system, what triggers value creation?",
       "options": [
        "The annual budget cycle",
        "The service desk",
        "Continual improvement",
        "Opportunity and demand"
       ],
       "answer": 3,
       "explain": "Opportunity and demand are the inputs; the rest of the system responds to them."
      },
      {
       "q": "A diagnostic finds that a monthly committee is the constraint in a complaint process. Which component of the value system is the weak link?",
       "options": [
        "Monitoring and event management",
        "Supplier management",
        "Governance and decision-making",
        "The service desk practice"
       ],
       "answer": 2,
       "explain": "The delay sits in a decision point owned by governance. Desk, monitoring and suppliers are not involved in that wait."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l3",
   "title": "The Seven Guiding Principles in Practice",
   "subtitle": "Seven rules of thumb that survive any framework, method or tool",
   "minutes": 40,
   "objectives": [
    "Explain each guiding principle in your own words with a practical example",
    "Apply several principles together to a messy, real decision",
    "Recognise when principles pull in different directions and resolve the tension"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Frameworks change; good judgement does not. The guiding principles are seven short pieces of advice that apply to any service decision, at any scale, whether you run a five-person IT team at a clinic or a 2,000-person technology division at a telecom operator. They are not steps. They are lenses: before you commit to a decision, look at it through each one."
    },
    {
     "type": "timeline",
     "title": "How IT service management practice has evolved",
     "items": [
      {
       "when": "Late 1980s",
       "label": "Public-sector origins",
       "text": "UK government guidance gathers good practice for running IT services; the first ITIL® books appear."
      },
      {
       "when": "2000–2007",
       "label": "Process era",
       "text": "Versions 2 and 3 popularise process-based and lifecycle-based service management."
      },
      {
       "when": "2005",
       "label": "A certifiable standard",
       "text": "ISO/IEC 20000 is first published; the current edition of part 1 dates from 2018."
      },
      {
       "when": "2009–2016",
       "label": "DevOps and SRE",
       "text": "Practitioner movements show speed and stability can rise together; SRE practices become widely published."
      },
      {
       "when": "2019",
       "label": "ITIL 4",
       "text": "A value-system and practice-based model aligned with Agile, Lean and DevOps."
      },
      {
       "when": "2021",
       "label": "New ownership",
       "text": "The framework's owner becomes part of PeopleCert."
      },
      {
       "when": "2020s",
       "label": "Experience, product and AI",
       "text": "XLAs, product and platform operating models, enterprise service management and AI-assisted operations go mainstream."
      },
      {
       "when": "Today",
       "label": "Continuing evolution",
       "text": "The official framework keeps evolving after ITIL 4; check the owner's current publications for what has changed."
      }
     ],
     "caption": "Frameworks are revised roughly once a decade, while the principles beneath them have stayed remarkably stable. Dates for movements such as DevOps are approximate because they spread gradually."
    },
    {
     "type": "framework",
     "title": "The seven guiding principles",
     "items": [
      {
       "label": "P1",
       "title": "Focus on value",
       "text": "Every activity should link, directly or indirectly, to value for someone. Know who the consumer is, what they value and how your work changes it. If you cannot explain the link, question the work."
      },
      {
       "label": "P2",
       "title": "Start where you are",
       "text": "Before building something new, observe what already exists and what already works. Measure it directly instead of trusting reports or memories. Reuse is cheaper and less risky than reinvention."
      },
      {
       "label": "P3",
       "title": "Progress iteratively with feedback",
       "text": "Break work into small pieces that each deliver something usable. Gather feedback after each piece and change course when it shows you are wrong."
      },
      {
       "label": "P4",
       "title": "Collaborate and promote visibility",
       "text": "Involve the right people early and make work, constraints and decisions visible. Hidden work creates mistrust; visible work invites help."
      },
      {
       "label": "P5",
       "title": "Think and work holistically",
       "text": "No service is delivered by one team or one technology. Consider people, information, partners and processes together, and how changes ripple across the system."
      },
      {
       "label": "P6",
       "title": "Keep it simple and practical",
       "text": "Use the fewest steps that achieve the objective. Remove anything that adds no value, and design for exceptions rather than burdening every case."
      },
      {
       "label": "P7",
       "title": "Optimise and automate",
       "text": "First make work as effective and useful as it can be, then automate. Automating a bad process just produces bad results faster."
      }
     ]
    },
    {
     "type": "table",
     "title": "Principles applied to one situation: replacing a hospital's paging system",
     "head": [
      "Principle",
      "What it changes in practice"
     ],
     "rows": [
      [
       "Focus on value",
       "Define value as 'time for a nurse to reach the on-call doctor', not 'new paging hardware installed'"
      ],
      [
       "Start where you are",
       "Measure today's response times and keep the reliable escalation rotas already in use"
      ],
      [
       "Progress iteratively",
       "Pilot in one ward, then two, before the whole hospital"
      ],
      [
       "Collaborate & visibility",
       "Involve nurses, doctors, switchboard and security; show pilot data on the ward board"
      ],
      [
       "Think holistically",
       "Consider Wi-Fi coverage, device charging, shift handover and the supplier's support hours"
      ],
      [
       "Keep it simple",
       "One escalation path for emergencies; remove three legacy fallback steps nobody follows"
      ],
      [
       "Optimise & automate",
       "Fix the rota data first, then automate escalation when a page is unanswered for two minutes"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "In a design review, assign one principle to each participant and ask them to argue from it. The person holding 'keep it simple' attacks every extra approval; the person holding 'think holistically' asks who else is affected. Tensions surface early, while they are cheap to resolve.",
     "title": "Use the principles as a challenge, not a checklist"
    },
    {
     "type": "compare",
     "title": "When principles appear to conflict",
     "columns": [
      {
       "title": "Tension",
       "items": [
        "Keep it simple vs think holistically",
        "Progress iteratively vs focus on value",
        "Optimise and automate vs start where you are"
       ]
      },
      {
       "title": "How to resolve",
       "items": [
        "Consider the whole system, then choose the simplest design that respects it",
        "Make each iteration deliver a small slice of real value, not just activity",
        "Measure the current state first; automate what has proven to work"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A garment exporter automated its purchase-approval workflow without simplifying it. The new tool faithfully reproduced eleven approval steps, three of which existed only because of a fraud case in 2009. Approval time stayed at nine days. Optimise first: remove waste, then automate what remains.",
     "title": "Automating the mess"
    },
    {
     "type": "steps",
     "title": "Applying the principles to a decision",
     "items": [
      {
       "title": "State the decision",
       "text": "Write the decision in one sentence and who it affects."
      },
      {
       "title": "Walk the seven lenses",
       "text": "For each principle, note one risk or improvement it reveals."
      },
      {
       "title": "Identify tensions",
       "text": "Mark any two principles pulling in different directions."
      },
      {
       "title": "Choose and justify",
       "text": "Pick the option that best balances them and record why."
      },
      {
       "title": "Plan the feedback",
       "text": "Decide what evidence will tell you, early, whether you were right."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A rushed tool replacement",
     "situation": "The CIO of a private university wants to replace the IT ticketing tool within one month because staff complain it is slow. Nobody has measured where time is actually lost. Which response best reflects the guiding principles?",
     "options": [
      {
       "text": "Measure where requests wait, fix quick wins, then pilot any new tool in one faculty",
       "feedback": "Correct. This starts where you are, focuses on the real value problem, and progresses iteratively with feedback before a full commitment.",
       "best": true
      },
      {
       "text": "Buy the tool with the most features so all future needs are covered",
       "feedback": "Feature count is not value. Without evidence of where delay occurs, a new tool may reproduce the same problems.",
       "best": false
      },
      {
       "text": "Replace the tool across every faculty at once to avoid the cost and confusion of running two systems in parallel",
       "feedback": "A big-bang change ignores iterative progress and feedback; any mistake affects every faculty at once.",
       "best": false
      },
      {
       "text": "Refuse the change because the current tool works technically",
       "feedback": "Users are experiencing poor value. Ignoring their complaints contradicts the focus-on-value principle.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Principle lens worksheet",
     "purpose": "Test an important decision against all seven principles before committing.",
     "columns": [
      "Principle",
      "What this decision does well",
      "Risk or gap",
      "Action"
     ],
     "example": [
      [
       "Start where you are",
       "Reuses existing escalation rota",
       "Response times never measured",
       "Sample 200 pages before pilot"
      ]
     ],
     "rows": 7
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Guiding principle",
       "def": "A recommendation that guides an organisation in all circumstances, regardless of changes in goals, strategies, type of work or structure."
      },
      {
       "term": "Focus on value",
       "def": "The principle that all activities should link back, directly or indirectly, to value for stakeholders."
      },
      {
       "term": "Start where you are",
       "def": "The principle of observing and reusing what already exists before building something new."
      },
      {
       "term": "Iteration",
       "def": "A small, time-boxed piece of work that produces a usable result and invites feedback."
      },
      {
       "term": "Feedback loop",
       "def": "A mechanism by which the results of an action are observed and used to adjust the next action."
      },
      {
       "term": "Holistic thinking",
       "def": "Considering the whole system, including all dimensions and their interactions, rather than one part in isolation."
      },
      {
       "term": "Waste",
       "def": "Any activity or step that consumes resources without adding value for the consumer."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which of the seven principles does your organisation apply least? Describe one recent decision that would have turned out better if it had been applied."
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The seven principles are lenses for judgement, not steps to follow in order.",
      "Start where you are: measure the current state before replacing anything.",
      "Optimise before you automate, or you automate the waste.",
      "When principles pull in different directions, make the tension and your resolution explicit.",
      "Frameworks change over time; principle-based judgement transfers to whatever comes next."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A team plans to automate a nine-step approval workflow exactly as it is today. Which principle is most at risk?",
       "options": [
        "Focus on value",
        "Start where you are",
        "Optimise and automate",
        "Collaborate and promote visibility"
       ],
       "answer": 2,
       "explain": "The principle says to optimise before automating. Automating an unexamined process locks in its waste."
      },
      {
       "q": "Before redesigning a service desk, a manager spends a week observing calls and measuring queue times. Which principle is she applying?",
       "options": [
        "Start where you are",
        "Think and work holistically",
        "Keep it simple and practical",
        "Progress iteratively with feedback"
       ],
       "answer": 0,
       "explain": "Direct observation and measurement of the current state is the heart of starting where you are."
      },
      {
       "q": "Which choice best reflects 'progress iteratively with feedback' for a nationwide rollout of a new branch system?",
       "options": [
        "Let each branch decide its own timing without reporting",
        "Pilot in a few branches, learn, then expand in waves",
        "Delay launch until every possible feature is complete",
        "Train all staff once, then switch every branch on one weekend"
       ],
       "answer": 1,
       "explain": "Small, staged deliveries with learning between them reduce risk and improve the result."
      },
      {
       "q": "Two principles appear to conflict: 'keep it simple' and 'think holistically'. What is the best resolution?",
       "options": [
        "Always favour holism, since simplicity ignores important dependencies between teams",
        "Always favour simplicity, since holism adds complexity",
        "See the whole system, then pick the simplest design that respects it",
        "Escalate every such conflict to the board"
       ],
       "answer": 2,
       "explain": "The principles work together: holistic thinking reveals what matters, simplicity removes everything else."
      },
      {
       "q": "A change team publishes its weekly work board, blockers and decisions on the intranet. Which principle does this most directly support?",
       "options": [
        "Collaborate and promote visibility",
        "Start where you are",
        "Think and work holistically",
        "Optimise and automate"
       ],
       "answer": 0,
       "explain": "Making work and decisions visible builds trust and invites collaboration."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l4",
   "title": "Governance and Continual Improvement in the Value System",
   "subtitle": "Who directs the system, and how it keeps getting better",
   "minutes": 40,
   "objectives": [
    "Explain how governance evaluates, directs and monitors service management",
    "Apply a structured continual improvement model to a real problem",
    "Lead improvement as an everyday habit rather than an annual project"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Governance answers a simple question: **who decides, on what basis, and how do we know it is working?** In a company the governing body is usually the board; in a public university, the syndicate or council; in a government hospital, a management committee under a ministry. Governance is not management. Managers plan and run work; governance sets direction, approves the boundaries within which managers act, and checks that results match intentions."
    },
    {
     "type": "cycle",
     "title": "The governance cycle",
     "center": "Governing body",
     "items": [
      {
       "label": "Evaluate",
       "text": "Assess the organisation, its strategy, risks and stakeholder needs."
      },
      {
       "label": "Direct",
       "text": "Set priorities, policies, risk appetite and accountability."
      },
      {
       "label": "Monitor",
       "text": "Check performance and conformance against what was directed, then evaluate again."
      }
     ],
     "caption": "Governance never finishes: what monitoring reveals feeds the next evaluation. A board that only directs, and never monitors, is governing blind."
    },
    {
     "type": "table",
     "title": "Governance versus management",
     "head": [
      "Aspect",
      "Governance",
      "Management"
     ],
     "rows": [
      [
       "Question",
       "Are we doing the right things, the right way, within risk appetite?",
       "How do we do these things well?"
      ],
      [
       "Typical bodies",
       "Board, audit committee, IT steering committee",
       "Heads of service, practice owners, team leads"
      ],
      [
       "Outputs",
       "Strategy approval, policies, risk appetite, investment decisions",
       "Plans, schedules, staffing, procedures, reports"
      ],
      [
       "Time horizon",
       "Quarters and years",
       "Days, weeks and months"
      ],
      [
       "Typical failure",
       "Rubber-stamping or micromanaging",
       "Activity without alignment to direction"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Good governance makes teams faster, not slower. When a board sets a clear risk appetite and delegates authority within it, a change team can approve low-risk changes in minutes without escalation. When boundaries are unclear, every decision drifts upward and waits for a meeting.",
     "title": "Governance should enable speed"
    },
    {
     "type": "framework",
     "title": "The continual improvement model",
     "items": [
      {
       "label": "1",
       "title": "What is the vision?",
       "text": "Link the improvement to the organisation's direction and the value it should create."
      },
      {
       "label": "2",
       "title": "Where are we now?",
       "text": "Assess the current state objectively with data: baselines, maturity, stakeholder views."
      },
      {
       "label": "3",
       "title": "Where do we want to be?",
       "text": "Define a measurable target state and the gap to close."
      },
      {
       "label": "4",
       "title": "How do we get there?",
       "text": "Plan the route: options, experiments, iterations and owners."
      },
      {
       "label": "5",
       "title": "Take action",
       "text": "Execute in small steps, measuring as you go."
      },
      {
       "label": "6",
       "title": "Did we get there?",
       "text": "Compare results to the target; confirm benefits are real."
      },
      {
       "label": "7",
       "title": "How do we keep momentum?",
       "text": "Embed the change, celebrate success, and feed lessons into the next cycle."
      }
     ]
    },
    {
     "type": "cycle",
     "title": "The continual improvement model as a loop",
     "center": "Continual improvement",
     "items": [
      {
       "label": "Vision",
       "text": "Why are we improving, and what value should it create?"
      },
      {
       "label": "Current state",
       "text": "Baseline with data before changing anything."
      },
      {
       "label": "Target state",
       "text": "A measurable goal and the gap to close."
      },
      {
       "label": "Plan the route",
       "text": "Options, experiments and owners."
      },
      {
       "label": "Take action",
       "text": "Deliver in small, safe iterations."
      },
      {
       "label": "Check results",
       "text": "Did the measures move? If not, learn why."
      },
      {
       "label": "Keep momentum",
       "text": "Embed the change, recognise it and pick the next gap."
      }
     ],
     "caption": "The last step leads straight back to the first. Skipping the baseline (step 2) is the most common reason improvement claims cannot be proven later."
    },
    {
     "type": "keypoints",
     "items": [
      "Keep one **continual improvement register** (CIR) for the whole organisation, visible to everyone.",
      "Every team reserves a fixed share of capacity, such as 10–20%, for improvement work.",
      "Prioritise improvement ideas by value, effort and risk, not by who shouts loudest.",
      "Measure benefits after implementation; close ideas that produced none and learn why.",
      "Leaders model the habit by asking 'what did we learn?' after every major event."
     ],
     "title": "Making improvement a habit"
    },
    {
     "type": "template",
     "title": "Continual improvement register",
     "purpose": "Capture, prioritise and track improvement ideas across the organisation.",
     "columns": [
      "ID",
      "Idea and problem it solves",
      "Value / effort / risk",
      "Owner",
      "Status",
      "Measured benefit"
     ],
     "example": [
      [
       "CI-014",
       "Self-service password reset to remove 22% of desk calls",
       "High / Medium / Low",
       "Service desk lead",
       "In pilot",
       "Target: 1,800 fewer calls a month"
      ]
     ],
     "rows": 8
    },
    {
     "type": "case",
     "title": "Governance after a payments outage",
     "context": "A mobile financial services provider in Dhaka suffered a seven-hour outage on the last working day before Eid, affecting 4 million wallet users. The board learns that a database upgrade was approved by an operations manager under a general 'routine maintenance' category. There is no defined risk appetite for customer-facing changes during peak periods, and the improvement register holds 140 open items with no owners.",
     "questions": [
      "What governance failures contributed to the outage?",
      "What should the board direct, and what should it delegate?",
      "How would you restore the improvement register to a useful tool?"
     ],
     "answer": "The board had not set a risk appetite for peak periods, so a high-risk change was approved under a routine category: a failure to **direct**. Nobody reported change risk to the board: a failure to **monitor**. The board should direct a risk appetite (for example, no non-emergency changes to payment systems during declared peak windows), define change categories and delegated authority, and require regular reporting on change success and incidents. It should not approve individual changes. The register should be triaged: close stale items, merge duplicates, assign owners to the top 15 by value, and review progress monthly with measured benefits."
    },
    {
     "type": "scenario",
     "title": "Improvement without a baseline",
     "situation": "A hospital IT director wants to report that a new monitoring tool 'improved availability'. Nobody recorded availability before the tool went live. What should she do now?",
     "options": [
      {
       "text": "Estimate the old availability from the memories of senior engineers and report the difference as the improvement",
       "feedback": "Memory-based baselines are unreliable and can mislead governance.",
       "best": false
      },
      {
       "text": "Report only that the tool was delivered on time and on budget",
       "feedback": "Delivery is not benefit; this avoids the real question of value.",
       "best": false
      },
      {
       "text": "Report current availability, state that no baseline exists, and start measuring now",
       "feedback": "Correct. Honesty about evidence protects credibility. Establishing measurement now allows real improvement claims later.",
       "best": true
      },
      {
       "text": "Delay all reporting until a full year of new data exists",
       "feedback": "Some reporting with clear caveats is better than none; governance still needs visibility.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Governance",
       "def": "The means by which an organisation is directed and controlled, through evaluating, directing and monitoring."
      },
      {
       "term": "Governing body",
       "def": "The person or group accountable at the highest level for the performance and conformance of the organisation."
      },
      {
       "term": "Risk appetite",
       "def": "The amount and type of risk an organisation is willing to take in pursuit of its objectives."
      },
      {
       "term": "Continual improvement",
       "def": "Recurring activity at all levels to keep services and practices aligned with changing needs."
      },
      {
       "term": "Continual improvement register (CIR)",
       "def": "A single, prioritised record of improvement ideas with owners, status and measured benefits."
      },
      {
       "term": "Baseline",
       "def": "A measured starting point used to judge whether an improvement actually changed anything."
      },
      {
       "term": "Delegated authority",
       "def": "Decision rights passed by governance to management within defined boundaries."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Who in your organisation can approve a risky change during a peak business period? Is that authority written down, and does the governing body know?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Governance evaluates, directs and monitors; management plans and runs the work.",
      "Clear risk appetite and delegated authority make good governance a source of speed.",
      "The continual improvement model is a loop: baseline first, measure benefits after.",
      "Keep one visible improvement register and reserve capacity for improvement work.",
      "After major failures, governance should fix decision rights and policy, not just blame."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which activity belongs to governance rather than management?",
       "options": [
        "Setting the risk appetite for customer-facing changes",
        "Assigning engineers to on-call rotas",
        "Scheduling the weekend maintenance window",
        "Writing a step-by-step procedure for password resets"
       ],
       "answer": 0,
       "explain": "Setting risk appetite is a direction decision for the governing body. The others are management activities within that direction."
      },
      {
       "q": "A team wants to start an improvement but cannot say what success looks like. Which step of the improvement model is missing?",
       "options": [
        "Take action",
        "Where do we want to be?",
        "How do we keep momentum?",
        "What is the vision?"
       ],
       "answer": 1,
       "explain": "Defining the measurable target state is the 'where do we want to be' step. Without it, success cannot be judged."
      },
      {
       "q": "Why should improvement capacity be reserved in each team's plan?",
       "options": [
        "Because auditors require exactly 20% of every team's time to be left unused",
        "So that teams can avoid operational work",
        "Because improvement must be done only by a central team",
        "Otherwise urgent work consumes all the time available"
       ],
       "answer": 3,
       "explain": "Without protected capacity, the urgent always beats the important. Improvement is everyone's work, not a reason to avoid operations."
      },
      {
       "q": "After a major outage, which governance action is most appropriate?",
       "options": [
        "Ask management to stop all changes indefinitely until a full root-cause review is complete",
        "Replace the operations manager and take no further action",
        "Personally approve every future change at board level",
        "Direct a risk policy and delegated authority, then monitor"
       ],
       "answer": 3,
       "explain": "Governance sets direction and boundaries and then monitors. Approving each change, blaming one person or freezing change permanently all fail to fix the system."
      },
      {
       "q": "What is the main purpose of measuring benefits after an improvement?",
       "options": [
        "To decide who should be promoted",
        "To justify the cost of the improvement team",
        "To satisfy the supplier who provided the tool and its licences",
        "To confirm the goal was met, or learn why not"
       ],
       "answer": 3,
       "explain": "The 'did we get there?' step verifies value and creates learning. Justifying budgets or careers is not its purpose."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m2",
 "order": 2,
 "code": "Model",
 "title": "Four Dimensions and the Service Value Chain",
 "subtitle": "Model the whole system: people, information, partners and flows of work",
 "outcomes": [
  "Apply the four dimensions and external factors to any service design",
  "Build roles, culture and information practices that support service outcomes",
  "Choose sourcing models and integrate multiple suppliers around one service",
  "Map value streams across the six value chain activities and remove waste"
 ],
 "lessons": [
  {
   "id": "m2-l1",
   "title": "The Four Dimensions of Service Management",
   "subtitle": "A holistic lens that stops you designing only the technology",
   "minutes": 35,
   "objectives": [
    "Name the four dimensions and explain what each covers",
    "Use the dimensions to find blind spots in a service design",
    "Analyse external factors that shape every dimension"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "When an IT project fails, the post-mortem rarely blames the technology alone. More often the system worked, but the staff were not trained, the supplier contract did not cover weekend support, or nobody redesigned the approval workflow. The **four dimensions** are a simple discipline for avoiding this: every service, practice and change must be considered from four angles at once."
    },
    {
     "type": "framework",
     "title": "The four dimensions",
     "items": [
      {
       "label": "D1",
       "title": "Organisations and people",
       "text": "Structures, roles, responsibilities, culture, skills and capacity. Who does the work, who decides, and do they have the competence and motivation to do it well?"
      },
      {
       "label": "D2",
       "title": "Information and technology",
       "text": "The information a service needs and creates, and the technology that stores, processes and protects it: applications, platforms, networks, data, security and emerging tools."
      },
      {
       "label": "D3",
       "title": "Partners and suppliers",
       "text": "The other organisations involved in designing, building, delivering and supporting the service, and the contracts and relationships that govern them."
      },
      {
       "label": "D4",
       "title": "Value streams and processes",
       "text": "How the parts of the organisation work together: the sequence of activities, handovers and controls that turn demand into value."
      }
     ]
    },
    {
     "type": "tree",
     "title": "Four lenses on one service: hospital e-prescription",
     "root": {
      "label": "E-prescription service",
      "text": "One service, four dimensions, external PESTLE pressures on all of them",
      "children": [
       {
        "label": "Organisations and people",
        "children": [
         {
          "label": "Named service owner"
         },
         {
          "label": "Night-shift training"
         }
        ]
       },
       {
        "label": "Information and technology",
        "children": [
         {
          "label": "Accurate drug formulary"
         },
         {
          "label": "Ward Wi-Fi coverage"
         }
        ]
       },
       {
        "label": "Partners and suppliers",
        "children": [
         {
          "label": "24/7 vendor support"
         },
         {
          "label": "Exit and data terms"
         }
        ]
       },
       {
        "label": "Value streams and processes",
        "children": [
         {
          "label": "Doctor-to-patient flow"
         },
         {
          "label": "Downtime fallback"
         }
        ]
       }
      ]
     },
     "caption": "Each branch is a question the whole team must answer before go-live, not a department's private concern. A gap in any one branch can sink a technically perfect system."
    },
    {
     "type": "table",
     "title": "The four dimensions applied to a hospital e-prescription service",
     "head": [
      "Dimension",
      "Questions to ask",
      "Example finding"
     ],
     "rows": [
      [
       "Organisations and people",
       "Who owns the service? Are doctors and pharmacists trained? Is there out-of-hours support?",
       "No named service owner; night pharmacists never trained"
      ],
      [
       "Information and technology",
       "Which data is needed? Is it accurate, secure, available on wards?",
       "Drug formulary updated monthly by spreadsheet; Wi-Fi weak in two wards"
      ],
      [
       "Partners and suppliers",
       "Which vendors are involved? What do contracts promise?",
       "Software vendor support 09:00–17:00 only; prescriptions run 24/7"
      ],
      [
       "Value streams and processes",
       "How does a prescription flow from doctor to patient? Where are the handovers?",
       "Paper fallback process undocumented; delays when system is down"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "It is tempting to map each dimension to a team: HR for people, IT for technology, procurement for suppliers. That defeats the purpose. Each dimension is a **lens on the same service**, and every team must consider all four. A network engineer designing Wi-Fi for wards should think about who supports it at night and how nurses report faults.",
     "title": "Dimensions are not departments"
    },
    {
     "type": "framework",
     "title": "External factors that shape every dimension (PESTLE)",
     "items": [
      {
       "label": "P",
       "title": "Political",
       "text": "Government policy, public-sector priorities, stability. Example: a national digital-government programme mandating online services."
      },
      {
       "label": "E",
       "title": "Economic",
       "text": "Exchange rates, inflation, funding. Example: dollar shortages delaying imported hardware for Bangladeshi firms."
      },
      {
       "label": "S",
       "title": "Social",
       "text": "Demographics, expectations, digital literacy. Example: rapid growth of smartphone banking among rural users."
      },
      {
       "label": "T",
       "title": "Technological",
       "text": "New platforms, AI, cloud, obsolescence. Example: legacy systems losing vendor support."
      },
      {
       "label": "L",
       "title": "Legal",
       "text": "Data protection, telecom regulation, labour law. Example: personal-data rules requiring local storage."
      },
      {
       "label": "E",
       "title": "Environmental",
       "text": "Energy, climate, sustainability. Example: monsoon flooding and power cuts affecting data centres."
      }
     ]
    },
    {
     "type": "compare",
     "title": "A design with and without the four dimensions",
     "columns": [
      {
       "title": "Technology-only design",
       "items": [
        "New cloud platform selected",
        "Migration plan for servers",
        "Go-live date set",
        "Staff 'will learn on the job'",
        "Supplier contract copied from old one"
       ]
      },
      {
       "title": "Four-dimension design",
       "items": [
        "Platform selected against service outcomes",
        "Roles, skills and on-call model defined",
        "Data quality and security controls planned",
        "Contract aligned with 24/7 service hours",
        "Processes for request, incident and change redesigned"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A blind spot in a rollout",
     "situation": "A garment manufacturer in Narayanganj is rolling out a new production-tracking app to 6,000 line workers. The technology is tested and the vendor is ready. Line supervisors have not been consulted, and the factory network team works only day shift while production runs two shifts. What is the most important action before go-live?",
     "options": [
      {
       "text": "Run a further round of technical load testing to be sure the app can handle 6,000 users",
       "feedback": "Technology is already tested; more testing does not address the obvious people and support gaps.",
       "best": false
      },
      {
       "text": "Ask the vendor to add more features before launch",
       "feedback": "Features are not the constraint; adoption and support are.",
       "best": false
      },
      {
       "text": "Delay go-live indefinitely until every risk is removed",
       "feedback": "Risks should be managed, not eliminated. A targeted fix lets the rollout proceed safely.",
       "best": false
      },
      {
       "text": "Close the people and support gaps: involve supervisors and arrange night-shift support",
       "feedback": "Correct. The organisations-and-people dimension and the support model are the weakest. Technology readiness alone will not deliver value on the night shift.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Four-dimensions review",
     "purpose": "Review a service or change from all four angles before approving it.",
     "columns": [
      "Dimension",
      "Current state",
      "Gap or risk",
      "Action and owner"
     ],
     "example": [
      [
       "Partners and suppliers",
       "Vendor support weekdays 09:00–17:00",
       "Service runs 24/7",
       "Negotiate 24/7 severity-1 cover – Procurement lead"
      ]
     ],
     "rows": 4
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Four dimensions",
       "def": "Organisations and people; information and technology; partners and suppliers; value streams and processes: the perspectives that must all be considered for any service."
      },
      {
       "term": "Organisations and people",
       "def": "The dimension covering structures, roles, culture, skills and capacity."
      },
      {
       "term": "Information and technology",
       "def": "The dimension covering the information a service uses and creates and the technology that supports it."
      },
      {
       "term": "Partners and suppliers",
       "def": "The dimension covering other organisations involved in the service and how relationships with them are managed."
      },
      {
       "term": "Value streams and processes",
       "def": "The dimension covering how work is organised and coordinated to create value."
      },
      {
       "term": "PESTLE",
       "def": "A checklist of external factors: political, economic, social, technological, legal and environmental."
      },
      {
       "term": "Service owner",
       "def": "The person accountable for a service's performance and value across its life."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of a recent change that disappointed its users. Which of the four dimensions was neglected, and what would have exposed the gap earlier?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Every service, practice and change must be examined through all four dimensions at once.",
      "Dimensions are lenses on the same service, not a way to divide work between departments.",
      "PESTLE factors such as data localisation law or currency swings shape every dimension.",
      "Most failed launches neglected people, suppliers or processes rather than technology.",
      "A four-dimensions review before go-live finds gaps while they are still cheap to fix."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A new system is technically excellent but staff were never trained. Which dimension was neglected?",
       "options": [
        "Information and technology",
        "Value streams and processes for system testing",
        "Partners and suppliers",
        "Organisations and people"
       ],
       "answer": 3,
       "explain": "Training, skills and capacity belong to the organisations-and-people dimension."
      },
      {
       "q": "Why should the four dimensions not be assigned one each to separate departments?",
       "options": [
        "Because there are more than four departments",
        "Because only IT is allowed to manage dimensions",
        "They are lenses on the same service that every team must apply",
        "Because auditors require a single dimension owner for each service"
       ],
       "answer": 2,
       "explain": "Each dimension applies to every service and team. Splitting them by department recreates silos."
      },
      {
       "q": "A regulation requires personal data of citizens to be stored inside the country. Which external factor is this?",
       "options": [
        "Legal",
        "Economic",
        "Technological change in hosting and storage options",
        "Social"
       ],
       "answer": 0,
       "explain": "Data-residency rules are legal factors, even though they have technological consequences."
      },
      {
       "q": "Which finding belongs to the partners-and-suppliers dimension?",
       "options": [
        "Ward Wi-Fi coverage is weak",
        "The paper fallback process for outages is undocumented",
        "The vendor's support contract covers weekdays only",
        "Night staff are untrained"
       ],
       "answer": 2,
       "explain": "Contract terms with a vendor are part of partners and suppliers. The others are technology, people and process findings."
      },
      {
       "q": "What is the main benefit of applying the four dimensions before go-live?",
       "options": [
        "Allowing the project to skip supplier negotiations entirely",
        "Proving to auditors that the technology was tested",
        "Finding gaps outside technology while they are cheap to fix",
        "Reducing the number of stakeholders who must be consulted"
       ],
       "answer": 2,
       "explain": "The dimensions expose people, supplier and process gaps early, when fixing them costs least."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l2",
   "title": "People, Culture, Information and Technology",
   "subtitle": "The human and digital foundations every service stands on",
   "minutes": 40,
   "objectives": [
    "Design roles, competencies and culture that support service outcomes",
    "Assess information quality and technology choices against service needs",
    "Balance standardisation and innovation in the technology estate"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The organisations-and-people dimension is where most service management transformations succeed or fail. Processes can be drawn in a week and tools bought in a month, but changing how people collaborate, decide and learn takes years. Equally, the information-and-technology dimension is no longer just infrastructure: data is now a product in its own right, and technology choices lock in costs and capabilities for a decade."
    },
    {
     "type": "framework",
     "title": "Elements of the people dimension",
     "items": [
      {
       "label": "S",
       "title": "Structure",
       "text": "How teams are organised: by function, by product, by customer or by value stream. Structure shapes communication paths and handovers."
      },
      {
       "label": "R",
       "title": "Roles and accountability",
       "text": "Who is responsible, who is accountable, who must be consulted. Clear accountability ends the 'not my job' reflex."
      },
      {
       "label": "C",
       "title": "Competence",
       "text": "Technical, business, management and interpersonal skills. Modern service roles need breadth across areas plus depth in one."
      },
      {
       "label": "Cu",
       "title": "Culture",
       "text": "Shared values and behaviours: how people react to failure, information and change."
      },
      {
       "label": "Ca",
       "title": "Capacity",
       "text": "Enough people with enough time, including time to learn and improve."
      }
     ]
    },
    {
     "type": "compare",
     "title": "Culture types and how they handle information",
     "columns": [
      {
       "title": "Power-oriented",
       "items": [
        "Information is hoarded",
        "Messengers are blamed",
        "Failure leads to scapegoats",
        "New ideas are crushed"
       ]
      },
      {
       "title": "Rule-oriented",
       "items": [
        "Information follows channels",
        "Messengers are tolerated",
        "Failure leads to justice and rules",
        "New ideas create problems"
       ]
      },
      {
       "title": "Performance-oriented",
       "items": [
        "Information is actively sought",
        "Messengers are trained",
        "Failure leads to enquiry",
        "New ideas are welcomed"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Service teams need people with **depth** in one area (database administration, networking, service desk) and **breadth** across others (business understanding, customer communication, automation basics). T-shaped people reduce handovers because they can resolve more of a problem themselves and understand the next team's needs.",
     "title": "The T-shaped professional"
    },
    {
     "type": "table",
     "title": "Information qualities to assess",
     "head": [
      "Quality",
      "Question",
      "Example of failure"
     ],
     "rows": [
      [
       "Accuracy",
       "Is it correct?",
       "Patient weight recorded in pounds instead of kilograms"
      ],
      [
       "Completeness",
       "Is anything missing?",
       "Asset records missing 30% of laptops"
      ],
      [
       "Timeliness",
       "Is it available when needed?",
       "Stock data refreshed weekly for a daily decision"
      ],
      [
       "Accessibility",
       "Can the right people reach it?",
       "Knowledge articles locked in one engineer's folder"
      ],
      [
       "Security and privacy",
       "Is it protected appropriately?",
       "Customer national ID numbers visible to all support agents"
      ],
      [
       "Relevance",
       "Does it support the decision?",
       "Reports with 80 metrics nobody reads"
      ]
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Build, buy or subscribe: custom software, packaged products or cloud services.",
      "Degree of standardisation: one platform for all, or best-of-breed tools per team.",
      "Hosting: on-premises, private cloud, public cloud or hybrid, considering data residency and latency.",
      "Integration approach: point-to-point links versus APIs and event streams.",
      "Lifecycle and obsolescence: supported versions, upgrade cadence, end-of-life risk.",
      "Security and resilience built in, not bolted on.",
      "Sustainability: energy use, device life extension and responsible e-waste disposal, increasingly reported to boards and regulators."
     ],
     "title": "Technology decisions that shape services for years"
    },
    {
     "type": "compare",
     "title": "Standardise or innovate?",
     "columns": [
      {
       "title": "Standardise when…",
       "items": [
        "The capability is a commodity (email, laptops, identity)",
        "Scale and cost efficiency matter most",
        "Regulation demands consistent controls"
       ]
      },
      {
       "title": "Allow variety when…",
       "items": [
        "The capability differentiates the business",
        "Teams are experimenting with new products",
        "Learning speed matters more than unit cost"
       ]
      }
     ]
    },
    {
     "type": "matrix",
     "title": "Where to standardise and where to allow variety",
     "x": "How much the capability differentiates the business",
     "y": "Uncertainty and need for fast learning",
     "quadrants": [
      {
       "title": "Try cheaply, keep exit open",
       "items": [
        "Short pilots on subscription services",
        "Avoid long contracts"
       ]
      },
      {
       "title": "Experiment and build",
       "items": [
        "Product teams with freedom inside guardrails",
        "Example: new digital lending journey"
       ]
      },
      {
       "title": "Standardise and buy",
       "items": [
        "Email, laptops, identity, payroll",
        "One platform, lowest total cost"
       ]
      },
      {
       "title": "Own and harden",
       "items": [
        "Core platforms run with strong controls",
        "Example: core banking ledger"
       ]
      }
     ],
     "caption": "Standardisation wins at the bottom-left; variety pays only where differentiation or learning speed is high. Most estates need all four quadrants, deliberately chosen."
    },
    {
     "type": "scenario",
     "title": "Culture after a failed change",
     "situation": "At a private bank in Dhaka, a junior engineer's change caused a 40-minute ATM outage. The head of operations wants to issue a written warning and require two senior approvals for all future changes by junior staff. As the service manager, what do you recommend?",
     "options": [
      {
       "text": "Run a blameless review to find system causes, then fix the checks that let the change through",
       "feedback": "Correct. Blame discourages reporting and learning. Most failures come from weak system controls, such as missing tests or poor peer review, which a blameless review will reveal.",
       "best": true
      },
      {
       "text": "Issue the warning as proposed so that all staff understand the consequences of careless changes",
       "feedback": "Punishment pushes problems underground; people will hide mistakes and avoid change, increasing future risk.",
       "best": false
      },
      {
       "text": "Ban junior engineers from making changes",
       "feedback": "This removes learning opportunities and overloads senior staff without fixing the control weakness.",
       "best": false
      },
      {
       "text": "Take no action, since outages are unavoidable",
       "feedback": "Some failure is inevitable, but learning from it is not optional.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Competency matrix",
     "purpose": "Map team skills against service needs and plan development.",
     "columns": [
      "Team member",
      "Deep skill",
      "Broad skills",
      "Gap for service needs",
      "Development action"
     ],
     "example": [
      [
       "Network engineer A",
       "Routing and switching",
       "Scripting basics, customer comms",
       "Cloud networking",
       "Cloud networking course and shadow cloud team for 4 weeks"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Organisational culture",
       "def": "The shared values, beliefs and behaviours that shape how people work, decide and react to failure."
      },
      {
       "term": "Performance-oriented culture",
       "def": "A culture in which information flows freely, failures lead to enquiry and new ideas are welcomed."
      },
      {
       "term": "Blameless review",
       "def": "A review of a failure that seeks system causes and improvements rather than individuals to punish."
      },
      {
       "term": "T-shaped professional",
       "def": "A person with deep expertise in one area and broad knowledge across several others."
      },
      {
       "term": "Information quality",
       "def": "The fitness of information for its purpose, judged by accuracy, completeness, timeliness, accessibility, security and relevance."
      },
      {
       "term": "Technical debt",
       "def": "The future cost created by choosing a quick or limited technical solution now instead of a better one."
      },
      {
       "term": "Standardisation",
       "def": "Using common platforms, tools and methods across an organisation to reduce cost, risk and complexity."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "How does your team react when someone reports a mistake? What one leadership behaviour would move it closer to a performance-oriented culture?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Structure, roles, competence, culture and capacity decide whether new ways of working stick.",
      "Performance-oriented cultures seek bad news early; blame cultures hide it until it becomes an outage.",
      "Assess information for accuracy, completeness, timeliness, accessibility and protection.",
      "Technology decisions lock in cost, risk and sustainability impact for years; make them deliberately.",
      "Standardise commodities; allow governed variety where differentiation or learning speed matters."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In which culture are messengers of bad news trained rather than blamed?",
       "options": [
        "Power-oriented",
        "Rule-oriented",
        "Performance-oriented",
        "Hierarchy-oriented with strict escalation"
       ],
       "answer": 2,
       "explain": "Performance-oriented cultures seek information actively and treat bad news as valuable."
      },
      {
       "q": "Why are T-shaped professionals valuable in service teams?",
       "options": [
        "They avoid customer contact",
        "They replace the need for documentation and knowledge bases",
        "They specialise so deeply that they never need help",
        "They reduce handovers by covering more of a problem"
       ],
       "answer": 3,
       "explain": "Breadth plus depth means fewer handovers and better collaboration with adjacent teams."
      },
      {
       "q": "Support agents can see every customer's national ID number. Which information quality is weakest?",
       "options": [
        "Security and privacy",
        "Timeliness",
        "Completeness",
        "Relevance of the data shown to each agent's task"
       ],
       "answer": 0,
       "explain": "Excessive access to sensitive data is a security and privacy weakness."
      },
      {
       "q": "When is standardisation usually the best choice?",
       "options": [
        "For experimental products that need rapid learning",
        "For capabilities that differentiate the business from competitors",
        "Whenever a team requests a new tool",
        "For commodity capabilities such as email and identity"
       ],
       "answer": 3,
       "explain": "Commodities benefit from scale and consistency; differentiating or experimental areas may need variety."
      },
      {
       "q": "After a junior engineer's change causes an outage, which response best supports long-term reliability?",
       "options": [
        "Banning junior staff from making production changes",
        "A blameless review that fixes weak controls",
        "Doubling approvals for all changes made by every team",
        "A written warning to deter future mistakes"
       ],
       "answer": 1,
       "explain": "Blameless reviews reveal system weaknesses and keep people reporting problems honestly."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l3",
   "title": "Partners, Suppliers and Service Integration",
   "subtitle": "Managing a service that many organisations deliver together",
   "minutes": 40,
   "objectives": [
    "Choose sourcing models that fit service needs and risk",
    "Design supplier relationships around outcomes, not just price",
    "Explain service integration and when a multi-supplier model needs it"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Almost no modern service is delivered by one organisation. A mobile banking app may depend on a cloud provider, a telecom SMS gateway, a card scheme, a fraud-scoring vendor, an outsourced contact centre and a local systems integrator. The consumer sees one service; the provider must make a dozen organisations behave like one team. The partners-and-suppliers dimension is about choosing those organisations wisely and managing the relationships so value flows across company boundaries."
    },
    {
     "type": "table",
     "title": "Sourcing options",
     "head": [
      "Model",
      "What it means",
      "Typical fit",
      "Main risk"
     ],
     "rows": [
      [
       "Insourcing",
       "Own staff and assets deliver the service",
       "Core, differentiating or highly sensitive services",
       "High fixed cost, slower to scale"
      ],
      [
       "Outsourcing",
       "A supplier delivers the service under contract",
       "Commodity services with clear requirements",
       "Loss of knowledge and control"
      ],
      [
       "Single sourcing",
       "One supplier for a whole area",
       "Simple governance, volume discounts",
       "Dependency and lock-in"
      ],
      [
       "Multi-sourcing",
       "Several suppliers for different parts",
       "Best capability per area, competition",
       "Integration complexity and blame-shifting"
      ],
      [
       "Partnership",
       "Shared goals and often shared risk and reward",
       "Innovation, long-term strategic services",
       "Unclear accountability if poorly defined"
      ]
     ]
    },
    {
     "type": "framework",
     "title": "Factors in a sourcing decision",
     "items": [
      {
       "label": "St",
       "title": "Strategic focus",
       "text": "Is the capability core to how we compete? Core capabilities are rarely handed over completely."
      },
      {
       "label": "Co",
       "title": "Corporate culture",
       "text": "Does the supplier's way of working fit ours? Culture clashes destroy many outsourcing deals."
      },
      {
       "label": "Re",
       "title": "Resource scarcity",
       "text": "Can we hire and keep the skills ourselves? Scarce skills often push towards partners."
      },
      {
       "label": "Ct",
       "title": "Cost",
       "text": "Total cost of ownership over several years, including transition and exit costs, not just the monthly price."
      },
      {
       "label": "Ri",
       "title": "Risk",
       "text": "Concentration, financial stability of the supplier, regulatory exposure and data location."
      },
      {
       "label": "Ag",
       "title": "Agility",
       "text": "How quickly can the arrangement adapt to changing needs?"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A supplier report can show every service level green on the outside while users experience red on the inside. This happens when targets measure the supplier's activity (tickets answered within 30 minutes) rather than outcomes (problems resolved, users able to work). Design supplier measures around the consumer's experience and the end-to-end service.",
     "title": "Watermelon contracts"
    },
    {
     "type": "compare",
     "title": "Transactional versus strategic supplier relationships",
     "columns": [
      {
       "title": "Transactional",
       "items": [
        "Focus on price and contract compliance",
        "Short-term, easily replaced",
        "Formal communication through contract managers",
        "Suited to commodities: printing, cabling, licences"
       ]
      },
      {
       "title": "Strategic",
       "items": [
        "Focus on joint outcomes and innovation",
        "Long-term, high switching cost",
        "Joint governance, shared roadmaps",
        "Suited to core platforms, managed services, cloud"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "When several suppliers deliver parts of one service, someone must integrate them: coordinate incidents that cross supplier boundaries, run a single change calendar, consolidate reporting and settle disputes about who owns a problem. This **service integration** role can be kept in-house, given to a lead supplier or given to a specialist integrator. Keeping it in-house is usually best for organisations whose services are strategic, because integration is where accountability for the end-to-end result lives."
    },
    {
     "type": "topology",
     "title": "A multi-supplier operating model with retained integration",
     "nodes": [
      {
       "id": "cust",
       "kind": "team",
       "label": "Customer",
       "sub": "Strategy, budget, service ownership",
       "x": 3,
       "y": 0
      },
      {
       "id": "int",
       "kind": "process",
       "label": "Integrator",
       "sub": "End-to-end incident, change, reporting",
       "x": 3,
       "y": 2
      },
      {
       "id": "cloud",
       "kind": "cloud",
       "label": "Cloud hosting",
       "sub": "Supplier A",
       "x": 0,
       "y": 4
      },
      {
       "id": "net",
       "kind": "router",
       "label": "Network",
       "sub": "Supplier B",
       "x": 2,
       "y": 4
      },
      {
       "id": "app",
       "kind": "server",
       "label": "App support",
       "sub": "Supplier C",
       "x": 4,
       "y": 4
      },
      {
       "id": "desk",
       "kind": "team",
       "label": "Desk and field",
       "sub": "Supplier D",
       "x": 6,
       "y": 4
      },
      {
       "id": "users",
       "kind": "user",
       "label": "Users",
       "sub": "One point of contact",
       "x": 6,
       "y": 6
      }
     ],
     "links": [
      {
       "a": "cust",
       "b": "int",
       "label": "direction"
      },
      {
       "a": "int",
       "b": "cloud",
       "label": "contract"
      },
      {
       "a": "int",
       "b": "net"
      },
      {
       "a": "int",
       "b": "app"
      },
      {
       "a": "int",
       "b": "desk",
       "label": "contract"
      },
      {
       "a": "desk",
       "b": "users",
       "label": "contacts"
      }
     ],
     "zones": [
      {
       "label": "Retained by the customer",
       "x": 0,
       "y": 0,
       "w": 7,
       "h": 3,
       "tone": "accent"
      },
      {
       "label": "Suppliers",
       "x": 0,
       "y": 4,
       "w": 7,
       "h": 1,
       "tone": "neutral"
      }
     ],
     "caption": "Every supplier connects to one integrator, not to each other through the customer. Keeping integration in the retained zone keeps accountability for the end-to-end result with the customer."
    },
    {
     "type": "scenario",
     "title": "Blame between suppliers",
     "situation": "A university's student portal fails every Monday morning. The hosting supplier says the application is at fault; the application supplier blames the network; the network supplier says its links are fine. Each supplier is meeting its own service levels. What should the university do?",
     "options": [
      {
       "text": "Run a joint problem investigation and make cross-supplier cooperation a contract duty",
       "feedback": "Correct. The university needs end-to-end accountability through integration. Joint investigation finds the cause; contractual collaboration clauses prevent the next stand-off.",
       "best": true
      },
      {
       "text": "Replace all three suppliers with new ones at the next renewal, since none is taking responsibility",
       "feedback": "Changing suppliers without fixing the integration gap will reproduce the same behaviour with new names.",
       "best": false
      },
      {
       "text": "Ask each supplier to send a written root-cause report independently",
       "feedback": "Independent reports will each point elsewhere; the fault lies in the interactions.",
       "best": false
      },
      {
       "text": "Accept the situation because each supplier meets its SLA",
       "feedback": "Meeting component SLAs while the service fails is exactly the watermelon problem.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Supplier evaluation scorecard",
     "purpose": "Compare potential suppliers on more than price.",
     "columns": [
      "Criterion",
      "Weight %",
      "Supplier A score (1–5)",
      "Supplier B score (1–5)",
      "Evidence"
     ],
     "example": [
      [
       "24/7 support capability",
       "20",
       "4",
       "2",
       "Reference call with a Chattogram port customer"
      ],
      [
       "Exit and data return terms",
       "10",
       "3",
       "5",
       "Draft contract clause 14"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Sourcing model",
       "def": "The way an organisation obtains a capability: insourcing, outsourcing, single sourcing, multi-sourcing or partnership."
      },
      {
       "term": "Multi-sourcing",
       "def": "Using several suppliers for different parts of a service or portfolio."
      },
      {
       "term": "Service integration",
       "def": "Coordinating multiple suppliers so they deliver one coherent end-to-end service with clear accountability."
      },
      {
       "term": "Watermelon reporting",
       "def": "Reports that look green because component targets are met while the consumer's experience is red."
      },
      {
       "term": "Total cost of ownership (TCO)",
       "def": "The full cost of a service over its life, including acquisition, operation, transition and exit."
      },
      {
       "term": "Strategic supplier",
       "def": "A supplier whose services are critical and hard to replace, managed through joint governance and shared goals."
      },
      {
       "term": "Exit plan",
       "def": "A pre-agreed approach for moving a service away from a supplier, including data return and knowledge transfer."
      },
      {
       "term": "Vendor lock-in",
       "def": "Dependence on a supplier that makes switching costly or impractical."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "List your three most critical suppliers. For each, could you exit within six months if you had to? What would stop you?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Choose sourcing models by strategic focus, culture, skills scarcity, total cost and exit options.",
      "Measure suppliers on end-to-end outcomes to avoid green-on-the-outside 'watermelon' reports.",
      "Strategic suppliers need joint governance and shared roadmaps; commodity suppliers need clear contracts.",
      "Someone must integrate multiple suppliers; for strategic services that is usually the customer.",
      "Plan the exit before you sign: data return, knowledge transfer and transition costs."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A hospital wants to keep accountability for an end-to-end clinical service delivered by five suppliers. Who should usually perform service integration?",
       "options": [
        "Each supplier for its own component only",
        "The cheapest supplier",
        "The hospital itself",
        "Whichever supplier has the most staff on site"
       ],
       "answer": 2,
       "explain": "For strategic services, keeping integration in-house keeps end-to-end accountability with the customer."
      },
      {
       "q": "What is a 'watermelon' service report?",
       "options": [
        "A report that combines red and green targets equally",
        "A report written jointly by two or more suppliers",
        "Green on targets while users experience failure",
        "A report produced only at the end of a contract"
       ],
       "answer": 2,
       "explain": "Component targets look green while the end-to-end experience is red."
      },
      {
       "q": "Which factor most strongly suggests keeping a capability in-house?",
       "options": [
        "The capability is a commodity such as printing",
        "It is core to how the organisation competes",
        "The skills are widely available in the market",
        "A supplier offers a lower monthly price"
       ],
       "answer": 1,
       "explain": "Core, differentiating capabilities are rarely handed over entirely; the others point towards outsourcing."
      },
      {
       "q": "Why should total cost of ownership include exit costs?",
       "options": [
        "Because exit costs replace transition costs",
        "Auditors require exit costs to be estimated at zero",
        "Leaving a supplier can be expensive and must be planned",
        "Exit costs are always paid by the supplier"
       ],
       "answer": 2,
       "explain": "Data migration, dual running and knowledge transfer can be large; ignoring them understates real cost."
      },
      {
       "q": "Which relationship type suits a long-term managed cloud platform supporting core banking?",
       "options": [
        "Strategic",
        "Spot purchase",
        "Informal relationship based on goodwill and no contract",
        "Transactional"
       ],
       "answer": 0,
       "explain": "Critical, hard-to-replace services need strategic relationships with joint governance."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l4",
   "title": "The Service Value Chain and Value Streams",
   "subtitle": "Six activities that combine, in many ways, to create value",
   "minutes": 45,
   "objectives": [
    "Describe the six value chain activities and their main inputs and outputs",
    "Model a value stream as a sequence of value chain activities and practices",
    "Map a value stream and identify waste and improvement opportunities"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The **service value chain** is the operating heart of the value system. It describes six activities that every service organisation performs. The chain is not a linear process; it is a set of building blocks. Different types of demand flow through different combinations of these activities, called **value streams**. A password reset might touch only engage and deliver-and-support; a new product launch touches all six."
    },
    {
     "type": "framework",
     "title": "The six value chain activities",
     "items": [
      {
       "label": "PL",
       "title": "Plan",
       "text": "Create shared understanding of the vision, current status and direction for all four dimensions and all products and services."
      },
      {
       "label": "IM",
       "title": "Improve",
       "text": "Ensure continual improvement of products, services and practices across every activity."
      },
      {
       "label": "EN",
       "title": "Engage",
       "text": "Understand stakeholder needs, maintain transparency and good relationships with all stakeholders."
      },
      {
       "label": "DT",
       "title": "Design and transition",
       "text": "Ensure products and services meet stakeholder expectations for quality, cost and time to market."
      },
      {
       "label": "OB",
       "title": "Obtain/build",
       "text": "Make sure service components are available when and where they are needed and meet agreed specifications."
      },
      {
       "label": "DS",
       "title": "Deliver and support",
       "text": "Ensure services are delivered and supported according to agreed specifications and stakeholder expectations."
      }
     ]
    },
    {
     "type": "table",
     "title": "Typical inputs and outputs",
     "head": [
      "Activity",
      "Example inputs",
      "Example outputs"
     ],
     "rows": [
      [
       "Plan",
       "Policies, demand forecasts, performance data",
       "Strategic and tactical plans, portfolio decisions"
      ],
      [
       "Improve",
       "Performance data, feedback, improvement ideas",
       "Improvement initiatives, status reports"
      ],
      [
       "Engage",
       "Requests, feedback, incidents from users; market data",
       "Requirements, contracts, customer agreements, user requests"
      ],
      [
       "Design and transition",
       "Requirements, architecture, service components",
       "New or changed services, release plans, performance data"
      ],
      [
       "Obtain/build",
       "Specifications, contracts, design",
       "Built or acquired components, knowledge"
      ],
      [
       "Deliver and support",
       "Released services, user requests, incidents",
       "Services delivered, resolved incidents, satisfaction data"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A **value stream** is the series of steps an organisation takes to create and deliver a product or service to a consumer, in response to a specific type of demand. Each step uses one value chain activity and draws on one or more practices.",
     "title": "Value stream"
    },
    {
     "type": "flow",
     "title": "Value stream: restoring a failed payment service",
     "items": [
      {
       "label": "Engage",
       "text": "Users report failures through the app and contact centre"
      },
      {
       "label": "Deliver and support",
       "text": "Service desk logs, major incident declared, workaround applied"
      },
      {
       "label": "Design and transition",
       "text": "Emergency fix tested and released"
      },
      {
       "label": "Deliver and support",
       "text": "Service confirmed restored, users informed"
      },
      {
       "label": "Improve",
       "text": "Post-incident review feeds problem management"
      }
     ]
    },
    {
     "type": "steps",
     "title": "Mapping a value stream",
     "items": [
      {
       "title": "Choose the demand",
       "text": "Pick one specific trigger, such as 'new employee needs laptop and access'."
      },
      {
       "title": "Define start and end",
       "text": "Start when demand arrives; end when the consumer realises value, not when IT closes a ticket."
      },
      {
       "title": "Walk the steps",
       "text": "Record each step, the team, the value chain activity and the practices used."
      },
      {
       "title": "Measure time",
       "text": "For each step record touch time (actual work) and wait time (queues)."
      },
      {
       "title": "Find waste",
       "text": "Highlight waits, rework, handovers, approvals with no value and duplicated data entry."
      },
      {
       "title": "Design the future state",
       "text": "Remove or automate waste, merge steps and set new flow targets."
      }
     ]
    },
    {
     "type": "formula",
     "title": "Value stream measures",
     "items": [
      {
       "name": "Lead time",
       "expr": "Lead time = time value realised − time demand arrived",
       "meaning": "The total elapsed time the consumer experiences."
      },
      {
       "name": "Flow efficiency",
       "expr": "Flow efficiency = total touch time ÷ lead time × 100%",
       "meaning": "Share of lead time spent actually working; values under 15% are common and show large waiting waste."
      },
      {
       "name": "Percent complete and accurate",
       "expr": "%C&A = items received usable without rework ÷ items received × 100%",
       "meaning": "Quality of handovers into a step; low values reveal rework loops."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Where 19 working days go: sales-rep onboarding",
     "labels": [
      "HR request to IT",
      "Laptop allocation",
      "Security image",
      "Access approvals",
      "Induction and set-up"
     ],
     "series": [
      {
       "name": "Waiting (working days)",
       "values": [
        2,
        3,
        5,
        6,
        3
       ]
      }
     ],
     "unit": " d",
     "yLabel": "Working days waiting",
     "caption": "Illustrative split of the onboarding case that follows: about 19 days of waiting against only 6 hours of actual work. The tallest bars, approvals and imaging, are where redesign pays most."
    },
    {
     "type": "case",
     "title": "Onboarding at a pharmaceutical company",
     "context": "A pharmaceutical manufacturer in Gazipur takes 19 working days to make a new sales representative productive. Mapping shows 11 steps across HR, IT, security and the sales office. Actual work totals 6 hours. Laptops wait 5 days for a security image, access requests wait for three separate approvals, and HR sends start dates by email that IT re-enters into its tool, often wrongly.",
     "questions": [
      "What is the flow efficiency of this value stream?",
      "Which value chain activities are involved?",
      "Propose three changes that would cut lead time most."
     ],
     "answer": "Lead time is about 19 working days, roughly 152 working hours, so flow efficiency is about 6 ÷ 152 ≈ 4%. The stream involves **engage** (HR request), **obtain/build** (laptop and image), **design and transition** (role-based access design), and **deliver and support** (handover and first-day support), with **improve** for the redesign. Highest-impact changes: (1) pre-imaged laptop stock so the device step becomes same-day; (2) role-based access packages approved once per role, removing three individual approvals; (3) an integration from the HR system to the IT tool so start dates flow automatically, removing re-entry errors. Together these could bring lead time below five days."
    },
    {
     "type": "scenario",
     "title": "Choosing the stream to map first",
     "situation": "A telecom operator wants to start value stream mapping. Candidates: annual budgeting, the enterprise customer new-connection stream (6 weeks, top complaint), printer toner replacement, and the internal travel approval process. Which should be mapped first?",
     "options": [
      {
       "text": "The enterprise new-connection stream",
       "feedback": "Correct. It is high value, slow and a top complaint: improvement there will be visible to customers and leadership and builds momentum.",
       "best": true
      },
      {
       "text": "Annual budgeting, because it happens only once a year and therefore affects every department and every service",
       "feedback": "Budgeting matters, but it runs once a year and offers few learning cycles for a first mapping exercise.",
       "best": false
      },
      {
       "text": "Printer toner replacement",
       "feedback": "It is simple, but improvement there creates little value or momentum.",
       "best": false
      },
      {
       "text": "Internal travel approval",
       "feedback": "Low impact on consumers; save it for later.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Value stream map worksheet",
     "purpose": "Record each step of a value stream with time and waste.",
     "columns": [
      "Step",
      "Team",
      "Value chain activity",
      "Practices used",
      "Touch time",
      "Wait time",
      "Waste observed"
     ],
     "example": [
      [
       "Laptop imaging",
       "End-user computing",
       "Obtain/build",
       "IT asset management, deployment",
       "1 h",
       "5 days",
       "Waiting for security image approval"
      ]
     ],
     "rows": 10
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Service value chain",
       "def": "An operating model of six interconnected activities that respond to demand and create value."
      },
      {
       "term": "Value chain activity",
       "def": "One of plan, improve, engage, design and transition, obtain/build, and deliver and support."
      },
      {
       "term": "Value stream",
       "def": "A series of steps, combining value chain activities and practices, that turns a specific type of demand into value."
      },
      {
       "term": "Lead time",
       "def": "Total elapsed time from the arrival of demand to the realisation of value."
      },
      {
       "term": "Touch time",
       "def": "The time during which work is actually being done on an item."
      },
      {
       "term": "Flow efficiency",
       "def": "Touch time as a percentage of lead time."
      },
      {
       "term": "Value stream mapping",
       "def": "A technique for visualising the steps, times and waste in a value stream to design a better future state."
      },
      {
       "term": "Engage",
       "def": "The value chain activity of understanding stakeholder needs and maintaining relationships with them."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Choose one value stream you are part of. Where does it really start and end from the consumer's point of view, and where does your team's part begin and end?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The value chain has six activities; value streams combine them for a specific type of demand.",
      "A value stream starts when demand arrives and ends when the consumer realises value.",
      "Flow efficiency is touch time divided by lead time; low values mean waiting dominates.",
      "Start mapping with a slow, high-volume stream that customers complain about.",
      "Fix the biggest waits and rework loops first; working faster inside a step changes little."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which value chain activity ensures components are available when and where needed and meet specifications?",
       "options": [
        "Deliver and support",
        "Obtain/build",
        "Design and transition",
        "Plan, through the annual sourcing and capacity forecast"
       ],
       "answer": 1,
       "explain": "Obtain/build makes components available to specification. Design and transition ensures services meet expectations for quality, cost and time."
      },
      {
       "q": "A value stream's lead time is 20 days and touch time is 2 days. What is the flow efficiency?",
       "options": [
        "2%",
        "20%",
        "90%",
        "10%"
       ],
       "answer": 3,
       "explain": "Flow efficiency = touch time ÷ lead time = 2 ÷ 20 = 10%."
      },
      {
       "q": "Where should a value stream end?",
       "options": [
        "When the supplier invoices for the work",
        "When the consumer realises value",
        "When the last IT team closes its ticket",
        "When the change is approved by the change authority"
       ],
       "answer": 1,
       "explain": "Ending at value realised keeps the focus on the consumer, not internal milestones."
      },
      {
       "q": "What is the relationship between the value chain and value streams?",
       "options": [
        "Value streams replace the value chain entirely",
        "The value chain is one fixed sequence that every stream follows",
        "Each activity belongs to exactly one stream",
        "Streams combine chain activities in response to specific demand"
       ],
       "answer": 3,
       "explain": "The chain provides building blocks; each stream combines them in its own order, sometimes using one activity several times."
      },
      {
       "q": "Which value stream is the best first candidate for mapping?",
       "options": [
        "A slow, high-volume stream that customers complain about",
        "A rare annual process with few stakeholders",
        "A process owned entirely by one supplier",
        "The simplest process in the organisation, whatever its value"
       ],
       "answer": 0,
       "explain": "High value and visible pain give the best return and momentum."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m3",
 "order": 3,
 "code": "Restore",
 "title": "Restoring Service: Desk, Incident, Problem, Monitoring and Knowledge",
 "subtitle": "The practices that keep services running and get them back fast when they fail",
 "outcomes": [
  "Design a service desk and channel strategy that resolves at first contact",
  "Run incidents and major incidents with clear roles, priorities and communication",
  "Use problem management and root-cause techniques to prevent repeat incidents",
  "Build actionable monitoring and observability across all service layers",
  "Turn everyday work into reusable knowledge"
 ],
 "lessons": [
  {
   "id": "m3-l1",
   "title": "Service Desk: The Front Door of Every Service",
   "subtitle": "Designing a desk that resolves, listens and builds trust",
   "minutes": 35,
   "objectives": [
    "Explain the purpose of the service desk and its channels",
    "Design a desk model for an organisation's size, hours and languages",
    "Measure desk performance with balanced, outcome-focused metrics"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The **service desk** is the single point of contact between a service provider and its users. For many users it *is* IT: their opinion of every system is shaped by the last conversation they had with the desk. A modern desk is not a call-logging team. It captures demand, resolves as much as possible at first contact, coordinates the rest, and feeds what it learns about users back into the organisation."
    },
    {
     "type": "framework",
     "title": "What a modern service desk does",
     "items": [
      {
       "label": "C",
       "title": "Capture demand",
       "text": "Receive incidents, service requests, questions and feedback through every channel and record them consistently."
      },
      {
       "label": "R",
       "title": "Resolve and fulfil",
       "text": "Fix what can be fixed now, using knowledge, scripts and automation, and fulfil standard requests."
      },
      {
       "label": "Co",
       "title": "Coordinate",
       "text": "Route what cannot be solved to the right team, track it and keep the user informed."
      },
      {
       "label": "E",
       "title": "Empathise",
       "text": "Understand the user's situation and business impact, not just the technical symptom."
      },
      {
       "label": "L",
       "title": "Learn",
       "text": "Spot trends, recurring issues and knowledge gaps and feed them to problem, knowledge and improvement work."
      }
     ]
    },
    {
     "type": "table",
     "title": "Channels and when they work best",
     "head": [
      "Channel",
      "Strengths",
      "Watch out for"
     ],
     "rows": [
      [
       "Phone",
       "Urgent, complex or emotional issues; users with low digital literacy",
       "Expensive per contact; peaks at shift start"
      ],
      [
       "Chat (human or virtual agent)",
       "Quick questions, parallel handling, transcripts",
       "Bots that trap users without a route to a person"
      ],
      [
       "Self-service portal",
       "Standard requests, knowledge search, status tracking",
       "Poor search and out-of-date articles drive users back to phone"
      ],
      [
       "Email",
       "Non-urgent requests with attachments",
       "Unstructured; slow; hard to classify"
      ],
      [
       "Walk-up / tech bar",
       "Device issues, VIP or executive support, hospitals and campuses",
       "Needs staffing at the right location and time"
      ],
      [
       "Messaging apps",
       "Users already living in mobile messaging, field staff",
       "Data protection and record-keeping must be designed in"
      ]
     ]
    },
    {
     "type": "compare",
     "title": "Desk models",
     "columns": [
      {
       "title": "Centralised",
       "items": [
        "One desk for the whole organisation",
        "Efficient and consistent",
        "May lack local knowledge or language coverage"
       ]
      },
      {
       "title": "Virtual / follow-the-sun",
       "items": [
        "Agents in several locations act as one desk",
        "24/7 coverage across time zones",
        "Needs strong shared tools and knowledge"
       ]
      },
      {
       "title": "Local / embedded",
       "items": [
        "Desk staff located with users (wards, factories, campuses)",
        "Strong relationships and local context",
        "Higher cost; risk of inconsistent practice"
       ]
      }
     ]
    },
    {
     "type": "topology",
     "title": "An omnichannel desk with one record and a route to a human",
     "nodes": [
      {
       "id": "res",
       "kind": "team",
       "label": "Resolver teams",
       "sub": "L2/L3 and suppliers",
       "x": 3,
       "y": 0
      },
      {
       "id": "agents",
       "kind": "team",
       "label": "Desk agents",
       "sub": "Level 1",
       "x": 0,
       "y": 2
      },
      {
       "id": "plat",
       "kind": "server",
       "label": "Service platform",
       "sub": "One record per contact",
       "x": 3,
       "y": 2
      },
      {
       "id": "kb",
       "kind": "doc",
       "label": "Knowledge base",
       "sub": "Approved articles",
       "x": 6,
       "y": 2
      },
      {
       "id": "phone",
       "kind": "phone",
       "label": "Phone",
       "x": 1,
       "y": 4
      },
      {
       "id": "va",
       "kind": "model",
       "label": "Virtual agent",
       "sub": "Chat, Bangla and English",
       "x": 3,
       "y": 4
      },
      {
       "id": "portal",
       "kind": "laptop",
       "label": "Self-service",
       "sub": "Portal and app",
       "x": 5,
       "y": 4
      },
      {
       "id": "users",
       "kind": "user",
       "label": "Users",
       "x": 3,
       "y": 6
      }
     ],
     "links": [
      {
       "a": "users",
       "b": "phone"
      },
      {
       "a": "users",
       "b": "va"
      },
      {
       "a": "users",
       "b": "portal"
      },
      {
       "a": "phone",
       "b": "agents"
      },
      {
       "a": "va",
       "b": "agents",
       "label": "handoff",
       "style": "dashed"
      },
      {
       "a": "va",
       "b": "plat"
      },
      {
       "a": "portal",
       "b": "plat"
      },
      {
       "a": "agents",
       "b": "plat",
       "label": "logs"
      },
      {
       "a": "kb",
       "b": "plat",
       "label": "articles"
      },
      {
       "a": "va",
       "b": "kb",
       "label": "grounding",
       "style": "dashed"
      },
      {
       "a": "plat",
       "b": "res",
       "label": "routing"
      }
     ],
     "caption": "Every channel writes to the same record, so nothing is lost between channels. The virtual agent answers from approved knowledge and always offers a handoff to a person."
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A hospital group with sites in Dhaka and Chattogram runs a central desk for phone, chat and portal 24/7, plus 'floor walkers' on each clinical site during day shifts. Floor walkers handle device issues on wards and capture knowledge; the central desk handles everything else and owns the record. Clinicians get human help where they work, and the group keeps one source of truth.",
     "title": "A hybrid desk in a hospital group"
    },
    {
     "type": "formula",
     "title": "Core service desk measures",
     "items": [
      {
       "name": "First-contact resolution (FCR)",
       "expr": "FCR = contacts resolved during first contact ÷ contacts that could be resolved by the desk × 100%",
       "meaning": "How often users get their issue solved without a callback or handover."
      },
      {
       "name": "Average speed of answer (ASA)",
       "expr": "ASA = total waiting time of answered contacts ÷ number of answered contacts",
       "meaning": "How long users wait; useful for staffing, not as a quality measure on its own."
      },
      {
       "name": "Abandonment rate",
       "expr": "Abandonment = contacts abandoned before answer ÷ contacts offered × 100%",
       "meaning": "Users giving up; high rates signal under-staffing or long queues."
      },
      {
       "name": "Cost per contact",
       "expr": "Cost per contact = total desk cost ÷ total contacts handled",
       "meaning": "Efficiency; must be balanced with quality and shift-left to self-service."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Demand versus capacity across a desk's day",
     "labels": [
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17"
     ],
     "series": [
      {
       "name": "Contacts offered per hour",
       "values": [
        80,
        420,
        1150,
        760,
        620,
        540,
        480,
        560,
        520,
        450,
        300
       ]
      },
      {
       "name": "Contacts agents can answer per hour",
       "values": [
        300,
        600,
        700,
        700,
        700,
        600,
        600,
        700,
        700,
        600,
        400
       ]
      }
     ],
     "yLabel": "Contacts per hour",
     "caption": "Illustrative numbers. When demand rises above capacity at 09:00, users abandon; the cure is shifting that peak's simple contacts left or moving capacity, not a faster average."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A desk measured mainly on average handling time will rush users off the phone and transfer problems it could have solved. A desk measured mainly on ticket closure will close tickets before users confirm the fix. Balance speed with resolution quality, user satisfaction and the effort users had to make.",
     "title": "Metrics that backfire"
    },
    {
     "type": "keypoints",
     "items": [
      "Level 0: users solve the issue themselves through knowledge, self-service automation and virtual agents grounded in approved articles.",
      "Level 1: desk agents solve it with good knowledge and appropriate access rights.",
      "Level 2/3: specialists are used only for genuinely complex work.",
      "Each shift left lowers cost and shortens resolution time, but only if knowledge is accurate and users trust it."
     ],
     "title": "Shift-left: moving resolution closer to the user"
    },
    {
     "type": "scenario",
     "title": "Choosing the desk improvement",
     "situation": "A mobile financial services provider's internal service desk handles 18,000 contacts a month for agents and staff. 35% are password resets and PIN unlocks, FCR is 48% and abandonment is 22% at 09:00. What should the desk manager do first?",
     "options": [
      {
       "text": "Hire more agents for the 09:00 peak and keep processes unchanged, since the peak is the most visible problem",
       "feedback": "Extra agents may reduce abandonment, but they leave a third of demand on an expensive channel and ignore the low FCR.",
       "best": false
      },
      {
       "text": "Introduce secure self-service reset with identity verification and promote it to users",
       "feedback": "Correct. Removing a third of demand through safe self-service frees capacity, lowers abandonment and lets agents spend time on issues they can resolve at first contact.",
       "best": true
      },
      {
       "text": "Set a target to reduce average handling time by 30%",
       "feedback": "This encourages rushing and transfers, likely lowering FCR further.",
       "best": false
      },
      {
       "text": "Close the phone channel and require all contacts by email",
       "feedback": "Email is slower and less suited to urgent issues; it moves the problem rather than solving it.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Service desk",
       "def": "The single point of contact between the service provider and users for incidents, requests and communication."
      },
      {
       "term": "First-contact resolution (FCR)",
       "def": "The percentage of contacts resolved during the first interaction without a callback or handover."
      },
      {
       "term": "Shift-left",
       "def": "Moving resolution of work to lower-cost, faster levels, ideally to users themselves through self-service."
      },
      {
       "term": "Abandonment rate",
       "def": "The share of contacts where the user gives up before being answered."
      },
      {
       "term": "Omnichannel",
       "def": "Providing consistent support across phone, chat, portal, email and other channels with a shared record."
      },
      {
       "term": "Virtual agent",
       "def": "An automated conversational assistant that answers questions or fulfils requests through chat or voice."
      },
      {
       "term": "Follow-the-sun",
       "def": "A desk model in which teams in different time zones hand over work to provide 24-hour support."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "If your users rated your service desk on effort rather than speed, how would it score? What causes them the most effort today?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The service desk is the single point of contact and shapes users' view of all of IT.",
      "Design channels for the user and the issue; every channel should write to one record.",
      "Shift-left moves resolution towards users, but only works with accurate, trusted knowledge.",
      "Balance speed measures with first-contact resolution, effort and satisfaction.",
      "Abandonment peaks reveal demand above capacity at specific times, not general slowness."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which measure best shows whether users get their issue solved without being passed on?",
       "options": [
        "First-contact resolution",
        "Number of contacts handled per agent per shift",
        "Average speed of answer",
        "Cost per contact"
       ],
       "answer": 0,
       "explain": "FCR directly measures resolution at the first interaction."
      },
      {
       "q": "A desk is measured mostly on average handling time. What behaviour is most likely?",
       "options": [
        "Abandonment falls because each call takes longer to complete",
        "Agents spend more time on knowledge articles",
        "Agents end contacts quickly rather than resolving them",
        "User satisfaction rises steadily"
       ],
       "answer": 2,
       "explain": "Speed-only targets push agents to end contacts quickly, often at the expense of resolution."
      },
      {
       "q": "What does 'shift-left' mean?",
       "options": [
        "Starting the support shift earlier in the morning",
        "Moving resolution closer to users, such as self-service",
        "Handing all complex incidents to a supplier",
        "Moving work to the left-hand team in an organisation chart"
       ],
       "answer": 1,
       "explain": "Shift-left moves resolution closer to the user while keeping quality."
      },
      {
       "q": "When is a local, embedded desk most justified?",
       "options": [
        "When support is needed only by email",
        "When users need in-person help where they work, as on wards",
        "When all users work remotely in different countries",
        "When the organisation wants the lowest possible cost per contact"
       ],
       "answer": 1,
       "explain": "Embedded staff add local context and in-person help; they cost more, so they suit environments where that matters."
      },
      {
       "q": "Abandonment is 22% at 09:00 but 3% the rest of the day. What does this most likely indicate?",
       "options": [
        "A demand peak that capacity does not cover",
        "The desk has too many agents in the afternoon",
        "Poor quality knowledge articles",
        "Users prefer email to phone for urgent problems at that hour"
       ],
       "answer": 0,
       "explain": "A time-specific spike in abandonment points to a demand peak not matched by capacity or alternatives."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l2",
   "title": "Incident Management and Major Incidents",
   "subtitle": "Restoring normal service fast, calmly and visibly",
   "minutes": 45,
   "objectives": [
    "Classify, prioritise and route incidents consistently",
    "Run a major incident with clear roles, communication and decision-making",
    "Measure and improve restoration performance"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "An **incident** is an unplanned interruption to a service or a reduction in its quality. The purpose of incident management is to **minimise the negative impact** of incidents by restoring normal operation as quickly as possible. The emphasis is on restoration, not diagnosis: if a workaround gets wards printing again in five minutes, use it now and find the cause later through problem management."
    },
    {
     "type": "flow",
     "title": "Incident lifecycle",
     "items": [
      {
       "label": "Detect",
       "text": "Monitoring alert, user report or automated test"
      },
      {
       "label": "Log & classify",
       "text": "Record, categorise, link to service and configuration items"
      },
      {
       "label": "Prioritise",
       "text": "Impact × urgency gives priority"
      },
      {
       "label": "Diagnose & route",
       "text": "Match known errors, swarm or escalate"
      },
      {
       "label": "Restore",
       "text": "Workaround or fix applied, service verified"
      },
      {
       "label": "Close & learn",
       "text": "User confirms, data captured for problem and knowledge"
      }
     ]
    },
    {
     "type": "table",
     "title": "A simple priority matrix",
     "head": [
      "Impact \\ Urgency",
      "High urgency",
      "Medium urgency",
      "Low urgency"
     ],
     "rows": [
      [
       "High impact (many users or critical service)",
       "P1 – Critical",
       "P2 – High",
       "P3 – Medium"
      ],
      [
       "Medium impact (a department or important function)",
       "P2 – High",
       "P3 – Medium",
       "P4 – Low"
      ],
      [
       "Low impact (one user, workaround available)",
       "P3 – Medium",
       "P4 – Low",
       "P4 – Low"
      ]
     ]
    },
    {
     "type": "matrix",
     "title": "Impact × urgency at a glance (two-level view)",
     "x": "Urgency: how fast the business is hurt",
     "y": "Impact: users, revenue, safety, reputation",
     "quadrants": [
      {
       "title": "P2–P3: fix today, plan carefully",
       "items": [
        "Many affected, time margin exists",
        "e.g. monthly report job failed, due Friday"
       ]
      },
      {
       "title": "P1: critical",
       "items": [
        "Critical service down for many now",
        "Declare a major incident and swarm"
       ]
      },
      {
       "title": "P4: low",
       "items": [
        "One user, workaround available",
        "Handle in normal queue order"
       ]
      },
      {
       "title": "P3: medium, time-boxed",
       "items": [
        "Few users, but time-critical",
        "e.g. one laptop before a board meeting"
       ]
      }
     ],
     "caption": "This collapses the three-level table above into two levels. Priority follows business consequence and time pressure together; technical drama alone never makes a P1."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A failed server in a test environment is technically dramatic and business-trivial. A small configuration error that stops the hospital pharmacy printing labels is technically minor and clinically urgent. Define impact using service and business consequences: users affected, revenue, safety, regulatory exposure and reputation.",
     "title": "Impact is about business, not technology"
    },
    {
     "type": "compare",
     "title": "Tiered escalation versus swarming",
     "columns": [
      {
       "title": "Tiered escalation",
       "items": [
        "Level 1 → Level 2 → Level 3",
        "Each tier tries before passing on",
        "Efficient for routine incidents",
        "Slow for novel or complex ones; context lost at each handover"
       ]
      },
      {
       "title": "Swarming",
       "items": [
        "The right people work the incident together early",
        "No ticket ping-pong",
        "Faster for complex incidents",
        "Needs culture and tooling for quick collaboration; can over-use experts"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "Major incident roles",
     "items": [
      {
       "label": "IC",
       "title": "Incident commander",
       "text": "Owns the response and makes decisions. Does not fix things personally; keeps the whole picture."
      },
      {
       "label": "TL",
       "title": "Technical lead(s)",
       "text": "Lead diagnosis and restoration in their domain and report progress to the commander."
      },
      {
       "label": "CL",
       "title": "Communications lead",
       "text": "Sends regular, plain-language updates to users, executives, regulators and the contact centre."
      },
      {
       "label": "SC",
       "title": "Scribe",
       "text": "Keeps a timestamped log of facts, decisions and actions for the response and the review."
      },
      {
       "label": "BL",
       "title": "Business liaison",
       "text": "Represents affected business units, confirms impact and tests workarounds from the user side."
      }
     ]
    },
    {
     "type": "steps",
     "title": "Running a major incident bridge",
     "items": [
      {
       "title": "Declare early",
       "text": "If criteria might be met, declare. Standing down a major incident costs little; declaring late costs a lot."
      },
      {
       "title": "Assign roles",
       "text": "Name the commander, communications lead and scribe in the first five minutes."
      },
      {
       "title": "Establish facts",
       "text": "What is broken, since when, who is affected, what changed recently?"
      },
      {
       "title": "Set a rhythm",
       "text": "Agree update intervals, for example every 30 minutes, and keep them even when there is no news."
      },
      {
       "title": "Prefer restoration",
       "text": "Roll back the recent change, fail over or use a workaround before chasing root cause."
      },
      {
       "title": "Verify with users",
       "text": "Confirm restoration with real users and monitoring, not just the technical team."
      },
      {
       "title": "Hand over to problem",
       "text": "Close the incident and open a problem record with the timeline and evidence."
      }
     ]
    },
    {
     "type": "sequence",
     "title": "Escalating a major incident: the first 30 minutes",
     "actors": [
      "Monitoring",
      "Service desk",
      "On-call engineer",
      "Incident commander",
      "Comms lead",
      "Stakeholders"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Alert: payment errors above 5%"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Page on-call, P1 suspected"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Confirmed: wide customer impact",
       "reply": true
      },
      {
       "from": 1,
       "to": 3,
       "label": "Declare major incident"
      },
      {
       "from": 3,
       "to": 4,
       "label": "Own updates every 30 minutes"
      },
      {
       "from": 4,
       "to": 5,
       "label": "Impact, actions, next update time"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Roll back the 19:30 change?"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Rolled back; success rate recovering",
       "reply": true
      },
      {
       "from": 4,
       "to": 5,
       "label": "Service restored; monitoring closely"
      },
      {
       "from": 3,
       "to": 3,
       "label": "Hand over to problem management"
      }
     ],
     "caption": "Roles are assigned before diagnosis is finished, and communication runs on a fixed rhythm in parallel with the technical work. Restoration (step 8) comes before root-cause analysis."
    },
    {
     "type": "formula",
     "title": "Restoration measures",
     "items": [
      {
       "name": "Mean time to restore service (MTRS)",
       "expr": "MTRS = total downtime across incidents ÷ number of incidents",
       "meaning": "Average time from service loss to restoration; the key incident measure."
      },
      {
       "name": "Mean time to detect (MTTD)",
       "expr": "MTTD = Σ(detection time − start time) ÷ number of incidents",
       "meaning": "How quickly incidents are noticed; long values show monitoring gaps."
      },
      {
       "name": "Reassignment rate",
       "expr": "Reassignments ÷ incidents",
       "meaning": "Ticket ping-pong; high values show poor routing or missing skills."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A payments outage at 20:00",
     "situation": "At 20:00 on the day before Eid, transaction success for a mobile wallet drops from 99% to 60%. A database patch was deployed at 19:30. The database team wants two hours to find the root cause before deciding anything. You are the incident commander. What do you do?",
     "options": [
      {
       "text": "Give the database team two hours to find the root cause so the right fix is applied",
       "feedback": "Two hours of 40% failure on the busiest evening is unacceptable when a quick restoration option exists.",
       "best": false
      },
      {
       "text": "Ask the communications lead to say that nothing is wrong to avoid panic",
       "feedback": "False communication destroys trust and may breach regulatory obligations.",
       "best": false
      },
      {
       "text": "Decide to roll back the patch now while diagnosis continues in parallel",
       "feedback": "Correct. Restoration comes first during peak demand. The recent change is the most likely cause, rollback is the fastest restoration path, and diagnosis can continue from logs.",
       "best": true
      },
      {
       "text": "Escalate to the CEO and wait for a decision",
       "feedback": "The commander has the authority to act; waiting for executives delays restoration.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Major incident communication template",
     "purpose": "Send short, regular updates to stakeholders during a major incident.",
     "columns": [
      "Time",
      "What is affected",
      "Who is affected",
      "Current action",
      "Workaround for users",
      "Next update at"
     ],
     "example": [
      [
       "20:15",
       "Wallet payments failing for ~40% of transactions",
       "All retail users and merchants",
       "Rolling back 19:30 database patch",
       "Retry after 5 minutes; cash-out unaffected",
       "20:45"
      ]
     ],
     "rows": 8
    },
    {
     "type": "case",
     "title": "Major incident at a container terminal",
     "context": "At 06:40 on a Monday, the terminal operating system at a busy container terminal in Chattogram stops allocating truck slots. Trucks queue for three kilometres, customs inspections stall and shipping lines start calling. Four engineering teams join a call; each tests its own theory. By 08:30 nobody has told port management what is happening, and a network engineer has restarted a core switch without telling anyone, briefly making things worse.",
     "questions": [
      "What went wrong in the way the incident was run?",
      "How should the first 30 minutes have looked?",
      "What should happen after service is restored?"
     ],
     "answer": "The response lacked a commander, a communication rhythm and decision control: teams worked in parallel without coordination, and an uncontrolled action (the switch restart) added risk. In the first 30 minutes, the on-call manager should have declared a major incident, named an incident commander, a communications lead and a scribe, established facts (what changed overnight, which functions fail, which users are affected), agreed a 30-minute update cycle for port management and shipping lines, and offered a workaround such as manual slot allocation for priority trucks. Technical actions should be proposed to and approved by the commander. After restoration, the incident should be closed only once users confirm, and a problem record opened with the full timeline. A blameless review should examine contributing factors, including why the switch restart happened without coordination."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Incident",
       "def": "An unplanned interruption to a service or reduction in its quality."
      },
      {
       "term": "Major incident",
       "def": "An incident with significant business impact that needs a separate, coordinated response."
      },
      {
       "term": "Impact",
       "def": "The effect of an incident on the business: users affected, revenue, safety, compliance or reputation."
      },
      {
       "term": "Urgency",
       "def": "How quickly an incident must be resolved to avoid greater impact."
      },
      {
       "term": "Priority",
       "def": "The relative importance of an incident, usually derived from impact and urgency."
      },
      {
       "term": "Swarming",
       "def": "An approach in which the people needed to resolve an incident collaborate on it early, instead of escalating in tiers."
      },
      {
       "term": "Incident commander",
       "def": "The person who leads a major incident response and makes decisions without personally fixing components."
      },
      {
       "term": "Mean time to restore service (MTRS)",
       "def": "The average elapsed time from loss of service to its restoration."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of your last major incident. Who was in charge, and did everyone know it within ten minutes? What would you change?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Incident management restores service first; diagnosis of causes belongs to problem management.",
      "Priority combines business impact and urgency, defined in business terms.",
      "Swarm complex or novel incidents; use tiered escalation for routine ones.",
      "Major incidents need named roles: commander, technical leads, communications lead and scribe.",
      "Declare early, update on a fixed rhythm and prefer the fastest safe restoration such as rollback."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the primary goal of incident management?",
       "options": [
        "Restoring normal service as quickly as possible",
        "Recording all incidents for audit purposes",
        "Assigning accountability to the team that caused the incident",
        "Finding the root cause of every incident"
       ],
       "answer": 0,
       "explain": "Restoration comes first; root cause belongs to problem management."
      },
      {
       "q": "A test server fails and no production service is affected. What priority is appropriate?",
       "options": [
        "Low, because business impact is minimal",
        "High, because the infrastructure team is affected",
        "Major incident, because the failure is total",
        "Critical, because a server has failed completely"
       ],
       "answer": 0,
       "explain": "Priority follows business impact and urgency, not technical drama."
      },
      {
       "q": "Which role in a major incident should avoid hands-on technical work?",
       "options": [
        "Database engineer",
        "Network engineer working on the failing link",
        "Incident commander",
        "Technical lead"
       ],
       "answer": 2,
       "explain": "The commander keeps the whole picture and decides; getting absorbed in fixing loses that view."
      },
      {
       "q": "When is swarming most valuable?",
       "options": [
        "When only one specialist team is involved and the fix is already known",
        "For routine password resets",
        "For incidents with a documented workaround",
        "For complex or novel incidents needing several skills at once"
       ],
       "answer": 3,
       "explain": "Swarming avoids slow tiered handovers for complex work; routine work fits tiered handling."
      },
      {
       "q": "Three incidents last 30, 90 and 60 minutes. What is the MTRS?",
       "options": [
        "180 minutes",
        "90 minutes",
        "60 minutes",
        "45 minutes"
       ],
       "answer": 2,
       "explain": "MTRS = (30 + 90 + 60) ÷ 3 = 60 minutes."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l3",
   "title": "Problem Management: Removing Causes",
   "subtitle": "From firefighting to prevention through analysis and known errors",
   "minutes": 45,
   "objectives": [
    "Distinguish incidents, problems and known errors",
    "Apply problem identification, control and error control",
    "Select and use root-cause analysis techniques appropriately"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "If incident management is the fire brigade, problem management is fire prevention. A **problem** is a cause, or potential cause, of one or more incidents. Organisations that only fight fires see the same incidents week after week; their best engineers spend their time restoring the same failures. Problem management reduces the likelihood and impact of incidents by finding causes, recording workarounds and driving permanent fixes."
    },
    {
     "type": "table",
     "title": "Incident, problem, known error",
     "head": [
      "Term",
      "What it is",
      "Example"
     ],
     "rows": [
      [
       "Incident",
       "An interruption or degradation users experience now",
       "Ward label printers stop printing at 07:10"
      ],
      [
       "Problem",
       "The underlying cause, often unknown at first",
       "Why do label printers fail every morning?"
      ],
      [
       "Known error",
       "A problem that has been analysed but not yet resolved",
       "Print spooler memory leak; workaround: restart service at 06:30"
      ]
     ]
    },
    {
     "type": "flow",
     "title": "The three phases of problem management",
     "items": [
      {
       "label": "Problem identification",
       "text": "Spot trends, recurring incidents, major incidents and risks"
      },
      {
       "label": "Problem control",
       "text": "Analyse, prioritise, document workarounds and known errors"
      },
      {
       "label": "Error control",
       "text": "Manage known errors, assess fixes and raise changes"
      }
     ]
    },
    {
     "type": "cycle",
     "title": "The incident and problem loop",
     "center": "Fewer repeat incidents",
     "items": [
      {
       "label": "Incidents occur",
       "text": "Users or monitoring report failures; service is restored."
      },
      {
       "label": "Trend spotted",
       "text": "Repeats, major incidents or risks trigger a problem record."
      },
      {
       "label": "Problem analysed",
       "text": "Causes and contributing factors are investigated."
      },
      {
       "label": "Known error logged",
       "text": "Workaround published to the desk and knowledge base."
      },
      {
       "label": "Fix via change",
       "text": "Error control raises a change for the permanent fix."
      },
      {
       "label": "Verify outcome",
       "text": "Incident data confirms the fix worked, or the loop runs again."
      }
     ],
     "caption": "Incident management keeps the business running while this loop removes causes. Without step 6, organisations close problems that never actually stopped recurring."
    },
    {
     "type": "compare",
     "title": "Reactive versus proactive problem management",
     "columns": [
      {
       "title": "Reactive",
       "items": [
        "Triggered by incidents that already happened",
        "Major incident reviews",
        "Trend analysis of repeat incidents",
        "Fixes what hurts now"
       ]
      },
      {
       "title": "Proactive",
       "items": [
        "Triggered before incidents occur",
        "Supplier vulnerability notices",
        "Capacity trends, near misses, test failures",
        "Prevents what would hurt later"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "Root-cause analysis techniques",
     "items": [
      {
       "label": "5W",
       "title": "Five whys",
       "text": "Ask 'why?' repeatedly until you reach a cause you can act on. Simple and fast, but can follow one path and miss others."
      },
      {
       "label": "FB",
       "title": "Fishbone (Ishikawa)",
       "text": "Group possible causes into categories such as people, process, technology, supplier and environment. Good for workshops."
      },
      {
       "label": "KT",
       "title": "Kepner-Tregoe style analysis",
       "text": "Describe what the problem is and is not: where, when, extent. Differences point to the cause. Strong for complex technical faults."
      },
      {
       "label": "TL",
       "title": "Timeline analysis",
       "text": "Build a precise timeline of events, changes and alerts. Essential after major incidents."
      },
      {
       "label": "FT",
       "title": "Fault tree",
       "text": "Work backwards from the failure through logical AND/OR conditions. Useful for safety-critical systems."
      }
     ]
    },
    {
     "type": "tree",
     "title": "Fishbone view: why ward label printers fail at 07:10",
     "root": {
      "label": "Label printers fail every morning",
      "children": [
       {
        "label": "People",
        "children": [
         {
          "label": "No owner for driver testing"
         }
        ]
       },
       {
        "label": "Process",
        "children": [
         {
          "label": "Drivers outside change control"
         }
        ]
       },
       {
        "label": "Technology",
        "children": [
         {
          "label": "Driver leaks memory per label"
         }
        ]
       },
       {
        "label": "Supplier",
        "children": [
         {
          "label": "Auto-update pushed untested"
         }
        ]
       },
       {
        "label": "Environment",
        "children": [
         {
          "label": "Print peak at shift start"
         }
        ]
       }
      ]
     },
     "caption": "Grouping candidate causes by category shows several contributing factors at once. The five-whys chain below follows only one of these branches."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Complex systems rarely fail for one reason. A payment outage might need a code bug, a missing alert, an untested failover and a change made during peak hours, all at once. Look for **contributing factors** and fix several of them; each fix reduces the chance of a repeat.",
     "title": "Contributing factors, not a single root"
    },
    {
     "type": "steps",
     "title": "Five whys in practice: hospital label printers",
     "items": [
      {
       "title": "Why did printers fail at 07:10?",
       "text": "The print service stopped responding."
      },
      {
       "title": "Why did it stop?",
       "text": "It ran out of memory."
      },
      {
       "title": "Why did it run out of memory?",
       "text": "A driver leaks memory with every label printed."
      },
      {
       "title": "Why was the leaking driver installed?",
       "text": "An automatic update applied a new driver version last month."
      },
      {
       "title": "Why did the update reach production untested?",
       "text": "Printer drivers were excluded from the change process. Action: include drivers in change control and test updates; roll back driver now."
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Frequency and impact of related incidents (past and expected).",
      "Cost of the workaround: staff time, user disruption, risk.",
      "Risk if the problem causes a future major incident.",
      "Effort and risk of the fix itself.",
      "Problems with good workarounds and expensive fixes may be accepted, documented and reviewed later."
     ],
     "title": "Prioritising problems"
    },
    {
     "type": "scenario",
     "title": "Choosing what to analyse",
     "situation": "A university's IT team has 40 open problems and capacity to analyse three this month. Options include: Wi-Fi drops in the exam hall (6 incidents, each during exams), slow login to the library catalogue (300 minor incidents, workaround available), a cosmetic error message on the staff portal (2 incidents), and a vendor bulletin warning of a storage firmware fault that can corrupt data.",
     "options": [
      {
       "text": "The slow library login first, because it has generated the most incidents of any problem in the register this year",
       "feedback": "Volume matters, but a workaround exists; exams and data corruption carry higher impact.",
       "best": false
      },
      {
       "text": "The cosmetic error, because it is quick to fix",
       "feedback": "Quick wins are tempting but create little value compared with the risks.",
       "best": false
      },
      {
       "text": "Exam-hall Wi-Fi and the storage firmware risk first, then the slow library login",
       "feedback": "Correct. These combine high impact (exams, data loss) with real likelihood. The library login has a workaround and can follow. The cosmetic error can wait.",
       "best": true
      },
      {
       "text": "Whichever problems the most senior academics complain about",
       "feedback": "Seniority of complainants is not a sound prioritisation basis.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Problem record",
     "purpose": "Document a problem from identification to resolution.",
     "columns": [
      "Problem ID",
      "Description and linked incidents",
      "Impact and priority",
      "Root cause / contributing factors",
      "Workaround",
      "Permanent fix and change ref",
      "Status"
     ],
     "example": [
      [
       "PRB-0231",
       "Ward label printers fail daily 07:00–07:30 (14 incidents)",
       "High: delays medication rounds",
       "Leaking driver; drivers outside change control",
       "Restart spooler at 06:30",
       "Roll back driver; add drivers to change process (CHG-5520)",
       "Known error"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Problem",
       "def": "A cause, or potential cause, of one or more incidents."
      },
      {
       "term": "Known error",
       "def": "A problem that has been analysed and has a documented cause or workaround but is not yet resolved."
      },
      {
       "term": "Workaround",
       "def": "A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available."
      },
      {
       "term": "Problem control",
       "def": "Analysing problems, documenting workarounds and known errors, and prioritising them."
      },
      {
       "term": "Error control",
       "def": "Managing known errors, including periodic reassessment and initiating permanent fixes through change."
      },
      {
       "term": "Proactive problem management",
       "def": "Identifying and resolving problems before they cause incidents."
      },
      {
       "term": "Contributing factor",
       "def": "A condition that, together with others, allowed an incident to happen or made it worse."
      },
      {
       "term": "Five whys",
       "def": "A root-cause technique that repeatedly asks why a failure happened until an actionable cause is found."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which incident does your organisation resolve every week without ever asking why it keeps happening? What would it take to open a problem record for it?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A problem is a cause or potential cause of incidents; a known error has been analysed but not yet fixed.",
      "Problem management runs through identification, problem control and error control.",
      "Use proactive triggers such as vendor notices and near misses, not only past incidents.",
      "Look for several contributing factors rather than one root cause.",
      "Prioritise problems by incident cost, risk and fix effort; accept some with good workarounds, and review them."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is a known error?",
       "options": [
        "An error that users know about before IT does",
        "A change that failed and was rolled back by the change authority",
        "An incident that has been resolved",
        "An analysed problem with a documented cause or workaround"
       ],
       "answer": 3,
       "explain": "A known error has been analysed but not yet fully resolved."
      },
      {
       "q": "A vendor warns about a firmware fault that could corrupt data. No incidents have occurred yet. What kind of problem management is this?",
       "options": [
        "Proactive",
        "Reactive",
        "Major incident management",
        "Error control after a failed change"
       ],
       "answer": 0,
       "explain": "Acting on risks before incidents occur is proactive problem management."
      },
      {
       "q": "Which technique describes what the problem is and is not, to isolate the cause?",
       "options": [
        "Fishbone diagram",
        "Kepner-Tregoe style analysis",
        "Five whys",
        "Swarming with the major incident team"
       ],
       "answer": 1,
       "explain": "Is/is-not comparison is the core of Kepner-Tregoe style analysis."
      },
      {
       "q": "Why might a problem with a good workaround remain unresolved deliberately?",
       "options": [
        "Problem management never fixes problems with workarounds",
        "Workarounds are always permanent solutions",
        "The fix may cost more or carry more risk than the workaround",
        "Because auditors forbid changes to resolve known errors"
       ],
       "answer": 2,
       "explain": "Prioritisation weighs fix cost and risk against workaround cost; some known errors are accepted and reviewed."
      },
      {
       "q": "Which phase raises a change request to implement a permanent fix?",
       "options": [
        "Problem identification",
        "Incident logging",
        "Error control",
        "Problem control, when the workaround is first documented"
       ],
       "answer": 2,
       "explain": "Error control manages known errors and initiates permanent fixes through change enablement."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l4",
   "title": "Monitoring, Event Management and Observability",
   "subtitle": "Seeing trouble before users do",
   "minutes": 40,
   "objectives": [
    "Classify events and design responses to each class",
    "Design monitoring that reflects user experience as well as components",
    "Reduce alert noise and use telemetry to speed diagnosis"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Monitoring and event management observes services and components, records changes of state that matter (**events**), and decides the right response. Done well, it detects incidents before users notice, triggers automated fixes, and provides evidence for capacity planning and problem analysis. Done badly, it floods engineers with thousands of alerts a day until they ignore all of them, including the one that mattered."
    },
    {
     "type": "table",
     "title": "Event classes",
     "head": [
      "Class",
      "Meaning",
      "Example",
      "Typical response"
     ],
     "rows": [
      [
       "Informational",
       "Normal operation, logged for reference",
       "Nightly backup completed",
       "Log only; use for trends and audit"
      ],
      [
       "Warning",
       "Approaching a threshold; no impact yet",
       "Disk 85% full on database server",
       "Ticket or automated clean-up; investigate before it becomes an incident"
      ],
      [
       "Exception",
       "Service or component failing or degraded",
       "Payment API error rate above 5%",
       "Create incident; alert on-call; run automated recovery if safe"
      ]
     ]
    },
    {
     "type": "layers",
     "title": "Layers of monitoring",
     "items": [
      {
       "label": "User experience",
       "parts": [
        "Synthetic transactions (scripted logins and payments)",
        "Real-user monitoring of page and app performance"
       ]
      },
      {
       "label": "Service / application",
       "parts": [
        "Request rate, error rate, latency",
        "Business KPIs such as orders per minute"
       ]
      },
      {
       "label": "Platform",
       "parts": [
        "Containers, databases, message queues",
        "Cloud service health"
       ]
      },
      {
       "label": "Infrastructure",
       "parts": [
        "Servers, storage, network links",
        "Power and cooling in data centres"
       ]
      }
     ]
    },
    {
     "type": "compare",
     "title": "Monitoring versus observability",
     "columns": [
      {
       "title": "Monitoring",
       "items": [
        "Asks known questions",
        "Predefined dashboards and thresholds",
        "Tells you that something is wrong",
        "Good for known failure modes"
       ]
      },
      {
       "title": "Observability",
       "items": [
        "Lets you ask new questions of the system",
        "Metrics, logs and traces with rich context, increasingly collected through open standards such as OpenTelemetry",
        "Helps you find why something is wrong",
        "Essential for distributed, cloud-native services"
       ]
      }
     ]
    },
    {
     "type": "topology",
     "title": "A telemetry pipeline from signals to action",
     "nodes": [
      {
       "id": "syn",
       "kind": "monitor",
       "label": "Synthetic checks",
       "sub": "Scripted login and payment",
       "x": 0,
       "y": 0
      },
      {
       "id": "svc",
       "kind": "container",
       "label": "Services",
       "sub": "Apps, APIs, queues",
       "x": 0,
       "y": 2
      },
      {
       "id": "inf",
       "kind": "server",
       "label": "Infrastructure",
       "sub": "Hosts, network, cloud",
       "x": 0,
       "y": 4
      },
      {
       "id": "col",
       "kind": "process",
       "label": "Collectors",
       "sub": "Open telemetry standard",
       "x": 2,
       "y": 2
      },
      {
       "id": "store",
       "kind": "db",
       "label": "Telemetry store",
       "sub": "Metrics, logs, traces",
       "x": 4,
       "y": 2
      },
      {
       "id": "cor",
       "kind": "model",
       "label": "Correlation",
       "sub": "Dedupe, anomaly detection",
       "x": 6,
       "y": 2
      },
      {
       "id": "itsm",
       "kind": "server",
       "label": "ITSM platform",
       "sub": "Incident record, CMDB",
       "x": 6,
       "y": 0
      },
      {
       "id": "oncall",
       "kind": "team",
       "label": "On-call engineer",
       "sub": "Paged once per problem",
       "x": 6,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "syn",
       "b": "col"
      },
      {
       "a": "svc",
       "b": "col"
      },
      {
       "a": "inf",
       "b": "col"
      },
      {
       "a": "col",
       "b": "store",
       "label": "telemetry"
      },
      {
       "a": "store",
       "b": "cor",
       "label": "events"
      },
      {
       "a": "cor",
       "b": "itsm",
       "label": "incident"
      },
      {
       "a": "cor",
       "b": "oncall",
       "label": "page"
      }
     ],
     "caption": "Signals from users, services and infrastructure flow through one pipeline. Correlation sits before alerting, so engineers are paged once per problem rather than once per symptom."
    },
    {
     "type": "framework",
     "title": "The golden signals for any service",
     "items": [
      {
       "label": "La",
       "title": "Latency",
       "text": "How long requests take, separating successful and failed requests."
      },
      {
       "label": "Tr",
       "title": "Traffic",
       "text": "Demand on the service: requests per second, transactions per minute, active sessions."
      },
      {
       "label": "Er",
       "title": "Errors",
       "text": "Rate of failed requests, explicit or implicit (for example wrong content)."
      },
      {
       "label": "Sa",
       "title": "Saturation",
       "text": "How full the service is: CPU, memory, queue depth, connection pools."
      }
     ]
    },
    {
     "type": "cli",
     "title": "Quick checks on a Linux application host",
     "device": "Linux host",
     "lines": [
      "# Is the payments service running?",
      "systemctl status payments-api --no-pager",
      "# Recent errors in the last 10 minutes",
      "journalctl -u payments-api --since \"10 min ago\" -p err --no-pager",
      "# Synthetic check: HTTP status and total time of the health endpoint",
      "curl -s -o /dev/null -w \"%{http_code} %{time_total}s\\n\" https://localhost:8443/health",
      "# Disk saturation on data volumes",
      "df -h /var/lib/payments"
     ],
     "note": "Manual checks like these are useful during diagnosis, but the same signals should be collected continuously by your monitoring platform and alerted on automatically."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "One operations centre in Dhaka received 14,000 alerts a day; engineers acknowledged them in bulk without reading. When a real storage failure began, its alert was buried. Every alert should be **actionable**: if nobody needs to do anything, it should not page anyone. Correlate related events, suppress duplicates and route by service, not by component.",
     "title": "Alert fatigue"
    },
    {
     "type": "steps",
     "title": "Reducing noise in six weeks",
     "items": [
      {
       "title": "Inventory",
       "text": "Export a month of alerts; count by source, service and action taken."
      },
      {
       "title": "Delete the useless",
       "text": "Remove alerts nobody has acted on in 30 days, after confirming with owners."
      },
      {
       "title": "Tune thresholds",
       "text": "Base thresholds on service impact and observed baselines, not vendor defaults."
      },
      {
       "title": "Correlate",
       "text": "Group events from the same cause (one switch failure, not 200 server-unreachable alerts)."
      },
      {
       "title": "Automate responses",
       "text": "For known safe fixes, such as clearing temp files, act automatically and log it."
      },
      {
       "title": "Review weekly",
       "text": "Track alerts per on-call shift and the share that were actionable."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Six weeks of alert noise reduction",
     "labels": [
      "Week 0",
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6"
     ],
     "series": [
      {
       "name": "Alerts per day",
       "values": [
        14000,
        13500,
        8200,
        5600,
        2100,
        1400,
        900
       ]
      },
      {
       "name": "Actionable alerts per day",
       "values": [
        300,
        300,
        290,
        300,
        280,
        290,
        280
       ]
      }
     ],
     "yLabel": "Alerts per day",
     "caption": "Illustrative numbers. Total alerts fall sharply while actionable alerts stay roughly flat: the work removed noise, not signal."
    },
    {
     "type": "scenario",
     "title": "A dashboard that stayed green",
     "situation": "A hospital's patient-portal dashboard showed all servers, databases and network links green, yet patients could not book appointments for three hours because an external SMS verification provider was failing. What monitoring change would have detected this fastest?",
     "options": [
      {
       "text": "A synthetic booking transaction that runs end to end every few minutes",
       "feedback": "Correct. Synthetic user journeys test the service as patients experience it, including third-party dependencies that component monitoring misses.",
       "best": true
      },
      {
       "text": "More detailed CPU and memory thresholds on every web server and database in the portal estate",
       "feedback": "The servers were healthy; more component metrics would still show green.",
       "best": false
      },
      {
       "text": "Asking the SMS provider for a monthly availability report",
       "feedback": "Monthly reports are far too slow to detect a live failure.",
       "best": false
      },
      {
       "text": "Increasing the dashboard refresh rate",
       "feedback": "Faster refresh of the wrong signals still misses the failure.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Event",
       "def": "Any change of state that has significance for the management of a service or component."
      },
      {
       "term": "Exception event",
       "def": "An event indicating that a service or component is failing or not operating normally."
      },
      {
       "term": "Synthetic monitoring",
       "def": "Running scripted transactions against a service to test its behaviour as a user would experience it."
      },
      {
       "term": "Observability",
       "def": "The ability to understand a system's internal state from its external outputs, typically metrics, logs and traces."
      },
      {
       "term": "Golden signals",
       "def": "Latency, traffic, errors and saturation: four measures that describe the health of most services."
      },
      {
       "term": "Alert fatigue",
       "def": "Desensitisation caused by too many non-actionable alerts, leading to missed real issues."
      },
      {
       "term": "Event correlation",
       "def": "Grouping related events to identify a single underlying cause."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "What percentage of alerts in your environment lead to an action? How would you find out within a week?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Events are informational, warnings or exceptions; each class needs a different response.",
      "Monitor in layers, starting with what users experience, including third-party dependencies.",
      "The golden signals (latency, traffic, errors, saturation) suit almost any service.",
      "Observability lets teams ask new questions of distributed systems using metrics, logs and traces.",
      "Every page should be actionable: correlate, deduplicate and tune before adding AI on top."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Disk usage on a database server reaches 85%. No users are affected yet. Which event class is this?",
       "options": [
        "Warning",
        "Exception",
        "Major incident requiring an immediate bridge call",
        "Informational"
       ],
       "answer": 0,
       "explain": "It approaches a threshold without impact: a warning."
      },
      {
       "q": "Which monitoring approach best detects failures in third-party dependencies of a user journey?",
       "options": [
        "Monthly supplier availability reports reviewed by procurement",
        "Synthetic end-to-end transactions",
        "Network link utilisation",
        "Server CPU thresholds"
       ],
       "answer": 1,
       "explain": "Synthetic journeys exercise the full path, including external services."
      },
      {
       "q": "Which of these is NOT one of the golden signals?",
       "options": [
        "Saturation",
        "Licence cost",
        "Latency",
        "Errors"
       ],
       "answer": 1,
       "explain": "The golden signals are latency, traffic, errors and saturation."
      },
      {
       "q": "What is the strongest rule for deciding whether an event should page an engineer?",
       "options": [
        "Someone needs to act on it",
        "The vendor's default threshold was crossed",
        "It has occurred more than three times in the past hour on any component",
        "It comes from a production server"
       ],
       "answer": 0,
       "explain": "Only actionable alerts should page people; everything else is logged or handled automatically."
      },
      {
       "q": "How does observability differ from traditional monitoring?",
       "options": [
        "It is a dashboard that shows only green and red",
        "It replaces the need for any alerting",
        "It focuses only on infrastructure components",
        "It lets you explore unknown failures"
       ],
       "answer": 3,
       "explain": "Observability supports exploring unknown failure modes using rich telemetry."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l5",
   "title": "Knowledge Management for Service Teams",
   "subtitle": "Making the right knowledge available at the moment it is needed",
   "minutes": 35,
   "objectives": [
    "Explain why knowledge management drives resolution speed and quality",
    "Apply a capture-as-you-solve approach to keep knowledge current",
    "Measure knowledge use and value"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every incident resolved, change implemented and request fulfilled creates knowledge. In most organisations that knowledge stays in the heads of a few experienced engineers or disappears in closed tickets. **Knowledge management** maintains and improves the effective, efficient and convenient use of information and knowledge across the organisation. For service teams, it is the engine behind shift-left, faster restoration and consistent quality."
    },
    {
     "type": "layers",
     "title": "From data to wisdom",
     "items": [
      {
       "label": "Wisdom",
       "parts": [
        "Judgement about what to do and why",
        "Example: deciding to roll back during peak hours"
       ]
      },
      {
       "label": "Knowledge",
       "parts": [
        "Information combined with experience and context",
        "Example: 'this error after a patch usually means the cache must be rebuilt'"
       ]
      },
      {
       "label": "Information",
       "parts": [
        "Data with meaning",
        "Example: error rate rose to 12% after 19:30"
       ]
      },
      {
       "label": "Data",
       "parts": [
        "Raw facts",
        "Example: HTTP 500 count per minute"
       ]
      }
     ]
    },
    {
     "type": "compare",
     "title": "Explicit versus tacit knowledge",
     "columns": [
      {
       "title": "Explicit",
       "items": [
        "Written down and easy to share",
        "Articles, runbooks, diagrams",
        "Can be searched and reused at scale"
       ]
      },
      {
       "title": "Tacit",
       "items": [
        "In people's heads: experience and intuition",
        "Shared through mentoring, shadowing, pairing",
        "Lost when people leave unless deliberately transferred"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "The approach below is often called **knowledge-centred service**: knowledge is captured and improved as part of resolving work, by the people doing the work. AI assistants can now draft articles from resolved tickets and suggest updates to stale ones, which removes much of the writing effort. Keep a knowledgeable person reviewing before publication, because a confident but wrong article spreads errors to every user and bot that reuses it."
    },
    {
     "type": "cycle",
     "title": "Capture-as-you-solve knowledge loop",
     "center": "Knowledge-centred service",
     "items": [
      {
       "label": "Search",
       "text": "Search the knowledge base at the start of every interaction."
      },
      {
       "label": "Reuse",
       "text": "If an article helps, link it to the ticket."
      },
      {
       "label": "Improve",
       "text": "If it is wrong or incomplete, flag or fix it now."
      },
      {
       "label": "Create",
       "text": "If nothing exists, draft an article in the user's words."
      },
      {
       "label": "Publish and evolve",
       "text": "Review, publish and keep improving with use; then the next search finds it."
      }
     ],
     "caption": "Knowledge improves as a by-product of everyday work, not through a separate documentation project. Each pass through the loop makes the next search more likely to succeed."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Users search for 'cannot print labels on ward', not 'spooler service failure'. Titles and keywords should use the language of the person searching. Include the symptom, environment, cause if known and the steps to resolve, and keep each article to one issue.",
     "title": "Write in the user's words"
    },
    {
     "type": "keypoints",
     "items": [
      "Agents prefer to ask a senior colleague than to search.",
      "Many articles have not been viewed or updated in a year.",
      "Self-service search returns long lists with no clear answer.",
      "The same question appears in tickets every week.",
      "Experts are a bottleneck and cannot take leave without escalations rising."
     ],
     "title": "Signs your knowledge base is failing"
    },
    {
     "type": "formula",
     "title": "Knowledge measures",
     "items": [
      {
       "name": "Link rate",
       "expr": "Link rate = tickets with a linked article ÷ tickets resolved × 100%",
       "meaning": "How much the knowledge base is used in resolution."
      },
      {
       "name": "Self-service success",
       "expr": "Self-service success = sessions ending without a ticket ÷ self-service sessions × 100%",
       "meaning": "How often users solve their own issue (use with care: some users simply give up)."
      },
      {
       "name": "Article reuse",
       "expr": "Reuse = times articles were linked ÷ number of active articles",
       "meaning": "Whether articles are actually helpful or just stored."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Losing an expert",
     "situation": "The only engineer who understands a 15-year-old billing system at a power distribution company is retiring in four months. What is the most effective knowledge action?",
     "options": [
      {
       "text": "Ask him to write a complete manual of the system before he leaves, working alone in the final month",
       "feedback": "A manual written alone, late and without use is likely incomplete; tacit judgement is hard to write down without practice.",
       "best": false
      },
      {
       "text": "Record a video tour of the system on his final day",
       "feedback": "Useful as a supplement, but far too little and too late.",
       "best": false
      },
      {
       "text": "Pair two engineers with him on real work and capture runbooks as they go",
       "feedback": "Correct. Tacit knowledge transfers best through shared practice. Capturing runbooks during real work makes the explicit knowledge accurate and tested.",
       "best": true
      },
      {
       "text": "Rely on the vendor's original documentation from 2011",
       "feedback": "The system has changed over 15 years; old vendor documents will be out of date.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Knowledge article template",
     "purpose": "Create consistent, searchable articles.",
     "columns": [
      "Title (user's words)",
      "Symptoms",
      "Environment / service",
      "Cause (if known)",
      "Resolution steps",
      "Owner and review date"
     ],
     "example": [
      [
       "Ward label printer prints blank labels",
       "Labels feed but are blank after 07:00",
       "Clinical printing – wards 3–9",
       "Driver memory leak (PRB-0231)",
       "Restart print service from desk console; if repeated, raise P3",
       "Desk knowledge lead – review 30 June"
      ]
     ],
     "rows": 5
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Knowledge management",
       "def": "The practice of maintaining and improving the effective, efficient and convenient use of information and knowledge."
      },
      {
       "term": "Explicit knowledge",
       "def": "Knowledge that has been written down or recorded and can be easily shared."
      },
      {
       "term": "Tacit knowledge",
       "def": "Knowledge held in people's experience and intuition, hard to write down and shared mainly through practice."
      },
      {
       "term": "Capture as you solve",
       "def": "An approach in which knowledge is searched, reused, improved and created as part of everyday work rather than as a separate project."
      },
      {
       "term": "Runbook",
       "def": "A step-by-step guide for performing an operational task or responding to a known situation."
      },
      {
       "term": "Link rate",
       "def": "The share of resolved tickets that reference a knowledge article."
      },
      {
       "term": "Knowledge base",
       "def": "A searchable repository of articles, runbooks and other explicit knowledge."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "If your most knowledgeable colleague left tomorrow, which service would suffer first? What is one practical step you could take this month?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Knowledge management makes the right knowledge available when and where it is needed.",
      "Tacit knowledge moves through mentoring and shadowing; explicit knowledge through searchable articles.",
      "Capture and improve knowledge while solving issues, in the user's own words.",
      "AI can draft and refresh articles, but people must review what gets published.",
      "Track link rate, reuse and self-service success, and check that users are not simply giving up."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which approach best keeps a knowledge base current?",
       "options": [
        "A yearly project to rewrite all articles",
        "Allowing only one author to publish articles",
        "Locking articles once they are approved by a review board so they never drift",
        "Capturing and improving knowledge as part of solving each issue"
       ],
       "answer": 3,
       "explain": "Knowledge stays fresh when it is improved in the flow of work, not in occasional projects."
      },
      {
       "q": "Mentoring and job shadowing are especially effective for transferring which kind of knowledge?",
       "options": [
        "Tacit",
        "Explicit",
        "Regulatory information in published policy documents",
        "Data"
       ],
       "answer": 0,
       "explain": "Tacit knowledge lives in experience and is shared through practice."
      },
      {
       "q": "Users search for 'cannot print labels', but the article title is 'Spooler service memory exhaustion'. What should change?",
       "options": [
        "Add more technical detail and logs to the article body",
        "Remove the article from self-service",
        "Train users on spooler terminology",
        "Write titles and keywords in the user's language"
       ],
       "answer": 3,
       "explain": "Findability depends on matching the words people actually search with."
      },
      {
       "q": "Self-service success is rising, but desk calls are not falling. What might explain this?",
       "options": [
        "Users may give up on self-service and call",
        "The desk has too many virtual agents answering chat",
        "The knowledge base is too small",
        "Agents are linking too many articles"
       ],
       "answer": 0,
       "explain": "Sessions ending without a ticket can include users who gave up; the measure must be read with care."
      },
      {
       "q": "An AI assistant drafts knowledge articles from resolved tickets. Which publishing control is most appropriate?",
       "options": [
        "Publish automatically so the base stays current",
        "A knowledgeable person reviews before publishing",
        "Publish only drafts above a minimum word count",
        "Let users remove articles after they cause errors"
       ],
       "answer": 1,
       "explain": "AI removes most of the writing effort, but a wrong article is reused by every agent and bot. Review before publishing keeps accuracy; word counts and after-the-fact removal do not prevent harm."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m4",
 "order": 4,
 "code": "Control",
 "title": "Controlling Change and Service Levels",
 "subtitle": "Change, release, deployment, requests, assets, configuration and service levels in one controlled flow",
 "outcomes": [
  "Run change enablement that is both faster and safer, using risk-based authority",
  "Plan releases and deployments with progressive, reversible approaches",
  "Design service requests and catalogue entries for effortless fulfilment",
  "Scope asset and configuration data by the decisions it supports",
  "Agree and review service levels that reflect real user experience"
 ],
 "lessons": [
  {
   "id": "m4-l1",
   "title": "Change Enablement: Fast and Safe Together",
   "subtitle": "Managing risk without strangling the flow of change",
   "minutes": 45,
   "objectives": [
    "Classify changes as standard, normal or emergency and choose the right authority",
    "Assess change risk using evidence rather than opinion",
    "Redesign a slow change process to increase both speed and safety"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every improvement, fix and new feature reaches users through a **change**: the addition, modification or removal of anything that could affect services. Change enablement exists to maximise the number of successful changes by assessing risk properly, authorising changes at the right level and managing the change schedule. The old picture of change control as a weekly committee that says 'no' is outdated. Modern change enablement is mostly about designing safe paths that let the right changes flow quickly."
    },
    {
     "type": "framework",
     "title": "Three types of change",
     "items": [
      {
       "label": "S",
       "title": "Standard",
       "text": "Low-risk, well-understood and pre-authorised. Follows a defined procedure, often fully automated. Example: adding a user to a standard access group, scaling a web tier within limits."
      },
      {
       "label": "N",
       "title": "Normal",
       "text": "Needs risk assessment and authorisation according to its risk. Low-risk normal changes can be approved by a peer or automated checks; high-risk ones by a senior authority."
      },
      {
       "label": "E",
       "title": "Emergency",
       "text": "Must be implemented as soon as possible, usually to resolve an incident or close a serious vulnerability. Uses an expedited authority and documentation is completed after implementation."
      }
     ]
    },
    {
     "type": "table",
     "title": "Matching change authority to risk",
     "head": [
      "Risk level",
      "Example",
      "Change authority",
      "Typical lead time"
     ],
     "rows": [
      [
       "Very low (standard)",
       "Approved server patch via tested pipeline",
       "Pre-authorised model; no individual approval",
       "Minutes"
      ],
      [
       "Low",
       "Configuration change to one internal application",
       "Peer review plus automated tests",
       "Hours"
      ],
      [
       "Medium",
       "Database schema change for a customer-facing service",
       "Service owner and technical lead",
       "1–2 days"
      ],
      [
       "High",
       "Core banking platform upgrade",
       "Change advisory group including business representatives",
       "Planned weeks ahead"
      ],
      [
       "Emergency",
       "Patch for actively exploited vulnerability",
       "Emergency authority (small, named, reachable 24/7)",
       "As fast as safely possible"
      ]
     ]
    },
    {
     "type": "matrix",
     "title": "Choosing the path for a type of change",
     "x": "How often this type of change happens",
     "y": "Risk if it fails",
     "quadrants": [
      {
       "title": "Change authority review",
       "items": [
        "Core platform upgrades, data migrations",
        "Rehearsal, rollback plan, business sign-off"
       ]
      },
      {
       "title": "Redesign to lower the risk",
       "items": [
        "Smaller batches and automated tests",
        "Progressive rollout until it moves down"
       ]
      },
      {
       "title": "Peer review",
       "items": [
        "Low-risk normal changes",
        "Automated checks plus one colleague"
       ]
      },
      {
       "title": "Standard change",
       "items": [
        "Pre-authorise the model once",
        "Automate it end to end"
       ]
      }
     ],
     "caption": "The bottom-right is where most volume lives, so making it standard frees the change authority for the top-left. Frequent risky changes are a design problem, not an approval problem."
    },
    {
     "type": "keypoints",
     "items": [
      "Blast radius: which services and users could be affected if it fails?",
      "History: how often have similar changes failed, for this team and this system?",
      "Testing: what automated and manual tests have passed, and in which environments?",
      "Reversibility: can the change be rolled back quickly, or is it one-way (for example, a data migration)?",
      "Timing: does it collide with peak business periods or other changes?",
      "Dependencies: what other services, suppliers or changes rely on it?"
     ],
     "title": "Evidence for change risk assessment"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Research on high-performing technology organisations has repeatedly found that heavyweight external approval boards do not reduce change failure, but they do slow delivery. Safety comes from small changes, automated testing, peer review, progressive rollout and fast rollback. Use approval boards for genuinely high-risk, cross-cutting changes and for oversight of the change system itself.",
     "title": "Approval does not create safety"
    },
    {
     "type": "formula",
     "title": "Change performance measures",
     "items": [
      {
       "name": "Change success rate",
       "expr": "Change success rate = changes implemented without causing an incident or rollback ÷ total changes × 100%",
       "meaning": "Reliability of the change system."
      },
      {
       "name": "Change failure rate",
       "expr": "Change failure rate = changes causing degraded service or needing remediation ÷ total changes × 100%",
       "meaning": "The complement of success rate; a core delivery-performance metric."
      },
      {
       "name": "Change lead time",
       "expr": "Lead time = deployment time − time change request raised (or code committed)",
       "meaning": "How quickly changes flow; long times encourage risky batching."
      },
      {
       "name": "Standard change share",
       "expr": "Standard share = standard changes ÷ total changes × 100%",
       "meaning": "How much change has been made routine and safe."
      }
     ]
    },
    {
     "type": "steps",
     "title": "Redesigning a slow change process",
     "items": [
      {
       "title": "Measure",
       "text": "Collect a quarter of change data: volume, type, lead time, failures and their causes."
      },
      {
       "title": "Find the safe majority",
       "text": "Identify change types with high volume and near-zero failure. Make them standard changes."
      },
      {
       "title": "Delegate",
       "text": "Move low and medium-risk approval to peers and service owners with automated checks."
      },
      {
       "title": "Automate evidence",
       "text": "Pull test results, scan results and deployment history into the change record automatically."
      },
      {
       "title": "Refocus the board",
       "text": "The change advisory group reviews only high-risk changes and trends, not every request."
      },
      {
       "title": "Review monthly",
       "text": "Track lead time and failure rate together; adjust models when either worsens."
      }
     ]
    },
    {
     "type": "sequence",
     "title": "A risk-based path for a normal change",
     "actors": [
      "Engineer",
      "Pipeline",
      "Policy checks",
      "Change authority",
      "Production"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Merge peer-reviewed change"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Build, test, security scan"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Evidence and risk score"
      },
      {
       "from": 2,
       "to": 1,
       "label": "If low risk: auto-approved",
       "reply": true
      },
      {
       "from": 2,
       "to": 3,
       "label": "If high risk: route for review"
      },
      {
       "from": 3,
       "to": 1,
       "label": "Approved, outside peak hours",
       "reply": true
      },
      {
       "from": 1,
       "to": 4,
       "label": "Progressive deploy with health gates"
      },
      {
       "from": 4,
       "to": 1,
       "label": "Healthy; record updated automatically",
       "reply": true
      }
     ],
     "caption": "Only high-risk changes reach a human authority (steps 5 and 6); everything else is approved by policy using evidence the pipeline already holds. The change record is written by the system, not by tired engineers afterwards."
    },
    {
     "type": "scenario",
     "title": "A change board under pressure",
     "situation": "A telecom operator's weekly change advisory board reviews 260 changes per meeting. Average lead time is 11 days, change failure rate is 18%, and engineers increasingly bundle many changes into large monthly releases. What should the change manager propose?",
     "options": [
      {
       "text": "Create standard changes for proven low-risk types and delegate other approvals by risk",
       "feedback": "Correct. This removes most of the board's volume, shortens lead time, and lets the board focus on genuinely risky changes. Smaller, faster changes reduce the batching that drives failure.",
       "best": true
      },
      {
       "text": "Add a second weekly meeting and require more detailed documentation for every change to reduce failures",
       "feedback": "More meetings and paperwork add delay without addressing why changes fail.",
       "best": false
      },
      {
       "text": "Freeze all changes for a month to stabilise the environment",
       "feedback": "A freeze delays fixes and creates a larger, riskier backlog when it ends.",
       "best": false
      },
      {
       "text": "Let engineers deploy anything without records to save time",
       "feedback": "Removing visibility and risk assessment altogether trades one failure for another.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "Change failures at a mobile operator",
     "context": "A mobile operator's quarterly data shows 1,900 changes, a change failure rate of 14% and an average lead time of nine days. Analysis of the 266 failed changes shows that 70% were large releases bundling 20 or more changes, 18% were made outside agreed windows during traffic peaks, and only 3% were standard changes. Engineers say the process is so slow that they save up changes for the monthly window.",
     "questions": [
      "What does the data say about the causes of change failure?",
      "Which changes would you make to the change model first?",
      "Which measures would show that your changes are working?"
     ],
     "answer": "Failure is concentrated in large, bundled releases, a direct result of slow lead times that encourage batching, and in poorly timed changes. Standard changes are almost never the problem. First, convert proven low-risk change types into standard changes and delegate low and medium-risk approvals to peers and service owners with automated evidence, so engineers no longer need to batch. Second, publish a peak-period policy, enforced by the change schedule, for customer-facing systems. Third, ask the advisory group to focus on high-risk changes and on the trend data. Measure change failure rate, lead time, average changes per release and the share of standard changes monthly; success means smaller releases, shorter lead time and a falling failure rate together."
    },
    {
     "type": "template",
     "title": "Standard change model",
     "purpose": "Define a change type that can be pre-authorised.",
     "columns": [
      "Change type",
      "Scope and limits",
      "Procedure / automation",
      "Tests required",
      "Rollback method",
      "Success history"
     ],
     "example": [
      [
       "Web tier scale-out",
       "Add up to 4 nodes in existing cluster",
       "Pipeline job SCALE-WEB",
       "Health check passes on new nodes",
       "Remove nodes via same job",
       "212 runs, 0 failures in 12 months"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Change",
       "def": "The addition, modification or removal of anything that could have a direct or indirect effect on services."
      },
      {
       "term": "Change enablement",
       "def": "The practice of maximising successful changes by assessing risk, authorising changes and managing the change schedule."
      },
      {
       "term": "Standard change",
       "def": "A low-risk, pre-authorised change that is well understood and follows a defined procedure."
      },
      {
       "term": "Normal change",
       "def": "A change that must be scheduled, assessed and authorised according to its risk."
      },
      {
       "term": "Emergency change",
       "def": "A change that must be implemented as soon as possible, using an expedited authorisation path."
      },
      {
       "term": "Change authority",
       "def": "The person or group that authorises a change, chosen according to the change's risk."
      },
      {
       "term": "Change schedule",
       "def": "A calendar of planned and past changes used to coordinate work and avoid conflicts."
      },
      {
       "term": "Change failure rate",
       "def": "The percentage of changes that lead to degraded service or require remediation."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Look at last month's changes. What share could safely have been standard changes? What stops them from being standard today?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Change enablement maximises successful changes; it is not a committee that says no.",
      "Standard, normal and emergency changes each need a different path and authority.",
      "Match authority to risk, and move evidence collection into the pipeline.",
      "Heavy external approval slows delivery without reliably reducing failure; small, tested, reversible changes do.",
      "Track change failure rate and lead time together, so neither is improved at the other's expense."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A well-tested, pre-authorised procedure for adding users to a standard access group is which type of change?",
       "options": [
        "Emergency",
        "Major change requiring board authorisation",
        "Standard",
        "Normal"
       ],
       "answer": 2,
       "explain": "Low-risk, repeatable and pre-authorised describes a standard change."
      },
      {
       "q": "Which statement about change approval is best supported by evidence?",
       "options": [
        "More approvers always reduce change failure",
        "Heavy external approval slows delivery but rarely cuts failure",
        "Change boards should approve every change individually, however small",
        "Automated testing increases change risk"
       ],
       "answer": 1,
       "explain": "Safety comes from small, tested, reversible changes; heavy approval mainly adds delay."
      },
      {
       "q": "Who should authorise an emergency patch for an actively exploited vulnerability at 02:00?",
       "options": [
        "The full change advisory board at its next weekly meeting",
        "Nobody; emergency changes need no authorisation",
        "A small, named emergency authority reachable 24/7",
        "The vendor who released the patch"
       ],
       "answer": 2,
       "explain": "Emergency changes still need authorisation, but from a small, reachable authority."
      },
      {
       "q": "Out of 400 changes last quarter, 24 caused incidents or needed remediation. What is the change failure rate?",
       "options": [
        "24%",
        "94%",
        "16%",
        "6%"
       ],
       "answer": 3,
       "explain": "24 ÷ 400 = 6%."
      },
      {
       "q": "Why do long change lead times often increase risk?",
       "options": [
        "Long lead times give too much testing time",
        "Approvers become too familiar with each change and approve it too readily",
        "Teams batch many changes into large, risky releases",
        "Short changes are harder to roll back"
       ],
       "answer": 2,
       "explain": "Slow processes encourage batching; large batches are harder to test and roll back."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l2",
   "title": "Release and Deployment Management",
   "subtitle": "Making new functionality available safely, and moving it into production smoothly",
   "minutes": 40,
   "objectives": [
    "Distinguish release management from deployment management",
    "Choose deployment approaches that fit risk and architecture",
    "Design a pipeline that makes releases routine"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Two practices are often confused. **Deployment management** moves new or changed hardware, software, documentation or any other component into live environments. **Release management** makes new and changed services and features available for use. With modern techniques the two can be separated: code can be deployed to production weeks before a feature is released to users with a switch, and a release can be targeted at a small group first."
    },
    {
     "type": "compare",
     "title": "Deployment versus release",
     "columns": [
      {
       "title": "Deployment",
       "items": [
        "Technical movement of components into environments",
        "Owned by engineering and platform teams",
        "Measured by deployment frequency, success and speed",
        "Can happen many times a day"
       ]
      },
      {
       "title": "Release",
       "items": [
        "Making features or services available to users",
        "Involves business, training, communication, support readiness",
        "Measured by adoption and user outcomes",
        "Timed for business readiness"
       ]
      }
     ]
    },
    {
     "type": "table",
     "title": "Deployment approaches",
     "head": [
      "Approach",
      "How it works",
      "Best for",
      "Risk profile"
     ],
     "rows": [
      [
       "Big bang",
       "Everything switches at once",
       "Tightly coupled systems with no alternative",
       "High: failure affects everyone at once"
      ],
      [
       "Phased",
       "Groups of users or sites move in waves",
       "Branches, hospitals, factories",
       "Medium: issues found early in small waves"
      ],
      [
       "Blue-green",
       "Two identical environments; traffic switches from old to new",
       "Web and API services",
       "Low: instant switch back"
      ],
      [
       "Canary",
       "A small share of traffic goes to the new version, then grows",
       "High-traffic digital services",
       "Low: limited blast radius, data-driven expansion"
      ],
      [
       "Feature flags / dark launch",
       "Code deployed but hidden behind a switch",
       "Separating deploy from release; A/B tests",
       "Low, if flags are governed and cleaned up"
      ]
     ]
    },
    {
     "type": "topology",
     "title": "A canary release behind a load balancer",
     "nodes": [
      {
       "id": "pipe",
       "kind": "process",
       "label": "Pipeline",
       "sub": "Rollout controller",
       "x": 0,
       "y": 0
      },
      {
       "id": "gate",
       "kind": "monitor",
       "label": "Health gate",
       "sub": "Error rate, p95 latency vs SLO",
       "x": 6,
       "y": 0
      },
      {
       "id": "blue",
       "kind": "container",
       "label": "v2.4.0 pool",
       "sub": "Current version",
       "x": 1,
       "y": 2
      },
      {
       "id": "green",
       "kind": "container",
       "label": "v2.4.1 pool",
       "sub": "Canary",
       "x": 5,
       "y": 2
      },
      {
       "id": "lb",
       "kind": "lb",
       "label": "Load balancer",
       "sub": "Weighted routing",
       "x": 3,
       "y": 4
      },
      {
       "id": "users",
       "kind": "user",
       "label": "Customers",
       "x": 3,
       "y": 6
      }
     ],
     "links": [
      {
       "a": "users",
       "b": "lb"
      },
      {
       "a": "lb",
       "b": "blue",
       "label": "95%"
      },
      {
       "a": "lb",
       "b": "green",
       "label": "5%"
      },
      {
       "a": "pipe",
       "b": "green",
       "label": "deploy",
       "style": "dashed"
      },
      {
       "a": "green",
       "b": "gate",
       "label": "metrics",
       "style": "dashed"
      },
      {
       "a": "gate",
       "b": "pipe",
       "label": "promote or roll back",
       "style": "dashed"
      }
     ],
     "caption": "The new version receives a small share of real traffic while the health gate compares it with the SLO. The same picture with a 0%/100% switch is a blue-green deployment."
    },
    {
     "type": "flow",
     "title": "A modern delivery pipeline",
     "items": [
      {
       "label": "Commit",
       "text": "Code and configuration in version control"
      },
      {
       "label": "Build",
       "text": "Compile, package, create immutable artefact"
      },
      {
       "label": "Test",
       "text": "Unit, integration, security and performance tests"
      },
      {
       "label": "Stage",
       "text": "Deploy to production-like environment"
      },
      {
       "label": "Deploy",
       "text": "Progressive rollout with health checks"
      },
      {
       "label": "Release",
       "text": "Feature enabled for target users"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A Bangladeshi commercial bank rolled out a new teller system to 180 branches. It started with two branches in Dhaka for four weeks, then 20 branches across divisions, then the rest in four waves. Each wave had floor-support staff, a daily defect review and go/no-go criteria. Issues with Bangla receipt printing were found in the first wave and fixed before they reached 178 more branches.",
     "title": "A phased release at a bank"
    },
    {
     "type": "keypoints",
     "items": [
      "Users trained and job aids ready, in the right languages.",
      "Service desk briefed with known issues and knowledge articles.",
      "Support model and escalation paths agreed, including suppliers.",
      "Monitoring and dashboards updated for new components.",
      "Communication sent: what changes, when, and where to get help.",
      "Rollback or fallback plan rehearsed and go/no-go criteria agreed."
     ],
     "title": "Release readiness: beyond the code"
    },
    {
     "type": "cli",
     "title": "Canary rollout with health gate (pipeline script excerpt)",
     "device": "Linux host",
     "lines": [
      "# deploy v2.4.1 to 5% of traffic",
      "deployctl rollout start payments-api --version 2.4.1 --weight 5",
      "# watch error rate and latency for 15 minutes against the SLO",
      "deployctl rollout gate payments-api --metric error_rate --max 0.5% --window 15m",
      "deployctl rollout gate payments-api --metric p95_latency --max 300ms --window 15m",
      "# promote if gates pass, otherwise roll back automatically",
      "deployctl rollout promote payments-api --steps 25,50,100 --pause 10m"
     ],
     "note": "`deployctl` is a generic placeholder for whichever deployment tool your platform uses; the pattern of weights, gates and automatic rollback is what matters."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Canary traffic share during the rollout above",
     "labels": [
      "0 min",
      "15 min",
      "25 min",
      "35 min",
      "45 min"
     ],
     "series": [
      {
       "name": "Traffic on v2.4.1",
       "values": [
        5,
        25,
        50,
        100,
        100
       ]
      }
     ],
     "unit": "%",
     "yLabel": "Share of traffic",
     "caption": "Each step up happens only after the gates pass for the agreed window. A failed gate at any point sends the share straight back to zero."
    },
    {
     "type": "scenario",
     "title": "Choosing a deployment approach",
     "situation": "A hospital is replacing its laboratory results interface, which feeds results to wards 24/7. The new interface can run alongside the old one, and traffic can be switched between them in seconds. Which approach is best?",
     "options": [
      {
       "text": "Big bang on a Sunday night, because traffic is lowest then and fewer clinicians would be affected",
       "feedback": "Low traffic reduces impact, but a big bang with no fast fallback is unnecessary when blue-green is possible.",
       "best": false
      },
      {
       "text": "Blue-green with a rehearsed switch-back",
       "feedback": "Correct. Running both environments allows an instant switch and an instant return if results stop flowing, protecting patient safety.",
       "best": true
      },
      {
       "text": "Phased by ward over three months",
       "feedback": "Running two interfaces per ward for months adds complexity; the switching capability makes blue-green simpler.",
       "best": false
      },
      {
       "text": "Deploy without a plan because the vendor has tested it",
       "feedback": "Vendor testing does not replace local readiness and fallback for a safety-critical service.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Go/no-go checklist for a release",
     "purpose": "Agree objective criteria before release day.",
     "columns": [
      "Criterion",
      "Measure / evidence",
      "Threshold",
      "Owner",
      "Status"
     ],
     "example": [
      [
       "Critical defects open",
       "Defect tracker",
       "Zero severity-1, ≤3 severity-2 with workarounds",
       "Test lead",
       "Met"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Release management",
       "def": "The practice of making new and changed services and features available for use."
      },
      {
       "term": "Deployment management",
       "def": "The practice of moving new or changed components into live environments."
      },
      {
       "term": "Canary release",
       "def": "Routing a small share of users or traffic to a new version and expanding only if health measures stay within limits."
      },
      {
       "term": "Blue-green deployment",
       "def": "Running two identical environments and switching traffic from the old to the new, with the ability to switch back instantly."
      },
      {
       "term": "Feature flag",
       "def": "A configuration switch that turns functionality on or off without redeploying code."
      },
      {
       "term": "Go/no-go criteria",
       "def": "Agreed, objective conditions that must be met before a release proceeds."
      },
      {
       "term": "Deployment pipeline",
       "def": "An automated sequence of build, test and deployment steps from code commit to production."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "In your organisation, is deployment the same moment as release? What would change if you could separate them?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Deployment moves components into environments; release makes features available to users.",
      "Feature flags let teams deploy early and release later, to chosen user groups.",
      "Choose big bang, phased, blue-green or canary by blast radius and ability to switch back.",
      "Release readiness includes training, desk briefing, monitoring, communication and a rehearsed fallback.",
      "Automated health gates turn rollback from a debate into a rule."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which practice is concerned with making features available to users, including training and communication?",
       "options": [
        "IT asset management for the new release components",
        "Monitoring and event management",
        "Release management",
        "Deployment management"
       ],
       "answer": 2,
       "explain": "Release management covers availability to users and the readiness around it."
      },
      {
       "q": "Which approach routes a small percentage of traffic to a new version first?",
       "options": [
        "Canary",
        "Blue-green",
        "Phased rollout by geographic region across all branches",
        "Big bang"
       ],
       "answer": 0,
       "explain": "Canary releases expose a small share of traffic and expand based on health data."
      },
      {
       "q": "What is the main benefit of feature flags?",
       "options": [
        "Removing the need for testing",
        "Allowing users to edit production code directly from the browser",
        "Separating deployment from release",
        "Making rollback impossible"
       ],
       "answer": 2,
       "explain": "Flags let code be deployed but released later, to selected users, or switched off."
      },
      {
       "q": "Which item is part of release readiness rather than deployment?",
       "options": [
        "Artefact built and signed",
        "Database migration script executed in staging",
        "Service desk briefed with known issues",
        "Container image scanned"
       ],
       "answer": 2,
       "explain": "Desk readiness concerns users and support; the others are technical deployment steps."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l3",
   "title": "Service Request Management and the Service Catalogue",
   "subtitle": "Making standard requests effortless for users and efficient for providers",
   "minutes": 35,
   "objectives": [
    "Distinguish service requests from incidents and changes",
    "Design request models and catalogue entries users can understand",
    "Automate fulfilment while keeping appropriate controls"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **service request** is a user's request for something that is a normal part of service delivery: access to a system, a new laptop, information, a password reset, a meeting room set-up. Nothing is broken. Service request management supports the agreed quality of a service by handling these requests in an effective and user-friendly way. Because requests are predictable, they are the best candidates for standardisation and automation."
    },
    {
     "type": "table",
     "title": "Request, incident or change?",
     "head": [
      "Situation",
      "Classification",
      "Why"
     ],
     "rows": [
      [
       "New employee needs email and finance system access",
       "Service request",
       "Normal, pre-defined part of service delivery"
      ],
      [
       "Email has stopped working for one department",
       "Incident",
       "Unplanned interruption"
      ],
      [
       "Finance wants a new approval step added to the purchasing system",
       "Change (via demand/engagement)",
       "Modifies the service; needs assessment"
      ],
      [
       "User asks how to export a report to a spreadsheet",
       "Service request (information)",
       "Request for information or advice"
      ]
     ]
    },
    {
     "type": "framework",
     "title": "Elements of a good request model",
     "items": [
      {
       "label": "Sc",
       "title": "Scope",
       "text": "Exactly what is offered, for whom, and what is not included."
      },
      {
       "label": "Ap",
       "title": "Approvals",
       "text": "Who must approve, if anyone. Many requests need none if access is role-based or low-cost."
      },
      {
       "label": "Fu",
       "title": "Fulfilment steps",
       "text": "Tasks, teams, automation and expected durations."
      },
      {
       "label": "SL",
       "title": "Service level",
       "text": "Target fulfilment time and how progress is communicated."
      },
      {
       "label": "Co",
       "title": "Cost",
       "text": "Charge or budget impact, if any, visible to the requester."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "A catalogue entry titled 'AD group membership modification' means nothing to a nurse. 'Get access to the lab results system' does. Each entry should say what you get, who can ask, how long it takes and what it costs, in plain language, with a single button to order.",
     "title": "Write the catalogue for the person ordering"
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Enterprise service management: beyond IT",
     "text": "The same request models, portal and workflow engine that serve IT requests work equally well for HR, facilities, finance and legal. Many organisations now run **enterprise service management**: one catalogue and one front door for every internal service. Users stop guessing which department owns what, and each department inherits proven practices such as service levels, knowledge and automation."
    },
    {
     "type": "tree",
     "title": "One enterprise catalogue, many providers",
     "root": {
      "label": "Enterprise service catalogue",
      "text": "One portal, one way to ask",
      "children": [
       {
        "label": "IT",
        "children": [
         {
          "label": "Lab results access"
         },
         {
          "label": "Replacement laptop"
         }
        ]
       },
       {
        "label": "HR",
        "children": [
         {
          "label": "Payslip copy"
         },
         {
          "label": "Leave correction"
         }
        ]
       },
       {
        "label": "Facilities",
        "children": [
         {
          "label": "Meeting room set-up"
         },
         {
          "label": "Repair request"
         }
        ]
       },
       {
        "label": "Finance",
        "children": [
         {
          "label": "New supplier set-up"
         },
         {
          "label": "Expense query"
         }
        ]
       }
      ]
     },
     "caption": "Users see what they can ask for in their own words; which department fulfils it is a back-stage detail. Each leaf is a catalogue entry with its own request model."
    },
    {
     "type": "compare",
     "title": "Approval design",
     "columns": [
      {
       "title": "Over-controlled",
       "items": [
        "Line manager, IT manager and finance approve a mouse",
        "Approvals wait for absent managers",
        "Users email IT directly to avoid the portal",
        "Approval adds days but catches nothing"
       ]
      },
      {
       "title": "Right-sized",
       "items": [
        "Low-cost items pre-approved within a budget",
        "Role-based access granted automatically",
        "Approvals only where risk or cost justifies them",
        "Delegates and timeouts prevent stalled requests"
       ]
      }
     ]
    },
    {
     "type": "steps",
     "title": "Automating a request end to end",
     "items": [
      {
       "title": "Standardise",
       "text": "Agree one model for the request, removing local variations."
      },
      {
       "title": "Simplify",
       "text": "Remove approvals and data fields that add no value."
      },
      {
       "title": "Integrate",
       "text": "Connect the portal to identity, HR, asset and finance systems."
      },
      {
       "title": "Automate",
       "text": "Fulfil automatically where possible: create accounts, assign licences, send instructions."
      },
      {
       "title": "Monitor",
       "text": "Track volume, fulfilment time, failures and satisfaction for each model."
      }
     ]
    },
    {
     "type": "sequence",
     "title": "A fully automated access request",
     "actors": [
      "Nurse",
      "Portal",
      "Workflow engine",
      "Identity system",
      "Line manager"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Get access to lab results"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Request plus role from HR data"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Role matches pre-approved package"
      },
      {
       "from": 2,
       "to": 4,
       "label": "Approval only if outside role",
       "note": "Not needed this time"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Create account, add role group"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Done",
       "reply": true
      },
      {
       "from": 2,
       "to": 0,
       "label": "Access ready, with a quick guide",
       "reply": true
      }
     ],
     "caption": "Role-based packages remove the approval step for the common case, so fulfilment takes minutes. Human approval is kept for requests outside the role, where it actually changes outcomes."
    },
    {
     "type": "formula",
     "title": "Request measures",
     "items": [
      {
       "name": "Fulfilment time",
       "expr": "Fulfilment time = time delivered − time requested",
       "meaning": "The user's experience of waiting; report median and 90th percentile."
      },
      {
       "name": "Automation rate",
       "expr": "Automation rate = requests fulfilled with no manual step ÷ total requests × 100%",
       "meaning": "Progress in removing toil from routine work."
      },
      {
       "name": "First-time-right rate",
       "expr": "First-time-right = requests fulfilled without rework or return ÷ total × 100%",
       "meaning": "Quality of the request model and data captured."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Approvals that block onboarding",
     "situation": "At a pharmaceutical company, a request for standard sales-app access needs approval from the line manager, the sales director and IT security. Median fulfilment is 9 days; 97% of requests are approved unchanged. What is the best redesign?",
     "options": [
      {
       "text": "Keep all approvals but send automatic reminder emails to each approver every 24 hours until they respond",
       "feedback": "Reminders may shave a little time but keep three low-value approvals.",
       "best": false
      },
      {
       "text": "Grant access automatically by role from the HR record, with periodic access reviews",
       "feedback": "Correct. Near-universal approval shows the approvals add delay but little control. Role-based provisioning plus reviews gives speed and assurance.",
       "best": true
      },
      {
       "text": "Remove all controls and let anyone request any access",
       "feedback": "This ignores legitimate security needs; role-based access keeps control.",
       "best": false
      },
      {
       "text": "Move the request to email so it is faster to send",
       "feedback": "Email loses tracking and auditability, and approvals still wait.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Catalogue entry design",
     "purpose": "Describe a request so users can order it without help.",
     "columns": [
      "Entry name (user words)",
      "Who can request",
      "What you get",
      "Approval",
      "Target time",
      "Cost"
     ],
     "example": [
      [
       "Get access to the lab results system",
       "Doctors, nurses, lab staff",
       "Read access to results for your ward",
       "None – role-based",
       "Same working day",
       "No charge"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Service request",
       "def": "A request from a user for something that is a normal, pre-defined part of service delivery."
      },
      {
       "term": "Service request management",
       "def": "The practice of supporting agreed service quality by handling all pre-defined, user-initiated requests effectively and in a user-friendly way."
      },
      {
       "term": "Request model",
       "def": "A predefined approach for fulfilling a type of request, including scope, approvals, steps and service levels."
      },
      {
       "term": "Service catalogue",
       "def": "Structured information about the services and offerings available to consumers."
      },
      {
       "term": "Role-based access",
       "def": "Granting access automatically based on a person's job role rather than individual approvals."
      },
      {
       "term": "Fulfilment",
       "def": "The delivery of what was requested."
      },
      {
       "term": "Automation rate",
       "def": "The share of requests fulfilled with no manual intervention."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which request in your organisation needs the most approvals? Do those approvals ever change the outcome?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Service requests are normal, expected demand; nothing is broken.",
      "Write catalogue entries in the requester's language, with time, cost and a single way to order.",
      "Approvals belong only where risk or cost justifies them; role-based access removes most of them.",
      "Improve requests in order: standardise, simplify, integrate, then automate.",
      "Enterprise service management extends the same catalogue and practices to HR, facilities and finance."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A user asks how to export a report to a spreadsheet. How should this be classified?",
       "options": [
        "A problem record for the reporting application",
        "An incident",
        "A service request for information",
        "A normal change"
       ],
       "answer": 2,
       "explain": "Requests for information or advice are service requests."
      },
      {
       "q": "97% of requests for a type of access are approved unchanged. What does this suggest?",
       "options": [
        "More approvers are needed to catch problems",
        "The approval adds delay with little control value",
        "The approvers are not reading the requests carefully",
        "The access should be removed from the catalogue entirely"
       ],
       "answer": 1,
       "explain": "Near-universal approval signals that a role-based or pre-approved model may be better."
      },
      {
       "q": "Which catalogue entry title is most user-friendly?",
       "options": [
        "AD group membership modification",
        "LIS-RO-ACL change",
        "Get access to the lab results system",
        "Directory object permission update for a security group"
       ],
       "answer": 2,
       "explain": "Users recognise outcomes in their own words."
      },
      {
       "q": "What is the best order for improving a request?",
       "options": [
        "Automate first, then simplify",
        "Standardise, simplify, integrate, then automate",
        "Automate everything immediately without any changes",
        "Integrate first, then standardise"
       ],
       "answer": 1,
       "explain": "Optimise before automating: standardise and simplify, then integrate and automate."
      },
      {
       "q": "HR, facilities and IT each run a separate request inbox, and staff often send requests to the wrong one. What is the most effective improvement?",
       "options": [
        "Publish each department's inbox address more widely",
        "One shared catalogue and portal for all departments",
        "Ask each department to answer requests faster",
        "Merge the three departments into one team"
       ],
       "answer": 1,
       "explain": "Enterprise service management gives users one front door in their own language while each department fulfils its own requests. Better address lists or faster replies leave the routing problem in place; merging departments is unnecessary."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l4",
   "title": "IT Asset and Service Configuration Management",
   "subtitle": "Knowing what you have, what it costs and how it connects to services",
   "minutes": 45,
   "objectives": [
    "Distinguish IT asset management from service configuration management",
    "Scope a configuration management database by the decisions it supports",
    "Use discovery, lifecycle and licence data to reduce cost and risk"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Two practices answer two different questions. **IT asset management** asks: what do we own or use, what does it cost, and is it compliant? It manages assets through their lifecycle, from planning and purchase to disposal. **Service configuration management** asks: how are components configured and how do they relate to the services they support? It provides the map that incident, change and problem teams need to understand impact."
    },
    {
     "type": "compare",
     "title": "Asset versus configuration item",
     "columns": [
      {
       "title": "IT asset",
       "items": [
        "Anything of financial value that contributes to an IT product or service",
        "Managed for cost, contracts, licences and lifecycle",
        "Example: 1,200 laptops, 300 software licences, a support contract"
       ]
      },
      {
       "title": "Configuration item (CI)",
       "items": [
        "Any component that needs to be managed to deliver a service",
        "Managed for relationships and configuration",
        "Example: payments API, its database, the load balancer and the service they form"
       ]
      }
     ]
    },
    {
     "type": "cycle",
     "title": "Asset lifecycle",
     "center": "IT asset lifecycle",
     "items": [
      {
       "label": "Plan",
       "text": "Demand, standards, budget and refresh dates."
      },
      {
       "label": "Acquire",
       "text": "Purchase, lease or subscribe."
      },
      {
       "label": "Deploy",
       "text": "Register, configure and assign."
      },
      {
       "label": "Operate",
       "text": "Maintain, patch and track usage."
      },
      {
       "label": "Retire",
       "text": "Recover, wipe data with certification, then reuse, refurbish or recycle; lessons feed the next plan."
      }
     ],
     "caption": "The loop closes at retirement: reclaimed devices and licences reduce what the next plan must buy. Extending device life is also one of the cheapest sustainability gains in IT."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A university tried to record every cable, mouse and software setting in its configuration management database. After 18 months, data was 40% inaccurate and nobody trusted it. Scope configuration data by the decisions it must support: if no incident, change or audit decision needs a piece of data, do not collect it.",
     "title": "The CMDB that tried to hold everything"
    },
    {
     "type": "steps",
     "title": "Scoping configuration data by decisions",
     "items": [
      {
       "title": "List the decisions",
       "text": "Impact analysis for changes, routing incidents, audit evidence, capacity planning."
      },
      {
       "title": "Identify required CIs",
       "text": "Which services, applications, platforms and infrastructure do those decisions need?"
      },
      {
       "title": "Define relationships",
       "text": "Runs on, depends on, connects to, supported by: only the types decisions use."
      },
      {
       "title": "Choose sources",
       "text": "Prefer automated discovery and cloud APIs over manual entry."
      },
      {
       "title": "Assign owners",
       "text": "Each CI class has an owner accountable for accuracy."
      },
      {
       "title": "Verify and audit",
       "text": "Reconcile discovery with records; measure accuracy monthly."
      }
     ]
    },
    {
     "type": "topology",
     "title": "Service model: what wallet payments depends on",
     "nodes": [
      {
       "id": "svc",
       "kind": "process",
       "label": "Wallet payments",
       "sub": "Business service",
       "x": 3,
       "y": 0
      },
      {
       "id": "api",
       "kind": "api",
       "label": "Payments API",
       "x": 1,
       "y": 2
      },
      {
       "id": "auth",
       "kind": "idp",
       "label": "Authentication",
       "x": 3,
       "y": 2
      },
      {
       "id": "notif",
       "kind": "api",
       "label": "Notifications",
       "x": 5,
       "y": 2
      },
      {
       "id": "k8s",
       "kind": "container",
       "label": "Container cluster",
       "x": 1,
       "y": 4
      },
      {
       "id": "db",
       "kind": "db",
       "label": "Managed database",
       "x": 3,
       "y": 4
      },
      {
       "id": "mq",
       "kind": "process",
       "label": "Message queue",
       "x": 5,
       "y": 4
      },
      {
       "id": "ra",
       "kind": "cloud",
       "label": "Cloud region A",
       "sub": "Primary",
       "x": 1,
       "y": 6
      },
      {
       "id": "rb",
       "kind": "cloud",
       "label": "Cloud region B",
       "sub": "Standby",
       "x": 3,
       "y": 6
      },
      {
       "id": "sms",
       "kind": "tower",
       "label": "SMS gateway",
       "sub": "Supplier",
       "x": 5,
       "y": 6
      }
     ],
     "links": [
      {
       "a": "svc",
       "b": "api"
      },
      {
       "a": "svc",
       "b": "auth"
      },
      {
       "a": "svc",
       "b": "notif"
      },
      {
       "a": "api",
       "b": "k8s",
       "label": "runs on"
      },
      {
       "a": "api",
       "b": "db",
       "label": "depends on"
      },
      {
       "a": "auth",
       "b": "db"
      },
      {
       "a": "notif",
       "b": "mq"
      },
      {
       "a": "mq",
       "b": "sms",
       "label": "supplier"
      },
      {
       "a": "k8s",
       "b": "ra"
      },
      {
       "a": "db",
       "b": "ra"
      },
      {
       "a": "db",
       "b": "rb",
       "label": "replica",
       "style": "dashed"
      }
     ],
     "caption": "Relationships, not the list of items, answer impact questions: a fault in the managed database touches both the Payments API and Authentication. Collect only the relationship types that decisions like this need."
    },
    {
     "type": "formula",
     "title": "Asset and configuration measures",
     "items": [
      {
       "name": "CI accuracy",
       "expr": "Accuracy = CIs whose recorded attributes match discovered reality ÷ CIs sampled × 100%",
       "meaning": "Trustworthiness of configuration data."
      },
      {
       "name": "Licence compliance position",
       "expr": "Compliance = licences owned − licences deployed (by product)",
       "meaning": "Negative values show exposure to audit fines; large positives show waste."
      },
      {
       "name": "Asset utilisation",
       "expr": "Utilisation = assets in active use ÷ assets owned × 100%",
       "meaning": "Idle hardware and unused subscriptions waste money."
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Reclaim unused software subscriptions every quarter.",
      "Plan hardware refresh before end-of-support dates, not after failures.",
      "Wipe and certify disposal of devices holding personal data.",
      "Find shadow IT and unmanaged cloud spending through finance and network data.",
      "Give incident teams the owner and support contract of any failing component in seconds.",
      "Extend device life and use certified recyclers, giving evidence for sustainability reporting."
     ],
     "title": "Practical wins from asset data"
    },
    {
     "type": "scenario",
     "title": "A licence audit letter",
     "situation": "A garment group receives an audit notice from a software publisher. The asset register lists 800 licences; network discovery finds the software on 1,140 devices, including 210 that have not been used in 90 days. What should the IT asset manager do first?",
     "options": [
      {
       "text": "Buy 340 additional licences immediately so that the group is fully compliant before the audit begins",
       "feedback": "This may overspend: some installations are unused and can be removed.",
       "best": false
      },
      {
       "text": "Reconcile discovery with entitlements, remove unused installs and quantify the remaining gap",
       "feedback": "Correct. Reconciliation establishes the true position, removing unused installs reduces exposure legitimately, and the remaining gap informs negotiation or purchase.",
       "best": true
      },
      {
       "text": "Uninstall the software from all devices until the audit ends",
       "feedback": "This disrupts business and does not establish the facts.",
       "best": false
      },
      {
       "text": "Tell the publisher the register shows 800 and ignore discovery data",
       "feedback": "Knowingly misrepresenting the position creates legal and reputational risk.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "CI class definition",
     "purpose": "Define what configuration data to keep and why.",
     "columns": [
      "CI class",
      "Decisions it supports",
      "Key attributes",
      "Relationships",
      "Data source",
      "Owner"
     ],
     "example": [
      [
       "Application service",
       "Change impact, incident routing",
       "Name, owner, criticality, support group",
       "Runs on platform; supports business service",
       "Service catalogue + discovery",
       "Application portfolio manager"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "IT asset",
       "def": "Any financially valuable component that can contribute to the delivery of an IT product or service."
      },
      {
       "term": "IT asset management",
       "def": "The practice of planning and managing the full lifecycle of IT assets to maximise value, control costs and manage risks."
      },
      {
       "term": "Configuration item (CI)",
       "def": "Any component that needs to be managed in order to deliver an IT service."
      },
      {
       "term": "Service configuration management",
       "def": "The practice of ensuring accurate, reliable information about the configuration of services and the CIs that support them is available when needed."
      },
      {
       "term": "Configuration management database (CMDB)",
       "def": "A database used to store configuration records and their relationships throughout their lifecycle."
      },
      {
       "term": "Discovery",
       "def": "Automated scanning of networks and platforms to identify devices, software and relationships."
      },
      {
       "term": "Licence compliance",
       "def": "The match between software entitlements owned and software actually deployed or used."
      },
      {
       "term": "Shadow IT",
       "def": "Technology acquired or used without the knowledge or control of the IT function."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which decision in your organisation would most benefit from trustworthy configuration data today? What is the smallest scope that would support it?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Asset management tracks cost, contracts, licences and lifecycle; configuration management tracks relationships to services.",
      "Scope configuration data by the decisions it must support, not by everything that exists.",
      "Prefer automated discovery and platform APIs over manual record keeping.",
      "Licence position = owned minus deployed; negative values are audit exposure.",
      "Retirement closes the loop: certified wiping, reuse and responsible recycling."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which question does service configuration management mainly answer?",
       "options": [
        "Which supplier invoice is overdue",
        "Who approved each purchase order in the finance system",
        "How components relate to the services they support",
        "How much each laptop cost when purchased"
       ],
       "answer": 2,
       "explain": "Configuration management focuses on components and relationships; costs and contracts belong to asset management."
      },
      {
       "q": "Why do many CMDB initiatives fail?",
       "options": [
        "They are scoped by decisions",
        "They use automated discovery",
        "They collect more data than any decision needs",
        "They assign an owner to every CI class in the database"
       ],
       "answer": 2,
       "explain": "Over-scoping makes data impossible to keep accurate; scoping by decisions keeps it useful."
      },
      {
       "q": "Licences owned: 500. Licences deployed: 620. What is the compliance position?",
       "options": [
        "120 licences surplus",
        "Fully compliant",
        "620 licences short",
        "120 licences short"
       ],
       "answer": 3,
       "explain": "500 − 620 = −120: the organisation is under-licensed by 120."
      },
      {
       "q": "What should happen to a laptop holding patient data at the end of its life?",
       "options": [
        "Disposal with general office waste and recycling",
        "Certified data wiping before disposal or reuse",
        "Immediate donation to staff",
        "Storage indefinitely in a cupboard"
       ],
       "answer": 1,
       "explain": "The retire stage must protect data through certified wiping or destruction."
      },
      {
       "q": "Which data source is preferred for keeping configuration data accurate?",
       "options": [
        "Engineers' memories",
        "Annual manual surveys",
        "Spreadsheets maintained by each team separately",
        "Automated discovery and platform APIs"
       ],
       "answer": 3,
       "explain": "Automation reduces manual effort and keeps data current."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l5",
   "title": "Service Level Management and Experience",
   "subtitle": "Agreeing, measuring and improving what users really experience",
   "minutes": 45,
   "objectives": [
    "Write service level agreements that reflect outcomes users care about",
    "Link SLAs to internal agreements and supplier contracts",
    "Combine operational metrics with experience measures in service reviews"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Service level management sets clear, business-based targets for service performance so that delivery can be properly assessed, monitored and managed. Its most visible artefact is the **service level agreement (SLA)**, but the real work is the conversation: understanding what customers need, agreeing realistic targets, measuring honestly and improving together. An SLA nobody discusses is just paperwork."
    },
    {
     "type": "topology",
     "title": "The agreement chain behind one service",
     "nodes": [
      {
       "id": "cust",
       "kind": "team",
       "label": "Customer",
       "sub": "Business unit",
       "x": 0,
       "y": 2
      },
      {
       "id": "prov",
       "kind": "team",
       "label": "Service owner",
       "sub": "Provider",
       "x": 3,
       "y": 2
      },
      {
       "id": "sup",
       "kind": "server",
       "label": "Supplier",
       "sub": "4-hour hardware swap",
       "x": 6,
       "y": 2
      },
      {
       "id": "dbt",
       "kind": "db",
       "label": "Database team",
       "sub": "Restore within 2 h",
       "x": 2,
       "y": 4
      },
      {
       "id": "net",
       "kind": "router",
       "label": "Network team",
       "sub": "Link fault fix 1 h",
       "x": 4,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "cust",
       "b": "prov",
       "label": "SLA"
      },
      {
       "a": "prov",
       "b": "sup",
       "label": "UC (contract)"
      },
      {
       "a": "prov",
       "b": "dbt",
       "label": "OLA"
      },
      {
       "a": "prov",
       "b": "net",
       "label": "OLA"
      }
     ],
     "zones": [
      {
       "label": "Provider organisation",
       "x": 2,
       "y": 2,
       "w": 3,
       "h": 3,
       "tone": "accent"
      }
     ],
     "caption": "The SLA promise to the customer is only as strong as the OLAs and contracts beneath it. The example targets are illustrative; each must leave room inside the SLA target."
    },
    {
     "type": "table",
     "title": "Good and poor SLA targets",
     "head": [
      "Poor target",
      "Why it is weak",
      "Better target"
     ],
     "rows": [
      [
       "Server availability 99.9%",
       "Users do not use servers; components can be up while the service fails",
       "Patients can book appointments online 99.5% of the time, 06:00–23:00"
      ],
      [
       "Respond to incidents in 15 minutes",
       "Response is not resolution",
       "90% of P2 incidents restored within 4 hours"
      ],
      [
       "Average response time under 2 seconds",
       "Averages hide bad experiences",
       "95% of payment confirmations within 3 seconds"
      ],
      [
       "All tickets closed in 5 days",
       "Mixes requests and incidents; easily gamed",
       "Standard access requests fulfilled within 1 working day (90%)"
      ]
     ]
    },
    {
     "type": "formula",
     "title": "Service level calculations",
     "items": [
      {
       "name": "Availability",
       "expr": "Availability = (agreed service time − downtime) ÷ agreed service time × 100%",
       "meaning": "Share of agreed time the service was usable; agree what counts as 'down' in advance."
      },
      {
       "name": "Allowed downtime",
       "expr": "Allowed downtime = agreed service time × (1 − availability target)",
       "meaning": "Example: 30 days × 24 h × 0.1% ≈ 43 minutes a month for 99.9%."
      },
      {
       "name": "SLA compliance",
       "expr": "Compliance = transactions or periods meeting target ÷ total × 100%",
       "meaning": "How often the target was met."
      }
     ]
    },
    {
     "type": "compare",
     "title": "SLA versus experience level agreement (XLA)",
     "columns": [
      {
       "title": "SLA focus",
       "items": [
        "Operational outputs: availability, response, resolution",
        "Measured from provider systems",
        "Can be met while users are frustrated"
       ]
      },
      {
       "title": "XLA focus",
       "items": [
        "User outcomes and sentiment: productivity lost, effort, satisfaction",
        "Measured from users and digital experience data",
        "Complements SLAs to expose watermelon effects"
       ]
      }
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "The watermelon effect: SLAs green, experience red",
     "labels": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
     ],
     "series": [
      {
       "name": "SLA targets met",
       "values": [
        97,
        98,
        98,
        99,
        98,
        99
       ]
      },
      {
       "name": "Users rating support as good",
       "values": [
        71,
        66,
        62,
        58,
        55,
        52
       ]
      }
     ],
     "unit": "%",
     "caption": "Illustrative numbers. Operational targets look perfect while users' experience steadily worsens; an XLA would have flagged the second line months earlier."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A strong service review starts with the user's experience (sentiment, effort, business outcomes) and then uses operational data to explain it. If satisfaction drops while SLAs are green, the SLAs measure the wrong things.",
     "title": "Measure what users feel, then explain it with what you control"
    },
    {
     "type": "steps",
     "title": "Running a service review",
     "items": [
      {
       "title": "Prepare",
       "text": "Combine SLA results, experience data, major incidents, changes and improvement status."
      },
      {
       "title": "Start with outcomes",
       "text": "How did the service support the business this period? What did users say?"
      },
      {
       "title": "Explain performance",
       "text": "Use operational data to explain good and bad periods."
      },
      {
       "title": "Agree actions",
       "text": "Improvement items with owners, linked to the improvement register."
      },
      {
       "title": "Revisit targets",
       "text": "Are targets still right for the business? Adjust when needs change."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Green SLA, angry customer",
     "situation": "A university's IT department meets every SLA target for the student portal, yet the Pro-Vice-Chancellor complains that students cannot submit assignments during peak deadlines. Monitoring shows the portal is 'available' but pages take 40 seconds to load at peak. What should the service level manager do?",
     "options": [
      {
       "text": "Show the Pro-Vice-Chancellor the green SLA report to prove the service is performing as agreed",
       "feedback": "Defending the paperwork damages the relationship and ignores the business outcome.",
       "best": false
      },
      {
       "text": "Agree a peak-time response target with the customer and add student-experience measures",
       "feedback": "Correct. Availability alone missed the real experience. Agreeing targets that reflect peak use and measuring experience closes the gap.",
       "best": true
      },
      {
       "text": "Increase server capacity permanently without changing the agreement",
       "feedback": "This may help but leaves the agreement unable to detect the next problem.",
       "best": false
      },
      {
       "text": "Remove the portal from SLA reporting",
       "feedback": "Removing measurement hides the issue.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "SLA target worksheet",
     "purpose": "Design targets that reflect customer outcomes.",
     "columns": [
      "Service",
      "Customer outcome",
      "Measure",
      "Target and hours",
      "Data source",
      "Linked OLAs / UCs"
     ],
     "example": [
      [
       "Online appointment booking",
       "Patients book without calling",
       "Successful synthetic bookings",
       "99.5%, 06:00–23:00; 95% in <5 s",
       "Synthetic monitoring",
       "OLA: database team; UC: SMS gateway 99.9%"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Service level management",
       "def": "The practice of setting business-based targets for service performance and assessing, monitoring and managing delivery against them."
      },
      {
       "term": "Service level agreement (SLA)",
       "def": "A documented agreement between a provider and a customer that identifies services and expected service levels."
      },
      {
       "term": "Operational level agreement (OLA)",
       "def": "An agreement between internal teams that supports the delivery of an SLA."
      },
      {
       "term": "Underpinning contract (UC)",
       "def": "A contract with an external supplier that supports the delivery of agreed service levels."
      },
      {
       "term": "Experience level agreement (XLA)",
       "def": "An agreement focused on user experience and outcomes, complementing operational SLA targets."
      },
      {
       "term": "Availability",
       "def": "The ability of a service to perform its agreed function when required, usually expressed as a percentage of agreed service time."
      },
      {
       "term": "Service review",
       "def": "A regular meeting between provider and customer to review performance, experience and improvements."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick one SLA you are responsible for. Would its users recognise the targets as describing their experience? What would you change?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "SLAs sit on top of OLAs with internal teams and underpinning contracts with suppliers.",
      "Write targets about what users experience, using percentiles and agreed service hours.",
      "XLAs add sentiment, effort and productivity measures to expose green-but-failing services.",
      "Allowed downtime = agreed time × (1 − target); 99.9% of a 30-day month is about 43 minutes.",
      "Service reviews start from outcomes and experience, then use operational data to explain them."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which agreement is between two internal teams?",
       "options": [
        "Operational level agreement",
        "Service level agreement",
        "Experience level agreement signed with the customer",
        "Underpinning contract"
       ],
       "answer": 0,
       "explain": "OLAs are internal agreements supporting the SLA."
      },
      {
       "q": "For a 30-day month with a 24/7 service, approximately how much downtime does a 99.9% availability target allow?",
       "options": [
        "About 4 minutes",
        "About 7 hours",
        "About 4.3 hours",
        "About 43 minutes"
       ],
       "answer": 3,
       "explain": "30 × 24 × 60 × 0.001 ≈ 43 minutes."
      },
      {
       "q": "Why are percentile targets often better than averages?",
       "options": [
        "Averages cannot be measured automatically",
        "Averages hide the bad experiences of a significant minority",
        "Percentiles are easier to calculate",
        "Percentiles always make the provider's performance look better in reports"
       ],
       "answer": 1,
       "explain": "Averages can look fine while many users suffer; percentiles show the spread."
      },
      {
       "q": "SLAs are all green but satisfaction is falling. What is the most likely explanation?",
       "options": [
        "Users are being unreasonable",
        "The SLAs measure things users do not experience as value",
        "The satisfaction survey is irrelevant",
        "The service desk is closing tickets too slowly to meet targets"
       ],
       "answer": 1,
       "explain": "This is the watermelon effect: operational targets miss what users actually experience."
      },
      {
       "q": "What should a service review start with?",
       "options": [
        "Business outcomes and user experience",
        "A list of all tickets closed",
        "A technical description of every component of the service",
        "The supplier's invoice"
       ],
       "answer": 0,
       "explain": "Starting with outcomes keeps the review relevant; operational data then explains the results."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m1",
  "q": "A telecom operator's IT department reports 99.99% server availability, yet enterprise customers say the business messaging service is unreliable because messages arrive hours late. What should the service manager conclude FIRST?",
  "options": [
   "Component availability does not prove the warranty that consumers experience",
   "Customers are mistaken, because the servers were measurably available all quarter",
   "Utility is missing because the service lacks features",
   "The sponsor has under-funded the server estate"
  ],
  "answer": 0,
  "explain": "Warranty is about the service meeting agreed performance as consumers experience it. Components can be up while the end-to-end service fails. Nothing suggests missing features or funding."
 },
 {
  "module": "m1",
  "q": "The finance director of a hospital funds a new pharmacy system, the head pharmacist defines its requirements and pharmacists use it daily. The pharmacists want faster screens, the finance director wants lower licence costs. How should the service owner proceed?",
  "options": [
   "Prioritise the pharmacists, because as users they are closest to the daily work",
   "Prioritise the sponsor because they control the budget",
   "Let the supplier decide which requirement wins",
   "Make the speed–cost trade-off visible and agree it with customer and sponsor"
  ],
  "answer": 3,
  "explain": "Different roles value different things. The service owner's job is to surface the trade-off and get an agreed decision, not to pick a side alone or hand the decision to a supplier."
 },
 {
  "module": "m1",
  "q": "A university installs an excellent e-learning platform, but six months later only 12% of courses use it. Which action is MOST likely to increase value?",
  "options": [
   "Mandate use of the platform and switch off all other teaching tools this term",
   "Invest in onboarding, lecturer support and feedback to raise adoption",
   "Upgrade the servers to improve platform availability",
   "Add more features so lecturers find it more attractive"
  ],
  "answer": 1,
  "explain": "Value is co-created; low adoption is the constraint. More features or capacity do not address it, and a sudden mandate without support usually produces resistance and poor use."
 },
 {
  "module": "m1",
  "q": "An IT director wants to apply the guiding principles to a decision about outsourcing the service desk. Which approach is BEST?",
  "options": [
   "Test the option against every principle and record how tensions were resolved",
   "Use the principles only after the contract is signed",
   "Apply only 'keep it simple', since outsourcing is complex",
   "Work through the principles in order, completing each one fully before starting the next"
  ],
  "answer": 0,
  "explain": "The principles are lenses to apply together before deciding. They are not sequential steps, not to be used selectively, and are most useful before commitment."
 },
 {
  "module": "m1",
  "q": "A bank's change process requires nine signatures for every change, including updates to a printer driver. Change volume is falling and teams bypass the process. Which guiding principle most directly points to the fix?",
  "options": [
   "Collaborate and promote visibility",
   "Start where you are",
   "Keep it simple and practical",
   "Focus on value"
  ],
  "answer": 2,
  "explain": "The process applies the same heavy path to every case; simplifying it and designing for exceptions is the core of keeping it simple and practical. Other principles are relevant but less direct."
 },
 {
  "module": "m1",
  "q": "A governing body notices that most IT decisions are escalated to it, causing delays of weeks. What should it do?",
  "options": [
   "Meet more frequently so decisions are made sooner",
   "Appoint an external consultant to make the escalated decisions on its behalf",
   "Ask managers to stop escalating any decisions",
   "Define risk appetite and delegate authority within clear limits"
  ],
  "answer": 3,
  "explain": "Unclear boundaries pull decisions upward. Delegation within a defined appetite speeds decisions safely. Meeting more often treats the symptom; banning escalation removes control."
 },
 {
  "module": "m1",
  "q": "After a year of improvement work, an organisation has 230 ideas in its register, few owners and no measured benefits. What is the BEST next step?",
  "options": [
   "Move the register to a better tool with more fields for scoring, status and ownership",
   "Ask each team to keep its own separate register",
   "Stop collecting ideas until all 230 are implemented",
   "Triage the register, give owners to top items and measure benefits"
  ],
  "answer": 3,
  "explain": "The register's value comes from prioritisation, ownership and measurement. A new tool or fragmented registers do not fix those gaps; refusing new ideas discourages engagement."
 },
 {
  "module": "m1",
  "q": "A diagnostic traces a customer request through the value system and finds the longest delay is waiting for a supplier who has no service level agreement. Which response is MOST holistic?",
  "options": [
   "Treat the supplier agreement as part of end-to-end service design",
   "Increase internal team size so that the team can compensate for supplier delays",
   "Report the supplier delay as outside IT's responsibility",
   "Escalate each delayed request to the supplier's account manager"
  ],
  "answer": 0,
  "explain": "Partners are part of the system that delivers value. Fixing the relationship and agreement addresses the cause; escalation per case and extra staff treat symptoms, and disowning the problem ignores the consumer's experience."
 },
 {
  "module": "m2",
  "q": "A bank deploys a new loan-origination platform. Technology tests pass, but loan officers keep using spreadsheets because the new screens do not match how they assess applications. Which dimension was MOST neglected during design?",
  "options": [
   "Partners and suppliers",
   "Value streams and processes",
   "Information and technology",
   "External legal factors affecting loan approvals"
  ],
  "answer": 1,
  "explain": "The platform does not fit how work actually flows. That is the value streams and processes dimension. Technology passed its tests; nothing points to suppliers or legal factors."
 },
 {
  "module": "m2",
  "q": "A government agency must decide whether to outsource its citizen identity service. Which consideration should weigh MOST heavily?",
  "options": [
   "Outsourcing reduces the number of staff the agency must manage",
   "Several suppliers have bid, which ensures competition",
   "The service is core and highly sensitive, which favours keeping control in-house",
   "A supplier offers a monthly price 20% below current internal running costs, with a five-year price freeze"
  ],
  "answer": 2,
  "explain": "Strategic focus and risk dominate for core, sensitive services. Price and headcount matter but should not override control of a critical capability."
 },
 {
  "module": "m2",
  "q": "Three suppliers meet all their service levels, but the end-to-end service fails weekly. What should the service owner do FIRST?",
  "options": [
   "Ask users to log failures directly with each supplier",
   "Run a joint, cross-supplier problem investigation",
   "Add financial penalties to each supplier contract",
   "Replace the supplier with the lowest satisfaction score"
  ],
  "answer": 1,
  "explain": "The cause lies in the interactions; a joint investigation finds it. Penalties and replacement do not address the integration gap, and routing users to suppliers fragments the service further."
 },
 {
  "module": "m2",
  "q": "A team maps a value stream and finds 4 hours of work in a 15-working-day lead time. What does this MOST strongly indicate?",
  "options": [
   "Staff are working too slowly and need individual productivity targets for each step in the stream",
   "More people should be hired for the steps with the most work",
   "The stream is efficient because the work itself is short",
   "Most lead time is waiting, so reducing queues and handovers will help most"
  ],
  "answer": 3,
  "explain": "Flow efficiency is very low (about 3%), which shows waiting waste dominates. Speeding up work or hiring staff barely changes lead time."
 },
 {
  "module": "m2",
  "q": "An IT director proposes standardising all departments on one collaboration platform, while the research division wants freedom to experiment with new data tools. What is the BEST approach?",
  "options": [
   "Standardise commodity collaboration and allow governed variety for research tools",
   "Let every department choose its own collaboration platform",
   "Postpone the decision until all departments agree unanimously",
   "Force every department, including research, onto the single platform so that support costs fall"
  ],
  "answer": 0,
  "explain": "Commodities benefit from standardisation; differentiating, experimental work benefits from controlled variety. Extremes either stifle innovation or multiply cost and risk."
 },
 {
  "module": "m2",
  "q": "After repeated outages, a CIO asks why engineers never raise concerns before changes. Staff say people who reported problems in the past were criticised. Which action addresses the root cause?",
  "options": [
   "Introduce a stricter approval form so that every change records its risks before approval",
   "Leaders adopt blameless reviews and visibly reward early reporting",
   "Run technical training for all engineers",
   "Hire an external auditor to review every change"
  ],
  "answer": 1,
  "explain": "The issue is cultural: information is suppressed. Leadership behaviour must change. Forms, training and auditors do not make people feel safe to speak up."
 },
 {
  "module": "m2",
  "q": "A value stream for new staff onboarding starts when HR raises a request and ends when IT closes its ticket. Users complain they still cannot work on day one. What should be changed FIRST?",
  "options": [
   "Redefine the stream's end as the new employee working productively",
   "Move onboarding responsibility entirely to HR",
   "Set a target for IT to close tickets faster",
   "Add a satisfaction survey that users complete when IT closes the onboarding ticket"
  ],
  "answer": 0,
  "explain": "Ending at an internal milestone hides the consumer's experience. Redefining the end exposes the remaining gaps. Faster closure or surveys measure the wrong endpoint."
 },
 {
  "module": "m3",
  "q": "A service desk reports average speed of answer of 20 seconds and 92% of tickets closed within a day, yet a survey shows users find IT support exhausting. What should the desk manager investigate FIRST?",
  "options": [
   "Whether more tickets can be closed within the first hour",
   "Whether average speed of answer can be reduced to ten seconds by adding agents at peak times",
   "How much effort users spend: repeat contacts, handovers and reopened tickets",
   "Whether the survey sample is large enough to trust"
  ],
  "answer": 2,
  "explain": "Speed and closure measures can look good while users still repeat themselves and get passed around. User effort reveals the real experience. Faster answers or closures optimise the wrong things."
 },
 {
  "module": "m3",
  "q": "A major incident has affected online banking for 25 minutes. Engineers from four teams are on the bridge, each fixing different things, and nobody is sending updates. What should happen NEXT?",
  "options": [
   "Appoint an incident commander and a communications lead",
   "Close the bridge and let teams work separately",
   "Ask each team to write its own update for customers about its part of the fix",
   "Escalate to the CIO to take technical control"
  ],
  "answer": 0,
  "explain": "A major incident needs one decision-maker and structured communication. Separate updates confuse customers; executives should not run technical work; separating teams loses coordination."
 },
 {
  "module": "m3",
  "q": "During a major incident, the team identifies that a configuration change made 40 minutes earlier is the likely cause. Rolling it back takes five minutes; full diagnosis may take hours. What should the incident commander do?",
  "options": [
   "Ask the change author to explain and justify the change in writing before acting",
   "Continue diagnosis until the exact fault is proven",
   "Roll back the change, then continue diagnosis through problem management",
   "Wait for the change advisory board to approve a rollback"
  ],
  "answer": 2,
  "explain": "Restoration comes first. A quick rollback of the probable cause restores service, and evidence is preserved for later analysis. Waiting for proof or formal approval prolongs impact."
 },
 {
  "module": "m3",
  "q": "The same file-share outage has occurred eight times in two months. Each time the desk restarts a service and closes the incident. What is the MOST appropriate action?",
  "options": [
   "Ask users to save files locally to avoid the file share",
   "Raise the incident priority so it gets more attention",
   "Open a problem record and analyse the recurring cause",
   "Create a script so the desk can restart the service faster"
  ],
  "answer": 2,
  "explain": "Recurring incidents point to an underlying problem. Faster restarts or higher priority treat symptoms, and changing user behaviour avoids the cause."
 },
 {
  "module": "m3",
  "q": "A problem analysis finds that a storage fault has a reliable two-minute workaround, while a permanent fix would require a risky platform migration costing a large sum. What should the problem manager recommend?",
  "options": [
   "Hide the workaround so engineers are forced to find a fix",
   "Document the known error and workaround, and review the decision periodically",
   "Close the problem because a workaround exists",
   "Implement the migration immediately because known errors must always be fixed"
  ],
  "answer": 1,
  "explain": "Error control weighs fix cost and risk against workaround cost. Keeping the known error documented and reviewed is sound. Closing it loses visibility; forcing a risky fix ignores the trade-off."
 },
 {
  "module": "m3",
  "q": "An operations team receives 9,000 alerts a day and acts on fewer than 2%. Leaders want to buy an AI tool to prioritise alerts. What should be done FIRST?",
  "options": [
   "Buy the AI tool now so it can start learning patterns from all of the existing alerts",
   "Remove non-actionable alerts and tune thresholds to service impact",
   "Hire more engineers to review every alert",
   "Disable all alerts except those for the core database"
  ],
  "answer": 1,
  "explain": "Optimise before automating: clean up noise first. An AI tool trained on mostly useless alerts adds cost and complexity. More staff or blanket disabling both miss the cause."
 },
 {
  "module": "m3",
  "q": "A university portal showed healthy infrastructure throughout a two-hour period when students could not submit assignments due to an authentication provider fault. Which improvement BEST prevents this blind spot?",
  "options": [
   "Ask the authentication provider to send weekly availability and incident reports",
   "Add synthetic transactions that test login and submission end to end",
   "Add memory and CPU monitoring to every portal server",
   "Increase dashboard refresh frequency"
  ],
  "answer": 1,
  "explain": "Synthetic user journeys reveal failures in dependencies that component metrics miss. Weekly reports are too slow; more component metrics show the same green."
 },
 {
  "module": "m3",
  "q": "A desk's knowledge base contains 4,000 articles, but agents rarely use it and the link rate is 6%. What is the MOST effective way to improve it?",
  "options": [
   "Delete the knowledge base and start a wiki",
   "Build article search, reuse and improvement into every ticket workflow",
   "Make article creation a monthly performance target for each agent on the desk",
   "Commission a contractor to rewrite all 4,000 articles"
  ],
  "answer": 1,
  "explain": "Knowledge becomes useful when it is part of the work. A rewrite project goes stale; creation targets produce low-quality articles; changing tools does not change behaviour."
 },
 {
  "module": "m4",
  "q": "A bank's change process requires CAB approval for every change, including 180 routine monthly patch deployments that have never failed. Lead time is three weeks. What should the change manager do FIRST?",
  "options": [
   "Stop patching until the CAB backlog has been cleared",
   "Ask the CAB to meet twice a week to approve changes faster",
   "Require detailed, separately reviewed rollback plans for every one of the patch deployments",
   "Convert the proven patch deployments into a pre-authorised standard change"
  ],
  "answer": 3,
  "explain": "Proven, low-risk, repeatable changes are ideal standard changes. More meetings or paperwork keep the bottleneck, and stopping patches raises security risk."
 },
 {
  "module": "m4",
  "q": "An actively exploited vulnerability is announced at 23:00 for an internet-facing system. The next CAB meeting is in six days. What is the MOST appropriate action?",
  "options": [
   "Patch without any authorisation and record nothing",
   "Use the emergency change path with the named emergency authority",
   "Wait for the CAB, because security changes are high risk",
   "Ask the vendor's security team to approve the change formally on the bank's behalf"
  ],
  "answer": 1,
  "explain": "Emergency changes use an expedited authority so they can be implemented quickly yet remain controlled and recorded. Waiting leaves exposure; skipping control creates other risks."
 },
 {
  "module": "m4",
  "q": "A digital bank wants to release a new loan feature to 2% of customers, observe behaviour, and expand if results are good, without redeploying code. Which technique BEST supports this?",
  "options": [
   "Feature flags controlling exposure by customer segment",
   "A phased rollout by branch over six months, starting in Dhaka",
   "A big-bang deployment on a weekend",
   "Blue-green deployment of the whole application"
  ],
  "answer": 0,
  "explain": "Feature flags separate release from deployment and allow precise targeting. Blue-green switches all traffic; big bang and branch phasing do not target customer segments."
 },
 {
  "module": "m4",
  "q": "New staff at a hospital wait an average of seven days for system access. Most requests need three approvals that are almost never refused. What should be done FIRST?",
  "options": [
   "Ask managers to approve requests within 24 hours",
   "Train new staff to submit requests earlier",
   "Simplify the request model, replacing routine approvals with role-based access",
   "Automate the existing three-step approval workflow exactly as it is today, with reminders"
  ],
  "answer": 2,
  "explain": "Optimise before automating. Removing low-value approvals through role-based access addresses the cause; automating or chasing approvals keeps the waste."
 },
 {
  "module": "m4",
  "q": "A university plans a CMDB covering every device, cable and software setting across campus. The goal is faster incident routing and change impact analysis. What should the configuration manager recommend?",
  "options": [
   "Start with cables and patch panels, as they are the hardest items to discover automatically",
   "Replace the CMDB with a spreadsheet for each department",
   "Scope the CMDB to the services, CIs and relationships those decisions need",
   "Proceed with the full scope to avoid missing anything"
  ],
  "answer": 2,
  "explain": "Scoping by decisions keeps data accurate and useful. Over-scoping produces untrusted data; spreadsheets fragment information."
 },
 {
  "module": "m4",
  "q": "A supplier-hosted payroll service meets its 99.9% availability SLA, but payroll staff lose a full day each month because batch jobs fail on the 25th. What is the BEST improvement to the service level framework?",
  "options": [
   "Add a target for payroll completing on schedule",
   "Ask the supplier to report availability weekly instead of monthly",
   "Remove payroll from the SLA reports",
   "Raise the availability target to 99.99%"
  ],
  "answer": 0,
  "explain": "The agreement must reflect the outcome that matters: payroll completed on time. Higher availability or more frequent reporting of the same measure misses the issue."
 },
 {
  "module": "m4",
  "q": "An internal team supporting a customer-facing SLA has no agreed targets, and its delays repeatedly cause SLA breaches. What should the service level manager put in place?",
  "options": [
   "An underpinning contract with that team",
   "A penalty clause in the customer SLA",
   "An OLA with that team, aligned to the SLA",
   "A new SLA directly with the end users"
  ],
  "answer": 2,
  "explain": "OLAs set targets between internal teams to support SLAs. Underpinning contracts are for external suppliers; penalties do not fix internal alignment."
 }
]);
