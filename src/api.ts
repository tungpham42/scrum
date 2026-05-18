import { Lesson } from "./types";

const comprehensiveLessons: Lesson[] = [
  {
    id: "1",
    title: "Lesson 1: Empiricism & Lean Thinking",
    content:
      "Scrum is not a methodology; it is a lightweight framework founded on empiricism and lean thinking. Empiricism asserts that knowledge comes from experience and making decisions based on what is observed. The three pillars of empiricism are Transparency, Inspection, and Adaptation. Lean thinking reduces waste and focuses on the essentials. For these principles to function, the Scrum Team must embody the five Scrum values: Commitment, Focus, Openness, Respect, and Courage. Without these values, the pillars cannot build trust.",
    iconName: "BulbOutlined",
    exercises: [
      {
        id: "ex1-1",
        question:
          "Scenario: A Scrum Team is consistently failing to meet their Sprint Goals. The Scrum Master notices that Developers are afraid to report bugs during the Daily Scrum because management penalizes them for defects. Which empirical pillar is missing, and which value is suppressed?",
        options: [
          { id: 1, text: "Inspection is missing; Commitment is suppressed." },
          { id: 2, text: "Transparency is missing; Openness is suppressed." },
          { id: 3, text: "Adaptation is missing; Respect is suppressed." },
          { id: 4, text: "Transparency is missing; Focus is suppressed." },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex1-2",
        question:
          "When should a Scrum Team formally inspect and adapt their processes and the product?",
        options: [
          { id: 1, text: "Only during the Sprint Retrospective." },
          { id: 2, text: "Whenever a major production bug is found." },
          {
            id: 3,
            text: "During all four formal Scrum events (Planning, Daily Scrum, Review, Retrospective).",
          },
          {
            id: 4,
            text: "At the end of every quarter during the release planning phase.",
          },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex1-3",
        question:
          "Lean thinking is a foundation of Scrum. Which of the following best represents lean thinking in a Scrum environment?",
        options: [
          {
            id: 1,
            text: "Maximizing the amount of work not done by eliminating unnecessary documentation and features.",
          },
          {
            id: 2,
            text: "Ensuring all Developers are working 100% of the time with no idle hours.",
          },
          {
            id: 3,
            text: "Outsourcing testing to a cheaper external team to save budget.",
          },
          {
            id: 4,
            text: "Skipping the Sprint Retrospective to focus more time on coding.",
          },
        ],
        correctAnswer: 1,
      },
      {
        id: "ex1-4",
        question:
          "Which of the following are the three pillars of empiricism in Scrum?",
        options: [
          { id: 1, text: "Planning, Doing, Checking" },
          { id: 2, text: "Transparency, Inspection, Adaptation" },
          { id: 3, text: "Transparency, Review, Retrospective" },
          { id: 4, text: "Focus, Courage, Respect" },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex1-5",
        question:
          "According to the Scrum Guide, which of the following are the five Scrum values?",
        options: [
          { id: 1, text: "Commitment, Focus, Openness, Respect, and Courage" },
          {
            id: 2,
            text: "Transparency, Inspection, Adaptation, Quality, Speed",
          },
          { id: 3, text: "Agility, Empathy, Collaboration, Trust, Openness" },
          { id: 4, text: "Planning, Execution, Delivery, Review, Improvement" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "2",
    title: "Lesson 2: The Scrum Team",
    content:
      "The Scrum Team consists of one Scrum Master, one Product Owner, and Developers. It is a cohesive unit of professionals with no sub-teams or hierarchies. They are cross-functional, meaning team members have all the skills necessary to create value each Sprint. They are also self-managing, meaning they internally decide who does what, when, and how. The Scrum Team is small enough to remain nimble and large enough to complete significant work, typically 10 or fewer people.",
    iconName: "TeamOutlined",
    exercises: [
      {
        id: "ex2-1",
        question:
          'A heavily regulated financial organization is transitioning to Scrum. Management insists that a "Quality Assurance Manager" must sign off on the Increment before the Sprint Review. How should the Scrum Team respond?',
        options: [
          {
            id: 1,
            text: "Agree, as regulatory environments are an exception to standard Scrum rules.",
          },
          {
            id: 2,
            text: "Add the QA Manager to the Scrum Team as a Product Owner.",
          },
          {
            id: 3,
            text: "Explain that the Scrum Team is solely accountable for quality and no external sign-offs are required before the Review.",
          },
          {
            id: 4,
            text: 'Create a "Testing Sprint" after the development Sprint for the QA Manager.',
          },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex2-2",
        question:
          "A Scrum Team has historically relied on a lead architect to assign tasks to individual Developers. Is this aligned with Scrum?",
        options: [
          {
            id: 1,
            text: "Yes, a lead architect is essential for maintaining code quality.",
          },
          {
            id: 2,
            text: "No, the Scrum Master should be the one assigning tasks.",
          },
          {
            id: 3,
            text: "Yes, as long as the architect is considered a Developer on the team.",
          },
          {
            id: 4,
            text: "No, the Developers are self-managing and should decide internally how to distribute their work.",
          },
        ],
        correctAnswer: 4,
      },
      {
        id: "ex2-3",
        question:
          "What is the optimal size for a Scrum Team according to the 2020 Scrum Guide?",
        options: [
          { id: 1, text: "Exactly 7 people." },
          {
            id: 2,
            text: "3 to 9 Developers, plus the Scrum Master and Product Owner.",
          },
          { id: 3, text: "Typically 10 or fewer people in total." },
          { id: 4, text: "As large as necessary to complete the project." },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex2-4",
        question: "What does it mean for a Scrum Team to be cross-functional?",
        options: [
          {
            id: 1,
            text: "They have all the skills necessary to create value each Sprint.",
          },
          { id: 2, text: "Everyone on the team must know how to code." },
          {
            id: 3,
            text: "They are divided into sub-teams for backend, frontend, and QA.",
          },
          {
            id: 4,
            text: "They work across multiple different products simultaneously.",
          },
        ],
        correctAnswer: 1,
      },
      {
        id: "ex2-5",
        question:
          "Which of the following describes the hierarchy within a Scrum Team?",
        options: [
          { id: 1, text: "The Scrum Master manages the Developers." },
          {
            id: 2,
            text: "The Product Owner is the manager of the entire team.",
          },
          {
            id: 3,
            text: "There are no hierarchies or sub-teams; it is a cohesive unit of professionals.",
          },
          { id: 4, text: "Developers are ranked by seniority." },
        ],
        correctAnswer: 3,
      },
    ],
  },
  {
    id: "3",
    title: "Lesson 4: The Product Owner",
    content:
      "The Product Owner (PO) is accountable for maximizing the value of the product resulting from the work of the Scrum Team. They are the sole person responsible for managing the Product Backlog, which includes explicitly communicating the Product Goal, creating and ordering Product Backlog items, and ensuring the backlog is transparent. While the PO can delegate the actual work of updating the backlog, they remain entirely accountable. For the PO to succeed, the entire organization must respect their decisions.",
    iconName: "CrownOutlined",
    exercises: [
      {
        id: "ex3-1",
        question:
          'Scenario: The CEO bypasses the Product Owner and goes directly to the Developers, asking them to add a "quick, urgent feature" into the current Sprint. What is the most appropriate action for the Developers?',
        options: [
          {
            id: 1,
            text: "Build the feature, as the CEO outranks the Product Owner.",
          },
          {
            id: 2,
            text: "Politely direct the CEO to the Product Owner so the feature can be evaluated and prioritized.",
          },
          {
            id: 3,
            text: "Add the feature to the Sprint Backlog but drop another item of equal size.",
          },
          {
            id: 4,
            text: "Wait until the Daily Scrum and ask the Scrum Master for permission.",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex3-2",
        question:
          "The Product Owner is overwhelmed with writing user stories and asks the Developers for help. Can the Developers write items for the Product Backlog?",
        options: [
          {
            id: 1,
            text: "No, writing Product Backlog items is strictly the Product Owner's job.",
          },
          {
            id: 2,
            text: "Yes, the Product Owner can delegate this work, but they remain accountable for the outcome.",
          },
          {
            id: 3,
            text: "Yes, but only the Scrum Master can officially approve the items.",
          },
          {
            id: 4,
            text: "No, Developers should only focus on the Sprint Backlog.",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex3-3",
        question:
          "How does the Product Owner represent the needs of the stakeholders?",
        options: [
          { id: 1, text: "By inviting all stakeholders to the Daily Scrum." },
          {
            id: 2,
            text: "By ensuring their needs are reflected in the ordering and content of the Product Backlog.",
          },
          {
            id: 3,
            text: "By creating a comprehensive requirements document before the first Sprint.",
          },
          {
            id: 4,
            text: "By acting as a proxy and preventing stakeholders from speaking to the Developers.",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex3-4",
        question:
          "Who is the only person accountable for managing the Product Backlog?",
        options: [
          { id: 1, text: "The Scrum Master" },
          { id: 2, text: "The Product Owner" },
          { id: 3, text: "The Lead Developer" },
          { id: 4, text: "The Project Manager" },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex3-5",
        question:
          "A stakeholder insists that their department should share the Product Owner role as a committee. Is this allowed in Scrum?",
        options: [
          { id: 1, text: "Yes, a committee ensures all voices are heard." },
          {
            id: 2,
            text: "No, the Product Owner is one person, not a committee.",
          },
          { id: 3, text: "Yes, provided the Scrum Master agrees." },
          { id: 4, text: "No, only Developers can form a committee." },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "4",
    title: "Lesson 4: The Developers",
    content:
      "Developers are the people in the Scrum Team committed to creating any aspect of a usable Increment each Sprint. The specific skills needed by Developers vary across domains. They are strictly accountable for: creating a plan for the Sprint (the Sprint Backlog), instilling quality by adhering to a Definition of Done, adapting their plan each day toward the Sprint Goal, and holding each other accountable as professionals.",
    iconName: "CodeOutlined",
    exercises: [
      {
        id: "ex4-1",
        question:
          "Who determines how many Product Backlog items the Developers select for a Sprint?",
        options: [
          { id: 1, text: "The Product Owner, based on the release schedule." },
          {
            id: 2,
            text: "The Scrum Master, based on the team's historical velocity.",
          },
          { id: 3, text: "The Developers themselves." },
          {
            id: 4,
            text: "The entire Scrum Team collaboratively decides the exact number.",
          },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex4-2",
        question:
          "During the Sprint, the Developers realize they have taken on too much work to finish everything by the end of the timebox. What should they do?",
        options: [
          {
            id: 1,
            text: "Work overtime to ensure the original commitment is met.",
          },
          {
            id: 2,
            text: "Lower the standards of the Definition of Done to get the items finished.",
          },
          {
            id: 3,
            text: "Collaborate with the Product Owner to negotiate the scope of the Sprint Backlog without affecting the Sprint Goal.",
          },
          {
            id: 4,
            text: "Ask the Scrum Master to officially extend the Sprint by a few days.",
          },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex4-3",
        question:
          "Who is accountable for instilling quality by ensuring the work meets the Definition of Done?",
        options: [
          { id: 1, text: "The Quality Assurance (QA) team." },
          { id: 2, text: "The Scrum Master." },
          { id: 3, text: "The Developers." },
          { id: 4, text: "The Product Owner." },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex4-4",
        question:
          "During Sprint Planning, who is accountable for creating the plan for the Sprint (the Sprint Backlog)?",
        options: [
          { id: 1, text: "The Scrum Master" },
          { id: 2, text: "The Product Owner" },
          { id: 3, text: "The Developers" },
          { id: 4, text: "The Project Manager" },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex4-5",
        question:
          "What happens if the Developers discover they need a specific skill they do not possess to achieve the Sprint Goal?",
        options: [
          { id: 1, text: "The Sprint is immediately cancelled." },
          {
            id: 2,
            text: "They must rely on their cross-functional nature and collaborate to find a way to complete the work.",
          },
          { id: 3, text: "The Scrum Master must do the work for them." },
          { id: 4, text: "They skip the work and change the Sprint Goal." },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "5",
    title: "Lesson 5: The Scrum Master",
    content:
      "The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. They are true leaders who serve the Scrum Team and the larger organization. For the team, they coach self-management, help remove impediments, and ensure events are productive. For the Product Owner, they help find techniques for effective Product Goal definition and Backlog management. For the organization, they lead and coach Scrum adoption.",
    iconName: "SafetyCertificateOutlined",
    exercises: [
      {
        id: "ex5-1",
        question:
          "During a Sprint, the Developers realize they lack the software licenses to complete a key feature. Procurement is delaying the request. What should the Scrum Master do?",
        options: [
          {
            id: 1,
            text: "Cancel the Sprint because the work cannot be completed.",
          },
          {
            id: 2,
            text: "Facilitate the removal of this impediment by working with procurement on behalf of the team.",
          },
          {
            id: 3,
            text: "Tell the Developers to figure it out themselves, as they are self-managing.",
          },
          { id: 4, text: "Buy the licenses personally." },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex5-2",
        question: "How does the Scrum Master serve the Product Owner?",
        options: [
          {
            id: 1,
            text: "By updating the Product Backlog when the PO is too busy.",
          },
          {
            id: 2,
            text: "By acting as a proxy between the PO and the Developers.",
          },
          {
            id: 3,
            text: "By helping them find techniques for effective Product Goal definition and Backlog management.",
          },
          {
            id: 4,
            text: "By assigning priorities to the Product Backlog items.",
          },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex5-3",
        question:
          "A manager wants to attend the Sprint Retrospective to evaluate team performance. How should the Scrum Master handle this?",
        options: [
          {
            id: 1,
            text: "Allow the manager to attend, as transparency is a Scrum pillar.",
          },
          {
            id: 2,
            text: "Explain that the Retrospective is a safe, internal space for the Scrum Team only, and politely deny the request.",
          },
          {
            id: 3,
            text: "Let the manager attend but tell them they are not allowed to speak.",
          },
          {
            id: 4,
            text: "Move the Retrospective offsite so the manager cannot find them.",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex5-4",
        question:
          "How is the Scrum Master role best described in relation to the Scrum Team?",
        options: [
          { id: 1, text: "A true leader who serves the Scrum Team." },
          { id: 2, text: "The project manager who assigns daily tasks." },
          {
            id: 3,
            text: "The technical lead who makes architectural decisions.",
          },
          { id: 4, text: "The person solely accountable for product value." },
        ],
        correctAnswer: 1,
      },
      {
        id: "ex5-5",
        question:
          "In which of the following ways does the Scrum Master serve the organization?",
        options: [
          { id: 1, text: "By managing the company's budget and HR processes." },
          {
            id: 2,
            text: "By leading, training, and coaching the organization in its Scrum adoption.",
          },
          {
            id: 3,
            text: "By writing all the requirement documents for new teams.",
          },
          { id: 4, text: "By dictating which tools the Developers must use." },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "6",
    title: "Lesson 6: Sprint Planning & The Sprint",
    content:
      "The Sprint is the heartbeat of Scrum. All work necessary to achieve the Product Goal happens within Sprints. A new Sprint starts immediately after the previous one. During Sprint Planning, the team collaboratively addresses three topics: Why is this Sprint valuable? (Sprint Goal), What can be Done this Sprint? (Selection of items), and How will the chosen work get done? (Sprint Backlog). No changes are made during the Sprint that would endanger the Sprint Goal.",
    iconName: "FlagOutlined",
    exercises: [
      {
        id: "ex6-1",
        question: "When can a Sprint be cancelled?",
        options: [
          {
            id: 1,
            text: "When the Developers realize they took on too much work.",
          },
          { id: 2, text: "When a key team member goes on unexpected leave." },
          { id: 3, text: "Only when the Sprint Goal becomes obsolete." },
          {
            id: 4,
            text: "When the Scrum Master determines there are too many impediments.",
          },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex6-2",
        question:
          "Who is responsible for crafting the Sprint Goal during Sprint Planning?",
        options: [
          {
            id: 1,
            text: "The Product Owner drafts it, and the Scrum Team finalizes it collaboratively.",
          },
          {
            id: 2,
            text: "The Scrum Master creates it to ensure it aligns with agile principles.",
          },
          {
            id: 3,
            text: "The Developers dictate it based on their technical capacity.",
          },
          {
            id: 4,
            text: "Management assigns it based on organizational KPIs.",
          },
        ],
        correctAnswer: 1,
      },
      {
        id: "ex6-3",
        question:
          "What is the maximum timebox for Sprint Planning for a one-month Sprint?",
        options: [
          { id: 1, text: "4 hours." },
          { id: 2, text: "8 hours." },
          { id: 3, text: "2 days." },
          { id: 4, text: "There is no timebox; it takes as long as needed." },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex6-4",
        question: "Which three topics are addressed during Sprint Planning?",
        options: [
          { id: 1, text: "Who, What, and When?" },
          {
            id: 2,
            text: "Why is this Sprint valuable? What can be Done this Sprint? How will the chosen work get done?",
          },
          { id: 3, text: "Budget, Scope, and Schedule." },
          { id: 4, text: "Risks, Issues, and Dependencies." },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex6-5",
        question: "Can changes be made during a Sprint?",
        options: [
          {
            id: 1,
            text: "No, the Sprint Backlog is frozen once the Sprint begins.",
          },
          {
            id: 2,
            text: "Yes, but only changes that do not endanger the Sprint Goal.",
          },
          {
            id: 3,
            text: "Yes, the Product Owner can change the Sprint Goal at any time.",
          },
          { id: 4, text: "Yes, but only with the CEO's approval." },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "7",
    title: "Lesson 7: Daily Scrum, Review & Retrospective",
    content:
      "The Daily Scrum is a 15-minute event for Developers to inspect progress toward the Sprint Goal and adapt the plan for the next 24 hours. The Sprint Review is the second to last event of the Sprint, where the Scrum Team and stakeholders review what was accomplished and collaborate on what to do next. The Sprint Retrospective concludes the Sprint, focusing on inspecting individuals, interactions, processes, and tools, and planning ways to increase quality and effectiveness.",
    iconName: "SyncOutlined",
    exercises: [
      {
        id: "ex7-1",
        question:
          "The Product Owner and Scrum Master are attending the Daily Scrum and asking Developers for task status updates. Is this appropriate?",
        options: [
          {
            id: 1,
            text: "Yes, it is for the entire Scrum Team to sync on status.",
          },
          {
            id: 2,
            text: "No. If they attend, they simply observe; the event is for the Developers to coordinate their own work.",
          },
          {
            id: 3,
            text: "Yes, but only the Scrum Master should ask for updates to keep the timebox.",
          },
          { id: 4, text: "No, they are strictly forbidden from attending." },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex7-2",
        question: "Which of the following best describes the Sprint Review?",
        options: [
          {
            id: 1,
            text: "A formal presentation to management to secure funding for the next Sprint.",
          },
          {
            id: 2,
            text: "A working session to inspect the Increment and adapt the Product Backlog.",
          },
          {
            id: 3,
            text: "A meeting strictly for demonstrating the software to the Quality Assurance team.",
          },
          {
            id: 4,
            text: "A time for the team to discuss internal conflicts and process improvements.",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex7-3",
        question:
          "What is the most actionable output of the Sprint Retrospective?",
        options: [
          { id: 1, text: "A finalized Increment ready for production." },
          { id: 2, text: "A revised version of the Product Goal." },
          {
            id: 3,
            text: "Identified improvements that may even be added to the Sprint Backlog for the next Sprint.",
          },
          {
            id: 4,
            text: "A performance report detailing individual Developer metrics.",
          },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex7-4",
        question: "What is the primary purpose and timebox of the Daily Scrum?",
        options: [
          {
            id: 1,
            text: "A 15-minute event for Developers to inspect progress toward the Sprint Goal and adapt the plan.",
          },
          { id: 2, text: "A 30-minute status meeting for the Product Owner." },
          {
            id: 3,
            text: "A 15-minute meeting to resolve all technical impediments.",
          },
          { id: 4, text: "A 45-minute planning session for the next Sprint." },
        ],
        correctAnswer: 1,
      },
      {
        id: "ex7-5",
        question: "Who participates in the Sprint Retrospective?",
        options: [
          { id: 1, text: "Only the Developers." },
          { id: 2, text: "The Developers and the Scrum Master." },
          { id: 3, text: "The entire Scrum Team." },
          { id: 4, text: "The Scrum Team and key stakeholders." },
        ],
        correctAnswer: 3,
      },
    ],
  },
  {
    id: "8",
    title: "Lesson 8: Artifacts & Commitments",
    content:
      "Scrum's artifacts are the Product Backlog, Sprint Backlog, and Increment. They are designed to maximize transparency of key information. Each artifact contains a commitment to ensure it provides information that enhances focus against which progress can be measured. The Product Backlog commits to the Product Goal. The Sprint Backlog commits to the Sprint Goal. The Increment commits to the Definition of Done.",
    iconName: "CheckSquareOutlined",
    exercises: [
      {
        id: "ex8-1",
        question:
          "Multiple Scrum Teams are working on the same product. How should they handle the Definition of Done?",
        options: [
          {
            id: 1,
            text: "Each team must have their own unique Definition of Done.",
          },
          {
            id: 2,
            text: "They must mutually define and comply with the same Definition of Done for the product.",
          },
          {
            id: 3,
            text: "The Scrum Masters merge the definitions at the end of the Sprint.",
          },
          {
            id: 4,
            text: "The Product Owner assigns a different Definition to each team.",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex8-2",
        question:
          "What happens if a Product Backlog item does not meet the Definition of Done by the end of the Sprint?",
        options: [
          {
            id: 1,
            text: "It is presented at the Sprint Review as a work in progress.",
          },
          {
            id: 2,
            text: "It cannot be released and is returned to the Product Backlog for future consideration.",
          },
          {
            id: 3,
            text: "The Sprint is extended until the item meets the definition.",
          },
          {
            id: 4,
            text: "It is automatically moved into the next Sprint Backlog.",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "ex8-3",
        question:
          "Which commitment provides the long-term objective for the Scrum Team and is found in the Product Backlog?",
        options: [
          { id: 1, text: "The Sprint Goal." },
          { id: 2, text: "The Definition of Done." },
          { id: 3, text: "The Vision Statement." },
          { id: 4, text: "The Product Goal." },
        ],
        correctAnswer: 4,
      },
      {
        id: "ex8-4",
        question:
          "What is the specific commitment associated with the Sprint Backlog?",
        options: [
          { id: 1, text: "The Product Goal" },
          { id: 2, text: "The Definition of Done" },
          { id: 3, text: "The Sprint Goal" },
          { id: 4, text: "The Release Plan" },
        ],
        correctAnswer: 3,
      },
      {
        id: "ex8-5",
        question:
          "What is the primary reason Scrum defines specific artifacts?",
        options: [
          { id: 1, text: "To ensure detailed documentation of all features." },
          { id: 2, text: "To maximize transparency of key information." },
          { id: 3, text: "To provide a clear audit trail for management." },
          { id: 4, text: "To track individual developer performance." },
        ],
        correctAnswer: 2,
      },
    ],
  },
];

export const fetchLessons = async (): Promise<Lesson[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(comprehensiveLessons), 800);
  });
};
