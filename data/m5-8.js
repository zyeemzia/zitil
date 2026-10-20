window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m5",
 "order": 5,
 "code": "Journey",
 "title": "Creating, Delivering and Supporting Services Along the Customer Journey",
 "subtitle": "From design and daily delivery to the end-to-end experience customers live",
 "outcomes": [
  "Design services that can be run, supported and changed from day one",
  "Manage work, queues and priorities so value keeps flowing",
  "Map customer journeys and improve moments of truth",
  "Measure experience and value realisation and build trusted relationships"
 ],
 "lessons": [
  {
   "id": "m5-l1",
   "title": "Creating Services That Can Be Run",
   "subtitle": "Designing, building and transitioning services with operations in mind from day one",
   "minutes": 45,
   "objectives": [
    "Design services for operability, supportability and change, not just functionality",
    "Organise teams and skills around the flow of value",
    "Plan a service transition that protects users and support teams"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Many services are built by one group and thrown over the wall to another to run. The builders optimise for features and deadlines; the operators inherit missing monitoring, undocumented dependencies and fragile manual steps. **Creating, delivering and supporting** services as one continuous responsibility closes this gap. The questions 'how will we run it, support it and change it?' are asked at the first design workshop, not the week before go-live."
    },
    {
     "type": "framework",
     "title": "Design qualities beyond features",
     "items": [
      {
       "label": "Op",
       "title": "Operability",
       "text": "Can it be deployed, monitored, scaled and recovered with little manual effort? Are health checks and logs built in?"
      },
      {
       "label": "Su",
       "title": "Supportability",
       "text": "Can the desk diagnose common issues? Are error messages meaningful, and is knowledge ready at launch?"
      },
      {
       "label": "Ch",
       "title": "Changeability",
       "text": "Can it be updated safely and often? Is it modular, tested automatically and free of hard-coded settings?"
      },
      {
       "label": "Se",
       "title": "Security and privacy",
       "text": "Are access, data protection and threat controls designed in from the start?"
      },
      {
       "label": "Re",
       "title": "Resilience",
       "text": "What happens when a dependency fails? Are there timeouts, retries, fallbacks and graceful degradation?"
      },
      {
       "label": "Co",
       "title": "Cost awareness",
       "text": "Are running costs understood and visible, especially for cloud consumption?"
      }
     ]
    },
    {
     "type": "table",
     "title": "Service design package: what operations needs at handover",
     "head": [
      "Item",
      "Why it matters"
     ],
     "rows": [
      [
       "Service description and owner",
       "Everyone knows what the service is for and who decides"
      ],
      [
       "Architecture and dependency map",
       "Incident and change teams can assess impact"
      ],
      [
       "Service levels and SLOs",
       "Teams know what 'good' looks like and when to act"
      ],
      [
       "Monitoring, alerts and dashboards",
       "Failures are detected before users report them"
      ],
      [
       "Runbooks and knowledge articles",
       "Common issues can be resolved at the desk or by on-call staff"
      ],
      [
       "Support model and escalation paths",
       "Including suppliers and their hours"
      ],
      [
       "Capacity and cost model",
       "Growth and budget are planned, not discovered"
      ]
     ]
    },
    {
     "type": "compare",
     "title": "Team organisation options",
     "columns": [
      {
       "title": "Functional teams",
       "items": [
        "Teams by technology: network, database, service desk",
        "Deep expertise, efficient specialist use",
        "Many handovers along a value stream"
       ]
      },
      {
       "title": "Product / service teams",
       "items": [
        "Long-lived teams owning a service end to end: build and run",
        "Fast flow, strong ownership",
        "Need platform support and shared standards"
       ]
      },
      {
       "title": "Platform and enabling teams",
       "items": [
        "Platform teams provide self-service infrastructure",
        "Enabling teams coach others in new skills",
        "Reduce cognitive load on product teams"
       ]
      }
     ]
    },
    {
     "type": "topology",
     "title": "Product, platform and enabling teams around one service",
     "nodes": [
      {
       "id": "p1",
       "kind": "team",
       "label": "Payments team",
       "sub": "Product team: build and run",
       "x": 1,
       "y": 2
      },
      {
       "id": "p2",
       "kind": "team",
       "label": "Onboarding team",
       "sub": "Product team",
       "x": 3,
       "y": 2
      },
      {
       "id": "p3",
       "kind": "team",
       "label": "Merchant team",
       "sub": "Product team",
       "x": 5,
       "y": 2
      },
      {
       "id": "en",
       "kind": "team",
       "label": "Enabling team",
       "sub": "SRE and security coaching",
       "x": 7,
       "y": 2
      },
      {
       "id": "plat",
       "kind": "process",
       "label": "Platform team",
       "sub": "Self-service paved roads",
       "x": 3,
       "y": 4
      },
      {
       "id": "cloud",
       "kind": "cloud",
       "label": "Cloud platform",
       "x": 3,
       "y": 6
      },
      {
       "id": "desk",
       "kind": "team",
       "label": "Service desk",
       "sub": "First contact",
       "x": 0,
       "y": 4
      },
      {
       "id": "users",
       "kind": "user",
       "label": "Users",
       "x": 0,
       "y": 6
      }
     ],
     "links": [
      {
       "a": "plat",
       "b": "p1"
      },
      {
       "a": "plat",
       "b": "p2",
       "label": "pipelines"
      },
      {
       "a": "plat",
       "b": "p3"
      },
      {
       "a": "en",
       "b": "p3",
       "label": "coaching",
       "style": "dashed"
      },
      {
       "a": "plat",
       "b": "cloud",
       "label": "provisions"
      },
      {
       "a": "users",
       "b": "desk"
      },
      {
       "a": "desk",
       "b": "p1",
       "label": "escalation"
      }
     ],
     "caption": "Product teams own their services end to end; the platform team removes repeated infrastructure work through self-service. The enabling team builds skills and then steps back, while the desk keeps first contact."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Teams that support what they build fix the causes of operational pain quickly, because they feel it. But full end-to-end ownership can overload small teams. A balanced model gives product teams on-call ownership for their services, with platform teams providing paved roads (standard pipelines, monitoring, security) and a service desk handling first contact.",
     "title": "You build it, you support it, with help"
    },
    {
     "type": "steps",
     "title": "Planning a service transition",
     "items": [
      {
       "title": "Define readiness criteria",
       "text": "Operational, support, security and business criteria agreed with all parties."
      },
      {
       "title": "Build support capability",
       "text": "Train desk and on-call staff; publish knowledge; run a support rehearsal."
      },
      {
       "title": "Test operational procedures",
       "text": "Backup, restore, failover and scaling tested, not just functions."
      },
      {
       "title": "Plan early-life support",
       "text": "Builders and operators together for an agreed period, with elevated monitoring."
      },
      {
       "title": "Agree exit criteria",
       "text": "Incident rates, open defects and knowledge completeness that end early-life support."
      }
     ]
    },
    {
     "type": "timeline",
     "title": "A transition plan with early-life support",
     "items": [
      {
       "when": "Week −8",
       "label": "Readiness criteria agreed",
       "text": "Operational, support, security and business criteria signed off by all parties."
      },
      {
       "when": "Week −6",
       "label": "Run-ready assets",
       "text": "Runbooks, alerts, dashboards and knowledge articles built with operators."
      },
      {
       "when": "Week −3",
       "label": "Rehearsals",
       "text": "Support rehearsal plus backup, restore and failover tests."
      },
      {
       "when": "Week −1",
       "label": "Go/no-go",
       "text": "Decision against the readiness criteria, not the calendar."
      },
      {
       "when": "Go-live",
       "label": "Elevated monitoring",
       "text": "Builders and operators on call together."
      },
      {
       "when": "Weeks +1 to +6",
       "label": "Early-life support",
       "text": "Daily defect review; knowledge gaps closed fast."
      },
      {
       "when": "Exit",
       "label": "Steady state",
       "text": "Exit criteria met, such as incident rate and SLO stable for four weeks."
      }
     ],
     "caption": "Timings are illustrative; the order is what matters. Operability work starts weeks before go-live, and ownership hands over on evidence, not on a date."
    },
    {
     "type": "scenario",
     "title": "A handover with gaps",
     "situation": "A development team at a telecom operator plans to hand a new self-care app to operations next week. There are no runbooks, alerts cover only server CPU, and the service desk has not seen the app. The launch date has been announced publicly. What is the best course?",
     "options": [
      {
       "text": "Delay the launch until every operational document is complete, however long it takes and whatever the public reaction",
       "feedback": "Delay may be needed for serious risks, but these gaps can be managed with early-life support; an open-ended delay harms trust.",
       "best": false
      },
      {
       "text": "Launch with an early-life support period led jointly by developers and operations",
       "feedback": "Correct. The public date can be kept while risk is controlled: builders stay engaged, operational gaps are closed quickly and the desk is supported.",
       "best": true
      },
      {
       "text": "Hand over as planned and let operations learn as incidents occur",
       "feedback": "This pushes risk onto users and support staff.",
       "best": false
      },
      {
       "text": "Ask the desk to redirect all app issues to the developers' email",
       "feedback": "This bypasses the support model and loses tracking.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Operational readiness checklist",
     "items": [
      "Service owner named and service in the catalogue",
      "SLOs agreed and dashboards live",
      "Actionable alerts route to the right on-call team",
      "Runbooks tested by someone other than the author",
      "Backup and restore tested end to end",
      "Desk trained and knowledge articles published",
      "Supplier support hours match service hours",
      "Early-life support period and exit criteria agreed"
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Operability",
       "def": "The ease with which a service can be deployed, monitored, scaled and recovered."
      },
      {
       "term": "Service design package",
       "def": "The set of information handed to those who will run and support a service, describing how it works and how to operate it."
      },
      {
       "term": "Early-life support",
       "def": "A period after go-live in which extra resources and monitoring support a new or changed service until it stabilises."
      },
      {
       "term": "Product team",
       "def": "A long-lived team that owns a product or service end to end, including building and running it."
      },
      {
       "term": "Platform team",
       "def": "A team that provides internal self-service capabilities, such as pipelines and monitoring, to other teams."
      },
      {
       "term": "Cognitive load",
       "def": "The amount of mental effort a team must spend to understand and operate what it owns."
      },
      {
       "term": "Graceful degradation",
       "def": "Designing a service to keep providing reduced but useful functionality when a component fails."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of the last service your organisation launched. Who was on call in its first month, and did they help design it?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Ask how a service will be run, supported and changed at the first design workshop.",
      "Design for operability, supportability, changeability, security and sustainability, not only features.",
      "Product teams that build and run, supported by platform and enabling teams, reduce handovers.",
      "Hand over with a complete design package and a rehearsed support model.",
      "Early-life support ends on agreed exit criteria, not on a calendar date."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which design quality concerns how easily a service can be deployed, monitored and recovered?",
       "options": [
        "Operability",
        "Changeability",
        "Cost awareness for cloud consumption",
        "Utility"
       ],
       "answer": 0,
       "explain": "Operability covers deployment, monitoring, scaling and recovery."
      },
      {
       "q": "What is the main purpose of early-life support?",
       "options": [
        "Replace the service desk during the first year",
        "Delay go-live until all defects are fixed",
        "Stabilise a new service through joint ownership",
        "Transfer all support costs to the development team permanently"
       ],
       "answer": 2,
       "explain": "Early-life support is a temporary period of joint ownership and elevated monitoring."
      },
      {
       "q": "Which team type provides self-service pipelines and monitoring to other teams?",
       "options": [
        "Service desk",
        "Functional database team",
        "An enabling team that coaches other teams in new skills",
        "Platform team"
       ],
       "answer": 3,
       "explain": "Platform teams build paved roads; enabling teams coach."
      },
      {
       "q": "Why does a 'build it and throw it over the wall' model cause operational problems?",
       "options": [
        "Operations teams are always less skilled",
        "It produces too many runbooks and alerts for the desk to use",
        "Developers write too much documentation",
        "Builders don't feel the pain of running what they create"
       ],
       "answer": 3,
       "explain": "Separating build from run removes the feedback that drives operability."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l2",
   "title": "Delivering and Supporting at Scale",
   "subtitle": "Managing work, queues and priorities so value keeps flowing",
   "minutes": 40,
   "objectives": [
    "Prioritise competing work across demand, incidents and improvement",
    "Manage queues and work in progress to protect flow",
    "Balance planned and unplanned work in service teams"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Service teams juggle four kinds of work at once: new features and projects, changes, user requests and incidents, and improvement or technical debt. Without deliberate management, unplanned work crowds out everything else and teams spend their days firefighting. Delivering and supporting at scale means making all work visible, limiting how much is in progress, and prioritising openly."
    },
    {
     "type": "table",
     "title": "Types of work in a service team",
     "head": [
      "Type",
      "Example",
      "Risk if unmanaged"
     ],
     "rows": [
      [
       "Business projects and features",
       "New merchant onboarding flow",
       "Crowds out support; deadlines slip"
      ],
      [
       "Internal projects",
       "Database platform upgrade",
       "Postponed indefinitely until a crisis"
      ],
      [
       "Changes and requests",
       "Firewall rules, access, configuration",
       "Endless queue of small tasks"
      ],
      [
       "Unplanned work",
       "Incidents and urgent escalations",
       "Consumes all capacity; nothing else finishes"
      ]
     ]
    },
    {
     "type": "formula",
     "title": "Flow laws every service manager should know",
     "items": [
      {
       "name": "Little's law",
       "expr": "Average lead time = average work in progress ÷ average throughput",
       "meaning": "More items in progress means longer waits, unless throughput rises."
      },
      {
       "name": "Utilisation and waiting",
       "expr": "Waiting grows sharply as utilisation approaches 100%: wait ∝ utilisation ÷ (1 − utilisation)",
       "meaning": "Teams loaded at 95% have queues many times longer than teams at 70%."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Why the 100% utilisation target backfires",
     "labels": [
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "95%"
     ],
     "series": [
      {
       "name": "Relative waiting time",
       "values": [
        1,
        1.5,
        2.33,
        4,
        9,
        19
       ]
      }
     ],
     "yLabel": "Waiting time (×, relative to 50% load)",
     "caption": "Calculated from the simple queueing relationship above: waiting at 95% load is about 19 times the waiting at 50%. Real teams differ in detail, but the sharp upward bend near full load is always there."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Managers often try to keep every engineer 100% busy. Queue theory shows that this makes lead times explode and leaves no capacity for incidents or improvement. High-performing teams deliberately plan at 70–80% of capacity, leaving slack that absorbs unplanned work.",
     "title": "The 100% utilisation trap"
    },
    {
     "type": "framework",
     "title": "Prioritisation approaches",
     "items": [
      {
       "label": "CoD",
       "title": "Cost of delay",
       "text": "Ask what each week of delay costs: lost revenue, risk, penalties. Do first what is most expensive to delay."
      },
      {
       "label": "WSJF",
       "title": "Weighted shortest job first",
       "text": "Divide cost of delay by job size; small, valuable items go first."
      },
      {
       "label": "Cl",
       "title": "Classes of service",
       "text": "Expedite, fixed date, standard and intangible items get different policies and limits."
      },
      {
       "label": "Ca",
       "title": "Capacity allocation",
       "text": "Reserve fixed shares of capacity for each work type, for example 60% features, 20% improvement, 20% unplanned."
      }
     ]
    },
    {
     "type": "matrix",
     "title": "Cost of delay against job size",
     "x": "Job size (effort to finish)",
     "y": "Cost of delay per week",
     "quadrants": [
      {
       "title": "Do first",
       "items": [
        "Valuable and quick to finish",
        "e.g. regulatory report due in 10 days"
       ]
      },
      {
       "title": "Split, then start",
       "items": [
        "Valuable but large",
        "Deliver the most urgent slice first"
       ]
      },
      {
       "title": "Fill the gaps",
       "items": [
        "Small and low urgency",
        "Pick up when capacity frees"
       ]
      },
      {
       "title": "Question or drop",
       "items": [
        "Large and low urgency",
        "Often never worth starting"
       ]
      }
     ],
     "caption": "This is weighted shortest job first in picture form: the top-left has the highest cost of delay per unit of effort. Splitting large items moves their first slice towards the top-left."
    },
    {
     "type": "steps",
     "title": "Making work visible and limiting WIP",
     "items": [
      {
       "title": "Map the work types",
       "text": "Agree the categories of work and where each enters the team."
      },
      {
       "title": "Build one board",
       "text": "All work, planned and unplanned, on one visible board with clear columns."
      },
      {
       "title": "Set WIP limits",
       "text": "Limit items in each column; stop starting, start finishing."
      },
      {
       "title": "Make policies explicit",
       "text": "Write down how items are prioritised, expedited and declared done."
      },
      {
       "title": "Review flow weekly",
       "text": "Look at lead time, throughput, blocked items and ageing work."
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Track the share of unplanned work over time; aim to bring it down steadily.",
      "Route recurring incidents to problem management rather than repeatedly restoring.",
      "Pay down technical debt that causes frequent failures.",
      "Automate toil that interrupts engineers repeatedly.",
      "Protect focus time; batch non-urgent requests into scheduled windows."
     ],
     "title": "Reducing unplanned work"
    },
    {
     "type": "scenario",
     "title": "Overloaded infrastructure team",
     "situation": "An infrastructure team in a Dhaka university has 140 open items, average lead time of 31 days, and engineers working on 6–8 items each. The CIO asks them to 'work harder' to clear the backlog before semester starts. What is the best advice?",
     "options": [
      {
       "text": "Start all 140 items now so that everything moves forward at least a little before the semester begins",
       "feedback": "More work in progress lengthens lead time and spreads attention thinly.",
       "best": false
      },
      {
       "text": "Ask engineers to work weekends until the backlog is cleared",
       "feedback": "Overtime is unsustainable and does not fix the flow problem.",
       "best": false
      },
      {
       "text": "Hire contractors for every open item",
       "feedback": "Some help may be useful, but without prioritisation and WIP limits more people add coordination overhead.",
       "best": false
      },
      {
       "text": "Limit work in progress, finish the most valuable items first and make priorities visible",
       "feedback": "Correct. Little's law shows that cutting work in progress shortens lead time. Finishing valuable items first delivers more value before semester.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Capacity allocation plan",
     "purpose": "Agree how team capacity is shared between types of work.",
     "columns": [
      "Work type",
      "Target share %",
      "Actual share last month %",
      "Policy",
      "Action if exceeded"
     ],
     "example": [
      [
       "Unplanned (incidents, escalations)",
       "20",
       "41",
       "P1/P2 incidents always first",
       "Problem reviews for top 3 incident sources"
      ]
     ],
     "rows": 5
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Work in progress (WIP)",
       "def": "Work that has started but is not yet finished."
      },
      {
       "term": "Little's law",
       "def": "A queueing relationship: average lead time equals average work in progress divided by average throughput."
      },
      {
       "term": "Throughput",
       "def": "The number of work items completed per unit of time."
      },
      {
       "term": "Cost of delay",
       "def": "The economic impact of delaying a piece of work by a unit of time."
      },
      {
       "term": "Weighted shortest job first (WSJF)",
       "def": "A prioritisation method that divides cost of delay by job size."
      },
      {
       "term": "Unplanned work",
       "def": "Work that arrives without being scheduled, such as incidents and urgent escalations."
      },
      {
       "term": "Capacity allocation",
       "def": "Reserving fixed shares of a team's capacity for different types of work."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "What share of your team's time last month was unplanned work? What single change would reduce it most?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Make all work visible: features, internal projects, changes and requests, and unplanned work.",
      "Little's law: lead time = work in progress ÷ throughput, so limiting WIP shortens lead time.",
      "Plan teams at 70–80% load; waiting explodes as utilisation approaches 100%.",
      "Prioritise openly with cost of delay, WSJF, classes of service and capacity allocation.",
      "Reduce unplanned work at its source through problem management, debt repayment and automation."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A team has 60 items in progress and finishes 20 a week. What is the average lead time according to Little's law?",
       "options": [
        "1.5 weeks",
        "6 weeks",
        "20 weeks",
        "3 weeks"
       ],
       "answer": 3,
       "explain": "Lead time = WIP ÷ throughput = 60 ÷ 20 = 3 weeks."
      },
      {
       "q": "What happens to waiting time as a team's utilisation approaches 100%?",
       "options": [
        "It falls slowly because everyone is busy and working efficiently",
        "It falls to zero",
        "It increases sharply",
        "It stays constant"
       ],
       "answer": 2,
       "explain": "Queueing effects make waits grow rapidly at high utilisation."
      },
      {
       "q": "Which prioritisation method divides cost of delay by job size?",
       "options": [
        "Capacity allocation by work type and team",
        "Highest-paid person's opinion",
        "Weighted shortest job first",
        "First in, first out"
       ],
       "answer": 2,
       "explain": "WSJF favours small, valuable items."
      },
      {
       "q": "What is the best first step to reduce a team's long lead times?",
       "options": [
        "Start more items in parallel",
        "Limit work in progress",
        "Add more columns to the board so work is tracked in more detail",
        "Increase utilisation to 100%"
       ],
       "answer": 1,
       "explain": "Reducing WIP directly shortens lead time."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l3",
   "title": "Customer Journeys and Moments of Truth",
   "subtitle": "Seeing the service the way customers live it, from first contact to realised value",
   "minutes": 45,
   "objectives": [
    "Map a customer journey across stages and touchpoints",
    "Identify moments of truth and pain points that shape perception",
    "Design improvements that change the journey, not just a team's output"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Customers do not experience your org chart. They experience a **journey**: a series of interactions with your organisation from the first time they hear of a service until long after they start using it. Each interaction is a **touchpoint**; some touchpoints matter far more than others. A master service manager designs and improves the whole journey, because value is won or lost in the gaps between departments."
    },
    {
     "type": "cycle",
     "title": "Stages of a customer journey",
     "center": "Customer journey",
     "items": [
      {
       "label": "Explore",
       "text": "Understand markets, needs and potential customers; the customer discovers you."
      },
      {
       "label": "Engage",
       "text": "Build relationships and trust; understand needs in depth."
      },
      {
       "label": "Offer",
       "text": "Shape demand and design offerings that fit."
      },
      {
       "label": "Agree",
       "text": "Agree value, terms, service levels and expectations."
      },
      {
       "label": "Onboard",
       "text": "Bring the customer and their users into the service."
      },
      {
       "label": "Co-create",
       "text": "Use the service together, day to day."
      },
      {
       "label": "Realise",
       "text": "Confirm and grow the value achieved, which opens the next round of exploring."
      }
     ],
     "caption": "The journey is a loop: realised value creates new needs and renewals. Moments of truth can sit at any stage, but onboarding and the first failures in co-creation are where many are lost."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A **moment of truth** is a touchpoint at which the customer forms or changes their opinion of the service strongly. For a mobile wallet user it might be the first failed cash-out at an agent; for a hospital patient, the moment results are delayed; for a merchant, the first late settlement. Moments of truth deserve disproportionate design attention.",
     "title": "Moment of truth"
    },
    {
     "type": "table",
     "title": "Journey map: merchant onboarding for a payments provider",
     "head": [
      "Stage",
      "Touchpoint",
      "Customer feeling",
      "Pain point",
      "Opportunity"
     ],
     "rows": [
      [
       "Explore",
       "Sales visit, website",
       "Curious",
       "Fees unclear",
       "Simple fee calculator"
      ],
      [
       "Agree",
       "Contract signing",
       "Cautious",
       "12-page contract in English only",
       "Bangla summary, digital signature"
      ],
      [
       "Onboard",
       "Account and QR set-up",
       "Frustrated",
       "Documents requested three times",
       "One document upload, status tracking"
      ],
      [
       "Co-create",
       "Daily payments",
       "Satisfied",
       "Settlement report hard to read",
       "Clear daily statement in app"
      ],
      [
       "Realise",
       "Quarterly review",
       "Unsure of value",
       "No view of growth",
       "Sales insights dashboard"
      ]
     ]
    },
    {
     "type": "steps",
     "title": "Mapping a journey",
     "items": [
      {
       "title": "Pick a persona",
       "text": "Choose a specific customer type, such as 'small shop owner in Rajshahi with basic smartphone'."
      },
      {
       "title": "Gather evidence",
       "text": "Interview customers, observe, analyse tickets, complaints and digital analytics."
      },
      {
       "title": "Lay out stages and touchpoints",
       "text": "Include every channel: app, call centre, agent, branch, email."
      },
      {
       "title": "Add feelings and effort",
       "text": "Where is the customer anxious, delighted, confused or forced to repeat themselves?"
      },
      {
       "title": "Mark moments of truth",
       "text": "Identify where opinions are formed most strongly."
      },
      {
       "title": "Connect to back-stage",
       "text": "Show the internal teams, systems and value streams behind each touchpoint."
      }
     ]
    },
    {
     "type": "compare",
     "title": "Front stage and back stage",
     "columns": [
      {
       "title": "Front stage",
       "items": [
        "What the customer sees and does",
        "Apps, staff interactions, messages, statements",
        "Where experience is felt"
       ]
      },
      {
       "title": "Back stage",
       "items": [
        "What happens behind the scenes",
        "Approvals, systems, suppliers, internal handovers",
        "Where experience is usually caused"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A private hospital in Dhaka measured each department separately: registration in 5 minutes, consultation on time, laboratory within target. Patients still spent 3.5 hours per visit. Journey mapping showed waits between departments, and repeated data entry at each desk. A single patient ID captured at registration and a queue display linking departments cut the visit to 2 hours without any department changing its own targets.",
     "title": "Fixing the journey, not the team"
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "One outpatient visit, before and after journey redesign",
     "labels": [
      "Registration",
      "Wait for doctor",
      "Consultation",
      "Lab queue",
      "Lab test",
      "Pharmacy"
     ],
     "series": [
      {
       "name": "Before (minutes)",
       "values": [
        15,
        60,
        15,
        55,
        25,
        40
       ]
      },
      {
       "name": "After (minutes)",
       "values": [
        5,
        35,
        15,
        20,
        25,
        20
       ]
      }
     ],
     "yLabel": "Minutes",
     "caption": "An illustrative breakdown of the 3.5-hour and 2-hour visits in the example above. Consultation and testing did not change; nearly all the gain came from waits and repeated data entry between departments."
    },
    {
     "type": "scenario",
     "title": "Choosing the journey improvement",
     "situation": "A mobile financial services provider finds that 30% of new customers never complete a second transaction. Journey research shows the first cash-out at an agent often fails because agents lack float, and customers blame the app. What should the service manager prioritise?",
     "options": [
      {
       "text": "Redesign the app's welcome screens and add tutorial videos so customers understand the service better",
       "feedback": "The app is not the cause; better screens will not put cash in agents' drawers.",
       "best": false
      },
      {
       "text": "Offer cashback on second transactions",
       "feedback": "Incentives may help briefly but do not fix the failure customers experienced.",
       "best": false
      },
      {
       "text": "Treat first cash-out as a moment of truth and fix agent float with the agent network team",
       "feedback": "Correct. The pain is a back-stage cause (agent float) showing up at a front-stage moment of truth. Fixing it addresses the real reason customers leave.",
       "best": true
      },
      {
       "text": "Increase marketing to acquire more customers",
       "feedback": "Acquiring more customers into a broken journey multiplies the loss.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Journey map worksheet",
     "purpose": "Map one persona's journey and find improvement opportunities.",
     "columns": [
      "Stage",
      "Touchpoint / channel",
      "Customer action",
      "Feeling (−2 to +2)",
      "Back-stage team / system",
      "Pain point",
      "Improvement idea"
     ],
     "example": [
      [
       "Onboard",
       "App registration",
       "Uploads national ID",
       "−1",
       "KYC team / document system",
       "Photo rejected without reason",
       "Instant quality check with clear guidance"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Customer journey",
       "def": "The complete end-to-end experience a customer has with a service provider across all stages and touchpoints."
      },
      {
       "term": "Touchpoint",
       "def": "Any interaction between a customer and the provider's people, systems or communications."
      },
      {
       "term": "Moment of truth",
       "def": "A touchpoint at which the customer forms or changes their opinion of the service strongly."
      },
      {
       "term": "Persona",
       "def": "A realistic description of a type of customer or user, used to guide design."
      },
      {
       "term": "Journey map",
       "def": "A visual representation of a customer's stages, touchpoints, feelings and pain points."
      },
      {
       "term": "Front stage",
       "def": "The parts of a service that customers see and interact with directly."
      },
      {
       "term": "Back stage",
       "def": "The internal activities, systems and partners that support front-stage interactions."
      },
      {
       "term": "Onboarding",
       "def": "Bringing a customer and their users into a service so they can start realising value."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which moment of truth in your service do you think customers judge you on most? What evidence would confirm or challenge your guess?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Customers experience journeys across departments, not the organisation chart.",
      "Moments of truth deserve disproportionate design attention.",
      "Front-stage pain is usually caused back stage: approvals, systems, suppliers and handovers.",
      "Map journeys for a specific persona, using evidence rather than internal opinion.",
      "Measure the end-to-end journey; department targets can all be green while customers wait."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A patient waits an hour between departments even though each department meets its own target. What technique best reveals this?",
       "options": [
        "Journey mapping across departments",
        "A separate satisfaction survey run by each department",
        "Departmental KPI dashboards",
        "Server performance monitoring"
       ],
       "answer": 0,
       "explain": "Only an end-to-end journey view shows gaps between departments."
      },
      {
       "q": "What is a moment of truth?",
       "options": [
        "The moment the contract is signed",
        "The final stage of every customer journey",
        "Any interaction recorded in the CRM system by front-line staff",
        "A touchpoint where the customer's opinion is strongly formed"
       ],
       "answer": 3,
       "explain": "Moments of truth are the touchpoints with outsized influence on perception."
      },
      {
       "q": "In which journey stage does a customer and their users start using the service for the first time?",
       "options": [
        "Onboard",
        "Agree",
        "Realise",
        "Explore"
       ],
       "answer": 0,
       "explain": "Onboarding brings customers and users into the service."
      },
      {
       "q": "A front-stage pain point usually has its cause where?",
       "options": [
        "In the design of the user interface and its screens alone",
        "Back stage: internal processes, systems or partners",
        "In the marketing team",
        "Always in the customer's own behaviour"
       ],
       "answer": 1,
       "explain": "Most experience problems are caused by back-stage handovers and systems."
      },
      {
       "q": "Why should journey maps use a specific persona?",
       "options": [
        "So that one average journey can represent every customer type",
        "Different customers have different journeys and pain points",
        "Regulators require personas",
        "Personas replace the need for real customer research"
       ],
       "answer": 1,
       "explain": "Specific personas keep the map grounded; averaging customers hides real pain."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l4",
   "title": "Stakeholder Value, Relationships and Experience",
   "subtitle": "Building trusted relationships and proving the value services create",
   "minutes": 40,
   "objectives": [
    "Manage relationships with customers and stakeholders strategically",
    "Measure customer, user and employee experience with suitable metrics",
    "Track value realisation and communicate it credibly"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Value is co-created, so relationships matter. **Relationship management** establishes and nurtures links between the organisation and its stakeholders at strategic and tactical levels. A strong relationship lets you hear about needs early, negotiate trade-offs honestly and recover trust after failures. Weak relationships turn every incident into a dispute and every request into a negotiation."
    },
    {
     "type": "framework",
     "title": "Relationship maturity",
     "items": [
      {
       "label": "1",
       "title": "Order taker",
       "text": "IT receives requests and delivers what is asked, with little understanding of why."
      },
      {
       "label": "2",
       "title": "Service provider",
       "text": "IT delivers agreed services with SLAs and regular reporting."
      },
      {
       "label": "3",
       "title": "Trusted adviser",
       "text": "IT understands business strategy and proposes solutions proactively."
      },
      {
       "label": "4",
       "title": "Strategic partner",
       "text": "IT co-creates business strategy and shares accountability for outcomes."
      }
     ]
    },
    {
     "type": "matrix",
     "title": "Mapping stakeholders: influence and interest",
     "x": "Interest in the service",
     "y": "Influence over decisions and funding",
     "quadrants": [
      {
       "title": "Keep satisfied",
       "items": [
        "Finance director, regulator",
        "Short, outcome-focused updates"
       ]
      },
      {
       "title": "Manage closely",
       "items": [
        "Clinical director, key customer",
        "Regular reviews, shared roadmap"
       ]
      },
      {
       "title": "Monitor",
       "items": [
        "Occasional users",
        "Light-touch, broadcast updates"
       ]
      },
      {
       "title": "Keep informed",
       "items": [
        "Ward nurses, desk users",
        "Experience feedback, change notices"
       ]
      }
     ],
     "caption": "Relationship effort should follow position on this map, and positions move: a quiet sponsor becomes top-right the day a major incident hits the news."
    },
    {
     "type": "compare",
     "title": "Three lenses on experience",
     "columns": [
      {
       "title": "Customer experience (CX)",
       "items": [
        "How customers perceive the whole relationship",
        "Contracts, value, trust, communication",
        "Measured by NPS, retention, account reviews"
       ]
      },
      {
       "title": "User experience (UX)",
       "items": [
        "How easy and pleasant the service is to use",
        "Interfaces, speed, clarity, accessibility",
        "Measured by task success, effort, usability tests"
       ]
      },
      {
       "title": "Employee experience (EX)",
       "items": [
        "How staff experience their tools and workplace",
        "Devices, systems, support, collaboration",
        "Measured by digital experience scores and sentiment"
       ]
      }
     ]
    },
    {
     "type": "formula",
     "title": "Common experience measures",
     "items": [
      {
       "name": "Net Promoter Score (NPS)",
       "expr": "NPS = % promoters (scores 9–10) − % detractors (scores 0–6)",
       "meaning": "Willingness to recommend; ranges from −100 to +100."
      },
      {
       "name": "Customer satisfaction (CSAT)",
       "expr": "CSAT = satisfied responses (e.g. 4–5 of 5) ÷ total responses × 100%",
       "meaning": "Satisfaction with a specific interaction."
      },
      {
       "name": "Customer effort score (CES)",
       "expr": "CES = average rating of 'how easy was it to…' across responses",
       "meaning": "Effort is a strong predictor of loyalty in service interactions."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Surveys sent only after closed tickets miss users who gave up. Response rates of 5% represent the most delighted and the most angry. Combine surveys with behavioural data (repeat contacts, abandonment, adoption) and qualitative conversations before drawing conclusions.",
     "title": "Survey traps"
    },
    {
     "type": "steps",
     "title": "Tracking value realisation",
     "items": [
      {
       "title": "Define expected outcomes",
       "text": "Agree measurable benefits with the customer before investing."
      },
      {
       "title": "Assign benefit owners",
       "text": "Business owners, not IT, are accountable for realising benefits."
      },
      {
       "title": "Baseline",
       "text": "Measure the current state of each benefit."
      },
      {
       "title": "Track and report",
       "text": "Report benefits alongside service performance at reviews."
      },
      {
       "title": "Adjust",
       "text": "If benefits lag, investigate adoption, design or assumptions and act."
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Use the customer's language and measures, not IT jargon.",
      "Show trends over time, not single snapshots.",
      "Be honest about failures and what you learned.",
      "Connect service performance to business outcomes with evidence.",
      "Keep reports short; offer detail for those who want it."
     ],
     "title": "Communicating value credibly"
    },
    {
     "type": "case",
     "title": "Rebuilding trust with a hospital board",
     "context": "The IT department of a 900-bed hospital in Chattogram is seen by the board as slow and expensive. Clinicians complain about logins, printers and the patient-record system. IT reports show 98% of SLAs met. The new head of IT has six months to change the board's view.",
     "questions": [
      "Why is there a gap between IT reports and the board's perception?",
      "What relationship and measurement changes would you make first?",
      "How would you show progress at the six-month board meeting?"
     ],
     "answer": "IT measures its own outputs, while clinicians experience slow logins and failures at moments of truth on wards, so the reports are 'watermelon' green. First, appoint relationship managers for clinical directorates, run journey walks with nurses and doctors, and add experience measures (login time, clinician effort score, time lost per shift). Agree three outcome-based priorities with the medical director, such as single sign-on on wards. At six months, report in clinical terms: minutes saved per shift, incidents affecting patient care, clinician sentiment trend and the next priorities, with honest notes on what did not improve."
    },
    {
     "type": "scenario",
     "title": "Low NPS, high CSAT",
     "situation": "A cloud services provider in Dhaka sees ticket CSAT of 92% but an NPS of −15 from enterprise customers. What is the most likely explanation and best action?",
     "options": [
      {
       "text": "NPS is unreliable and should be ignored in favour of CSAT",
       "feedback": "Discarding an inconvenient measure hides a real relationship issue.",
       "best": false
      },
      {
       "text": "Explore relationship-level issues in account reviews, since NPS reflects the whole relationship",
       "feedback": "Correct. Customers can be pleased with individual tickets yet unhappy with reliability, pricing or strategic fit. Account reviews reveal relationship-level issues.",
       "best": true
      },
      {
       "text": "Increase the ticket survey frequency to raise response numbers and confirm that customers are in fact satisfied",
       "feedback": "More of the same interaction survey will not explain the relationship gap.",
       "best": false
      },
      {
       "text": "Offer discounts to all enterprise customers at their next renewal so that their scores improve quickly",
       "feedback": "Discounts may not address the real causes and erode margins.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Relationship management",
       "def": "The practice of establishing and nurturing links between an organisation and its stakeholders at strategic and tactical levels."
      },
      {
       "term": "Net Promoter Score (NPS)",
       "def": "A measure of loyalty: the percentage of promoters minus the percentage of detractors."
      },
      {
       "term": "Customer effort score (CES)",
       "def": "A measure of how easy customers found it to get something done."
      },
      {
       "term": "Employee experience (EX)",
       "def": "How employees perceive their tools, workplace and support."
      },
      {
       "term": "Benefit owner",
       "def": "A business person accountable for realising a defined benefit."
      },
      {
       "term": "Value realisation",
       "def": "Confirming that expected outcomes and benefits have actually been achieved."
      },
      {
       "term": "Trusted adviser",
       "def": "A relationship level in which the provider understands the customer's strategy and proposes solutions proactively."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "At what relationship maturity level does your main customer see your team? What would move you one level up?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Relationship management builds the trust needed to hear needs early and negotiate trade-offs.",
      "Move from order taker to trusted adviser by understanding and proposing, not just delivering.",
      "Look at experience through customer, user and employee lenses with different measures.",
      "NPS = % promoters − % detractors; pair surveys with behavioural data to avoid response bias.",
      "Business benefit owners, baselines and tracking turn value claims into evidence."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Survey: 50% promoters, 30% passives, 20% detractors. What is the NPS?",
       "options": [
        "+20",
        "+50",
        "+30",
        "+80"
       ],
       "answer": 2,
       "explain": "NPS = 50 − 20 = +30."
      },
      {
       "q": "Who should usually be accountable for realising business benefits from an IT investment?",
       "options": [
        "The supplier who delivered the system and its support",
        "The service desk manager",
        "A business benefit owner",
        "The IT project manager"
       ],
       "answer": 2,
       "explain": "Benefits are realised in the business; a business owner must be accountable."
      },
      {
       "q": "Which measure best predicts loyalty in service interactions according to many studies?",
       "options": [
        "Customer effort",
        "Average speed of answer",
        "Ticket volume",
        "The number of SLA targets in the agreement"
       ],
       "answer": 0,
       "explain": "Low effort strongly predicts continued loyalty."
      },
      {
       "q": "What characterises a strategic-partner relationship?",
       "options": [
        "Delivering exactly what is requested",
        "Negotiating the lowest price for each individual request",
        "Co-creating strategy and sharing outcomes",
        "Reporting SLAs monthly"
       ],
       "answer": 2,
       "explain": "Strategic partners shape strategy together and share accountability."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m6",
 "order": 6,
 "code": "Flow",
 "title": "High-Velocity IT: DevOps, SRE and Value Streams",
 "subtitle": "Deliver fast and stay reliable with modern engineering and flow practices",
 "outcomes": [
  "Explain the outcomes and metrics of high-velocity IT",
  "Apply DevOps culture, pipelines and automated controls",
  "Run reliability with SLIs, SLOs, error budgets and toil reduction",
  "Manage value streams with flow metrics, constraints and platforms"
 ],
 "lessons": [
  {
   "id": "m6-l1",
   "title": "High-Velocity IT: Speed with Safety",
   "subtitle": "Why digital organisations must deliver fast, reliably and responsibly at the same time",
   "minutes": 40,
   "objectives": [
    "Explain why high-velocity delivery matters in digital organisations",
    "Describe the outcomes high-velocity IT aims for and the trade-offs between them",
    "Use the core software delivery metrics to assess delivery performance"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "In a digital business, technology is not a support function; it is the product. A mobile bank's app, a ride-hailing platform's dispatch engine and an online university's learning platform are the business. When competitors release improvements weekly, a monthly release cycle and a three-week change process become a strategic weakness. **High-velocity IT** is the application of service management to organisations where speed of delivery, reliability and responsible use of technology all matter at once."
    },
    {
     "type": "framework",
     "title": "Five outcomes of high-velocity IT",
     "items": [
      {
       "label": "V",
       "title": "Valuable investments",
       "text": "Choosing the right things to build: innovative, well-prioritised and tied to real outcomes. Speed without direction only produces waste faster."
      },
      {
       "label": "F",
       "title": "Fast development",
       "text": "Shortening the time from idea to working software in users' hands, through small batches and automation."
      },
      {
       "label": "R",
       "title": "Resilient operations",
       "text": "Services that stay available and recover quickly, even as change accelerates."
      },
      {
       "label": "C",
       "title": "Co-created value",
       "text": "Working closely with users and customers so that what is delivered is actually used and valued."
      },
      {
       "label": "A",
       "title": "Assured conformance",
       "text": "Meeting governance, risk, security and regulatory requirements, ideally automatically, without slowing delivery."
      }
     ]
    },
    {
     "type": "table",
     "title": "Software delivery performance metrics",
     "head": [
      "Metric",
      "What it measures",
      "Strong teams typically",
      "Struggling teams typically"
     ],
     "rows": [
      [
       "Deployment frequency",
       "How often changes reach production",
       "On demand, many times a day",
       "Monthly or less"
      ],
      [
       "Lead time for changes",
       "Commit to running in production",
       "Less than a day",
       "One to six months"
      ],
      [
       "Change failure rate",
       "Share of deployments that need remediation",
       "Low single digits to about 15%",
       "Much higher, often over 40%"
      ],
      [
       "Failed deployment recovery time",
       "Time to recover from a deployment that failed",
       "Less than an hour",
       "A week or more"
      ],
      [
       "Rework rate",
       "Share of deployments that are unplanned fixes for user-facing problems",
       "Low and stable",
       "High; frequent emergency fixes"
      ]
     ]
    },
    {
     "type": "text",
     "text": "The best-known research programme on software delivery started with four key metrics. It has since refined **time to restore service** into **failed deployment recovery time** and added **rework rate**, and its recent reports also study platform engineering, developer experience and AI-assisted development. Performance bands shift from year to year, so treat them as a moving benchmark and compare yourself mainly with your own trend."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Year after year, large studies of software delivery find that the best teams are both faster **and** more stable. Small, frequent changes are easier to test, understand and roll back. Teams that deploy rarely tend to deploy large, risky batches and fail more often.",
     "title": "Speed and stability are not a trade-off"
    },
    {
     "type": "matrix",
     "title": "Throughput and stability together",
     "x": "Throughput: deployment frequency and lead time",
     "y": "Stability: low failure rate, fast recovery",
     "quadrants": [
      {
       "title": "Stable but slow",
       "items": [
        "Monthly releases, heavy approvals",
        "Risk builds up in large batches"
       ]
      },
      {
       "title": "High performers",
       "items": [
        "Small, frequent, automated changes",
        "Fast recovery when things fail"
       ]
      },
      {
       "title": "Struggling",
       "items": [
        "Rare, large, risky releases",
        "Long outages after deployments"
       ]
      },
      {
       "title": "Fast but fragile",
       "items": [
        "Frequent deployments, weak testing",
        "Speed borrowed from reliability"
       ]
      }
     ],
     "caption": "Research keeps finding many teams in the top-right, which shows the two goals are not opposites. The usual route there is smaller batches and automation, not more approvals."
    },
    {
     "type": "compare",
     "title": "Traditional versus high-velocity operating patterns",
     "columns": [
      {
       "title": "Traditional",
       "items": [
        "Large annual projects",
        "Separate build and run teams",
        "Manual testing and approvals",
        "Change control by committee",
        "Success measured by on-time delivery"
       ]
      },
      {
       "title": "High-velocity",
       "items": [
        "Small, continuous increments",
        "Product teams that build and run",
        "Automated tests, security and compliance checks",
        "Risk-based, often automated change",
        "Success measured by outcomes and flow"
       ]
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Embrace experimentation and treat failure as information.",
      "Make decisions close to the work with clear guardrails.",
      "Share knowledge openly and avoid hero culture.",
      "Automate repetitive work so people focus on judgement.",
      "Design for reversibility: favour decisions that can be undone cheaply.",
      "Keep the customer and the outcome visible in daily work."
     ],
     "title": "Behaviours that support high velocity"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "In payments, healthcare and power systems, breaking things harms people. High-velocity IT in regulated industries means building safety, security and compliance into automated pipelines, so that speed never depends on skipping controls.",
     "title": "High velocity is not 'move fast and break things'"
    },
    {
     "type": "scenario",
     "title": "Assessing delivery performance",
     "situation": "A digital bank deploys once a month, lead time is 45 days, change failure rate is 32% and restoring service takes about two days. Leadership wants to deploy weekly. What should the delivery lead focus on first?",
     "options": [
      {
       "text": "Deploy the same monthly batch weekly by splitting the release calendar into four",
       "feedback": "Without reducing batch size and adding automation, more frequent deployment of the same work just adds risk.",
       "best": false
      },
      {
       "text": "Add a second approval board to reduce the change failure rate before increasing speed",
       "feedback": "More approval adds delay; it does not fix the causes of failure.",
       "best": false
      },
      {
       "text": "Focus only on restoring faster and leave deployment unchanged",
       "feedback": "Faster recovery helps, but leaves the root causes of slow, risky delivery untouched.",
       "best": false
      },
      {
       "text": "Reduce batch size and automate testing and deployment so changes become smaller and safer",
       "feedback": "Correct. Smaller, automated changes improve all the delivery metrics together; moving to weekly releases of the same large batches would increase failures.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Delivery performance baseline",
     "purpose": "Record the core delivery metrics for one service and set improvement targets.",
     "columns": [
      "Service",
      "Deployment frequency",
      "Lead time for changes",
      "Change failure rate",
      "Recovery time",
      "Target in 6 months"
     ],
     "example": [
      [
       "Mobile banking app",
       "Monthly",
       "45 days",
       "32%",
       "~2 days",
       "Weekly; <7 days; <15%; <4 hours"
      ]
     ],
     "rows": 5
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "High-velocity IT",
       "def": "The application of service management in digital organisations where fast delivery, resilience and responsible technology use matter together."
      },
      {
       "term": "Deployment frequency",
       "def": "How often an organisation successfully deploys changes to production."
      },
      {
       "term": "Lead time for changes",
       "def": "Time from code being committed to it running successfully in production."
      },
      {
       "term": "Failed deployment recovery time",
       "def": "How long it takes to recover when a deployment to production fails; it refines the older measure called time to restore service."
      },
      {
       "term": "Batch size",
       "def": "The amount of change delivered at once; smaller batches reduce risk and speed feedback."
      },
      {
       "term": "Assured conformance",
       "def": "Meeting governance, risk and compliance requirements, ideally through automated controls."
      },
      {
       "term": "Reversibility",
       "def": "The ability to undo a decision or change quickly and cheaply."
      },
      {
       "term": "Rework rate",
       "def": "The share of deployments that are unplanned, made to fix user-facing problems."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which of these delivery metrics would your organisation be most embarrassed to publish? Why?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "In digital businesses technology is the product, so delivery speed is a strategic capability.",
      "Track deployment frequency, lead time, change failure rate, recovery time and rework together.",
      "The best teams are both faster and more stable, because small changes are easier to test and undo.",
      "In regulated sectors, build controls into automated pipelines instead of skipping them.",
      "Compare against your own trend; published performance bands move every year."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What do large studies of software delivery consistently find about speed and stability?",
       "options": [
        "Speed and stability are unrelated to each other in practice",
        "Faster teams are always less stable",
        "The best teams achieve both together",
        "Stability requires slowing down"
       ],
       "answer": 2,
       "explain": "Small, frequent, automated changes improve speed and stability at the same time."
      },
      {
       "q": "Which metric measures time from code commit to running in production?",
       "options": [
        "Deployment frequency",
        "Change failure rate across all deployments",
        "Failed deployment recovery time",
        "Lead time for changes"
       ],
       "answer": 3,
       "explain": "Lead time for changes covers commit to production."
      },
      {
       "q": "Which high-velocity outcome concerns meeting regulatory and security requirements?",
       "options": [
        "Assured conformance",
        "Fast development",
        "Co-created value",
        "Valuable investments in innovation"
       ],
       "answer": 0,
       "explain": "Assured conformance covers governance, risk and compliance."
      },
      {
       "q": "Why do teams that deploy rarely tend to fail more often?",
       "options": [
        "Their engineers are less experienced than those in fast-moving teams",
        "They have more time to test, which introduces errors",
        "Rare deployments are always automated",
        "They deploy large batches that are harder to test and roll back"
       ],
       "answer": 3,
       "explain": "Large batches carry more risk and are harder to diagnose."
      },
      {
       "q": "In a regulated hospital system, how should high velocity be achieved safely?",
       "options": [
        "By avoiding all change",
        "By moving fast and fixing what breaks afterwards",
        "By building controls into automated pipelines",
        "By skipping approvals when deadlines are tight"
       ],
       "answer": 2,
       "explain": "Automated, built-in controls let teams move quickly without bypassing safety."
      },
      {
       "q": "A team deploys every day, but about a third of its deployments are unplanned fixes for problems users reported. Which metric captures this most directly?",
       "options": [
        "Deployment frequency",
        "Rework rate",
        "Lead time for changes",
        "Flow efficiency"
       ],
       "answer": 1,
       "explain": "Rework rate is the share of deployments that are unplanned fixes for user-facing problems. Frequency and lead time look healthy here, which is exactly why rework needs its own measure."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l2",
   "title": "DevOps in Practice",
   "subtitle": "Culture, automation, flow and feedback across build and run",
   "minutes": 45,
   "objectives": [
    "Explain DevOps as a combination of culture, practices and tooling",
    "Describe continuous integration, delivery and infrastructure as code",
    "Integrate security and service management controls into delivery pipelines"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**DevOps** is a set of cultural values, practices and tools that bring development and operations together to deliver valuable change quickly and reliably. It is not a job title or a toolset. Organisations that buy pipeline tools but keep separate teams with conflicting goals get automation of their dysfunction, not DevOps."
    },
    {
     "type": "framework",
     "title": "CALMS: a lens on DevOps",
     "items": [
      {
       "label": "C",
       "title": "Culture",
       "text": "Shared ownership of outcomes, trust, blamelessness and collaboration across build and run."
      },
      {
       "label": "A",
       "title": "Automation",
       "text": "Automating builds, tests, deployments, infrastructure and compliance checks."
      },
      {
       "label": "L",
       "title": "Lean",
       "text": "Small batches, limiting work in progress, removing waste, optimising flow."
      },
      {
       "label": "M",
       "title": "Measurement",
       "text": "Measuring flow, quality and outcomes to guide decisions."
      },
      {
       "label": "S",
       "title": "Sharing",
       "text": "Sharing knowledge, tools and lessons across teams."
      }
     ]
    },
    {
     "type": "flow",
     "title": "Continuous delivery pipeline",
     "items": [
      {
       "label": "Small commit",
       "text": "Developer merges a small change to the main branch"
      },
      {
       "label": "Continuous integration",
       "text": "Automated build and tests run on every change"
      },
      {
       "label": "Security and quality gates",
       "text": "Code scanning, dependency checks, policy checks"
      },
      {
       "label": "Deploy to staging",
       "text": "Production-like environment, automated acceptance tests"
      },
      {
       "label": "Progressive production deploy",
       "text": "Canary or blue-green with health checks"
      },
      {
       "label": "Observe and learn",
       "text": "Monitor outcomes; feed back into the backlog"
      }
     ]
    },
    {
     "type": "compare",
     "title": "Continuous integration, delivery and deployment",
     "columns": [
      {
       "title": "Continuous integration",
       "items": [
        "Developers merge to main at least daily",
        "Every change built and tested automatically",
        "Broken builds fixed immediately"
       ]
      },
      {
       "title": "Continuous delivery",
       "items": [
        "Every change that passes the pipeline is releasable",
        "Deployment to production is a business decision, one click away"
       ]
      },
      {
       "title": "Continuous deployment",
       "items": [
        "Every change that passes all checks goes to production automatically",
        "No manual step between commit and production"
       ]
      }
     ]
    },
    {
     "type": "cli",
     "title": "Trunk-based workflow with infrastructure as code",
     "device": "Linux host",
     "lines": [
      "# small, short-lived branch for one change",
      "git switch -c fix/timeout-retry",
      "git commit -am \"Add retry with backoff to SMS gateway client\"",
      "git push origin fix/timeout-retry   # opens a review; pipeline runs tests",
      "# infrastructure is code too: preview the change before applying",
      "iac plan -var-file=prod.vars -out=plan.out",
      "iac apply plan.out"
     ],
     "note": "`iac` stands for whichever infrastructure-as-code tool your organisation uses. The principle is that infrastructure changes are versioned, reviewed and applied through the same pipeline as application code."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Instead of asking engineers to fill in change forms after the fact, let the pipeline create the change record automatically with test results, scan results, approvals and deployment logs attached. Auditors get better evidence, engineers lose a manual chore and change data becomes accurate.",
     "title": "Put service management inside the pipeline"
    },
    {
     "type": "topology",
     "title": "An integrated delivery and service management toolchain",
     "nodes": [
      {
       "id": "pol",
       "kind": "shield",
       "label": "Policy checks",
       "sub": "Security and compliance as code",
       "x": 2,
       "y": 0
      },
      {
       "id": "repo",
       "kind": "doc",
       "label": "Code repository",
       "sub": "App and infrastructure code",
       "x": 0,
       "y": 2
      },
      {
       "id": "ci",
       "kind": "process",
       "label": "CI/CD pipeline",
       "sub": "Build, test, scan, deploy",
       "x": 2,
       "y": 2
      },
      {
       "id": "prod",
       "kind": "container",
       "label": "Production",
       "sub": "Progressive rollout",
       "x": 4,
       "y": 2
      },
      {
       "id": "obs",
       "kind": "monitor",
       "label": "Observability",
       "sub": "Metrics, logs, traces",
       "x": 6,
       "y": 2
      },
      {
       "id": "dev",
       "kind": "user",
       "label": "Developer",
       "x": 0,
       "y": 4
      },
      {
       "id": "itsm",
       "kind": "server",
       "label": "ITSM platform",
       "sub": "Change, incident, CMDB",
       "x": 4,
       "y": 4
      },
      {
       "id": "oncall",
       "kind": "team",
       "label": "On-call team",
       "sub": "Chat and paging",
       "x": 4,
       "y": 6
      }
     ],
     "links": [
      {
       "a": "dev",
       "b": "repo",
       "label": "commit"
      },
      {
       "a": "repo",
       "b": "ci"
      },
      {
       "a": "ci",
       "b": "pol",
       "label": "gate"
      },
      {
       "a": "ci",
       "b": "prod",
       "label": "deploy"
      },
      {
       "a": "prod",
       "b": "obs"
      },
      {
       "a": "ci",
       "b": "itsm",
       "label": "change record"
      },
      {
       "a": "obs",
       "b": "itsm",
       "label": "incidents"
      },
      {
       "a": "itsm",
       "b": "oncall"
      }
     ],
     "caption": "The pipeline writes change records and the observability stack raises incidents, so the ITSM platform holds accurate data without manual forms. The CMDB is updated from the same deployments."
    },
    {
     "type": "table",
     "title": "Shifting security and controls left",
     "head": [
      "Control",
      "Traditional timing",
      "DevOps timing"
     ],
     "rows": [
      [
       "Security testing",
       "Penetration test before go-live",
       "Automated scanning on every commit, plus periodic expert testing"
      ],
      [
       "Dependency risks",
       "Annual audit",
       "Dependency and licence checks in every build"
      ],
      [
       "Change approval",
       "Weekly board",
       "Peer review plus automated policy checks; board for high risk only"
      ],
      [
       "Configuration compliance",
       "Quarterly manual audit",
       "Policy-as-code checks before deployment and continuously after"
      ]
     ]
    },
    {
     "type": "scenario",
     "title": "A DevOps transformation stalling",
     "situation": "An insurer bought a full pipeline toolchain a year ago. Deployment frequency has not improved. Developers still hand releases to a separate operations team, which schedules them for monthly windows, and incidents are blamed on whichever team is not in the room. What should the transformation lead focus on?",
     "options": [
      {
       "text": "Buy additional tools for release orchestration so that the monthly windows can be automated end to end",
       "feedback": "More tools automate the existing handover; they do not remove it.",
       "best": false
      },
      {
       "text": "Mandate daily deployments immediately",
       "feedback": "A mandate without changing the operating model will either be ignored or cause failures.",
       "best": false
      },
      {
       "text": "Disband the operations team",
       "feedback": "Operations expertise is essential; the aim is collaboration and shared goals, not removal.",
       "best": false
      },
      {
       "text": "Change team structure and incentives so teams share ownership of delivery and operation",
       "feedback": "Correct. Tools cannot overcome conflicting goals and handovers. Shared ownership and blameless learning are the foundation.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Pipeline control map",
     "purpose": "Show which controls are automated in the delivery pipeline and which evidence they create.",
     "columns": [
      "Pipeline stage",
      "Control",
      "Automated?",
      "Evidence produced",
      "Owner"
     ],
     "example": [
      [
       "Build",
       "Dependency vulnerability scan",
       "Yes",
       "Scan report attached to change record",
       "Platform security team"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "DevOps",
       "def": "A combination of culture, practices and tools that brings development and operations together to deliver change quickly and reliably."
      },
      {
       "term": "CALMS",
       "def": "A lens for DevOps: culture, automation, lean, measurement and sharing."
      },
      {
       "term": "Continuous integration (CI)",
       "def": "Frequently merging code changes into a shared main branch, with automated builds and tests on each change."
      },
      {
       "term": "Continuous delivery (CD)",
       "def": "Keeping software always in a releasable state so deployment can happen at any time with low risk."
      },
      {
       "term": "Continuous deployment",
       "def": "Automatically deploying every change that passes all pipeline checks to production."
      },
      {
       "term": "Infrastructure as code (IaC)",
       "def": "Defining and managing infrastructure through version-controlled code rather than manual configuration."
      },
      {
       "term": "Policy as code",
       "def": "Expressing compliance and security rules as code that is automatically checked."
      },
      {
       "term": "Trunk-based development",
       "def": "A practice in which developers integrate small changes into a single main branch frequently."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which manual control in your delivery process could be turned into an automated pipeline check, and what evidence would it produce?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "DevOps is culture, automation, lean flow, measurement and sharing, not a toolset or job title.",
      "Continuous integration merges small changes daily; continuous delivery keeps every change releasable.",
      "Continuous deployment removes the last manual step for changes that pass every check.",
      "Shift security and compliance checks left into every build, with policy as code.",
      "Let the pipeline create change records with evidence attached."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the difference between continuous delivery and continuous deployment?",
       "options": [
        "Continuous deployment releases passing changes automatically",
        "Continuous delivery skips automated testing",
        "Continuous deployment requires a weekly change board to review releases",
        "They are identical terms used by different vendors"
       ],
       "answer": 0,
       "explain": "Continuous delivery keeps changes releasable; continuous deployment releases them automatically."
      },
      {
       "q": "An organisation buys DevOps tools but keeps separate teams with conflicting goals. What is the likely result?",
       "options": [
        "Immediate cultural change across the organisation",
        "Automated handovers with little real improvement",
        "Elimination of all incidents",
        "Rapid improvement in all delivery metrics"
       ],
       "answer": 1,
       "explain": "Tools alone automate existing dysfunction; culture and structure must change too."
      },
      {
       "q": "Which practice treats server and network configuration as version-controlled code?",
       "options": [
        "Manual configuration management with a change log",
        "Infrastructure as code",
        "Continuous integration",
        "Value stream mapping"
       ],
       "answer": 1,
       "explain": "IaC manages infrastructure through versioned code."
      },
      {
       "q": "How can change records become more accurate in a DevOps pipeline?",
       "options": [
        "The pipeline creates them with attached evidence",
        "A change board writes them after deployment",
        "They are replaced by verbal approvals",
        "Engineers complete them weekly from memory"
       ],
       "answer": 0,
       "explain": "Automatic creation from pipeline data is accurate and removes manual effort."
      },
      {
       "q": "In CALMS, what does the 'L' stand for?",
       "options": [
        "Logging",
        "Licensing",
        "Lean",
        "Leadership"
       ],
       "answer": 2,
       "explain": "CALMS: culture, automation, lean, measurement, sharing."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l3",
   "title": "Site Reliability Engineering",
   "subtitle": "Managing reliability as an engineering problem with SLOs and error budgets",
   "minutes": 45,
   "objectives": [
    "Define service level indicators and objectives that reflect user experience",
    "Use error budgets to balance reliability and feature delivery",
    "Reduce toil and run blameless post-incident reviews"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Site reliability engineering (SRE)** treats operations as a software engineering problem. Instead of aiming for perfect reliability, SRE sets explicit reliability targets that reflect what users need, measures them precisely, and uses the gap between target and perfection, the **error budget**, to decide when to move fast and when to slow down. It turns arguments between developers and operators into data-driven decisions."
    },
    {
     "type": "layers",
     "title": "From indicators to agreements",
     "items": [
      {
       "label": "SLA",
       "parts": [
        "External promise to customers",
        "Has consequences (credits, penalties)",
        "Set looser than the SLO"
       ]
      },
      {
       "label": "SLO",
       "parts": [
        "Internal target for an SLI over a window",
        "Example: 99.9% of requests succeed over 28 days"
       ]
      },
      {
       "label": "SLI",
       "parts": [
        "A measured indicator of user experience",
        "Example: proportion of successful payment requests"
       ]
      }
     ]
    },
    {
     "type": "formula",
     "title": "Reliability calculations",
     "items": [
      {
       "name": "Service level indicator",
       "expr": "SLI = good events ÷ valid events × 100%",
       "meaning": "For example, payment requests completed under 2 seconds without error ÷ all valid payment requests."
      },
      {
       "name": "Error budget",
       "expr": "Error budget = 1 − SLO",
       "meaning": "A 99.9% SLO gives a 0.1% budget: about 43 minutes of full outage or 1 in 1,000 failed requests per 30 days."
      },
      {
       "name": "Burn rate",
       "expr": "Burn rate = observed error rate ÷ error rate allowed by the SLO",
       "meaning": "A burn rate of 1 uses the budget exactly over the window; 10 exhausts it ten times faster."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Error budget burn over a 30-day window",
     "labels": [
      "Day 0",
      "Day 5",
      "Day 10",
      "Day 12",
      "Day 15",
      "Day 20",
      "Day 25",
      "Day 30"
     ],
     "series": [
      {
       "name": "Budget left (even burn)",
       "values": [
        100,
        83,
        67,
        60,
        50,
        33,
        17,
        0
       ]
      },
      {
       "name": "Budget left (actual)",
       "values": [
        100,
        96,
        92,
        10,
        9,
        8,
        7,
        6
       ]
      }
     ],
     "unit": "%",
     "yLabel": "Error budget remaining",
     "caption": "Illustrative numbers matching the scenario later in this lesson: two incidents between days 10 and 12 burn most of the budget. After the policy slows releases, the actual line flattens and the month ends just inside the SLO."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Users cannot tell the difference between 99.99% and 100% because their phone, Wi-Fi and mobile network fail more often than that. Chasing 100% costs enormous effort and blocks all change. The right target is the one where users are happy and the business can still innovate.",
     "title": "100% is the wrong target"
    },
    {
     "type": "steps",
     "title": "Running an error budget policy",
     "items": [
      {
       "title": "Agree SLOs with product owners",
       "text": "Reliability targets are business decisions, informed by user research and cost."
      },
      {
       "title": "Measure continuously",
       "text": "Compute SLIs from real traffic; alert on fast burn rates."
      },
      {
       "title": "Within budget",
       "text": "Teams release features freely and can take calculated risks."
      },
      {
       "title": "Budget nearly spent",
       "text": "Slow releases, add extra testing, prioritise reliability fixes."
      },
      {
       "title": "Budget exhausted",
       "text": "Freeze non-critical feature releases until reliability recovers; agreed in advance, not negotiated in the moment."
      }
     ]
    },
    {
     "type": "framework",
     "title": "Core SRE practices",
     "items": [
      {
       "label": "SLO",
       "title": "Service level objectives",
       "text": "Measured, user-centred reliability targets."
      },
      {
       "label": "EB",
       "title": "Error budgets",
       "text": "Permission to fail within limits, used to balance speed and reliability."
      },
      {
       "label": "T",
       "title": "Toil reduction",
       "text": "Cap manual, repetitive, automatable work, for example at 50% of an engineer's time, and automate the rest."
      },
      {
       "label": "PIR",
       "title": "Blameless post-incident reviews",
       "text": "Learn from failures without blame and track actions to completion."
      },
      {
       "label": "OC",
       "title": "Sustainable on-call",
       "text": "Limited pages per shift, fair rotations, compensation and recovery time."
      },
      {
       "label": "CP",
       "title": "Capacity and release engineering",
       "text": "Plan demand, test at load, release progressively."
      }
     ]
    },
    {
     "type": "table",
     "title": "What counts as toil?",
     "head": [
      "Characteristic",
      "Example"
     ],
     "rows": [
      [
       "Manual",
       "Logging into servers to restart a service by hand"
      ],
      [
       "Repetitive",
       "Rotating the same certificates every month"
      ],
      [
       "Automatable",
       "Creating user accounts from a spreadsheet"
      ],
      [
       "Tactical and reactive",
       "Responding to the same disk-full alert weekly"
      ],
      [
       "No enduring value",
       "The system is no better after the task is done"
      ],
      [
       "Grows with scale",
       "Work increases linearly as users or servers increase"
      ]
     ]
    },
    {
     "type": "scenario",
     "title": "Spending the error budget",
     "situation": "A payments API has a 99.95% monthly availability SLO. By day 12 of the month, two incidents have consumed 90% of the error budget. The product team wants to release a major new feature tomorrow. What does a sound error budget policy suggest?",
     "options": [
      {
       "text": "Release as planned, because the feature has already been promised to customers and marketing",
       "feedback": "Ignoring the budget makes the SLO meaningless and risks breaching the external SLA.",
       "best": false
      },
      {
       "text": "Raise the SLO to 99.99% so the team focuses harder on reliability",
       "feedback": "A tighter target with an exhausted budget only deepens the breach.",
       "best": false
      },
      {
       "text": "Pause the feature, fix reliability and release when the budget recovers",
       "feedback": "Correct. With 90% of the budget gone early, the policy favours reliability work. The decision follows a rule agreed in advance, not a debate.",
       "best": true
      },
      {
       "text": "Lower the SLO to 99.5% for this month so the release can proceed",
       "feedback": "Changing targets to suit a release undermines trust in the whole system.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "Introducing SLOs at an e-commerce platform",
     "context": "A Dhaka-based e-commerce platform has frequent arguments between product managers, who want weekly feature releases before sale events, and the operations team, who want release freezes after every outage. There are no agreed reliability targets. During the last 11.11 sale, checkout failed for 9% of attempts for two hours, and both sides blamed the other.",
     "questions": [
      "How would SLOs and error budgets change these conversations?",
      "Which SLIs would you define for checkout?",
      "What error budget policy would you propose for sale periods?"
     ],
     "answer": "SLOs replace opinion with an agreed, measurable definition of 'reliable enough', and the error budget turns the speed-versus-stability argument into a shared rule: release freely while budget remains, focus on reliability when it is spent. For checkout, useful SLIs include the proportion of checkout attempts that complete successfully, and the proportion completing within, for example, three seconds, both measured from real traffic. A sound policy for sale periods is to set a stricter internal SLO for the sale window, require that the budget be healthy in the two weeks before a sale for risky releases to go ahead, freeze non-critical changes during the sale itself, and agree all this with product and operations leaders in advance so that nobody negotiates under pressure."
    },
    {
     "type": "template",
     "title": "SLO specification",
     "purpose": "Define a user-centred SLO for one service.",
     "columns": [
      "Service and user journey",
      "SLI definition",
      "SLO target and window",
      "Error budget",
      "Alerting rule",
      "Policy when exhausted"
     ],
     "example": [
      [
       "Wallet – send money",
       "Successful transfers <3 s ÷ valid transfer requests",
       "99.9% over 28 days",
       "0.1% (~40 min equivalent)",
       "Page if 2-hour burn rate >14",
       "Freeze non-critical releases; reliability sprint"
      ]
     ],
     "rows": 5
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Site reliability engineering (SRE)",
       "def": "An approach that applies software engineering to operations, managing reliability with measurable objectives."
      },
      {
       "term": "Service level indicator (SLI)",
       "def": "A carefully defined quantitative measure of some aspect of the service level users experience."
      },
      {
       "term": "Service level objective (SLO)",
       "def": "A target value or range for an SLI over a defined time window."
      },
      {
       "term": "Error budget",
       "def": "The amount of unreliability allowed by an SLO: one minus the SLO target."
      },
      {
       "term": "Burn rate",
       "def": "How fast the error budget is being consumed relative to the rate allowed by the SLO."
      },
      {
       "term": "Toil",
       "def": "Manual, repetitive, automatable operational work that has no enduring value and grows with scale."
      },
      {
       "term": "Post-incident review",
       "def": "A structured, blameless review of an incident to understand contributing factors and agree improvements."
      },
      {
       "term": "On-call",
       "def": "An arrangement in which engineers are available to respond to alerts outside normal working hours."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "If you set an SLO for your most important service tomorrow, what would the SLI be, and who would have to agree to the target?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "SRE sets user-centred SLOs on measured SLIs and keeps the external SLA looser than the SLO.",
      "Error budget = 1 − SLO; it is permission to take risk, used up by failures.",
      "Alert on burn rate, and let an agreed policy decide when releases slow or pause.",
      "100% is the wrong target: users cannot perceive it and it blocks all change.",
      "Cap toil and automate it; run blameless reviews whose actions are tracked to completion."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A service has a 99.9% SLO over 30 days. Roughly how much full downtime does the error budget allow?",
       "options": [
        "About 7.2 hours",
        "About 4.3 minutes",
        "About 43 hours",
        "About 43 minutes"
       ],
       "answer": 3,
       "explain": "0.1% of 43,200 minutes ≈ 43 minutes."
      },
      {
       "q": "Why is 100% rarely the right reliability target?",
       "options": [
        "Regulators forbid 100% targets in published service agreements",
        "Users can't perceive it and it blocks all change",
        "Error budgets only work above 100%",
        "It is impossible to measure reliability"
       ],
       "answer": 1,
       "explain": "Beyond a point, extra reliability is invisible to users and very expensive."
      },
      {
       "q": "Which of these is toil?",
       "options": [
        "Running a blameless post-incident review",
        "Writing an automation script",
        "Restarting the same service by hand every week",
        "Designing a new architecture for the next generation of the service"
       ],
       "answer": 2,
       "explain": "Manual, repetitive, automatable work with no enduring value is toil."
      },
      {
       "q": "What should normally happen when a service exhausts its error budget?",
       "options": [
        "Releases pause while reliability work comes first",
        "The SLO is lowered so releases can continue",
        "Monitoring is turned off to stop alerts",
        "The on-call engineer is disciplined for the incidents that used it up"
       ],
       "answer": 0,
       "explain": "A pre-agreed policy shifts effort to reliability until the budget recovers."
      },
      {
       "q": "How should an SLA relate to the internal SLO?",
       "options": [
        "The SLA is looser, giving a safety margin",
        "They must always be identical so customers see the real target",
        "The SLA replaces the SLO entirely",
        "The SLA must be stricter than the SLO"
       ],
       "answer": 0,
       "explain": "Internal SLOs are tighter so the team acts before the external promise is breached."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l4",
   "title": "Value Streams and Flow at Scale",
   "subtitle": "Managing the flow of value across teams, platforms and portfolios",
   "minutes": 40,
   "objectives": [
    "Apply value stream management to digital products",
    "Use flow metrics to find constraints across teams",
    "Use platform engineering and the theory of constraints to improve flow"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Once individual teams are fast, the constraint moves: to dependencies between teams, shared environments, security reviews, data access or funding decisions. **Value stream management** looks at the full flow of work from idea to customer outcome across all teams involved, and improves the system rather than the parts. In large organisations, this is where the biggest gains in speed and value now lie."
    },
    {
     "type": "framework",
     "title": "Flow metrics for digital value streams",
     "items": [
      {
       "label": "FT",
       "title": "Flow time",
       "text": "Elapsed time from work starting to value delivered."
      },
      {
       "label": "FV",
       "title": "Flow velocity",
       "text": "Number of work items completed per period."
      },
      {
       "label": "FL",
       "title": "Flow load",
       "text": "Number of items in progress across the stream (work in progress)."
      },
      {
       "label": "FE",
       "title": "Flow efficiency",
       "text": "Share of flow time in which items are actively worked on."
      },
      {
       "label": "FD",
       "title": "Flow distribution",
       "text": "Mix of work types completed: features, defects, risk work and technical debt."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A fintech in Dhaka found that 85% of completed work was new features, 5% technical debt and 2% risk and security items. Incidents and audit findings were rising. Leadership set a target distribution of 60% features, 20% debt, 10% risk and 10% defects for six months; incidents fell by 40% and feature velocity recovered within two quarters.",
     "title": "Balancing flow distribution (illustrative case)"
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Flow distribution before and after rebalancing",
     "labels": [
      "Features",
      "Technical debt",
      "Risk and security",
      "Defects"
     ],
     "series": [
      {
       "name": "Before",
       "values": [
        85,
        5,
        2,
        8
       ]
      },
      {
       "name": "Target for six months",
       "values": [
        60,
        20,
        10,
        10
       ]
      }
     ],
     "unit": "%",
     "yLabel": "Share of completed work",
     "caption": "Illustrative figures from the case above (defects are the remainder of the 'before' mix). Deliberately funding debt and risk work slows features briefly, then lets them flow faster."
    },
    {
     "type": "cycle",
     "title": "Theory of constraints: five focusing steps",
     "center": "Constraint",
     "items": [
      {
       "label": "Identify",
       "text": "Find the constraint that limits the whole stream."
      },
      {
       "label": "Exploit",
       "text": "Get the most out of it: no idle time, no low-value work."
      },
      {
       "label": "Subordinate",
       "text": "Align everything else to the constraint's pace."
      },
      {
       "label": "Elevate",
       "text": "Add capacity or redesign if it still limits flow."
      },
      {
       "label": "Repeat",
       "text": "A new constraint appears; start again without letting inertia become the constraint."
      }
     ],
     "caption": "Improving anything other than the constraint only builds bigger queues in front of it. Each turn of the loop moves the constraint somewhere new."
    },
    {
     "type": "compare",
     "title": "Local optimisation versus flow optimisation",
     "columns": [
      {
       "title": "Local optimisation",
       "items": [
        "Each team maximises its own throughput",
        "Work piles up before the slowest step",
        "Utilisation looks high everywhere",
        "Customer lead time does not improve"
       ]
      },
      {
       "title": "Flow optimisation",
       "items": [
        "Teams align to the constraint",
        "Work in progress is limited across the stream",
        "Some idle time is accepted outside the constraint",
        "Customer lead time falls"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "**Platform engineering** is one of the most effective ways to remove recurring constraints. A platform team builds an internal developer platform with self-service environments, pipelines, observability and security controls. Product teams use these 'paved roads' instead of raising tickets and waiting. The platform is managed as a product, with internal customers, a roadmap and service levels."
    },
    {
     "type": "keypoints",
     "items": [
      "Teams are busy but customer lead time is not falling.",
      "Work waits weeks for shared environments, data or security sign-off.",
      "Most items cross three or more teams before release.",
      "Technical debt and risk work never appear in the flow distribution.",
      "Nobody can say how long an idea takes to reach customers."
     ],
     "title": "Signs your value stream needs attention"
    },
    {
     "type": "scenario",
     "title": "Finding the constraint",
     "situation": "In a telecom's digital channel, product teams deliver features in two weeks, but releases reach customers on average 9 weeks later. Mapping shows features waiting 5 weeks for a shared test environment managed by a central team with a ticket queue. What is the best first action?",
     "options": [
      {
       "text": "Ask product teams to deliver features in one week instead of two so that they reach the queue sooner",
       "feedback": "Faster teams only add to the queue in front of the constraint.",
       "best": false
      },
      {
       "text": "Treat the test environment as the constraint and move toward self-service environments",
       "feedback": "Correct. Improving any other step will not reduce lead time. Exploit the constraint first, then elevate it with self-service or on-demand environments.",
       "best": true
      },
      {
       "text": "Add more product teams to increase output",
       "feedback": "More output piles up before the same bottleneck.",
       "best": false
      },
      {
       "text": "Introduce a weekly cross-team status meeting",
       "feedback": "Meetings increase visibility but do not change the capacity of the constraint.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Flow metrics dashboard",
     "purpose": "Track the flow of one value stream monthly.",
     "columns": [
      "Month",
      "Flow velocity",
      "Flow time (median days)",
      "Flow load (WIP)",
      "Flow efficiency %",
      "Flow distribution (F/D/R/Debt %)"
     ],
     "example": [
      [
       "March",
       "42 items",
       "37",
       "118",
       "11%",
       "78 / 12 / 4 / 6"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Value stream management",
       "def": "Managing and improving the end-to-end flow of value from idea to customer outcome across all teams involved."
      },
      {
       "term": "Flow time",
       "def": "Elapsed time from when work starts on an item until value is delivered."
      },
      {
       "term": "Flow load",
       "def": "The number of work items in progress in a value stream."
      },
      {
       "term": "Flow distribution",
       "def": "The proportion of completed work across types such as features, defects, risk and debt."
      },
      {
       "term": "Constraint",
       "def": "The step that limits the throughput of the whole system."
      },
      {
       "term": "Theory of constraints",
       "def": "A management approach that improves a system by identifying and managing its most limiting factor."
      },
      {
       "term": "Platform engineering",
       "def": "Building and running internal self-service platforms that reduce friction for product teams."
      },
      {
       "term": "Paved road",
       "def": "A supported, standard path that makes the right way of working the easiest way."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Where is the constraint in the value stream you know best? What evidence tells you it is the constraint rather than just a busy team?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Once teams are fast, the constraint moves to dependencies, shared environments, approvals and funding.",
      "Track flow time, velocity, load, efficiency and distribution across the whole stream.",
      "Use the five focusing steps: improving a non-constraint only grows queues.",
      "Balance flow distribution so debt, risk and defect work are funded, not starved.",
      "Platform engineering removes recurring constraints when the platform is run as a product."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "According to the theory of constraints, what should happen after identifying the constraint?",
       "options": [
        "Exploit it: get the most from its capacity",
        "Ignore it until the next annual review",
        "Speed up all other steps",
        "Immediately buy more capacity everywhere"
       ],
       "answer": 0,
       "explain": "Exploit first, subordinate everything else, then elevate if needed."
      },
      {
       "q": "Which flow metric shows the mix of features, defects, risk and debt completed?",
       "options": [
        "Flow velocity",
        "Flow load",
        "Flow efficiency of the stream",
        "Flow distribution"
       ],
       "answer": 3,
       "explain": "Flow distribution shows the balance of work types."
      },
      {
       "q": "Product teams are fast, but releases wait weeks for a shared environment. Why will faster product teams not help?",
       "options": [
        "The environment team will slow down further",
        "They are not the constraint, so work just queues",
        "Faster teams always produce more defects",
        "Product teams do not affect lead time in any measurable way"
       ],
       "answer": 1,
       "explain": "Improving non-constraints does not change system throughput."
      },
      {
       "q": "How should an internal developer platform be managed?",
       "options": [
        "As an optional tool nobody owns",
        "As a product with internal customers and a roadmap",
        "As a set of tickets for each team",
        "As a one-off infrastructure project with a fixed end date"
       ],
       "answer": 1,
       "explain": "Platforms succeed when treated as products serving internal customers."
      },
      {
       "q": "What is a sign of local optimisation?",
       "options": [
        "Measuring end-to-end flow time for each item in the stream",
        "Busy teams everywhere, but no faster lead time",
        "Limiting work in progress across the stream",
        "Teams aligning their pace to the constraint"
       ],
       "answer": 1,
       "explain": "Busy teams with no improvement in customer outcomes indicate local optimisation."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m7",
 "order": 7,
 "code": "Direct",
 "title": "Direction, Planning, Governance and Digital Strategy",
 "subtitle": "Set direction, govern risk, measure what matters and shape the digital future",
 "outcomes": [
  "Cascade strategy into outcome-based objectives and a balanced portfolio",
  "Govern risk and compliance with proportionate, embedded controls",
  "Design measurement systems that guide decisions and resist gaming",
  "Select improvement methods and assess capability with evidence",
  "Build and fund a digital and IT strategy that serves the business"
 ],
 "lessons": [
  {
   "id": "m7-l1",
   "title": "Direction, Strategy and Portfolio",
   "subtitle": "Turning a vision into objectives, priorities and investment decisions",
   "minutes": 45,
   "objectives": [
    "Cascade vision and strategy into measurable objectives for service teams",
    "Use portfolio management to choose and balance investments",
    "Plan across strategic, tactical and operational horizons"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Direction** answers the questions 'where are we going, and why?'. Without it, service organisations drift: teams optimise their own priorities, budgets follow last year's pattern, and improvement efforts pull in different directions. Direction is set through vision, strategy and objectives, translated into a portfolio of investments and then into plans that teams can act on."
    },
    {
     "type": "layers",
     "title": "From vision to daily work",
     "items": [
      {
       "label": "Vision and mission",
       "parts": [
        "Where the organisation wants to be and why it exists"
       ]
      },
      {
       "label": "Strategy",
       "parts": [
        "The chosen approach to get there: where to play and how to win"
       ]
      },
      {
       "label": "Objectives and key results",
       "parts": [
        "Measurable outcomes for the next period"
       ]
      },
      {
       "label": "Portfolio",
       "parts": [
        "The products, services and initiatives funded to achieve them"
       ]
      },
      {
       "label": "Plans and backlogs",
       "parts": [
        "Tactical and operational work in teams"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "Objectives and key results (OKRs)",
     "items": [
      {
       "label": "O",
       "title": "Objective",
       "text": "A qualitative, inspiring statement of what you want to achieve. Example: 'Make digital admission effortless for every applicant'."
      },
      {
       "label": "KR",
       "title": "Key results",
       "text": "Two to five measurable outcomes showing progress. Example: 'Online applications completed without help rise from 55% to 85%'."
      },
      {
       "label": "I",
       "title": "Initiatives",
       "text": "The work expected to move the key results. Kept separate, because initiatives can change while the outcome stays the same."
      }
     ]
    },
    {
     "type": "tree",
     "title": "One objective, measurable key results, changeable initiatives",
     "root": {
      "label": "Objective",
      "text": "Make digital admission effortless for every applicant",
      "children": [
       {
        "label": "KR1",
        "text": "Unaided completion 55% → 85%",
        "children": [
         {
          "label": "Mobile-first form"
         },
         {
          "label": "Help chat in Bangla"
         }
        ]
       },
       {
        "label": "KR2",
        "text": "Drop-out 40% → 15%",
        "children": [
         {
          "label": "Save and resume"
         },
         {
          "label": "Fee payment by wallet"
         }
        ]
       },
       {
        "label": "KR3",
        "text": "Decision time 21 → 7 days",
        "children": [
         {
          "label": "Automated document checks"
         }
        ]
       }
      ]
     },
     "caption": "Key results describe outcomes; the initiatives beneath them are bets that can be swapped if the numbers do not move. Example figures are illustrative."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "'Launch the new admission portal' is an output; it can be completed while nothing improves. 'Reduce application drop-out from 40% to 15%' is an outcome. Key results should describe changes in behaviour or results that matter to stakeholders.",
     "title": "Outcomes, not outputs, in key results"
    },
    {
     "type": "table",
     "title": "Planning horizons",
     "head": [
      "Horizon",
      "Typical span",
      "Questions",
      "Example artefacts"
     ],
     "rows": [
      [
       "Strategic",
       "2–5 years",
       "Which services and capabilities will matter? What do we stop?",
       "Digital strategy, target operating model, capability roadmap"
      ],
      [
       "Tactical",
       "Quarters to a year",
       "Which initiatives this year? How is capacity allocated?",
       "Portfolio plan, OKRs, budget, sourcing plan"
      ],
      [
       "Operational",
       "Days to weeks",
       "What do teams do next? How do we handle demand?",
       "Backlogs, schedules, rotas, change calendar"
      ]
     ]
    },
    {
     "type": "cycle",
     "title": "Portfolio management cycle",
     "center": "Portfolio",
     "items": [
      {
       "label": "Collect demand",
       "text": "Ideas, requests, regulatory needs and risks."
      },
      {
       "label": "Evaluate",
       "text": "Value, cost, risk and strategic fit."
      },
      {
       "label": "Prioritise and fund",
       "text": "Choose and balance the portfolio within capacity."
      },
      {
       "label": "Execute and monitor",
       "text": "Track outcomes and spending."
      },
      {
       "label": "Rebalance",
       "text": "Stop, continue or scale based on evidence, then take in new demand."
      }
     ],
     "caption": "A portfolio is re-decided on a regular rhythm, not approved once a year. Stopping work in step 5 is what frees capacity for better ideas in step 1."
    },
    {
     "type": "compare",
     "title": "Balancing the portfolio",
     "columns": [
      {
       "title": "Run",
       "items": [
        "Keep current services operating",
        "Licences, operations, maintenance",
        "Often 60–70% of IT spend"
       ]
      },
      {
       "title": "Grow",
       "items": [
        "Improve and extend existing services",
        "New features, more users, better performance"
       ]
      },
      {
       "title": "Transform",
       "items": [
        "New business models or capabilities",
        "Higher risk and uncertainty; funded in stages"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Too many priorities",
     "situation": "A university IT department has 47 'top priority' projects approved by different deans. Most are half-finished and staff are exhausted. The Vice-Chancellor asks you to restore control. What do you do first?",
     "options": [
      {
       "text": "Ask each dean to reduce their projects by 20% so that the total load across the university falls fairly",
       "feedback": "Equal cuts ignore relative value; the portfolio still has too many priorities with no common ranking.",
       "best": false
      },
      {
       "text": "Hire contractors to deliver all 47 projects",
       "feedback": "More people without prioritisation increases coordination cost and still spreads effort thinly.",
       "best": false
      },
      {
       "text": "Continue all projects and report progress more often",
       "feedback": "Reporting does not create focus or capacity.",
       "best": false
      },
      {
       "text": "Set up one portfolio process that ranks projects against strategy and limits parallel work",
       "feedback": "Correct. One transparent portfolio with limits on parallel work restores focus and lets the most valuable projects finish.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "OKR worksheet",
     "purpose": "Translate a strategic objective into measurable key results for a service team.",
     "columns": [
      "Objective",
      "Key result",
      "Baseline",
      "Target",
      "Initiatives",
      "Owner"
     ],
     "example": [
      [
       "Make digital admission effortless",
       "Applications completed without help",
       "55%",
       "85% by next intake",
       "Bangla-first forms; document upload redesign",
       "Head of admissions systems"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Direction",
       "def": "Setting where an organisation is going and why, through vision, strategy and objectives."
      },
      {
       "term": "Strategy",
       "def": "A chosen approach for achieving long-term objectives: where to compete and how to win."
      },
      {
       "term": "Objectives and key results (OKRs)",
       "def": "A goal-setting method combining a qualitative objective with measurable key results."
      },
      {
       "term": "Portfolio management",
       "def": "The practice of selecting, balancing and governing investments in products, services and initiatives."
      },
      {
       "term": "Run–grow–transform",
       "def": "A way of classifying IT investment by whether it maintains, extends or fundamentally changes the business."
      },
      {
       "term": "Planning horizon",
       "def": "The time span a plan covers: strategic, tactical or operational."
      },
      {
       "term": "Output",
       "def": "A deliverable produced by work, as opposed to the outcome it is meant to achieve."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "How many 'top priorities' does your organisation have right now? Who decides which one wins when they conflict?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Direction flows from vision and strategy to objectives, portfolio and team backlogs.",
      "Key results state outcomes; initiatives are the changeable work expected to move them.",
      "Plan on strategic, tactical and operational horizons with different questions and artefacts.",
      "Run the portfolio as a cycle: rank against strategy, limit work in progress, rebalance on evidence.",
      "Balance run, grow and transform spending deliberately; run usually takes the largest share."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which key result is written as an outcome rather than an output?",
       "options": [
        "Hold five training workshops",
        "Reduce application drop-out from 40% to 15%",
        "Launch the new admission portal",
        "Buy a new content management system for the portal"
       ],
       "answer": 1,
       "explain": "Drop-out rate is a change in results; the others are deliverables."
      },
      {
       "q": "Which planning horizon covers decisions about which services to stop over the next three years?",
       "options": [
        "Strategic",
        "Tactical",
        "Operational",
        "Daily stand-up planning within each team"
       ],
       "answer": 0,
       "explain": "Multi-year choices about the service portfolio are strategic."
      },
      {
       "q": "What is the most effective response when a portfolio has far more priorities than capacity?",
       "options": [
        "Cut every project by the same percentage",
        "Ask all teams to work longer hours",
        "Rank work against strategy and limit WIP",
        "Start more projects so that something finishes"
       ],
       "answer": 2,
       "explain": "Ranking plus limits creates focus and lets valuable work finish."
      },
      {
       "q": "In a run–grow–transform portfolio, which category usually consumes the largest share of IT spend?",
       "options": [
        "Innovation experiments and pilots",
        "Grow",
        "Transform",
        "Run"
       ],
       "answer": 3,
       "explain": "Keeping current services running typically consumes most of the budget."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l2",
   "title": "Governance, Risk and Compliance",
   "subtitle": "Directing and controlling services within risk appetite and the law",
   "minutes": 45,
   "objectives": [
    "Apply a risk management cycle to services and practices",
    "Design controls that are effective and proportionate",
    "Use the three lines model and automated compliance in service management"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every service carries risk: outages, data breaches, supplier failure, regulatory penalties, safety incidents. **Governance, risk and compliance (GRC)** ensures that the organisation knows its risks, takes them deliberately within its appetite, and can prove that it meets its legal and contractual obligations. For a service manager, GRC is not paperwork; it is the discipline that lets the organisation move fast without stumbling into avoidable harm."
    },
    {
     "type": "cycle",
     "title": "Risk management cycle",
     "center": "Risk appetite",
     "items": [
      {
       "label": "Identify",
       "text": "What could go wrong, or go right?"
      },
      {
       "label": "Assess",
       "text": "Likelihood and impact, before and after controls."
      },
      {
       "label": "Treat",
       "text": "Avoid, reduce, transfer, accept, or exploit opportunities."
      },
      {
       "label": "Monitor",
       "text": "Track risk indicators and control effectiveness."
      },
      {
       "label": "Report",
       "text": "Inform governance and adjust appetite or treatment."
      }
     ],
     "caption": "Every stage is judged against the appetite at the centre. Reporting feeds governance, which may change the appetite and restart the loop."
    },
    {
     "type": "formula",
     "title": "Risk calculations",
     "items": [
      {
       "name": "Risk exposure",
       "expr": "Exposure = likelihood × impact",
       "meaning": "A simple ranking device; use consistent scales (e.g. 1–5 each)."
      },
      {
       "name": "Annualised loss expectancy",
       "expr": "ALE = single loss expectancy × annual rate of occurrence",
       "meaning": "Example: a 2-hour outage costing Tk 50 lakh, expected twice a year, gives an ALE of Tk 1 crore."
      },
      {
       "name": "Residual risk",
       "expr": "Residual risk = inherent risk − effect of controls",
       "meaning": "The risk that remains after treatment; must be within appetite."
      }
     ]
    },
    {
     "type": "table",
     "title": "Risk treatment options",
     "head": [
      "Option",
      "Meaning",
      "Service example"
     ],
     "rows": [
      [
       "Avoid",
       "Stop the activity that creates the risk",
       "Do not store card data at all; use a tokenisation provider"
      ],
      [
       "Reduce",
       "Lower likelihood or impact with controls",
       "Add a second data centre and test failover"
      ],
      [
       "Transfer / share",
       "Move financial impact to another party",
       "Cyber insurance; supplier indemnity clauses"
      ],
      [
       "Accept",
       "Knowingly tolerate within appetite",
       "Accept occasional slowness on a low-priority internal tool"
      ]
     ]
    },
    {
     "type": "matrix",
     "title": "Likelihood × impact: a first cut at treatment",
     "x": "Likelihood",
     "y": "Impact",
     "quadrants": [
      {
       "title": "Prepare and transfer",
       "items": [
        "Rare but severe: data centre flood",
        "Tested recovery site, insurance"
       ]
      },
      {
       "title": "Treat now",
       "items": [
        "Likely and severe: unpatched internet systems",
        "Reduce or avoid; executive attention"
       ]
      },
      {
       "title": "Accept and watch",
       "items": [
        "Rare and minor",
        "Record, review periodically"
       ]
      },
      {
       "title": "Reduce with routine controls",
       "items": [
        "Frequent but minor: password lockouts",
        "Automate and standardise"
       ]
      }
     ],
     "caption": "The quadrant suggests a starting treatment, not a final answer; residual risk after treatment must still sit within appetite."
    },
    {
     "type": "framework",
     "title": "The three lines model",
     "items": [
      {
       "label": "1",
       "title": "First line: management",
       "text": "Service owners and teams own and manage risks in daily operations, with controls built into their work."
      },
      {
       "label": "2",
       "title": "Second line: risk and compliance",
       "text": "Specialist functions set frameworks, advise, challenge and monitor the first line."
      },
      {
       "label": "3",
       "title": "Third line: internal audit",
       "text": "Independent assurance to the governing body that risk management and controls work."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A control that depends on someone remembering to fill in a form will fail on the busiest day. Strong controls are automated, preventive and embedded: access granted by role, segregation of duties enforced by the tool, configuration checked by policy-as-code, evidence captured automatically.",
     "title": "Controls should be designed into the work"
    },
    {
     "type": "keypoints",
     "items": [
      "Data protection and privacy laws, including data localisation requirements; check the current national rules, which have been changing in several countries.",
      "Central bank IT and cyber-security guidelines for banks and financial services.",
      "Telecom regulator rules on lawful interception, uptime and customer data.",
      "Payment card industry security standards for card data (version 4.x, whose later-dated requirements became mandatory in 2025).",
      "Health-data confidentiality rules for hospitals and clinics.",
      "For services in or for EU markets: operational resilience rules for financial entities (applying since January 2025) and the NIS2 cyber-security directive.",
      "Management-system standards used as evidence: ISO/IEC 20000-1:2018 (service management), ISO/IEC 27001:2022 (information security), ISO/IEC 42001:2023 (AI).",
      "Contractual obligations in customer and supplier agreements."
     ],
     "title": "Common compliance obligations for services in South Asia and beyond"
    },
    {
     "type": "scenario",
     "title": "A control that nobody follows",
     "situation": "A bank's policy requires two people to approve every production database change. An audit finds that 60% of changes have the second approval added days after implementation. What is the best response?",
     "options": [
      {
       "text": "Enforce the second approval in the deployment tooling itself",
       "feedback": "Correct. Embedding the control in the tool makes it preventive and reliable. Adjust the approval level to risk so the control remains proportionate.",
       "best": true
      },
      {
       "text": "Send a reminder to all engineers about the policy and ask managers to check compliance monthly",
       "feedback": "Reminders rarely change behaviour under time pressure; the control stays detective and weak.",
       "best": false
      },
      {
       "text": "Remove the policy because nobody follows it",
       "feedback": "The risk remains; the control needs redesign, not removal.",
       "best": false
      },
      {
       "text": "Discipline the engineers involved",
       "feedback": "Blame does not fix a control that is poorly designed for real work.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Service risk register",
     "purpose": "Record and track risks for a service.",
     "columns": [
      "Risk",
      "Likelihood (1–5)",
      "Impact (1–5)",
      "Exposure",
      "Treatment and controls",
      "Owner",
      "Residual within appetite?"
     ],
     "example": [
      [
       "Single SMS gateway fails during peak",
       "3",
       "5",
       "15",
       "Reduce: second gateway with automatic failover; quarterly test",
       "Head of digital channels",
       "Yes after failover tested"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Governance, risk and compliance (GRC)",
       "def": "An integrated approach to directing an organisation, managing its risks and meeting its obligations."
      },
      {
       "term": "Risk",
       "def": "A possible event that could cause harm or loss, or make it harder to achieve objectives; also used for opportunities."
      },
      {
       "term": "Inherent risk",
       "def": "The level of risk before any controls are applied."
      },
      {
       "term": "Residual risk",
       "def": "The level of risk remaining after controls and treatment."
      },
      {
       "term": "Control",
       "def": "A means of managing risk by preventing, detecting or correcting undesired events."
      },
      {
       "term": "Three lines model",
       "def": "A model distinguishing management (first line), risk and compliance functions (second line) and independent audit (third line)."
      },
      {
       "term": "Segregation of duties",
       "def": "Separating responsibilities so no single person can complete a sensitive action alone."
      },
      {
       "term": "Annualised loss expectancy (ALE)",
       "def": "Expected yearly loss from a risk: single loss expectancy multiplied by annual rate of occurrence."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which control in your area depends most on human memory? How could it be built into the tools people already use?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "GRC lets an organisation take risk deliberately, within appetite, and prove its obligations are met.",
      "Treat risks by avoiding, reducing, transferring or accepting them; ALE = single loss × annual rate.",
      "The three lines: management owns risk, risk and compliance challenge, internal audit assures.",
      "The strongest controls are automated, preventive and built into the tools people use.",
      "Regulations and standards change; keep a current obligations register rather than relying on memory."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Buying cyber insurance for a data breach is which treatment option?",
       "options": [
        "Transfer",
        "Avoid",
        "Accept",
        "Reduce"
       ],
       "answer": 0,
       "explain": "Insurance transfers the financial impact to another party."
      },
      {
       "q": "Which line provides independent assurance to the governing body?",
       "options": [
        "External suppliers delivering the service",
        "First line: service owners",
        "Second line: risk function",
        "Third line: internal audit"
       ],
       "answer": 3,
       "explain": "Internal audit is independent of management and reports to the governing body."
      },
      {
       "q": "An outage costs Tk 20 lakh each time and is expected three times a year. What is the annualised loss expectancy?",
       "options": [
        "Tk 6 lakh",
        "Tk 60 lakh",
        "Tk 20 lakh",
        "Tk 23 lakh"
       ],
       "answer": 1,
       "explain": "ALE = 20 lakh × 3 = 60 lakh."
      },
      {
       "q": "What makes a control most reliable?",
       "options": [
        "Being written in a long policy",
        "Being automated and preventive",
        "Depending on staff memory",
        "Being checked once a year"
       ],
       "answer": 1,
       "explain": "Automated, preventive controls work even under pressure."
      },
      {
       "q": "Who owns and manages risk day to day in the three lines model?",
       "options": [
        "The second-line risk function alone",
        "First-line managers and teams",
        "The external regulator",
        "Internal audit"
       ],
       "answer": 1,
       "explain": "The first line owns and manages risk in operations."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l3",
   "title": "Measurement, Reporting and Decisions",
   "subtitle": "Measuring what matters and using it to steer, not to punish",
   "minutes": 40,
   "objectives": [
    "Derive meaningful metrics from goals using a structured method",
    "Design balanced scorecards and dashboards for different audiences",
    "Avoid common measurement traps such as gaming and vanity metrics"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Measurement exists to support decisions. A metric that does not change any decision is noise. A metric used to punish teams will be gamed. Mature service organisations derive measures from goals, balance them so that no single number can be optimised at the expense of the others, and present them so each audience sees what it needs to act on."
    },
    {
     "type": "flow",
     "title": "Goal–question–metric",
     "items": [
      {
       "label": "Goal",
       "text": "Reduce time patients lose due to IT problems"
      },
      {
       "label": "Questions",
       "text": "How often do clinicians lose time? How long? Where?"
      },
      {
       "label": "Metrics",
       "text": "Incidents affecting clinical workflows; minutes lost per shift; top 5 causes"
      },
      {
       "label": "Decisions",
       "text": "Which improvements to fund next quarter"
      }
     ]
    },
    {
     "type": "tree",
     "title": "Goal–question–metric for clinical IT time loss",
     "root": {
      "label": "Goal",
      "text": "Reduce time clinicians lose to IT problems",
      "children": [
       {
        "label": "How often?",
        "children": [
         {
          "label": "Incidents hitting clinical workflows per week"
         }
        ]
       },
       {
        "label": "How long?",
        "children": [
         {
          "label": "Minutes lost per shift"
         }
        ]
       },
       {
        "label": "Where and why?",
        "children": [
         {
          "label": "Top five causes by ward"
         }
        ]
       }
      ]
     },
     "caption": "Each metric exists because a question needs it, and each question exists because of the goal. A metric with no parent question is a candidate for removal."
    },
    {
     "type": "table",
     "title": "CSFs and KPIs",
     "head": [
      "Critical success factor",
      "Key performance indicator",
      "Target"
     ],
     "rows": [
      [
       "Services restored quickly when they fail",
       "Median time to restore P1/P2 incidents",
       "< 2 hours"
      ],
      [
       "Changes delivered safely",
       "Change failure rate",
       "< 10%"
      ],
      [
       "Users can help themselves",
       "Requests resolved through self-service",
       "> 40%"
      ],
      [
       "Customers value the service",
       "Customer effort score for key journeys",
       "≤ 2 on a 1–5 scale (lower is better)"
      ]
     ]
    },
    {
     "type": "framework",
     "title": "A balanced service scorecard",
     "items": [
      {
       "label": "Cu",
       "title": "Customer and user",
       "text": "Experience, satisfaction, effort, adoption."
      },
      {
       "label": "Fi",
       "title": "Financial",
       "text": "Cost per service, cost per transaction, value delivered, budget adherence."
      },
      {
       "label": "Op",
       "title": "Operational",
       "text": "Availability, restore time, change success, flow time."
      },
      {
       "label": "Pe",
       "title": "People and learning",
       "text": "Engagement, skills coverage, attrition, on-call load."
      },
      {
       "label": "Ri",
       "title": "Risk and compliance",
       "text": "Audit findings, open vulnerabilities, control effectiveness."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "When a measure becomes a target, it stops being a good measure. Desks targeted on closure time close tickets early. Teams targeted on deployment count split changes artificially. Pair measures (speed with quality), review them together and use them to learn, not to rank people.",
     "title": "Goodhart's law in service management"
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "A target met, an outcome missed",
     "labels": [
      "Month 1",
      "Month 2",
      "Month 3",
      "Month 4",
      "Month 5",
      "Month 6"
     ],
     "series": [
      {
       "name": "Resolved within 4 hours",
       "values": [
        70,
        78,
        85,
        90,
        94,
        96
       ]
      },
      {
       "name": "Tickets reopened",
       "values": [
        6,
        8,
        11,
        14,
        17,
        19
       ]
      }
     ],
     "unit": "%",
     "caption": "Illustrative numbers. As the closure target is chased, reopened tickets climb: a paired quality measure exposes what the single target hid."
    },
    {
     "type": "compare",
     "title": "Leading versus lagging indicators",
     "columns": [
      {
       "title": "Lagging",
       "items": [
        "Show results after the fact",
        "Availability last month, customer churn, audit findings",
        "Confirm whether goals were met"
       ]
      },
      {
       "title": "Leading",
       "items": [
        "Predict future results",
        "Rising error budget burn, growing backlog age, falling knowledge link rate",
        "Allow action before goals are missed"
       ]
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "One audience and one purpose per dashboard: executives, service owners, teams.",
      "Lead with outcomes; let users drill into operational detail.",
      "Show trends and targets, not just current values.",
      "Use consistent definitions across all reports.",
      "Fewer than ten measures on the main view.",
      "State data freshness and known data-quality issues."
     ],
     "title": "Designing dashboards people actually use"
    },
    {
     "type": "scenario",
     "title": "A gamed metric",
     "situation": "A telecom's service desk has improved 'tickets resolved within 4 hours' from 70% to 96% in three months. Complaints to the CEO about IT support have doubled. What is the most likely explanation and best action?",
     "options": [
      {
       "text": "Complaints are unrelated to the desk, since its metric has improved dramatically over the quarter",
       "feedback": "Ignoring contradictory evidence is a classic measurement failure.",
       "best": false
      },
      {
       "text": "Raise the target to 99% within 4 hours",
       "feedback": "A tighter single target increases pressure to game.",
       "best": false
      },
      {
       "text": "Stop measuring the desk entirely",
       "feedback": "Removing measurement removes visibility; better measures are needed.",
       "best": false
      },
      {
       "text": "The target is being gamed; pair it with reopen rate and user effort and review them together",
       "feedback": "Correct. A sharp improvement alongside rising complaints suggests early closure or reclassification. Paired measures make gaming visible and restore the link to outcomes.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Metric definition card",
     "purpose": "Define each measure so it is consistent and trusted.",
     "columns": [
      "Metric",
      "Purpose / decision supported",
      "Formula",
      "Data source",
      "Target",
      "Paired measure",
      "Owner"
     ],
     "example": [
      [
       "Median time to restore P1/P2",
       "Fund reliability improvements",
       "Median(restore time − start time)",
       "Incident tool + monitoring",
       "< 2 h",
       "Repeat incident rate",
       "Head of operations"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Key performance indicator (KPI)",
       "def": "A metric used to evaluate success in meeting an objective."
      },
      {
       "term": "Critical success factor (CSF)",
       "def": "A condition that must be met for an objective to be achieved."
      },
      {
       "term": "Goal–question–metric",
       "def": "A method of deriving metrics by starting from goals and the questions that test them."
      },
      {
       "term": "Balanced scorecard",
       "def": "A set of measures across several perspectives so that no single dimension dominates."
      },
      {
       "term": "Goodhart's law",
       "def": "The observation that a measure used as a target tends to stop being a good measure."
      },
      {
       "term": "Leading indicator",
       "def": "A measure that predicts future performance."
      },
      {
       "term": "Lagging indicator",
       "def": "A measure that reports results after they have occurred."
      },
      {
       "term": "Vanity metric",
       "def": "A number that looks impressive but does not inform decisions."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Name one metric your organisation reports that changes no decisions. What would you replace it with?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Derive measures from goals and questions; a metric that changes no decision is noise.",
      "Balance measures across customer, financial, operational, people and risk perspectives.",
      "Goodhart's law: pair measures so none can be improved at the expense of another.",
      "Use leading indicators to act before lagging results are missed.",
      "Design dashboards for one audience and purpose, leading with outcomes and trends."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which of these is a leading indicator?",
       "options": [
        "Annual customer churn",
        "Last quarter's availability",
        "Number of audit findings in the most recent annual audit",
        "A rising error budget burn rate"
       ],
       "answer": 3,
       "explain": "Burn rate predicts future SLO breaches; the others report past results."
      },
      {
       "q": "A desk's closure-time metric improves sharply while complaints rise. What principle explains this?",
       "options": [
        "The theory of constraints",
        "Little's law",
        "The law of diminishing returns",
        "Goodhart's law"
       ],
       "answer": 3,
       "explain": "A measure used as a target has been gamed."
      },
      {
       "q": "What is the first step in the goal–question–metric method?",
       "options": [
        "Choose a dashboard tool",
        "List available data",
        "Set targets for each existing metric",
        "Define the goal"
       ],
       "answer": 3,
       "explain": "Metrics should be derived from goals, not from whatever data is available."
      },
      {
       "q": "Why should measures be paired?",
       "options": [
        "So one cannot improve at another's expense",
        "Because single measures cannot be calculated automatically",
        "To double the number of reports",
        "To satisfy auditors"
       ],
       "answer": 0,
       "explain": "Pairing speed with quality, for example, exposes trade-offs and gaming."
      },
      {
       "q": "Which dashboard practice is most helpful for executives?",
       "options": [
        "Show only technical component data",
        "Show every metric collected",
        "Lead with outcomes and trends",
        "Update once a year"
       ],
       "answer": 2,
       "explain": "Executives need outcomes and trends with the option to see detail."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l4",
   "title": "Continual Improvement Methods and Assessment",
   "subtitle": "Choosing the right improvement method and knowing where you stand",
   "minutes": 40,
   "objectives": [
    "Select improvement methods suited to different kinds of problems",
    "Assess practice capability and organisational maturity with evidence",
    "Build an improvement roadmap that balances quick wins with structural change"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Continual improvement is a mindset supported by methods. No single method fits every problem: a recurring printer fault needs a different approach from a failing outsourcing contract or a slow digital product pipeline. Masters choose deliberately, combine methods where useful, and ground improvement in an honest assessment of where the organisation stands."
    },
    {
     "type": "table",
     "title": "Improvement methods and when to use them",
     "head": [
      "Method",
      "Core idea",
      "Best for"
     ],
     "rows": [
      [
       "PDCA (plan–do–check–act)",
       "Small, controlled cycles of change and learning",
       "Any incremental improvement"
      ],
      [
       "Lean",
       "Remove waste and improve flow from the customer's view",
       "Slow, handover-heavy value streams"
      ],
      [
       "Six Sigma / DMAIC",
       "Reduce variation and defects with statistical analysis",
       "High-volume processes with measurable defects"
      ],
      [
       "A3 problem solving",
       "One-page structured reasoning from problem to countermeasure",
       "Coaching teams through complex problems"
      ],
      [
       "Kaizen events",
       "Short, focused workshops to redesign a process",
       "Contained processes with willing teams"
      ],
      [
       "Experimentation / A-B testing",
       "Test hypotheses with real users",
       "Digital services and uncertain user behaviour"
      ]
     ]
    },
    {
     "type": "cycle",
     "title": "PDCA cycle",
     "center": "Learning by small experiments",
     "items": [
      {
       "label": "Plan",
       "text": "Define the problem, hypothesis and measure."
      },
      {
       "label": "Do",
       "text": "Run a small, controlled change."
      },
      {
       "label": "Check",
       "text": "Compare results with the expected outcome."
      },
      {
       "label": "Act",
       "text": "Standardise, adapt or abandon; plan the next cycle."
      }
     ],
     "caption": "Small cycles make it cheap to be wrong. The Check step needs the measure defined in Plan, otherwise the loop produces opinions instead of learning."
    },
    {
     "type": "framework",
     "title": "Lean wastes in IT services",
     "items": [
      {
       "label": "W",
       "title": "Waiting",
       "text": "Requests queued for approval, environments or specialists."
      },
      {
       "label": "H",
       "title": "Handovers",
       "text": "Work passed between teams, losing context each time."
      },
      {
       "label": "R",
       "title": "Rework",
       "text": "Reopened tickets, failed changes, defects found late."
      },
      {
       "label": "O",
       "title": "Over-processing",
       "text": "Approvals and documentation that add no value."
      },
      {
       "label": "I",
       "title": "Inventory",
       "text": "Large backlogs, unfinished work, unused licences."
      },
      {
       "label": "M",
       "title": "Motion and switching",
       "text": "Engineers juggling many tasks and tools."
      },
      {
       "label": "T",
       "title": "Unused talent",
       "text": "Skilled people restricted to narrow, repetitive work."
      }
     ]
    },
    {
     "type": "compare",
     "title": "Capability versus maturity",
     "columns": [
      {
       "title": "Practice capability",
       "items": [
        "How well a specific practice performs",
        "Example: incident management at level 3 of 5",
        "Assessed with practice-specific criteria and evidence"
       ]
      },
      {
       "title": "Organisational maturity",
       "items": [
        "How well the whole system works together",
        "Governance, principles, value chain, practices and improvement",
        "Assessed holistically; slower to change"
       ]
      }
     ]
    },
    {
     "type": "steps",
     "title": "Running an evidence-based assessment",
     "items": [
      {
       "title": "Define scope and purpose",
       "text": "Which practices or services, and which decisions will the assessment inform?"
      },
      {
       "title": "Choose a model",
       "text": "Use a consistent capability scale with clear criteria."
      },
      {
       "title": "Collect evidence",
       "text": "Interviews, document review, tool data, observation of real work."
      },
      {
       "title": "Rate and validate",
       "text": "Rate against criteria; validate with the people who do the work."
      },
      {
       "title": "Prioritise gaps",
       "text": "Focus on gaps that most limit value, not on raising every score."
      },
      {
       "title": "Repeat",
       "text": "Reassess after 6–12 months to confirm progress."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Capability assessment: current and target levels",
     "labels": [
      "Incident",
      "Problem",
      "Change",
      "Service desk",
      "Knowledge",
      "Monitoring"
     ],
     "series": [
      {
       "name": "Current",
       "values": [
        3,
        2,
        2,
        3,
        1,
        2
       ]
      },
      {
       "name": "Target (12 months)",
       "values": [
        3,
        3,
        4,
        3,
        3,
        3
       ]
      }
     ],
     "yLabel": "Capability level (1–5)",
     "caption": "Illustrative results. Targets rise only where the gap limits value, here change and knowledge; incident management stays at 3 because it already serves users well."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Organisations that set 'reach level 4 in all practices' as a goal often spend years on documentation that auditors like and users never feel. Raise capability where it limits value; a level 2 practice that rarely matters may be perfectly adequate.",
     "title": "Maturity scores as goals"
    },
    {
     "type": "scenario",
     "title": "Choosing a method",
     "situation": "A garment exporter's IT team handles purchase-order integration with 40 buyers. 8% of orders fail due to data mapping errors that vary by buyer and season; failures are measurable and frequent. Which improvement method fits best?",
     "options": [
      {
       "text": "A one-day kaizen workshop with the integration team to redesign the whole process from scratch",
       "feedback": "Useful for redesign, but analysing variation across 40 buyers and seasons needs data analysis beyond a single workshop.",
       "best": false
      },
      {
       "text": "A/B testing of different user interfaces",
       "feedback": "The problem is data mapping, not user behaviour.",
       "best": false
      },
      {
       "text": "A maturity assessment of all IT practices",
       "feedback": "This is broad and slow; it does not target the specific defect.",
       "best": false
      },
      {
       "text": "A data-driven defect reduction method such as DMAIC",
       "feedback": "Correct. High volume, measurable defects and variation by buyer are what statistical defect reduction is designed for.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Improvement roadmap",
     "purpose": "Plan improvements across quick wins and structural changes.",
     "columns": [
      "Improvement",
      "Type (quick win / structural)",
      "Method",
      "Expected benefit",
      "Start",
      "Owner"
     ],
     "example": [
      [
       "Self-service password reset",
       "Quick win",
       "PDCA pilot with one department",
       "−20% desk contacts",
       "Month 1",
       "Desk lead"
      ],
      [
       "Product-aligned support teams",
       "Structural",
       "Value stream redesign",
       "−40% handovers",
       "Month 3",
       "Head of operations"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "PDCA",
       "def": "Plan–do–check–act: an iterative cycle for controlled improvement and learning."
      },
      {
       "term": "Lean",
       "def": "An approach that maximises customer value by removing waste and improving flow."
      },
      {
       "term": "DMAIC",
       "def": "Define, measure, analyse, improve, control: a data-driven method for reducing defects and variation."
      },
      {
       "term": "A3 problem solving",
       "def": "A structured problem-solving approach captured on a single sheet of paper."
      },
      {
       "term": "Kaizen",
       "def": "Continuous, incremental improvement, often through focused team workshops."
      },
      {
       "term": "Capability level",
       "def": "A rating of how well a practice performs against defined criteria."
      },
      {
       "term": "Maturity assessment",
       "def": "An evidence-based evaluation of how well an organisation's management system works as a whole."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which improvement method does your organisation use by default? Name one problem it was the wrong choice for."
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Choose the improvement method to fit the problem: PDCA, Lean, DMAIC, A3 or kaizen events.",
      "Lean wastes in IT include waiting, handovers, rework, over-processing, inventory and task switching.",
      "Capability describes one practice; maturity describes how the whole system works together.",
      "Assess with evidence and validate ratings with the people who do the work.",
      "Raise capability where gaps limit value; maturity scores are not goals in themselves."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which method is best for reducing variation in a high-volume, measurable process?",
       "options": [
        "DMAIC",
        "A/B testing",
        "Kaizen workshop",
        "Maturity assessment"
       ],
       "answer": 0,
       "explain": "DMAIC uses statistical analysis to reduce defects and variation."
      },
      {
       "q": "Reopened tickets and failed changes are which lean waste?",
       "options": [
        "Waiting",
        "Unused talent",
        "Inventory",
        "Rework"
       ],
       "answer": 3,
       "explain": "Doing work again because it was not right the first time is rework."
      },
      {
       "q": "Why is 'reach level 4 in every practice' usually a poor goal?",
       "options": [
        "Level 4 is impossible to reach",
        "Higher levels reduce service quality",
        "It favours documentation over value",
        "Assessments are always inaccurate"
       ],
       "answer": 2,
       "explain": "Capability should rise where it limits value, not uniformly."
      },
      {
       "q": "What is the 'check' step in PDCA?",
       "options": [
        "Standardising the new process across the organisation",
        "Approving the plan",
        "Running the change",
        "Comparing results with the expected outcome"
       ],
       "answer": 3,
       "explain": "Check compares actual results with the hypothesis."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l5",
   "title": "Digital and IT Strategy",
   "subtitle": "Positioning the organisation for a digital future and funding the journey",
   "minutes": 50,
   "objectives": [
    "Analyse how digital technology changes markets and business models",
    "Choose a strategic position and align IT strategy to it",
    "Build a financially justified digital roadmap"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **digital strategy** describes how an organisation will use digital technology to achieve its goals and respond to how technology is changing its markets. An **IT strategy** describes how the technology function will enable that: which capabilities, platforms, sourcing and skills it needs. In digital organisations the two converge. A master service leader can explain how a service roadmap advances the organisation's strategy in board language."
    },
    {
     "type": "framework",
     "title": "Levels of digital ambition",
     "items": [
      {
       "label": "1",
       "title": "Digitise",
       "text": "Convert existing processes to digital form: online forms, e-invoices, digital records."
      },
      {
       "label": "2",
       "title": "Optimise",
       "text": "Use data and automation to improve existing operations: predictive maintenance, smart routing."
      },
      {
       "label": "3",
       "title": "Transform",
       "text": "Change customer journeys and products significantly: app-only banking, telemedicine."
      },
      {
       "label": "4",
       "title": "Disrupt",
       "text": "Create new business models or markets: platform ecosystems, embedded finance, data-driven services."
      }
     ]
    },
    {
     "type": "compare",
     "title": "Three classic strategic positions",
     "columns": [
      {
       "title": "Operational excellence",
       "items": [
        "Lowest cost, highest reliability",
        "Standardised, automated services",
        "Example: a utility billing platform serving millions"
       ]
      },
      {
       "title": "Customer intimacy",
       "items": [
        "Tailored solutions and deep relationships",
        "Rich customer data and flexible services",
        "Example: a corporate bank serving large exporters"
       ]
      },
      {
       "title": "Product leadership",
       "items": [
        "Most innovative products",
        "Rapid experimentation and high-velocity delivery",
        "Example: a fintech launching new features weekly"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A power distribution company in Bangladesh set a strategy of 'reliable power, effortless billing'. Its digital roadmap combined smart prepaid meters (optimise), a mobile app for top-up and outage reports (transform), and analytics for loss detection (optimise). IT strategy followed: a shared data platform, partnerships with mobile financial services for payment, and a 24/7 digital operations centre.",
     "title": "Digital strategy in a power distribution company"
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Sustainability belongs in the IT strategy",
     "text": "Boards increasingly ask what technology costs the planet as well as the budget. Practical levers include extending device life, right-sizing and switching off idle cloud resources, choosing efficient hosting and suppliers, and reporting energy use and e-waste per service. Reporting duties differ by country and sector and are still changing, so confirm which apply to your organisation before designing the measures."
    },
    {
     "type": "table",
     "title": "Strategy analysis tools",
     "head": [
      "Tool",
      "Question it answers",
      "Example use"
     ],
     "rows": [
      [
       "PESTLE",
       "Which external forces shape our future?",
       "Data localisation law affects cloud choices"
      ],
      [
       "SWOT",
       "What are our strengths, weaknesses, opportunities and threats?",
       "Strong branch network vs weak digital skills"
      ],
      [
       "Five forces",
       "How intense is competition in our market?",
       "New digital banks lowering switching costs"
      ],
      [
       "Capability map",
       "Which capabilities do we need and how mature are they?",
       "Data analytics capability rated low"
      ],
      [
       "Business model canvas",
       "How do we create, deliver and capture value?",
       "Shift from product sales to subscriptions"
      ]
     ]
    },
    {
     "type": "formula",
     "title": "Investment appraisal",
     "items": [
      {
       "name": "Return on investment",
       "expr": "ROI = (total benefits − total costs) ÷ total costs × 100%",
       "meaning": "Simple profitability measure; state the period and include all costs."
      },
      {
       "name": "Payback period",
       "expr": "Payback = initial investment ÷ annual net benefit",
       "meaning": "How quickly money is recovered; ignores benefits after payback."
      },
      {
       "name": "Net present value",
       "expr": "NPV = Σ (net cash flow in year t ÷ (1 + r)^t) − initial investment",
       "meaning": "Value of future benefits in today's money at discount rate r; positive NPV adds value."
      }
     ]
    },
    {
     "type": "steps",
     "title": "Building a digital roadmap",
     "items": [
      {
       "title": "Clarify ambition",
       "text": "Agree the strategic position and level of digital ambition with leadership."
      },
      {
       "title": "Assess capabilities",
       "text": "Map current capabilities across the four dimensions."
      },
      {
       "title": "Identify initiatives",
       "text": "Generate options that close capability gaps and serve the strategy."
      },
      {
       "title": "Appraise and sequence",
       "text": "Evaluate value, cost and risk; sequence by dependencies and quick wins."
      },
      {
       "title": "Fund in stages",
       "text": "Fund transformation initiatives in tranches tied to evidence of value."
      },
      {
       "title": "Govern and adapt",
       "text": "Review the roadmap quarterly; stop, pivot or scale initiatives."
      }
     ]
    },
    {
     "type": "timeline",
     "title": "A staged roadmap with funding gates",
     "items": [
      {
       "when": "Months 0–3",
       "label": "Discover and baseline",
       "text": "Tranche 1: user research, data baseline, prototype."
      },
      {
       "when": "Gate 1",
       "label": "Evidence review",
       "text": "Continue only if users adopt the prototype."
      },
      {
       "when": "Months 4–12",
       "label": "Build the core",
       "text": "Tranche 2: shared data platform and a first app release."
      },
      {
       "when": "Gate 2",
       "label": "Value check",
       "text": "Adoption and benefits measured against the business case."
      },
      {
       "when": "Year 2",
       "label": "Scale",
       "text": "Tranche 3: roll out widely, retire legacy, add partners."
      },
      {
       "when": "Year 3",
       "label": "Optimise",
       "text": "Analytics, automation and efficiency gains."
      }
     ],
     "caption": "Each gate is a real decision to continue, change course or stop. Staging the money this way limits the loss if adoption assumptions turn out wrong."
    },
    {
     "type": "keypoints",
     "items": [
      "Copying a competitor's technology without a strategic reason.",
      "Treating digital as an IT project rather than a business change.",
      "Funding everything for three years upfront with no checkpoints.",
      "Ignoring legacy constraints and technical debt in the plan.",
      "Underinvesting in data, skills and change management."
     ],
     "title": "Common digital strategy mistakes"
    },
    {
     "type": "case",
     "title": "A hospital group's digital strategy",
     "context": "A private hospital group with five sites in Dhaka and Chattogram wants to grow outpatient revenue by 30% in three years. It faces new competition from telemedicine start-ups. Its systems are fragmented: each site has its own patient-record system, there is no group-wide patient ID, and online booking exists only at one site. The board has approved a budget of Tk 40 crore over three years.",
     "questions": [
      "Which strategic position should the group pursue, and why?",
      "Which capabilities and initiatives would you prioritise in year one?",
      "How would you structure funding and governance for the roadmap?"
     ],
     "answer": "A **customer intimacy** position fits best: the group cannot out-innovate start-ups on pure technology, but it can offer continuity of care across sites, specialists and follow-up. Year one should build the foundations: a group-wide patient ID and integrated record view, a single online booking and payment journey for all sites, and teleconsultation for follow-ups to defend against start-ups. Data quality and clinician adoption must be in scope. Funding should be staged, for example Tk 12 crore in year one with release of later tranches on evidence such as online booking share and repeat-visit rate. A digital steering group with clinical and finance leaders should review the roadmap quarterly against OKRs."
    },
    {
     "type": "scenario",
     "title": "Funding a transformation",
     "situation": "A bank's board is asked to approve Tk 150 crore for a five-year core platform transformation, with all funds committed upfront. Benefits are uncertain and depend on customer adoption of new digital products. What should the CIO propose?",
     "options": [
      {
       "text": "Commit the full amount upfront to signal confidence to staff, customers, suppliers and the regulator",
       "feedback": "Full upfront commitment removes checkpoints when uncertainty is highest.",
       "best": false
      },
      {
       "text": "Reduce scope to only what can be funded from this year's operating budget",
       "feedback": "This may make the transformation impossible and ignores strategic need.",
       "best": false
      },
      {
       "text": "Stage the funding into tranches, each released on evidence of delivered value and learning",
       "feedback": "Correct. Staged funding manages uncertainty, keeps the board in control and allows the programme to pivot or stop.",
       "best": true
      },
      {
       "text": "Outsource the transformation to remove the financial risk",
       "feedback": "Outsourcing does not remove strategic or adoption risk, which stays with the bank.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Digital initiative business case summary",
     "purpose": "Summarise an initiative for portfolio decisions.",
     "columns": [
      "Initiative",
      "Strategic objective served",
      "Benefits (annual)",
      "Costs (total)",
      "ROI / NPV",
      "Key risks",
      "Funding stage"
     ],
     "example": [
      [
       "Group-wide online booking",
       "Grow outpatient revenue 30%",
       "Tk 6 crore extra revenue",
       "Tk 4 crore over 2 years",
       "ROI ≈ 200% over 3 yrs",
       "Clinician adoption; integration with 5 systems",
       "Tranche 1: Tk 1.5 crore"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Digital strategy",
       "def": "How an organisation will use digital technology to achieve its goals and respond to digital change in its markets."
      },
      {
       "term": "IT strategy",
       "def": "How the technology function will provide the capabilities, platforms, sourcing and skills the organisation needs."
      },
      {
       "term": "Digital transformation",
       "def": "Significant change to customer journeys, products, operations or business models enabled by digital technology."
      },
      {
       "term": "Operational excellence",
       "def": "A strategic position based on low cost and high reliability through standardisation and efficiency."
      },
      {
       "term": "Customer intimacy",
       "def": "A strategic position based on tailored solutions and deep customer relationships."
      },
      {
       "term": "Product leadership",
       "def": "A strategic position based on offering the most innovative products."
      },
      {
       "term": "Net present value (NPV)",
       "def": "The value today of future net cash flows, discounted at a chosen rate, minus the initial investment."
      },
      {
       "term": "Staged funding",
       "def": "Releasing investment in tranches tied to evidence of progress and value."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which strategic position does your organisation actually pursue, judged by where it invests, not by what it says?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Digital strategy sets how technology serves the business; IT strategy sets how the technology function enables it.",
      "Be explicit about the strategic position: operational excellence, customer intimacy or product leadership.",
      "Appraise investments with ROI, payback and NPV, stating periods and all costs.",
      "Fund uncertain transformations in stages with evidence-based gates.",
      "Include legacy constraints, skills, data and sustainability in the roadmap, not only new technology."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "An investment of Tk 10 crore produces total benefits of Tk 15 crore over its life. What is the ROI?",
       "options": [
        "5%",
        "50%",
        "150%",
        "15%"
       ],
       "answer": 1,
       "explain": "ROI = (15 − 10) ÷ 10 = 50%."
      },
      {
       "q": "A fintech that releases innovative features weekly is pursuing which position?",
       "options": [
        "Cost leadership through standardised services",
        "Product leadership",
        "Operational excellence",
        "Customer intimacy"
       ],
       "answer": 1,
       "explain": "Rapid innovation is the hallmark of product leadership."
      },
      {
       "q": "Which level of digital ambition creates new business models or markets?",
       "options": [
        "Optimise",
        "Disrupt",
        "Transform",
        "Digitise"
       ],
       "answer": 1,
       "explain": "Disruption creates new models or markets; transform changes existing journeys significantly."
      },
      {
       "q": "Why is staged funding preferred for uncertain transformations?",
       "options": [
        "Boards prefer smaller numbers",
        "It always lowers total cost",
        "It removes the need for a business case",
        "It keeps evidence-based checkpoints"
       ],
       "answer": 3,
       "explain": "Tranches tied to evidence manage uncertainty and preserve options."
      },
      {
       "q": "What is a common digital strategy mistake?",
       "options": [
        "Treating digital as just an IT project",
        "Linking initiatives to strategic objectives",
        "Funding in stages",
        "Assessing current capabilities"
       ],
       "answer": 0,
       "explain": "Digital change succeeds only when the business owns it."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m8",
 "order": 8,
 "code": "Lead",
 "title": "AI, Automation and Leading Service Transformation",
 "subtitle": "Apply AI responsibly, analyse complex situations and lead lasting change",
 "outcomes": [
  "Select and justify AI and automation use cases across service management",
  "Govern AI with proportionate oversight, fairness checks and evaluation",
  "Analyse complex situations and justify recommendations with transparent criteria",
  "Lead adoption so that new ways of working stick and benefits are realised",
  "Integrate the whole ZITIL Service Value Loop in real, messy cases"
 ],
 "lessons": [
  {
   "id": "m8-l1",
   "title": "AI and Automation in Service Management",
   "subtitle": "Where intelligent automation creates value across the service lifecycle",
   "minutes": 45,
   "objectives": [
    "Identify high-value AI and automation use cases across practices",
    "Distinguish types of automation and choose the right one",
    "Build a business case for automation using realistic benefits"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "AI has moved from experiment to everyday service operations. Language models summarise incidents and draft knowledge articles; machine-learning models classify tickets and predict failures; virtual agents resolve routine requests in Bangla and English at midnight. Yet many organisations automate the wrong things, or automate badly. A master service leader treats AI as one powerful option within a broader automation strategy, applied where it creates measurable value and governed so it stays safe."
    },
    {
     "type": "table",
     "title": "High-value use cases by practice",
     "head": [
      "Practice",
      "AI or automation use case",
      "Typical benefit"
     ],
     "rows": [
      [
       "Service desk",
       "Virtual agent for password resets, status queries and how-to questions",
       "20–40% of contacts resolved without an agent"
      ],
      [
       "Incident management",
       "Automatic classification, routing and summary of incident timelines",
       "Faster triage; less reassignment"
      ],
      [
       "Monitoring and event",
       "Event correlation and anomaly detection (AIOps)",
       "Fewer alerts; earlier detection"
      ],
      [
       "Problem management",
       "Clustering similar incidents to reveal hidden problems",
       "Problems found before they become major"
      ],
      [
       "Knowledge management",
       "Drafting articles from resolved tickets; answer generation from approved sources",
       "Higher link rate; fresher knowledge"
      ],
      [
       "Change enablement",
       "Risk scoring of changes from history and test data",
       "Right-sized approval; lower failure rate"
      ],
      [
       "Service request",
       "End-to-end fulfilment orchestration",
       "Same-day fulfilment; lower cost"
      ]
     ]
    },
    {
     "type": "layers",
     "title": "Types of automation",
     "items": [
      {
       "label": "Autonomous / agentic",
       "parts": [
        "AI agents plan and act across tools within guardrails",
        "Highest potential, highest governance need"
       ]
      },
      {
       "label": "Intelligent automation",
       "parts": [
        "Machine learning or language models make judgements: classify, predict, summarise"
       ]
      },
      {
       "label": "Orchestration",
       "parts": [
        "Workflows coordinate many systems and teams end to end"
       ]
      },
      {
       "label": "Task automation",
       "parts": [
        "Scripts, robotic process automation, runbook automation for single tasks"
       ]
      }
     ]
    },
    {
     "type": "topology",
     "title": "An AI-assisted service operation with human oversight",
     "nodes": [
      {
       "id": "guard",
       "kind": "shield",
       "label": "Guardrails",
       "sub": "Permissions, policy, logging",
       "x": 3,
       "y": 0
      },
      {
       "id": "mon",
       "kind": "monitor",
       "label": "Monitoring",
       "x": 5,
       "y": 0
      },
      {
       "id": "kb",
       "kind": "doc",
       "label": "Knowledge",
       "sub": "Approved articles to retrieve",
       "x": 0,
       "y": 2
      },
      {
       "id": "itsm",
       "kind": "server",
       "label": "ITSM platform",
       "sub": "Tickets, CMDB, audit log",
       "x": 3,
       "y": 2
      },
      {
       "id": "aiops",
       "kind": "model",
       "label": "AIOps engine",
       "sub": "Correlation, anomalies",
       "x": 5,
       "y": 2
      },
      {
       "id": "va",
       "kind": "model",
       "label": "Virtual agent",
       "sub": "Grounded answers",
       "x": 1,
       "y": 4
      },
      {
       "id": "agent",
       "kind": "team",
       "label": "Human agents",
       "sub": "Review and decide",
       "x": 3,
       "y": 4
      },
      {
       "id": "rb",
       "kind": "process",
       "label": "Runbooks",
       "sub": "Automated low-risk actions",
       "x": 5,
       "y": 4
      },
      {
       "id": "users",
       "kind": "user",
       "label": "Users",
       "x": 1,
       "y": 6
      }
     ],
     "links": [
      {
       "a": "users",
       "b": "va"
      },
      {
       "a": "va",
       "b": "kb",
       "label": "retrieve"
      },
      {
       "a": "va",
       "b": "agent",
       "label": "handoff"
      },
      {
       "a": "va",
       "b": "itsm",
       "label": "ticket"
      },
      {
       "a": "agent",
       "b": "itsm"
      },
      {
       "a": "mon",
       "b": "aiops",
       "label": "events"
      },
      {
       "a": "aiops",
       "b": "itsm",
       "label": "incident"
      },
      {
       "a": "aiops",
       "b": "rb",
       "label": "auto-fix"
      },
      {
       "a": "rb",
       "b": "agent",
       "label": "approval",
       "style": "dashed"
      },
      {
       "a": "guard",
       "b": "itsm",
       "label": "policy",
       "style": "dashed"
      }
     ],
     "caption": "AI answers from approved knowledge and acts only through governed paths: risky actions go to a person, and everything is logged in the ITSM platform. Users can always reach a human."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Scripting a password reset saves minutes. Designing role-based access so most access requests need no human decision saves days. The biggest automation gains usually come from redesigning the flow first, then applying automation and AI to what remains.",
     "title": "Automate the decision, not just the keystroke"
    },
    {
     "type": "steps",
     "title": "Choosing what to automate",
     "items": [
      {
       "title": "Map the value stream",
       "text": "Find where time, effort and errors concentrate."
      },
      {
       "title": "Simplify first",
       "text": "Remove steps and approvals that add no value."
      },
      {
       "title": "Score candidates",
       "text": "Volume, repeatability, rule clarity, error cost, data availability, risk."
      },
      {
       "title": "Choose the automation type",
       "text": "Simple rules → task automation; many systems → orchestration; judgement on unstructured data → AI."
      },
      {
       "title": "Design human oversight",
       "text": "Decide where humans review, approve or can override."
      },
      {
       "title": "Pilot and measure",
       "text": "Start with a limited scope; compare outcomes with the baseline."
      }
     ]
    },
    {
     "type": "matrix",
     "title": "Automation candidates: volume against cost of a wrong action",
     "x": "Volume and rule clarity",
     "y": "Cost of a wrong action",
     "quadrants": [
      {
       "title": "Keep human; AI suggests",
       "items": [
        "Rare, judgement-heavy, high impact",
        "e.g. customer compensation decisions"
       ]
      },
      {
       "title": "Automate with approval",
       "items": [
        "Frequent but risky",
        "e.g. privileged access grants"
       ]
      },
      {
       "title": "Not worth it yet",
       "items": [
        "Rare and low impact",
        "Revisit when volume grows"
       ]
      },
      {
       "title": "Automate fully, monitor",
       "items": [
        "Frequent, clear rules, reversible",
        "e.g. password resets, ticket tagging"
       ]
      }
     ],
     "caption": "Start in the bottom-right, where benefits are large and mistakes are cheap to undo. The higher an item sits, the more human oversight its design needs."
    },
    {
     "type": "formula",
     "title": "Automation economics",
     "items": [
      {
       "name": "Hours saved",
       "expr": "Hours saved per year = volume × minutes saved per item ÷ 60",
       "meaning": "Basis for capacity released; verify after go-live."
      },
      {
       "name": "Automation ROI",
       "expr": "ROI = (annual benefit − annual run cost) × years − build cost, ÷ total cost",
       "meaning": "Include maintenance, model monitoring and licence costs."
      },
      {
       "name": "Containment rate",
       "expr": "Containment = conversations resolved by virtual agent without human ÷ total conversations × 100%",
       "meaning": "Pair with satisfaction and repeat contacts to avoid trapping users."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A telecom operator launched a chatbot that resolved 55% of conversations on paper. Customer complaints doubled: users could not reach a human, and the bot confidently gave wrong tariff information. Containment must be paired with resolution quality, satisfaction and an easy route to a person.",
     "title": "The virtual agent that trapped users"
    },
    {
     "type": "scenario",
     "title": "Selecting the first AI use case",
     "situation": "A hospital IT department has budget for one AI pilot this year. Options: an AI model to predict server failures (few failures in history), a virtual agent for staff password and access queries (9,000 contacts a month, clear rules), an AI tool to write clinical discharge summaries, and AI-based change risk scoring (300 changes a year).",
     "options": [
      {
       "text": "AI-generated clinical discharge summaries, because they would save doctors the most time across the whole hospital",
       "feedback": "The benefit may be large, but it carries clinical risk and needs clinical governance; it is not a suitable first IT service management pilot.",
       "best": false
      },
      {
       "text": "Predictive server failure, because it is the most advanced",
       "feedback": "Few historical failures means little data to learn from; benefits are uncertain.",
       "best": false
      },
      {
       "text": "Change risk scoring for 300 changes a year",
       "feedback": "Low volume limits both training data and benefit.",
       "best": false
      },
      {
       "text": "A virtual agent for staff password and access queries",
       "feedback": "Correct. High volume, clear rules, low risk and measurable benefit make it an ideal first pilot. Clinical summaries carry patient-safety risk beyond IT's remit, and the other two lack data volume.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Automation candidate scorecard",
     "purpose": "Compare automation candidates objectively.",
     "columns": [
      "Candidate",
      "Volume / year",
      "Rule clarity (1–5)",
      "Data available (1–5)",
      "Risk if wrong (1–5)",
      "Est. hours saved",
      "Recommended type"
     ],
     "example": [
      [
       "Password and access queries",
       "108,000",
       "5",
       "4",
       "2",
       "9,000",
       "Virtual agent + orchestration"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "AIOps",
       "def": "The use of machine learning and analytics on operational data to detect, correlate and resolve issues."
      },
      {
       "term": "Virtual agent",
       "def": "An AI-driven conversational interface that answers questions and fulfils requests."
      },
      {
       "term": "Orchestration",
       "def": "Coordinating automated tasks across multiple systems into an end-to-end workflow."
      },
      {
       "term": "Robotic process automation (RPA)",
       "def": "Software that mimics human actions in user interfaces to automate repetitive tasks."
      },
      {
       "term": "Intelligent automation",
       "def": "Automation that uses AI to handle judgement, such as classification, prediction or summarisation."
      },
      {
       "term": "Agentic AI",
       "def": "AI systems that can plan and take actions across tools to achieve goals, within defined limits."
      },
      {
       "term": "Containment rate",
       "def": "The share of conversations handled entirely by a virtual agent without human help."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which task in your service area is done thousands of times a year with clear rules? What is stopping it from being automated?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "AI is one option inside a wider automation strategy; redesign the flow before automating it.",
      "Match the type: task automation, orchestration, intelligent automation or governed agents.",
      "Start with high-volume, clear-rule, low-risk work where data is plentiful.",
      "Pair containment with resolution quality, satisfaction and an easy route to a human.",
      "Count all costs: build, run, licences, model monitoring and the knowledge upkeep AI depends on."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which automation type best suits judgement on unstructured text, such as classifying free-text tickets?",
       "options": [
        "Orchestration",
        "Task automation with fixed scripts",
        "Manual triage by a senior engineer",
        "Intelligent automation"
       ],
       "answer": 3,
       "explain": "Classifying unstructured text needs machine-learning or language-model judgement."
      },
      {
       "q": "What should normally happen before automating a process?",
       "options": [
        "Wait until all staff agree",
        "Buy the most advanced AI platform",
        "Automate every step exactly as it is",
        "Simplify it and remove non-value steps"
       ],
       "answer": 3,
       "explain": "Optimise before automating to avoid speeding up waste."
      },
      {
       "q": "A chatbot shows 60% containment, but complaints are rising. What measure should be paired with containment?",
       "options": [
        "Resolution quality and satisfaction",
        "The size of the bot's training data set",
        "Bot response speed",
        "Number of chatbot conversations"
       ],
       "answer": 0,
       "explain": "Containment alone can hide users trapped by a bot that does not solve their problem."
      },
      {
       "q": "Why is a high-volume, rule-based request a good first AI pilot?",
       "options": [
        "Clear benefit, low risk, plenty of data",
        "It is the most technically advanced option",
        "It requires no human oversight",
        "It will replace the service desk entirely"
       ],
       "answer": 0,
       "explain": "Volume, clarity and low risk make value measurable and safe."
      },
      {
       "q": "A desk handles 50,000 requests a year and automation saves 6 minutes each. How many hours are saved?",
       "options": [
        "300,000 hours",
        "5,000 hours",
        "833 hours",
        "50,000 hours"
       ],
       "answer": 1,
       "explain": "50,000 × 6 ÷ 60 = 5,000 hours."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l2",
   "title": "Responsible AI in Service Operations",
   "subtitle": "Governing AI so it is accurate, fair, secure and accountable",
   "minutes": 45,
   "objectives": [
    "Identify the specific risks of AI in service management",
    "Design human oversight and guardrails proportionate to risk",
    "Evaluate AI performance with suitable measures before and after deployment"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "AI in service operations can be wrong in ways that are confident, fast and hard to notice. A language model may invent a plausible but false fix; a classifier may route Bangla-language tickets less accurately than English ones; an agent with broad permissions may take an action no human intended. **Responsible AI** is the set of principles, controls and practices that keep AI useful, safe and accountable. In service management, it is part of governance, not an optional extra."
    },
    {
     "type": "table",
     "title": "AI risks in service management",
     "head": [
      "Risk",
      "Example",
      "Control"
     ],
     "rows": [
      [
       "Hallucination",
       "Virtual agent invents a refund policy",
       "Ground answers in approved knowledge; cite sources; refuse when unsure"
      ],
      [
       "Bias and unfairness",
       "Lower routing accuracy for Bangla tickets",
       "Test performance by language and user group; retrain with balanced data"
      ],
      [
       "Privacy leakage",
       "Personal data in prompts sent to external models",
       "Data minimisation, masking, approved providers, data residency checks"
      ],
      [
       "Prompt injection and misuse",
       "Malicious text in a ticket instructs an agent to grant access",
       "Treat input as untrusted, restrict tool permissions, human approval for sensitive actions"
      ],
      [
       "Over-automation",
       "Agent restarts production database without approval",
       "Action limits, approval gates, kill switch, audit logs"
      ],
      [
       "Model drift",
       "Classifier accuracy falls after new services launch",
       "Continuous monitoring and periodic re-evaluation"
      ]
     ]
    },
    {
     "type": "text",
     "text": "External rules for AI have matured quickly, and they reach service organisations through customers, vendors and regulators even where no local AI law applies yet. Several countries, including Bangladesh, have been developing national AI policies. Use the milestones below as orientation, and check the current official texts before relying on any date."
    },
    {
     "type": "timeline",
     "title": "AI governance milestones relevant to service operations",
     "items": [
      {
       "when": "Jan 2023",
       "label": "NIST AI Risk Management Framework 1.0",
       "text": "A voluntary framework organised around govern, map, measure and manage."
      },
      {
       "when": "Dec 2023",
       "label": "ISO/IEC 42001",
       "text": "The first certifiable management-system standard for AI."
      },
      {
       "when": "Aug 2024",
       "label": "EU AI Act in force",
       "text": "Risk-based rules for AI placed on, or used in, the EU market."
      },
      {
       "when": "Feb 2025",
       "label": "First EU obligations apply",
       "text": "Prohibited practices and AI literacy duties."
      },
      {
       "when": "Aug 2025",
       "label": "General-purpose AI duties",
       "text": "Obligations for providers of general-purpose AI models begin."
      },
      {
       "when": "2026–2027",
       "label": "High-risk obligations phase in",
       "text": "Some of these dates have been subject to proposed changes; check the current official timetable."
      }
     ],
     "caption": "Most service-desk uses of AI are not high-risk, but uses that affect people's access to jobs, credit or essential services can be. Classify each AI use case before deciding its controls."
    },
    {
     "type": "framework",
     "title": "Principles for responsible AI in services",
     "items": [
      {
       "label": "Ac",
       "title": "Accountability",
       "text": "Every AI system has a named owner accountable for its outcomes."
      },
      {
       "label": "Tr",
       "title": "Transparency",
       "text": "Users know when they are dealing with AI and can reach a human."
      },
      {
       "label": "Fa",
       "title": "Fairness",
       "text": "Performance is checked across languages, user groups and regions."
      },
      {
       "label": "Pr",
       "title": "Privacy and security",
       "text": "Data use is minimised, protected and lawful."
      },
      {
       "label": "Sa",
       "title": "Safety and reliability",
       "text": "Systems are tested, monitored and fail safely."
      },
      {
       "label": "Hu",
       "title": "Human oversight",
       "text": "Humans can review, override and stop AI actions in proportion to risk."
      }
     ]
    },
    {
     "type": "compare",
     "title": "Levels of human oversight",
     "columns": [
      {
       "title": "Human in the loop",
       "items": [
        "AI suggests; a human decides every time",
        "For high-risk actions: access grants, production changes, customer compensation"
       ]
      },
      {
       "title": "Human on the loop",
       "items": [
        "AI acts; humans monitor and can intervene",
        "For medium-risk actions with good monitoring: ticket routing, standard fulfilment"
       ]
      },
      {
       "title": "Human out of the loop",
       "items": [
        "AI acts autonomously within narrow limits",
        "For low-risk, reversible actions: tagging, summarising, clearing temp files"
       ]
      }
     ]
    },
    {
     "type": "sequence",
     "title": "Human in the loop for a high-risk agent action",
     "actors": [
      "User",
      "AI agent",
      "Guardrail policy",
      "Human approver",
      "Identity system"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "I need the finance reports"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Check knowledge and user role"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Propose: grant finance-read role"
      },
      {
       "from": 2,
       "to": 1,
       "label": "High risk: approval required",
       "reply": true
      },
      {
       "from": 1,
       "to": 3,
       "label": "Request with reason and evidence"
      },
      {
       "from": 3,
       "to": 1,
       "label": "Approved for 30 days",
       "reply": true
      },
      {
       "from": 1,
       "to": 4,
       "label": "Grant role, expiry in 30 days"
      },
      {
       "from": 4,
       "to": 1,
       "label": "Granted and logged",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Access ready until expiry",
       "reply": true
      }
     ],
     "caption": "The agent does the legwork, but a guardrail outside the model decides that this action needs a person. Time-limited access and logging make the decision reversible and auditable."
    },
    {
     "type": "formula",
     "title": "Evaluating AI classifiers and assistants",
     "items": [
      {
       "name": "Precision",
       "expr": "Precision = true positives ÷ (true positives + false positives)",
       "meaning": "Of the items the model flagged, how many were right."
      },
      {
       "name": "Recall",
       "expr": "Recall = true positives ÷ (true positives + false negatives)",
       "meaning": "Of the items that should have been flagged, how many the model found."
      },
      {
       "name": "Answer accuracy",
       "expr": "Accuracy = answers judged correct and grounded ÷ answers evaluated × 100%",
       "meaning": "Measured on a representative test set reviewed by experts, before and after release."
      }
     ]
    },
    {
     "type": "steps",
     "title": "Deploying an AI capability safely",
     "items": [
      {
       "title": "Define purpose and owner",
       "text": "What problem, what scope, who is accountable?"
      },
      {
       "title": "Assess risk",
       "text": "Data sensitivity, impact of errors, regulatory obligations."
      },
      {
       "title": "Prepare data and knowledge",
       "text": "Clean, current, approved sources; privacy controls."
      },
      {
       "title": "Evaluate offline",
       "text": "Test set covering languages, edge cases and adversarial inputs."
      },
      {
       "title": "Pilot with oversight",
       "text": "Limited users, human review, clear feedback route."
      },
      {
       "title": "Monitor in production",
       "text": "Quality, fairness, drift, cost and incidents; review regularly."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Register AI models and agents in your service and configuration records with owners, versions, data sources and dependencies. Changes to prompts, models or tool permissions go through change enablement. AI incidents are logged and reviewed like any other. This brings AI under the same disciplined management as the rest of your estate.",
     "title": "Treat AI systems as configuration items and services"
    },
    {
     "type": "scenario",
     "title": "An agent with too much power",
     "situation": "An IT team wants to give an AI agent permission to reset passwords, grant access to any system and restart servers, so that it can 'resolve tickets end to end'. A pilot showed it resolved 70% of tickets correctly. What should the service manager recommend?",
     "options": [
      {
       "text": "Limit permissions by risk: allow low-risk actions, require human approval for access grants and restarts",
       "feedback": "Correct. Proportionate oversight captures the benefit for low-risk work while protecting against costly errors and misuse on high-risk actions.",
       "best": true
      },
      {
       "text": "Approve full permissions, since 70% accuracy is better than many junior engineers achieve in their first year",
       "feedback": "A 30% error rate on access grants and restarts is unacceptable; impact, not average accuracy, should drive permissions.",
       "best": false
      },
      {
       "text": "Reject AI agents entirely",
       "feedback": "This forgoes clear benefits on low-risk work that can be safely automated.",
       "best": false
      },
      {
       "text": "Allow full permissions but review logs monthly",
       "feedback": "Monthly review detects harm long after it has happened.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "AI system register entry",
     "purpose": "Record each AI capability used in service management.",
     "columns": [
      "AI system",
      "Purpose",
      "Owner",
      "Data sources",
      "Oversight level",
      "Key risks and controls",
      "Last evaluation"
     ],
     "example": [
      [
       "Desk virtual agent v3",
       "Answer staff IT questions; reset passwords",
       "Service desk manager",
       "Approved knowledge base; identity system",
       "On the loop; human for access grants",
       "Hallucination → grounded answers; injection → restricted tools",
       "92% grounded accuracy, May"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Responsible AI",
       "def": "Principles and practices that keep AI systems accurate, fair, secure, transparent and accountable."
      },
      {
       "term": "Hallucination",
       "def": "A confident but false or unsupported output from a generative AI model."
      },
      {
       "term": "Prompt injection",
       "def": "An attack in which malicious input instructs an AI system to ignore its rules or take unintended actions."
      },
      {
       "term": "Human in the loop",
       "def": "An oversight model in which a human approves each AI decision or action."
      },
      {
       "term": "Model drift",
       "def": "Degradation of a model's performance as real-world data changes over time."
      },
      {
       "term": "Precision",
       "def": "The proportion of positive predictions that are correct."
      },
      {
       "term": "Recall",
       "def": "The proportion of actual positives that a model correctly identifies."
      },
      {
       "term": "Grounding",
       "def": "Constraining AI answers to approved, cited sources of information."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "If an AI system in your service made a harmful mistake tomorrow, who would be accountable, and how would you find out it had happened?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "AI fails confidently and fast, so responsible AI is part of governance, not an optional extra.",
      "Control hallucination, bias, privacy leakage, prompt injection and over-broad permissions explicitly.",
      "Set human oversight by impact: in the loop for high-risk actions, on the loop for medium, out only for low-risk.",
      "Evaluate with precision, recall and grounded accuracy across languages and user groups.",
      "Register AI systems as configuration items and track the evolving regulations and standards that apply."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A virtual agent states a refund policy that does not exist. What is this risk called?",
       "options": [
        "Model drift",
        "Prompt injection",
        "Hallucination",
        "Bias against a language group"
       ],
       "answer": 2,
       "explain": "A confident, unsupported output is a hallucination."
      },
      {
       "q": "Which oversight level suits AI granting access to sensitive systems?",
       "options": [
        "Human out of the loop",
        "Human in the loop",
        "No oversight if accuracy exceeds 70%",
        "Monthly log review only"
       ],
       "answer": 1,
       "explain": "High-risk actions need a human decision each time."
      },
      {
       "q": "A ticket classifier flags 100 tickets as security incidents; 80 are correct. There were 120 real security incidents. What is the recall?",
       "options": [
        "80%",
        "About 83%",
        "100%",
        "About 67%"
       ],
       "answer": 3,
       "explain": "Recall = 80 ÷ 120 ≈ 67%. Precision is 80 ÷ 100 = 80%."
      },
      {
       "q": "How should changes to an AI agent's prompts or tool permissions be handled?",
       "options": [
        "Through change enablement",
        "By users in the chat window",
        "Informally, since prompts are just text",
        "Only by the AI vendor"
       ],
       "answer": 0,
       "explain": "Prompts and permissions change behaviour and must be controlled."
      },
      {
       "q": "Why should AI routing accuracy be tested separately for Bangla and English tickets?",
       "options": [
        "To double the size of the test set",
        "To detect unfair gaps between user groups",
        "Because regulators require exactly two languages",
        "Because Bangla tickets are always less important"
       ],
       "answer": 1,
       "explain": "Fairness checks reveal whether some users get worse service."
      },
      {
       "q": "An HR team asks the IT service organisation to deploy an AI model that screens job applicants for internal roles. What should the service owner do before deployment?",
       "options": [
        "Run it like any chatbot pilot and track containment",
        "Classify its risk level first and set matching controls",
        "Wait for the vendor to confirm the model is accurate",
        "Deploy it, since internal HR tools are exempt from AI rules"
       ],
       "answer": 1,
       "explain": "Uses that affect access to employment can be treated as high-risk under some AI regulations and need stronger oversight, testing for bias and documentation. Containment is irrelevant, vendor claims are not evidence, and internal use is not an automatic exemption."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l3",
   "title": "Analysing Complex Situations",
   "subtitle": "Thinking like a master: framing problems, weighing options and justifying choices",
   "minutes": 45,
   "objectives": [
    "Frame a complex service problem using systems thinking",
    "Classify situations by complexity and choose a fitting approach",
    "Compare options with transparent, weighted criteria and justify a recommendation"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "At master level the question is rarely 'what is the definition of X?'. It is 'given this messy situation, with these stakeholders, constraints and history, what should we do, and why?'. Good answers combine a clear problem frame, an understanding of the type of situation, a set of realistic options and a transparent justification. This lesson gives you a toolkit for doing that under pressure."
    },
    {
     "type": "flow",
     "title": "A structured analysis method",
     "items": [
      {
       "label": "Frame",
       "text": "What is really the problem, for whom, and how do we know?"
      },
      {
       "label": "Map the system",
       "text": "Stakeholders, dimensions, value streams, constraints"
      },
      {
       "label": "Classify",
       "text": "Is the situation clear, complicated, complex or chaotic?"
      },
      {
       "label": "Generate options",
       "text": "At least three, including 'do less' and 'do differently'"
      },
      {
       "label": "Evaluate",
       "text": "Weighted criteria, risks and principles"
      },
      {
       "label": "Recommend and plan",
       "text": "Choose, justify, plan feedback and adoption"
      }
     ]
    },
    {
     "type": "framework",
     "title": "Types of situation and how to act",
     "items": [
      {
       "label": "Cl",
       "title": "Clear",
       "text": "Cause and effect are obvious. Apply known good practice. Example: a password reset."
      },
      {
       "label": "Co",
       "title": "Complicated",
       "text": "Cause and effect need expert analysis. Analyse, then respond. Example: diagnosing a performance bottleneck."
      },
      {
       "label": "Cx",
       "title": "Complex",
       "text": "Cause and effect are visible only in hindsight. Probe with safe experiments, sense, then respond. Example: changing a team's culture."
      },
      {
       "label": "Ch",
       "title": "Chaotic",
       "text": "No clear cause and effect; urgent harm. Act to stabilise first, then sense. Example: a ransomware attack in progress."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Leaders often treat organisational change as complicated: hire experts, design the perfect process, roll it out. But how people respond is not predictable. Complex problems need small experiments, fast feedback and the willingness to amplify what works and dampen what does not.",
     "title": "Most transformation problems are complex"
    },
    {
     "type": "compare",
     "title": "Symptoms versus system causes",
     "columns": [
      {
       "title": "Symptom-level thinking",
       "items": [
        "'The desk is slow, so hire more agents'",
        "'Changes fail, so add approvals'",
        "'Users complain, so run a survey'"
       ]
      },
      {
       "title": "System-level thinking",
       "items": [
        "Why is demand so high? What could shift left?",
        "Why do changes fail? Batch size, testing, environments?",
        "Where in the journey does value break, and what causes it back stage?"
       ]
      }
     ]
    },
    {
     "type": "formula",
     "title": "Weighted decision matrix",
     "items": [
      {
       "name": "Weighted score",
       "expr": "Score(option) = Σ (weight of criterion × rating of option on criterion)",
       "meaning": "Make weights explicit and agreed before scoring; test how sensitive the result is to weight changes."
      }
     ]
    },
    {
     "type": "table",
     "title": "Example: choosing a service desk model for a garment group",
     "head": [
      "Criterion (weight)",
      "Insource central (rating 1–5)",
      "Outsource fully (1–5)",
      "Hybrid: internal L1 + partner L2 (1–5)"
     ],
     "rows": [
      [
       "User experience in Bangla on factory floor (30%)",
       "5",
       "2",
       "4"
      ],
      [
       "Cost over 3 years (25%)",
       "2",
       "5",
       "4"
      ],
      [
       "24/7 coverage for three shifts (20%)",
       "3",
       "5",
       "4"
      ],
      [
       "Knowledge retention (15%)",
       "5",
       "1",
       "4"
      ],
      [
       "Speed to implement (10%)",
       "2",
       "4",
       "3"
      ],
      [
       "Weighted total",
       "3.55",
       "3.40",
       "3.90"
      ]
     ]
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Weighted totals for the three desk options",
     "labels": [
      "Insource central",
      "Outsource fully",
      "Hybrid L1 + partner L2"
     ],
     "series": [
      {
       "name": "Weighted score (out of 5)",
       "values": [
        3.55,
        3.4,
        3.9
       ]
      }
     ],
     "yLabel": "Weighted score",
     "caption": "Calculated from the table above. The hybrid wins by 0.35 points, so test whether a reasonable change in the weights would reverse the ranking before recommending it."
    },
    {
     "type": "keypoints",
     "items": [
      "Link the recommendation to stakeholder value and strategy.",
      "Name the trade-offs openly; do not pretend there are none.",
      "Use evidence and data, and state assumptions.",
      "Refer to principles: start where you are, think holistically, keep it simple.",
      "Explain how you will know early if you are wrong."
     ],
     "title": "Habits of strong justifications"
    },
    {
     "type": "scenario",
     "title": "Classifying the situation",
     "situation": "A ransomware attack has encrypted file servers at a university during exam week. Exam results and timetables are unavailable, and the attack may still be spreading. As the senior service leader, what approach fits first?",
     "options": [
      {
       "text": "Convene a working group to analyse root cause in depth before taking any action that could destroy evidence",
       "feedback": "Analysis before containment lets the attack spread; evidence can be preserved while containing.",
       "best": false
      },
      {
       "text": "Act immediately to contain and stabilise, then assess and plan recovery",
       "feedback": "Correct. This is a chaotic situation: urgent harm with unclear cause and effect. Stabilising comes before analysis.",
       "best": true
      },
      {
       "text": "Run small experiments to see which systems recover",
       "feedback": "Experimentation suits complex situations, not active, spreading harm.",
       "best": false
      },
      {
       "text": "Follow the standard incident process step by step",
       "feedback": "Standard practice is for clear situations; this needs decisive crisis action.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Option evaluation worksheet",
     "purpose": "Compare options transparently and record the justification.",
     "columns": [
      "Option",
      "Benefits",
      "Costs and risks",
      "Fit with principles",
      "Weighted score",
      "Decision and rationale"
     ],
     "example": [
      [
       "Hybrid desk (internal L1 + partner L2)",
       "Bangla support on floor; 24/7 cover",
       "Two contracts to manage",
       "Starts where we are; holistic",
       "3.90",
       "Recommended: best balance of experience and cost"
      ]
     ],
     "rows": 6
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Systems thinking",
       "def": "Understanding a situation as a set of interacting parts and feedback loops rather than isolated events."
      },
      {
       "term": "Problem framing",
       "def": "Defining what the real problem is, for whom, and how it is evidenced, before seeking solutions."
      },
      {
       "term": "Complex situation",
       "def": "A situation in which cause and effect can be understood only in hindsight and outcomes emerge from interactions."
      },
      {
       "term": "Chaotic situation",
       "def": "A situation with no clear cause and effect and urgent harm, requiring immediate action to stabilise."
      },
      {
       "term": "Weighted decision matrix",
       "def": "A tool that scores options against weighted criteria to support transparent decisions."
      },
      {
       "term": "Sensitivity analysis",
       "def": "Testing how much a decision changes when assumptions or weights change."
      },
      {
       "term": "Safe-to-fail experiment",
       "def": "A small, contained trial whose failure causes acceptable harm and produces learning."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of a decision you made recently that went wrong. Did you treat a complex situation as if it were merely complicated?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Frame the real problem before generating options, and always consider at least three.",
      "Classify the situation: clear, complicated, complex or chaotic, and act accordingly.",
      "Look past symptoms to system causes such as batch size, demand and back-stage failures.",
      "Agree criteria weights before scoring, then test how sensitive the result is.",
      "Strong recommendations name trade-offs, assumptions and early signs of being wrong."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Changing a team's culture is best described as which type of situation?",
       "options": [
        "Clear",
        "Chaotic",
        "Complex",
        "Complicated"
       ],
       "answer": 2,
       "explain": "Human responses are unpredictable; cause and effect are seen only in hindsight."
      },
      {
       "q": "What is the right first response in a chaotic situation?",
       "options": [
        "Act to stabilise",
        "Analyse root cause",
        "Run experiments",
        "Apply standard practice"
       ],
       "answer": 0,
       "explain": "Chaos requires immediate action to contain harm."
      },
      {
       "q": "Why should criterion weights be agreed before options are scored?",
       "options": [
        "So weights are not bent to fit a favourite",
        "Because scoring is impossible otherwise",
        "To shorten the meeting",
        "Because weights must always be equal"
       ],
       "answer": 0,
       "explain": "Agreeing weights first prevents biased, back-filled justifications."
      },
      {
       "q": "'Changes fail, so add approvals' is an example of what?",
       "options": [
        "Systems thinking",
        "Symptom-level thinking",
        "Problem framing",
        "Sensitivity analysis"
       ],
       "answer": 1,
       "explain": "It treats the visible symptom without asking why changes fail."
      },
      {
       "q": "Which element makes a recommendation stronger at master level?",
       "options": [
        "Claiming the option has no downsides",
        "Naming trade-offs and early-warning signs",
        "Avoiding numbers to keep it simple",
        "Using as many frameworks as possible"
       ],
       "answer": 1,
       "explain": "Honest trade-offs and feedback plans build credibility."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l4",
   "title": "Leading Adoption and Organisational Change",
   "subtitle": "Making new ways of working stick, not just launch",
   "minutes": 45,
   "objectives": [
    "Plan organisational change that addresses awareness, motivation and ability",
    "Engage sponsors, managers and champions to drive adoption",
    "Measure adoption and sustain new behaviours"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most service management transformations fail not because the design was wrong, but because people did not adopt it. New processes are bypassed, tools are used as old ones were, and within a year the organisation drifts back. **Organisational change management** is the discipline of helping people move from the current way of working to the new one, so that intended benefits are actually realised."
    },
    {
     "type": "flow",
     "title": "Individual change journey",
     "items": [
      {
       "label": "Aware",
       "text": "I know what is changing and why"
      },
      {
       "label": "Willing",
       "text": "I want to take part; I see what is in it for me and for users"
      },
      {
       "label": "Knowing",
       "text": "I know how to work the new way"
      },
      {
       "label": "Able",
       "text": "I can do it in real work, with support and practice"
      },
      {
       "label": "Sustained",
       "text": "It is now normal; reinforcement prevents slipping back"
      }
     ]
    },
    {
     "type": "framework",
     "title": "Leading organisational change: eight moves",
     "items": [
      {
       "label": "1",
       "title": "Create urgency",
       "text": "Show the real cost of the current state with evidence users and leaders recognise."
      },
      {
       "label": "2",
       "title": "Build a guiding coalition",
       "text": "Sponsors and respected practitioners who will lead visibly."
      },
      {
       "label": "3",
       "title": "Shape a clear vision",
       "text": "Describe the future simply: what will be different for users and staff."
      },
      {
       "label": "4",
       "title": "Communicate relentlessly",
       "text": "Many channels, many times, two-way, in plain language and local languages."
      },
      {
       "label": "5",
       "title": "Remove obstacles",
       "text": "Fix tools, policies and incentives that block the new way of working."
      },
      {
       "label": "6",
       "title": "Win early",
       "text": "Deliver visible improvements in weeks, not years, and celebrate them."
      },
      {
       "label": "7",
       "title": "Build on gains",
       "text": "Use credibility from early wins to tackle harder structural changes."
      },
      {
       "label": "8",
       "title": "Anchor in culture",
       "text": "Embed new behaviours in hiring, measures, rituals and leadership habits."
      }
     ]
    },
    {
     "type": "table",
     "title": "Stakeholder roles in adoption",
     "head": [
      "Role",
      "What they do",
      "Common failure"
     ],
     "rows": [
      [
       "Executive sponsor",
       "Sets direction, funds, removes barriers, speaks publicly",
       "Announces then disappears"
      ],
      [
       "Middle managers",
       "Translate change into daily priorities and coach teams",
       "Not consulted, so quietly resist"
      ],
      [
       "Change champions",
       "Peers who model, support and gather feedback",
       "Chosen for availability, not influence"
      ],
      [
       "Practitioners",
       "Use the new practices every day",
       "Trained once, never supported afterwards"
      ],
      [
       "Users and customers",
       "Experience the result",
       "Informed only after go-live"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Resistance usually signals a real concern: fear of losing skills or status, workload during transition, or a design that does not fit real work. Treat it as feedback. Listen, adjust the design where the concern is valid, and support people where it is about uncertainty.",
     "title": "Resistance is information"
    },
    {
     "type": "formula",
     "title": "Adoption measures",
     "items": [
      {
       "name": "Adoption rate",
       "expr": "Adoption = target users working the new way ÷ total target users × 100%",
       "meaning": "Measure by behaviour, not by training attendance."
      },
      {
       "name": "Proficiency",
       "expr": "Proficiency = transactions done correctly in the new way ÷ total transactions × 100%",
       "meaning": "Shows whether people can do it well, not just whether they try."
      },
      {
       "name": "Benefit realisation",
       "expr": "Benefits achieved ÷ benefits planned × 100%",
       "meaning": "The final test that the change created value."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Adoption against plan after go-live",
     "labels": [
      "Month 1",
      "Month 2",
      "Month 3",
      "Month 4",
      "Month 5",
      "Month 6"
     ],
     "series": [
      {
       "name": "Planned adoption",
       "values": [
        20,
        40,
        60,
        75,
        85,
        90
       ]
      },
      {
       "name": "Actual adoption",
       "values": [
        12,
        22,
        30,
        33,
        35,
        35
       ]
      }
     ],
     "unit": "%",
     "caption": "Illustrative numbers resembling the telecom scenario below. A flattening actual line after month 3 is the signal to look for blocked willingness or ability, not to repeat training."
    },
    {
     "type": "keypoints",
     "items": [
      "Update measures and incentives to reward new behaviours.",
      "Retire old tools and paths so people cannot slip back easily.",
      "Keep champions active after go-live with a regular community.",
      "Include the new ways of working in induction for new hires.",
      "Review adoption data monthly for at least six months."
     ],
     "title": "Sustaining change"
    },
    {
     "type": "scenario",
     "title": "A rollout that stalled",
     "situation": "Six months after launching a new incident and problem process across a telecom operator, adoption is 35%. Many engineers still fix issues through personal contacts and log tickets afterwards. Training attendance was 95%. Managers were not involved in the design. What should the transformation lead do?",
     "options": [
      {
       "text": "Run the same training again for all engineers, since attendance is no proof that people learned the process",
       "feedback": "Training was not the gap; most already attended. Repeating it ignores motivation and obstacles.",
       "best": false
      },
      {
       "text": "Mandate disciplinary action for engineers who bypass the process",
       "feedback": "Coercion without addressing causes produces superficial compliance and hidden workarounds.",
       "best": false
      },
      {
       "text": "Declare the project complete because the process is live",
       "feedback": "Live is not adopted; benefits will not arrive.",
       "best": false
      },
      {
       "text": "Engage managers to understand obstacles, fix practical blockers and set expectations through them",
       "feedback": "Correct. Managers shape daily behaviour. Their absence from design explains much of the gap; involving them and removing real obstacles addresses the cause.",
       "best": true
      }
     ]
    },
    {
     "type": "case",
     "title": "Adopting a new service platform across ten factories",
     "context": "A garment group replaces email-based IT support with a service platform covering ten factories in Gazipur, Savar and Chattogram. Head office staff adopt it quickly. On factory floors, adoption is under 20% after three months: supervisors still phone the IT officer they know, the portal is English-only, and many line supervisors share one computer per floor. Factory managers see the platform as 'head office's project'.",
     "questions": [
      "Which stages of the individual change journey are blocked, and for whom?",
      "What adoption actions would you take in the next 60 days?",
      "How would you measure whether the change is working?"
     ],
     "answer": "Factory supervisors are aware of the platform but not willing (it is seen as head office's project) and not able (English-only portal, limited computer access). Factory managers have not been engaged as sponsors. In 60 days: make each factory manager a visible sponsor with local targets; recruit respected supervisors as champions; add Bangla interfaces and a messaging-app or phone-to-ticket channel so supervisors can log issues without a shared computer; let the local IT officer log calls on supervisors' behalf at first while showing them the new way; and share quick wins such as faster machine-PC fixes on the floor. Measure adoption as the share of factory incidents logged through any platform channel, resolution time on factory floors, repeat contacts and supervisor satisfaction, reviewed monthly by factory."
    },
    {
     "type": "template",
     "title": "Change impact and adoption plan",
     "purpose": "Plan support for each affected group.",
     "columns": [
      "Group",
      "What changes for them",
      "Concerns",
      "Engagement actions",
      "Adoption measure",
      "Owner"
     ],
     "example": [
      [
       "Network engineers",
       "Must log incidents before acting; swarm on P1s",
       "Slower fixes; loss of autonomy",
       "Co-design swarm rules; quick logging from chat",
       "% incidents logged before work starts",
       "Head of network operations"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Organisational change management",
       "def": "The discipline of helping people transition to new ways of working so that intended benefits are realised."
      },
      {
       "term": "Executive sponsor",
       "def": "A senior leader accountable for a change, who sets direction, funds it and removes obstacles."
      },
      {
       "term": "Change champion",
       "def": "A respected peer who models, supports and gathers feedback on a change."
      },
      {
       "term": "Guiding coalition",
       "def": "A group of influential people with enough authority and credibility to lead a change."
      },
      {
       "term": "Adoption rate",
       "def": "The proportion of target users who have actually adopted a new way of working."
      },
      {
       "term": "Resistance",
       "def": "Behaviours that slow or oppose a change, often signalling legitimate concerns."
      },
      {
       "term": "Reinforcement",
       "def": "Actions such as recognition, measures and incentives that sustain new behaviours."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Recall a change you were asked to adopt. What would have made you move faster from 'aware' to 'able'?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Transformations usually fail on adoption, not design.",
      "People move from aware to willing, knowing, able and sustained; find where they are stuck.",
      "Middle managers and respected champions shape daily behaviour more than announcements do.",
      "Treat resistance as information and adjust the design where concerns are valid.",
      "Measure adoption by behaviour, retire old routes and reinforce for at least six months."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Training attendance is 95%, but adoption is 35%. Which stage of the individual journey is most likely blocked?",
       "options": [
        "Sustainment after full adoption",
        "Willingness or ability",
        "Knowledge of the vision statement",
        "Awareness"
       ],
       "answer": 1,
       "explain": "People know about the change; motivation, obstacles or support in real work are the gaps."
      },
      {
       "q": "Who most directly shapes daily priorities and behaviour in teams during change?",
       "options": [
        "External consultants",
        "The vendor",
        "The board",
        "Middle managers"
       ],
       "answer": 3,
       "explain": "Managers translate change into everyday expectations."
      },
      {
       "q": "How should a change leader treat resistance?",
       "options": [
        "As something to ignore",
        "As disloyalty to be punished",
        "As proof the change is wrong",
        "As information"
       ],
       "answer": 3,
       "explain": "Resistance often reveals valid design or support issues."
      },
      {
       "q": "Which is the best measure of adoption?",
       "options": [
        "Target users actually working the new way",
        "Training attendance",
        "Go-live date achieved",
        "Number of emails sent"
       ],
       "answer": 0,
       "explain": "Adoption is behaviour in real work, not activity around the change."
      },
      {
       "q": "Why retire old tools after a new practice is live?",
       "options": [
        "To force immediate perfection",
        "To save licence costs only",
        "So people cannot slip back",
        "Because auditors require it"
       ],
       "answer": 2,
       "explain": "Removing the old path reinforces the new behaviour."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l5",
   "title": "Master Practice: Integrated Case and Exam Approach",
   "subtitle": "Bringing every stage of the loop together in one real-world challenge",
   "minutes": 60,
   "objectives": [
    "Apply the whole ZITIL Service Value Loop to an integrated case",
    "Prioritise interventions across practices, people and technology",
    "Use a disciplined method to answer master-level scenario questions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "This final lesson brings the eight stages of the loop together. Real organisations do not present problems labelled 'incident' or 'strategy'. They present a tangle: outages, angry customers, a stretched team, a demanding regulator, a new AI tool someone already bought. Your job as a master practitioner is to see the system, choose where to intervene first, and lead the organisation through the change."
    },
    {
     "type": "cycle",
     "title": "The ZITIL Service Value Loop as a diagnostic",
     "center": "ZITIL Service Value Loop",
     "items": [
      {
       "label": "Value",
       "text": "Who are the stakeholders and which outcomes, costs and risks matter?"
      },
      {
       "label": "Model",
       "text": "What do the four dimensions and value streams reveal?"
      },
      {
       "label": "Restore",
       "text": "How fast and calmly is service restored, and are causes removed?"
      },
      {
       "label": "Control",
       "text": "Are changes, assets and service levels managed by risk?"
      },
      {
       "label": "Journey",
       "text": "What do customers actually experience, stage by stage?"
      },
      {
       "label": "Flow",
       "text": "Where does work wait, and what are the SLOs and error budgets?"
      },
      {
       "label": "Direct",
       "text": "Are direction, governance, risk and measurement aligned?"
      },
      {
       "label": "Lead",
       "text": "Is there a credible adoption plan, including for AI?"
      }
     ],
     "caption": "Walk the loop clockwise to diagnose any organisation; the weakest stage is usually where to intervene first. Each module of this course corresponds to one stage."
    },
    {
     "type": "case",
     "title": "Integrated case: a mobile financial services provider under pressure",
     "context": "A mobile financial services provider in Dhaka serves 18 million customers and 250,000 agents. In the last quarter it suffered four major outages, two during festival peaks. The central bank has asked for a resilience improvement plan within 90 days. Customer NPS fell from +22 to −5. Engineering deploys monthly in large batches with a 30% change failure rate. The service desk handles 1.2 million contacts a month, 40% about failed transactions and PIN issues. Operations receives 20,000 alerts a day. A team has already bought an AI chatbot licence but has no plan. Staff morale is low and two senior engineers resigned last month.",
     "questions": [
      "Using the ZITIL Service Value Loop, what are the three most important system-level problems?",
      "Which interventions would you prioritise in the first 90 days, and why?",
      "How would you use AI responsibly here?",
      "How would you measure progress and report to the board and the regulator?",
      "How would you lead adoption and protect staff during the change?"
     ],
     "answer": "**System problems:** (1) Unsafe change flow: large monthly batches with 30% failure drive outages, so the Control and Flow stages are the main source of harm. (2) Poor detection and restoration: 20,000 alerts a day hide real signals and major incidents run without clear roles (Restore). (3) No outcome-based direction: the organisation lacks SLOs and resilience targets agreed with the business and regulator (Direct). Underneath, people are overloaded and leaving (Model: organisations and people).\n\n**First 90 days:** declare a festival-period change policy and an emergency change authority; introduce a major incident model with commanders and communications leads; define SLOs for send-money and cash-out and start error-budget reporting; begin reducing batch size on the most critical service with automated tests and canary releases; run an alert clean-up to cut noise by at least 70%; launch problem management on the top five outage causes. These target the biggest risks fast and give the regulator credible evidence.\n\n**AI:** pause the chatbot launch until a use case is defined. Start with grounded answers for transaction-status and PIN queries, linked to real transaction data, with an easy route to a human and Bangla and English evaluation. Use AIOps correlation only after alert noise is reduced.\n\n**Measurement:** board and regulator pack with SLO attainment, major incidents and restore time, change failure rate, lead time, NPS and customer effort for failed-transaction journeys, plus progress on the resilience plan. Leading indicators: error-budget burn and alert actionability.\n\n**Adoption:** visible CEO sponsorship; involve engineers in designing the change and incident models; cap on-call load and protect improvement time; recognise early wins publicly; retain key engineers with clear career paths and reduced toil."
    },
    {
     "type": "steps",
     "title": "Answering master-level scenario questions",
     "items": [
      {
       "title": "Read the last sentence first",
       "text": "Is it asking what to do FIRST, NEXT, BEST or MOST effectively? The qualifier changes the answer."
      },
      {
       "title": "Identify the stage and the stakeholders",
       "text": "Which part of the loop is at stake, and whose value matters most?"
      },
      {
       "title": "Find the real problem",
       "text": "Separate symptoms from causes. Which constraint or failure is driving the situation?"
      },
      {
       "title": "Eliminate extremes",
       "text": "Options that ignore risk, freeze everything, blame individuals or buy tools without a plan are rarely best."
      },
      {
       "title": "Prefer system fixes",
       "text": "Choose options that address causes, apply principles and keep value in view."
      },
      {
       "title": "Check timing",
       "text": "A good action at the wrong time is a wrong answer: stabilise before optimising, simplify before automating."
      }
     ]
    },
    {
     "type": "table",
     "title": "Common distractor patterns in master exams",
     "head": [
      "Pattern",
      "Why it is usually wrong"
     ],
     "rows": [
      [
       "Add more approvals or meetings",
       "Adds delay; rarely addresses the cause of failure"
      ],
      [
       "Buy a tool",
       "Tools automate the current system, including its flaws"
      ],
      [
       "Blame or discipline individuals",
       "Ignores system causes and suppresses reporting"
      ],
      [
       "Optimise a non-constraint",
       "Local improvement that does not change the outcome"
      ],
      [
       "Freeze or stop everything",
       "Removes risk temporarily but builds a bigger problem"
      ],
      [
       "Report the same measure more often",
       "More data on the wrong measure does not help"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Many master-level answers are about order: restore before diagnose, stabilise before transform, measure before claiming improvement, simplify before automating, involve managers before mandating. When two options both sound good, ask which must come first.",
     "title": "Think in sequences"
    },
    {
     "type": "timeline",
     "title": "Stabilise before you transform: an example first 90 days",
     "items": [
      {
       "when": "Week 1",
       "label": "Command structure",
       "text": "Major incident process, commander rota and stakeholder updates."
      },
      {
       "when": "Weeks 2–4",
       "label": "Reduce noise and risk",
       "text": "Cut non-actionable alerts; protect festival peaks from risky changes."
      },
      {
       "when": "Month 2",
       "label": "Remove repeat causes",
       "text": "Problem reviews for the top repeat incidents; first standard changes."
      },
      {
       "when": "Month 3",
       "label": "Agree measures",
       "text": "SLOs, experience measures and a roadmap taken to the board."
      },
      {
       "when": "Months 4–6",
       "label": "Pilot AI responsibly",
       "text": "Grounded virtual agent with human oversight and clear success measures."
      }
     ],
     "caption": "An illustrative order for a provider in crisis. Each step creates the stability or evidence the next one needs, which is exactly what 'FIRST' questions test."
    },
    {
     "type": "scenario",
     "title": "What to do first",
     "situation": "You join a government hospital network as head of IT services. In your first week you find: no service catalogue, a major incident every week, an outsourced desk with an expiring contract in eight months, and a ministry request for a digital strategy in six months. What do you prioritise first?",
     "options": [
      {
       "text": "Stabilise major incidents with clear roles and problem management on the top causes",
       "feedback": "Correct. Weekly major incidents harm patients and destroy credibility; stabilising creates the trust and capacity needed for the catalogue, sourcing decision and strategy.",
       "best": true
      },
      {
       "text": "Write the digital strategy first, since the ministry deadline is the most visible commitment and will shape all other work",
       "feedback": "Strategy matters, but it will not be credible while services fail weekly; there is time to do it after stabilising.",
       "best": false
      },
      {
       "text": "Start re-tendering the desk contract immediately",
       "feedback": "The contract has eight months; rushing sourcing without understanding services is risky.",
       "best": false
      },
      {
       "text": "Build a complete service catalogue",
       "feedback": "Useful but slow; it does not reduce weekly harm.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Master practitioner checklist for any situation",
     "items": [
      "I can state who the stakeholders are and what value means to each",
      "I have looked at all four dimensions, not just technology",
      "I have traced the relevant value stream end to end",
      "I have separated symptoms from system causes",
      "I know whether the situation is clear, complicated, complex or chaotic",
      "I have at least three options, including a simpler one",
      "My recommendation names its trade-offs and early-warning measures",
      "I have a plan for adoption, not just implementation",
      "AI and automation are used where they add value, with proportionate oversight"
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Integrated case",
       "def": "A realistic scenario combining several practices, stakeholders and constraints, requiring a prioritised, justified response."
      },
      {
       "term": "Intervention",
       "def": "A deliberate action taken to change a system's behaviour or outcomes."
      },
      {
       "term": "Distractor",
       "def": "An answer option that sounds plausible but is weaker than the best option."
      },
      {
       "term": "Stabilise before transform",
       "def": "The principle of restoring control of service failures before attempting large-scale change."
      },
      {
       "term": "Resilience plan",
       "def": "A plan describing how an organisation will prevent, withstand and recover from disruption."
      },
      {
       "term": "Board pack",
       "def": "A concise set of reports and decisions prepared for the governing body."
      },
      {
       "term": "Sequencing",
       "def": "Choosing the order of actions so that each one builds on the last."
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Apply the ZITIL Service Value Loop to your own organisation. Which stage is weakest today, and what is the first intervention you would lead?"
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Real situations arrive tangled; use the loop to see the whole system before acting.",
      "Read the qualifier first: FIRST, NEXT, BEST and MOST change the right answer.",
      "Distractors add approvals, buy tools, blame people, optimise non-constraints or freeze everything.",
      "Think in sequences: restore before diagnose, stabilise before transform, simplify before automate.",
      "Justify every recommendation with value, evidence, trade-offs and how you will know early if it fails."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A question asks what a manager should do FIRST after a major outage caused by a recent change. Which kind of answer is usually best?",
       "options": [
        "Freeze all changes for three months",
        "Buy a new change management tool",
        "Restore service first, then investigate",
        "Discipline the engineer who made the change"
       ],
       "answer": 2,
       "explain": "Restoration first; blame, tools and long freezes are classic distractors."
      },
      {
       "q": "An organisation suffers weekly major incidents and has been asked for a digital strategy. What should a new leader prioritise first?",
       "options": [
        "Launching an AI chatbot",
        "Writing the strategy",
        "Re-tendering every contract",
        "Stabilising major incidents"
       ],
       "answer": 3,
       "explain": "Stabilise before transform; credibility and capacity come first."
      },
      {
       "q": "Which option pattern is usually a distractor in master-level questions?",
       "options": [
        "Defining SLOs with the business",
        "Reducing batch size with automated testing",
        "Running a blameless review",
        "Adding more approvals to reduce change failure"
       ],
       "answer": 3,
       "explain": "Extra approvals add delay without addressing the cause of failure."
      },
      {
       "q": "In the integrated case, why should the chatbot launch be paused?",
       "options": [
        "The regulator bans chatbots",
        "The licence was too expensive",
        "Chatbots never work in financial services",
        "It lacks a use case, grounding and oversight"
       ],
       "answer": 3,
       "explain": "Responsible AI starts with a clear use case, grounding and oversight."
      },
      {
       "q": "Why should alert noise be reduced before adding AIOps correlation?",
       "options": [
        "Alert noise is a security risk only",
        "Correlation is not useful in finance",
        "AIOps cannot process more than 1,000 alerts",
        "AI fed noisy alerts adds cost, not clarity"
       ],
       "answer": 3,
       "explain": "Optimise before automating: clean signals make AI useful."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m5",
  "q": "A development team plans to hand a new claims service to operations with no runbooks and alerts only on CPU. Launch is in two weeks and cannot move. What should the service manager arrange?",
  "options": [
   "A formal objection to launch, recorded in the risk register only",
   "Responsibility for all claims issues passing permanently to developers",
   "A full handover on launch day as originally planned",
   "Early-life support with joint ownership and exit criteria"
  ],
  "answer": 3,
  "explain": "Early-life support manages the gaps while keeping the date. Handing over as planned shifts risk to users; objecting without action changes nothing; permanent developer ownership may overload the team."
 },
 {
  "module": "m5",
  "q": "A team finishes 15 items a week and has 90 items in progress. Leaders want lead time under two weeks. What is the MOST effective lever?",
  "options": [
   "Start all new requests immediately on arrival",
   "Add a daily status meeting covering every item in progress",
   "Increase engineer utilisation to 100%",
   "Reduce work in progress to around 30 items or less"
  ],
  "answer": 3,
  "explain": "Little's law: lead time = WIP ÷ throughput = 6 weeks now. Cutting WIP to 30 or fewer gives about 2 weeks. Higher utilisation and starting more work make queues worse."
 },
 {
  "module": "m5",
  "q": "A support team spends 55% of its time on unplanned work, and its improvement projects never finish. What should be done FIRST?",
  "options": [
   "Move all improvement projects to a separate, dedicated improvement team",
   "Ban unplanned work during improvement weeks",
   "Increase planned project commitments to force focus",
   "Reserve improvement capacity and cut top interrupt sources"
  ],
  "answer": 3,
  "explain": "Protected capacity plus problem management on the biggest sources of interruption reduces unplanned load sustainably. Bans are impossible for incidents; separating improvement removes ownership."
 },
 {
  "module": "m5",
  "q": "A wallet provider sees many new users abandon the service after their first failed cash-out at an agent. Which approach BEST identifies how to fix this?",
  "options": [
   "Increase cash-out fees to fund new incentives for the agents who hold float",
   "Send a satisfaction survey to all users",
   "Run an app usability test with new users",
   "Map the journey and link the touchpoint to its back-stage causes"
  ],
  "answer": 3,
  "explain": "The pain appears at a front-stage moment of truth but is caused back stage. Journey mapping connects them. App tests, surveys and fees miss the operational cause."
 },
 {
  "module": "m5",
  "q": "Each department in a hospital meets its own waiting-time targets, but patients spend over three hours per visit. What should the service manager do?",
  "options": [
   "Ask patients to arrive later in the day when departments are quieter",
   "Add more staff to each department",
   "Measure and manage the end-to-end patient journey",
   "Tighten each department's targets"
  ],
  "answer": 2,
  "explain": "The waiting occurs between departments; only an end-to-end view addresses it. Local targets and staffing improve parts, not the journey."
 },
 {
  "module": "m5",
  "q": "Enterprise customers give a cloud provider high satisfaction on support tickets but a negative NPS. What should the account manager do FIRST?",
  "options": [
   "Offer immediate discounts to every enterprise customer to rebuild goodwill",
   "Hold account reviews to explore relationship-level concerns",
   "Stop running NPS surveys",
   "Rely on CSAT, since it is measured more often"
  ],
  "answer": 1,
  "explain": "The two measures look at different levels. Relationship issues such as reliability or value need account conversations. Ignoring or dropping NPS hides the issue; blanket discounts may not fix causes."
 },
 {
  "module": "m5",
  "q": "A board approves a new HR system expecting 30% fewer manual HR transactions. Two years later nobody knows if this happened. Which practice would have prevented this?",
  "options": [
   "A larger project contingency budget",
   "Weekly IT availability and incident reports sent to the board",
   "Named business benefit owners with a baseline and tracking",
   "A longer system warranty period from the supplier"
  ],
  "answer": 2,
  "explain": "Value realisation needs owners, baselines and tracking. Warranty, availability and contingency do not show whether benefits arrived."
 },
 {
  "module": "m5",
  "q": "A head of IT wants to move from being seen as an order taker to a trusted adviser by business units. Which action is MOST effective?",
  "options": [
   "Publish more detailed SLA reports each month",
   "Respond to every business request faster than before, with daily updates",
   "Reduce the cost of all IT services by 10%",
   "Assign relationship managers who learn each unit's strategy"
  ],
  "answer": 3,
  "explain": "Trusted advisers understand the customer's strategy and propose solutions. Faster responses, cheaper services and more reports improve the order-taker role but do not change it."
 },
 {
  "module": "m6",
  "q": "A digital bank deploys quarterly. Each release contains hundreds of changes and roughly one in three releases causes a major incident. The CTO proposes a stricter release approval board. What is the BEST alternative?",
  "options": [
   "Move to small, frequent, automated deployments with progressive rollout",
   "Add a second approval board for releases touching core systems",
   "Outsource testing to a specialist supplier and keep the cycle",
   "Reduce releases to twice a year so that each one gets far more testing time"
  ],
  "answer": 0,
  "explain": "Large batches drive failure. Smaller, automated, progressive changes improve speed and stability together. More approvals or longer cycles increase batch size and risk."
 },
 {
  "module": "m6",
  "q": "A company bought a complete DevOps toolchain, yet development and operations still blame each other for incidents and deploy monthly. What should the transformation lead address FIRST?",
  "options": [
   "A second toolchain dedicated to the operations team's own release needs",
   "A mandate to deploy daily from next month",
   "Shared goals, ownership and blameless learning across both teams",
   "More detailed handover documents between the two teams"
  ],
  "answer": 2,
  "explain": "The constraint is cultural and structural. Tools, mandates and better handover documents leave the conflicting goals and handovers in place."
 },
 {
  "module": "m6",
  "q": "An auditor requires evidence that every production change was tested and reviewed. Engineers complain that filling in change forms takes hours. What is the MOST effective solution?",
  "options": [
   "Generate change records from the pipeline with evidence",
   "Ask the auditor to accept verbal confirmation from team leads",
   "Reduce the number of fields on the change form",
   "Hire administrators to complete change forms for engineers"
  ],
  "answer": 0,
  "explain": "Pipeline-generated records give stronger evidence with less effort. Administrators and fewer fields keep a manual process; verbal confirmation weakens control."
 },
 {
  "module": "m6",
  "q": "A payments service with a 99.9% SLO has used its entire monthly error budget in the first ten days. The product owner wants to launch a campaign feature next week. What should happen according to a sound SRE approach?",
  "options": [
   "Launch the feature, since the SLO is internal and not contractual",
   "Lower the SLO for the rest of the month so the launch can proceed",
   "Increase the SLO to 99.99% to raise urgency",
   "Pause non-critical releases and prioritise reliability, as agreed"
  ],
  "answer": 3,
  "explain": "Error budget policies are agreed in advance so these decisions are not renegotiated under pressure. Ignoring or moving the target undermines the system."
 },
 {
  "module": "m6",
  "q": "An operations team spends about 70% of its time on manual, repetitive tasks and has no time for engineering improvements. What should the SRE lead do?",
  "options": [
   "Accept the toil as an unavoidable cost of running production systems at scale",
   "Cap toil, measure it and prioritise automating the largest sources",
   "Move the manual tasks to the service desk",
   "Hire more operators to absorb the manual work"
  ],
  "answer": 1,
  "explain": "SRE caps toil and invests the freed time in automation. Hiring or moving work keeps the toil growing with scale."
 },
 {
  "module": "m6",
  "q": "Product teams in a retailer complete features in two weeks, but customers see them only after ten weeks because of a shared security review queue. Which action improves customer lead time MOST?",
  "options": [
   "Ask product teams to complete features in one week",
   "Add three more product teams",
   "Report each product team's velocity weekly to leadership and the board",
   "Fix the security review constraint with automated checks"
  ],
  "answer": 3,
  "explain": "Only improving the constraint reduces end-to-end lead time. Faster or more teams add to the queue; reporting velocity measures non-constraints."
 },
 {
  "module": "m6",
  "q": "Six months of flow data shows 90% of completed work is new features, while incidents and audit findings rise steadily. What should the value stream leader do?",
  "options": [
   "Rebalance flow toward debt, risk and defect work",
   "Measure only feature velocity to keep teams focused",
   "Stop all feature work until every audit finding is closed",
   "Keep the distribution, since features create the most value"
  ],
  "answer": 0,
  "explain": "Neglected debt and risk work produce incidents and findings. A deliberate rebalance protects long-term flow. Stopping all features or ignoring the trend are extremes."
 },
 {
  "module": "m7",
  "q": "A CIO's annual plan lists 'deploy new ERP' and 'migrate to cloud' as key results. The CEO says she cannot see how IT supports the company's growth goal. How should the CIO revise the plan?",
  "options": [
   "Rewrite key results as business outcomes the initiatives should move",
   "Add delivery dates and budgets to each initiative",
   "Present the plan to the board without the CEO",
   "Add more technical detail about the ERP and cloud projects and their architecture"
  ],
  "answer": 0,
  "explain": "Outputs like deployments do not show contribution to growth. Outcome-based key results connect IT work to business goals. More detail or dates still describe outputs."
 },
 {
  "module": "m7",
  "q": "Different directors in a manufacturer have each approved IT projects directly. IT has 38 active projects and finishes almost none on time. What should the head of IT propose FIRST?",
  "options": [
   "A rule that each director can approve at most three projects",
   "Contractors to deliver the backlog of approved projects",
   "A project management office that tracks all 38 projects",
   "One ranked portfolio with a limit on active projects"
  ],
  "answer": 3,
  "explain": "One ranked portfolio with a WIP limit creates focus. Tracking or contractors leave the overload in place; per-director quotas ignore relative value."
 },
 {
  "module": "m7",
  "q": "A risk assessment shows an internet banking outage would cost Tk 1 crore per occurrence and is expected twice a year. A resilience upgrade costing Tk 60 lakh a year would cut occurrences to once every two years. What does this analysis suggest?",
  "options": [
   "The upgrade should be rejected because it does not remove all risk",
   "The decision cannot be made until a full penetration test of internet banking is complete",
   "The upgrade is not justified because outages are unlikely",
   "Justified: expected annual loss falls far more than the cost"
  ],
  "answer": 3,
  "explain": "ALE falls from Tk 2 crore to Tk 50 lakh a year, saving Tk 1.5 crore against Tk 60 lakh cost. Residual risk is acceptable; no control removes all risk."
 },
 {
  "module": "m7",
  "q": "An audit finds that privileged access to production systems is reviewed by managers only when they remember, and many reviews are missing. What is the MOST effective improvement?",
  "options": [
   "Make access reviews an annual audit activity",
   "Remind managers by email each quarter to complete their access reviews on time",
   "Remove privileged access from all engineers",
   "Automate access reviews with enforced revocation"
  ],
  "answer": 3,
  "explain": "Automated, enforced controls do not depend on memory. Reminders and annual audits remain weak; removing all privileged access stops operations."
 },
 {
  "module": "m7",
  "q": "A service desk's first-contact resolution rose from 50% to 85% in two months, but reopened tickets tripled. What should the service manager do?",
  "options": [
   "Replace first-contact resolution with average handling time as the desk's main target",
   "Pair the measure with quality data and investigate closures",
   "Stop measuring reopened tickets, as they distract staff",
   "Celebrate the result and raise the target to 90%"
  ],
  "answer": 1,
  "explain": "A sudden rise in one measure with falling quality signals gaming. Paired measures and investigation reveal the cause. Raising the target or hiding quality data makes it worse."
 },
 {
  "module": "m7",
  "q": "An IT director wants a maturity programme with the goal of reaching level 4 in all 34 practices within two years. What is the BEST advice?",
  "options": [
   "Proceed, since higher maturity is always better",
   "Reach level 4 first in practices that are easiest to document",
   "Target capability improvements where gaps most limit value",
   "Skip assessment and buy a new tool for each practice"
  ],
  "answer": 2,
  "explain": "Capability should rise where it limits value. Uniform targets drive documentation over value, and tools do not create capability."
 },
 {
  "module": "m7",
  "q": "A logistics company's leadership wants to 'go digital' because a competitor launched an app. No strategic objective has been defined. What should the head of digital do FIRST?",
  "options": [
   "Commission a copy of the competitor's app",
   "Clarify the strategy digital should support",
   "Buy a digital platform suite now so the company is ready for any later strategic choice",
   "Run a hackathon to generate app ideas"
  ],
  "answer": 1,
  "explain": "Strategy must come before technology choices. Copying, buying platforms or generating ideas without direction produces unfocused investment."
 },
 {
  "module": "m7",
  "q": "A board is asked to commit Tk 200 crore upfront for a five-year digital transformation with uncertain adoption. Which funding approach BEST manages the risk?",
  "options": [
   "Approve the full amount to provide certainty",
   "Fund the first year and decide later without criteria",
   "Release funding in stages based on evidence of value",
   "Reject the transformation as too risky"
  ],
  "answer": 2,
  "explain": "Evidence-based tranches keep options open and control risk. Full commitment removes checkpoints; rejection ignores strategic need; funding without criteria lacks governance."
 },
 {
  "module": "m8",
  "q": "A service desk handles 30,000 password and PIN-unlock requests a month with clear rules. Leadership also wants AI for complex diagnostic tickets with little historical data. Which AI initiative should come FIRST?",
  "options": [
   "Both at once, to show the board real ambition and spread the licence cost across more use cases",
   "A virtual agent for password and PIN requests",
   "Neither until all processes reach high maturity",
   "An AI model for complex diagnostic tickets"
  ],
  "answer": 1,
  "explain": "High volume, clear rules and measurable benefit make the password and PIN use case the right first step. Complex diagnostics lack data, doing both at once spreads effort, and waiting for maturity forgoes clear value."
 },
 {
  "module": "m8",
  "q": "An AI agent can resolve tickets end to end, including granting system access. In testing it was right 85% of the time. How should its permissions be set?",
  "options": [
   "Grant all permissions, since 85% beats many junior staff",
   "Low-risk actions alone; human approval for access grants",
   "Block the agent from all actions until it reaches 100%",
   "Allow all actions, with a full review of the agent's action logs once a quarter"
  ],
  "answer": 1,
  "explain": "Oversight should match the impact of errors. A 15% error rate is acceptable for low-risk, reversible actions but not for access grants. Quarterly review is too late; demanding 100% forgoes safe benefits."
 },
 {
  "module": "m8",
  "q": "A ticket-routing model performs well for English tickets but routes 30% of Bangla tickets to the wrong team. What should the service owner do?",
  "options": [
   "Retrain with balanced data and monitor by language",
   "Ask Bangla-speaking users to write their tickets in English from now on",
   "Accept it, since most tickets are in English",
   "Turn off the model for everyone"
  ],
  "answer": 0,
  "explain": "Unequal performance across user groups is a responsible-AI failure. Retraining and monitoring by language fixes it. Asking users to change language shifts the burden; switching off for all loses benefits."
 },
 {
  "module": "m8",
  "q": "A university's new service management process has 95% training attendance but only 30% adoption after four months. Department managers were not involved in the design. What should the change lead do NEXT?",
  "options": [
   "Introduce penalties for staff who bypass the process",
   "Report the rollout as complete because the process is live",
   "Involve managers, uncover practical obstacles and fix them",
   "Repeat the training for all staff"
  ],
  "answer": 2,
  "explain": "Managers shape daily behaviour and were excluded. Their involvement and removal of real obstacles addresses the gap. Training was not the issue; penalties produce hidden workarounds."
 },
 {
  "module": "m8",
  "q": "During exam week, ransomware is spreading across a university's servers. Several senior staff want to hold a meeting to analyse how the attacker got in before acting. What should the IT service leader do?",
  "options": [
   "Contain and stabilise now, preserving evidence",
   "Hold the analysis meeting first so that no hasty decisions destroy the forensic trail",
   "Follow the normal incident queue in order of logging",
   "Run small experiments to see which systems are affected"
  ],
  "answer": 0,
  "explain": "A spreading attack is a chaotic situation: stabilise first. Analysis can follow once harm is contained. Experimentation and normal queues are too slow."
 },
 {
  "module": "m8",
  "q": "A head of IT must choose between three desk-sourcing options. Each stakeholder prefers a different one. Which approach gives the MOST defensible recommendation?",
  "options": [
   "Ask the incumbent supplier which option it recommends, since it knows the desk best",
   "Choose the option the most senior stakeholder prefers",
   "Agree weighted criteria, then score and test sensitivity",
   "Choose the cheapest option to protect the budget"
  ],
  "answer": 2,
  "explain": "Transparent, agreed criteria and sensitivity checks make the decision defensible to all stakeholders. Seniority, price alone or supplier advice introduce bias."
 },
 {
  "module": "m8",
  "q": "An organisation has weekly major incidents, a falling NPS, a 30% change failure rate, 20,000 daily alerts and a newly bought AI chatbot with no plan. Which FIRST set of actions is MOST appropriate?",
  "options": [
   "Stabilise incidents, make change safer and cut alert noise first",
   "Replace the operations team with a managed service provider under a new outcome-based contract",
   "Launch the chatbot immediately to improve NPS",
   "Commission a two-year maturity assessment"
  ],
  "answer": 0,
  "explain": "Stabilising service and making change safer address the causes of harm; cleaner signals and a defined AI use case follow. Launching the bot, a long assessment or wholesale outsourcing do not address the urgent causes."
 }
]);
