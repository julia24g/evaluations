const questionData = [
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do they demonstrate fundamental design skills (e.g. KISS, DRY, basic patterns, new components, extending existing modules, services, frameworks and/or APIs, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 0
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do their designs appropriately address all functional requirements?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 1
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do their designs appropriately address non-functional requirements (e.g PHI/PII, security, safety, usability, performance, reliability, maintainability, testability, scalabilty)?",
        "relatedPEOCapabilities": "Shift Left on Security/Customer Feedback",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 2
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do their designs include support for on demand, automated deployment of the product?",
        "relatedPEOCapabilities": "Deployment Automation/Continuous Delivery",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 3
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do they consider alternatives, constraints, assumptions, dependencies, risks and costs in their designs?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 4
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do they research and recommend implementation strategies for their designs that seek to deliver value early and often (e.g. staged deployments,  feature flagging, etc.)?",
        "relatedPEOCapabilities": "Working in Small Batches/Team Experimentation",
        "relatedPEOBehaviours": "Agile",
        "role": "Software Engineer",
        "key": 5
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do they take a holistic view of architecture and design to ensure consistency, correctness and completeness within the team's technical domain?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 6
    },
    {
        "category": "Architecture & Design",
        "level": "Senior",
        "question": "Do they demonstrate advanced design skills (e.g. advanced patterns, DB design, new modules, services, frameworks and/or APIs, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 7
    },
    {
        "category": "Architecture & Design",
        "level": "Senior",
        "question": "Do others in the team seek out their knowledge and experience to help solve complex design problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 8
    },
    {
        "category": "Architecture & Design",
        "level": "Senior",
        "question": "Do their designs incorporate service resilience (e.g. FMEA)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 9
    },
    {
        "category": "Architecture & Design",
        "level": "Senior",
        "question": "Do they research and recommend appropriate new technologies and architectures to support their designs?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 10
    },
    {
        "category": "Architecture & Design",
        "level": "Senior",
        "question": "Do they take on, and solve, the hardest design problems within the team?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 11
    },
    {
        "category": "Architecture & Design",
        "level": "Principal",
        "question": "Do they demonstrate superior design skills (e.g. entirely new applications, ORM, service infrastructure, reusable frameworks and/or APIs, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 12
    },
    {
        "category": "Architecture & Design",
        "level": "Principal",
        "question": "Do others in the organization seek out their knowledge and experience to help solve complex design problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 13
    },
    {
        "category": "Architecture & Design",
        "level": "Principal",
        "question": "Do they take on, and solve, the hardest design problems across teams?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 14
    },
    {
        "category": "",
        "level": "Consulting",
        "question": "Do they provide technical leadership and guidance to engineering teams tasked with particularly demanding technical requirements?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 15
    },
    {
        "category": "",
        "level": "Consulting",
        "question": "Do they provide guidance and initial design for key system components for architecturally strategic projects? ",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 16
    },
    {
        "category": "",
        "level": "Consulting",
        "question": "Do they ensure, thorough, well-researched architectural recommendations, are provided for major projects?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 17
    },
    {
        "category": "",
        "level": "Consulting",
        "question": "Do they have a proven track record of designing solutions and reusable frameworks that form the foundation for future production systems? ",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 18
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they demonstrate fundamental coding skills (e.g. OOP, small scale refactoring, data structures, REST, KISS, DRY, SOLID, basic patterns, threading, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 19
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they make appropriate use of third party frameworks, components and/or libraries in their code to solve problems and accelerate development?",
        "relatedPEOCapabilities": "Open Source Usage",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 20
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they make frequent, small and incremental code changes that have minimal impact on other developers or features?",
        "relatedPEOCapabilities": "Working in Small Batches",
        "relatedPEOBehaviours": "Agile",
        "role": "Software Engineer",
        "key": 21
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they write maintainable code that is well documented and includes appropriate logging?",
        "relatedPEOCapabilities": "Maintainability",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 22
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they write resilient code that accounts for edge cases and uses appropriate error handling and/or error recovery strategies?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 23
    },
    {
        "category": "Coding",
        "level": "Senior",
        "question": "Do they demonstrate advanced coding skills (e.g. large scale refactoring, defensive programming, parallel processing, optimization, TDD, advanced patterns, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 24
    },
    {
        "category": "Coding",
        "level": "Senior",
        "question": "Do others in the team seek out their knowledge and experience to help solve complex coding problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 25
    },
    {
        "category": "Coding",
        "level": "Senior",
        "question": "Do they take on, and solve, the hardest coding problems within the team?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 26
    },
    {
        "category": "Coding",
        "level": "Senior",
        "question": "Do they write clean and efficient code with clear flows and appropriate levels of abstraction?  ",
        "relatedPEOCapabilities": "Maintainability",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 27
    },
    {
        "category": "Coding",
        "level": "Principal",
        "question": "Do they demonstrate superior coding skills (e.g. shared library development, platform and service frameworks, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 28
    },
    {
        "category": "Coding",
        "level": "Principal",
        "question": "Do others in the organization seek out their knowledge and experience to help solve complex coding problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 29
    },
    {
        "category": "Coding",
        "level": "Principal",
        "question": "Do they take on, and solve, the hardest coding problems across teams?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 30
    },
    {
        "category": "",
        "level": "Consulting",
        "question": "Does their code provide a foundation for future production systems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 31
    },
    {
        "category": "",
        "level": "Consulting",
        "question": "Do they code in a way that supports complex interoperability requirements? ",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 32
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do they demonstrate fundamental testing skills (e.g. E2E UI automation, unit testing, load and performance testing, test management tools, etc.)?",
        "relatedPEOCapabilities": "Maintainability/Test Automation/Continuous Integration",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 33
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do their tests account for all expected scenarios, configurations and boundary conditions?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 34
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do they invest the effort to identify and resolve \"flaky\" automation tests  (due to inconsistent assertion timing, over reliance on test order, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 35
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do they raise issues (e.g. Defects) while verifying and validating functionality against product requirements?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 36
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do they find Critical/High severity defects through exploratory and/or ad-hoc testing?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 37
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they demonstrate advanced testing skills (e.g. whitebox testing, usability testing, integration testing, multiple test frameworks, distributed systems, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 38
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they use test management tools or dashboards to identify, measure, manage and prioritize team module automation gaps?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 39
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they lead or contribute to database related investigations?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 40
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they provide technical guidance on performance testing strategies for functionality under test?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 41
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they participate in Planned/Emergency Production deployments and conduct before and after metrics reviews?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 42
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they lead the team in creating automation tests for their technical domain (i.e. unit, integration, E2E etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 43
    },
    {
        "category": "Testing",
        "level": "Principal",
        "question": "Do they demonstrate superior testing skills?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 44
    },
    {
        "category": "Testing",
        "level": "Principal",
        "question": "Do they introduce and/or recommend effective frameworks, solutions or testing strategies to resolve common challenges across teams?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 45
    },
    {
        "category": "Testing",
        "level": "Principal",
        "question": "Do others in the organization seek out their knowledge and experience to help solve complex testing problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 46
    },
    {
        "category": "Testing",
        "level": "Principal",
        "question": "Do they take on, and solve, the hardest testing problems across teams?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 47
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "Do they identify and analyze complex issues and determine the root cause in a timely manner and communicate the impact?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 48
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "Do they develop alternate solutions for an issue and select the most effective one for implementation?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 49
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "Do they demonstrate competence with basic debugging tools like logging, source code inspection to find where problems were introduced along with manual reproduction to isolate and analyze problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 50
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "Do they demonstrate competence with intermediate debugging tools like debuggers and inspectors to isolate and analyze problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 51
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "When debugging, designing a solution or performing review for others, do they identify opportunities to make solutions easier to troubleshoot and add them to the backlog for prioritization?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 52
    },
    {
        "category": "Debugging",
        "level": "Senior",
        "question": "Do they demonstrate competence with advanced debugging tools like core dumps, memory analyzers and automation to isolate and analyze problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 53
    },
    {
        "category": "Debugging",
        "level": "Senior",
        "question": "Do they demonstrate competence with preventative debugging tools like static analysis, fuzzers, dynamic symbol execution to prevent future problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 54
    },
    {
        "category": "Domain Knowledge",
        "level": "Intermediate",
        "question": "Are their designs, code and tests complete in that they identify and address all scenarios, use cases, boundary conditions and dependencies in the impacted technical domains?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 55
    },
    {
        "category": "Domain Knowledge",
        "level": "Intermediate",
        "question": "Do they contribute well thought out estimates to stories or initiatives in their technical domains and consider all aspects of the effort involved including development and testing efforts, non-functional requirements, dependencies, assumptions, contraints and risks? ",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 56
    },
    {
        "category": "Domain Knowledge",
        "level": "Senior",
        "question": "Are they seen as a recognized expert (SME) for one or more technical domains?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 57
    },
    {
        "category": "Domain Knowledge",
        "level": "Senior",
        "question": "Do they create and maintain accurate and appropriate documentation relating to the technical domains they have expertise in?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 58
    },
    {
        "category": "Domain Knowledge",
        "level": "Senior",
        "question": "Do they provide useful and timely technical domain guidance for the team during requirements gathering, design, development, testing, deployment and maintenance?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 59
    },
    {
        "category": "Domain Knowledge",
        "level": "Principal",
        "question": "Do they provide useful and timely technical domain guidance across teams during requirements gathering, design, development, testing, deployment and maintenance?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 60
    },
    {
        "category": "Product Knowledge",
        "level": "Intermediate",
        "question": "Do they take the perspective of the user when developing tests, analyzing requirements, workflows and user interface mockups?",
        "relatedPEOCapabilities": " Customer Feedback",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 61
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they work effectively with the team and product leader to identify the appropriate set of requirements, dependencies and priorties, challenge assumptions and call out and resolve any gaps?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 62
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they take a holistic view of the products when analyzing requirements in order to identify and resolve inconsistencies and incomplete/incorrect functionality?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 63
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Are they able to answer questions around product use cases, workflows and personas without consulting a product leader every time?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 64
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Are they able to articulate the business goals achieved and the value proposition for the requirements they are working on?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 65
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Are they seen as a recognized expert (SME) for one or more products?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 66
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they create and maintain accurate and appropriate documentation relating to the products they have expertise in?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 67
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they identify and propose improvements to workflows and user experience for the products they are working on?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 68
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they provide useful and timely product guidance for the team during requirements gathering, design, development, testing, deployment and maintenance?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 69
    },
    {
        "category": "Product Knowledge",
        "level": "Principal",
        "question": "Do they provide useful and timely product guidance across teams during requirements gathering, design, development, testing, deployment and maintenance?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 70
    },
    {
        "category": "Security",
        "level": "Intermediate",
        "question": "Do they complete organizationally mandated security training in a timely manner (e.g. SSDLC, OWASP, policies etc.)?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 71
    },
    {
        "category": "Security",
        "level": "Intermediate",
        "question": "Do they use the available security tools and scans appropriately to identify, record and prioritize security defects in the teams's components, modules, domains and products, pre and post deployment (e.g. Penetration scans, Fortify, SAST, DAST etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 72
    },
    {
        "category": "Security",
        "level": "Senior",
        "question": "Do they \"shift left on security\" by engaging with the team and security SMEs to identify, discuss and and mitigate security risks early in the development process?",
        "relatedPEOCapabilities": "Shift Left on Security",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 73
    },
    {
        "category": "Security",
        "level": "Senior",
        "question": "Do they leverage learning resources (e.g. Thrive, Pluralsight, security team, external sites, etc.) to stay up to date on security policies and concerns?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 74
    },
    {
        "category": "Monitoring & Observability",
        "level": "Intermediate",
        "question": "Do they instrument their work to include support for product health monitoring, alerting, usage and observation (e.g. logging, metrics etc.)?",
        "relatedPEOCapabilities": "Monitoring & Observability/Customer Feedback",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Software Engineer",
        "key": 75
    },
    {
        "category": "Monitoring & Observability",
        "level": "Intermediate",
        "question": "Do they monitor for product alerts, test and build failures and either resolve them or escalate them?",
        "relatedPEOCapabilities": "Proactive Notification/Continuous Delivery/Continuous Integration",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 76
    },
    {
        "category": "Monitoring & Observability",
        "level": "Senior",
        "question": "Do they collect data (e.g. alerts, AppD, Datadog, Pendo, performance metrics etc.) and analyze it to provide insights on SLA performance, patterns, quality and solution effectiveness? ",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Software Engineer",
        "key": 77
    },
    {
        "category": "Monitoring & Observability",
        "level": "Senior",
        "question": "Do they effectively drive and/or lead initiatives to implement the changes required to make improvements or resolve issues identified through monitoring?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Continuous Learners",
        "role": "Software Engineer",
        "key": 78
    },
    {
        "category": "Data Driven",
        "level": "Intermediate",
        "question": "Do they ask relevant questions about how they can gather data and facts to drive their conclusions?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Software Engineer",
        "key": 79
    },
    {
        "category": "Data Driven",
        "level": "Intermediate",
        "question": "Do they form a hypothesis or assertion and test them before commiting to solutions (e.g. experiments, POCs and/or mockups, etc.)?",
        "relatedPEOCapabilities": "Team Experimentation/Customer Feedback",
        "relatedPEOBehaviours": "Data-driven/Experimental",
        "role": "Software Engineer",
        "key": 80
    },
    {
        "category": "Data Driven",
        "level": "Intermediate",
        "question": "Do they communicate and seek out data to support their research (e.g. interviews, POCs and/or mockups, etc.)?",
        "relatedPEOCapabilities": "Team Experimentation/Customer Feedback",
        "relatedPEOBehaviours": "Data-driven/Experimental",
        "role": "Software Engineer",
        "key": 81
    },
    {
        "category": "Data Driven",
        "level": "Senior",
        "question": "Are they consistently using evidence-driven approaches to drive discussions and decisions on the team?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Software Engineer",
        "key": 82
    },
    {
        "category": "Data Driven",
        "level": "Senior",
        "question": "Are they performing data analysis and drawing conclusions and insights that are shared with others?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven/Transparent",
        "role": "Software Engineer",
        "key": 83
    },
    {
        "category": "Data Driven",
        "level": "Principal",
        "question": "Do they model and analyze comprehensive data and formulate \"what-if\" scenarios?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Software Engineer",
        "key": 84
    },
    {
        "category": "Networking",
        "level": "Intermediate",
        "question": "Do they cultivate relationships with their team mates, peers, SMEs, manager and stakeholders (e.g. Product Leader)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 85
    },
    {
        "category": "Networking",
        "level": "Intermediate",
        "question": "Do they leverage their network of contacts and SMEs to help answer questions, solve problems, unblock and generally accelerate development?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 86
    },
    {
        "category": "Networking",
        "level": "Senior",
        "question": "Do they cultivate relationships with both technical and business contacts at all levels within the organization  (e.g. peers, SMEs, other teams, management, Product, SaasOps, DevOps, Support, Professional Services, Security, Legal etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 87
    },
    {
        "category": "Networking",
        "level": "Senior",
        "question": "Do they introduce team members to the contacts and SMEs in their network and help them navigate who to contact and when?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 88
    },
    {
        "category": "Networking",
        "level": "Principal",
        "question": "Do they cultivate relationships with both technical and business contacts at all levels outside of the organization (e.g. vendors, customers, consultants etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 89
    },
    {
        "category": "Networking",
        "level": "Consulting",
        "question": "Do they build, maintain relationships with stakeholders and can represent the organization externally?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 90
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Are people comfortable working with them?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 91
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Can the team rely on them to keep their commitments?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Accountable/Results-driven",
        "role": "Software Engineer",
        "key": 92
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they provide help when requested and do they ask for help to unblock themselves?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 93
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they communicate the right progress information at the right time?\n",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Accountable/Transparent",
        "role": "Software Engineer",
        "key": 94
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they consistently attend and engage positively in team meetings and team discussions (e.g. grooming, planning, review, retrospective etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent/Agile/Continuous Learners/Courageous",
        "role": "Software Engineer",
        "key": 95
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they contribute meaningful content to team documentation (e.g. team meeting notes, RCAs, feature or design documentation, task lists, work breakdowns, decision logs, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 96
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they engage other team members by asking questions?\n\n",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 97
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they follow-up on previously discussed items as needed in a timely fashion?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Accountable",
        "role": "Software Engineer",
        "key": 98
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they take action items from team discussions and drive them to conclusion?\n",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Accountable/Results-driven",
        "role": "Software Engineer",
        "key": 99
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they work in the open and cultivate a team mentality? ",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 100
    },
    {
        "category": "Collaboration",
        "level": "Senior",
        "question": "Do they work on and contribute to cross team or organizational initiatives?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 101
    },
    {
        "category": "Collaboration",
        "level": "Principal",
        "question": "Do they drive or take on technical leadership roles for large cross team projects or organizational initiatives?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 102
    },
    {
        "category": "",
        "level": "Consulting",
        "question": "Do they lead by example in demonstrating best-in-class behaviors across different levels of the organization?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 103
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Intermediate",
        "question": "Do they ask for, and act on, feedback on their technical deliverables (e.g. code reviews, test plan reviews, design reviews etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Continuous Learners",
        "role": "Software Engineer",
        "key": 104
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Intermediate",
        "question": "Do they ask for, and act on, coaching and feedback on their effectiveness in their role from their manager (e.g. 1:1's, performance discussions etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Continuous Learners",
        "role": "Software Engineer",
        "key": 105
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Intermediate",
        "question": "Do they provide constructive feedback on the work and effectiveness of other team members (e.g. code review, test reviews, design reviews, 1:1's, performance discussions etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 106
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Intermediate",
        "question": "How often do they accelerate discussions or decisions in the team by sharing their experiences, knowledge or insights?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 107
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Senior",
        "question": "Do they effectively lead discussions/learning sessions in order to advance the knowledge and capability of their team and to drive the development and adoption of best practices and to achieve higher standards (e.g. lunch & learns, etc.)?",
        "relatedPEOCapabilities": " Support for Learning",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 108
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Principal",
        "question": "Do they effectively lead discussions/learning sessions in order to advance the knowledge and capability of the organization and to drive the development and adoption of best practices and to achieve higher standards (e.g. training sessions, lunch & learns, etc.)?",
        "relatedPEOCapabilities": " Support for Learning",
        "relatedPEOBehaviours": "Transparent",
        "role": "Software Engineer",
        "key": 109
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Are they courageous in conversations by confronting the brutal facts?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Courageous",
        "role": "Software Engineer",
        "key": 110
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Do they avoid repeat questions, take notes and capture decisions to remember discussions?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 111
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Do they demonstrate active listening by asking clarifying questions and echoing back what they heard?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 112
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Do they present confidently to audiences that include their peers and stakeholders?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 113
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Do they show good judgement and adapt their communication style and content for a mixed audience?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 114
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Is their written and oral communication clear and succinct and presented in a way to maximize understanding?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 115
    },
    {
        "category": "Communication",
        "level": "Senior",
        "question": "Do they facilitate open and honest communication and encourage others to speak up and be heard in the team?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 116
    },
    {
        "category": "Communication",
        "level": "Principal",
        "question": "Do they facilitate open and honest communication and encourage others to speak up and be heard across teams?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 117
    },
    {
        "category": "Communication",
        "level": "Principal",
        "question": "Do they present confidently to audiences that include other teams, stakeholders, executive leaders, vendors and/or customers?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 118
    },
    {
        "category": "Communication",
        "level": "Consulting",
        "question": "Do they communicate technical concepts and decisions effectively to both technical and non-technical stakeholders, and influence decisions effectively across different levels of the organization?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 119
    },
    {
        "category": "Continuous Learning",
        "level": "Intermediate",
        "question": "Do they apply their learning to their work and consistently demonstrate growth in their skills, knowledge and capabilities?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Continuous Learners",
        "role": "Software Engineer",
        "key": 120
    },
    {
        "category": "Continuous Learning",
        "level": "Intermediate",
        "question": "Do they take advantage of professional development and training opportunities offered by the company to maintain and develop their skills (e.g. new assignments, live & recorded training,  tour of duty, webinars, lunch and learns, Thrive, Pluralsight, Skillsoft, O'Reilly, etc.)?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 121
    },
    {
        "category": "Continuous Learning",
        "level": "Senior",
        "question": "Do they independently research and read technical books and journals, attend conferences or training and/or work on personal projects to stay abreast of emerging trends and innovative technologies?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 122
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Intermediate",
        "question": "Do they effectively apply PCC/PEO best practices and the latest organizationally sanctioned technologies, tools, techniques, processes to their work at all stages of the SDLC (i.e. requirements, design, coding, testing, deployment, support)?",
        "relatedPEOCapabilities": "Version Control/Trunk-Based Develpment/Cloud Native/Paas/Database change management/Change approval process/Disaster Recovery Testing/Limit Work in Progress/Value Stream",
        "relatedPEOBehaviours": "Agile",
        "role": "Software Engineer",
        "key": 123
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Intermediate",
        "question": "Do they make meaningful contributions to RCAs and retrospectives and do they use that time effectively for improving the team?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "Continuous Learners/Transparent",
        "role": "Software Engineer",
        "key": 124
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Senior",
        "question": "Do they actively participate in relevant communities of practice (COP) and implement the learnings back in their own team?",
        "relatedPEOCapabilities": "Empowered Teams/Support for Learning",
        "relatedPEOBehaviours": "Continuous Learners/Transparent",
        "role": "Software Engineer",
        "key": 125
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Senior",
        "question": "Do they initiate, drive and/or lead effective initiatives within the team to advance and advocate for improvements in technical platforms and processes in order to improve quality and efficiency and to reduce costs and waste (e.g. retrospectives, RCAs, regression reviews, etc.)?",
        "relatedPEOCapabilities": "Empowered Teams",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 126
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Principal",
        "question": "Do they initiate, drive and/or lead effective initiatives within the organization to advance and advocate for improvements in technical platforms and processes in order to improve quality and efficiency and to reduce costs and waste (e.g. SIs, retrospectives, RCAs, regression reviews, etc.)?",
        "relatedPEOCapabilities": "Empowered Teams",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 127
    },
    {
        "category": "Leadership",
        "level": "Consulting",
        "question": "Do they think strategically and can make decisions that align with the organization's long-term goals?",
        "relatedPEOCapabilities": "Empowered Teams",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 128
    },
    {
        "category": "Leadership",
        "level": "Consulting",
        "question": "Do they provide guidance, mentorship, and leadership to other engineers?",
        "relatedPEOCapabilities": "Empowered Teams",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 129
    },
    {
        "category": "Business Acumen",
        "level": "Consulting",
        "question": "Do they understand the needs of the end customer and strive to deliver high-quality solutions that exceed customer expectations?",
        "relatedPEOCapabilities": "Empowered Teams",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 130
    },
    {
        "category": "Business Acumen",
        "level": "Consulting",
        "question": "Do they have a strong understanding of the business context and can translate technical requirements into business value?",
        "relatedPEOCapabilities": "Empowered Teams",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 131
    },
    {
        "category": "",
        "level": "Consulting",
        "question": "Do they anticipate future technical trends through thorough research and make organisational level recommendations accordingly?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 132
    },
    {
        "category": "",
        "level": "Consulting",
        "question": "Do they take calculated risks, and challenge the status quo to drive innovation in solving existing complex technical problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Software Engineer",
        "key": 133
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do they demonstrate fundamental design skills (e.g. KISS, DRY, basic patterns, new components, extending existing modules, services, frameworks and/or APIs, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 134
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do their designs appropriately address all functional requirements?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 135
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do their designs appropriately address non-functional requirements (e.g PHI/PII, security, safety, usability, performance, reliability, maintainability, testability, scalabilty)?",
        "relatedPEOCapabilities": "Shift Left on Security/Customer Feedback",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 136
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do they consider alternatives, constraints, assumptions, dependencies, risks and costs in their designs?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 137
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do they research and recommend implementation strategies for their designs that seek to deliver value early and often (e.g. staged deployments,  feature flagging, etc.)?",
        "relatedPEOCapabilities": "Working in Small Batches/Team Experimentation",
        "relatedPEOBehaviours": "Agile",
        "role": "Test Engineer",
        "key": 138
    },
    {
        "category": "Architecture & Design",
        "level": "Intermediate",
        "question": "Do they take a holistic view of architecture and design to ensure consistency, correctness and completeness within the team's technical domain?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 139
    },
    {
        "category": "Architecture & Design",
        "level": "Senior",
        "question": "Do they demonstrate advanced design skills (e.g. advanced patterns, DB design, new modules, services, frameworks and/or APIs, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 140
    },
    {
        "category": "Architecture & Design",
        "level": "Senior",
        "question": "Do others in the team seek out their knowledge and experience to help solve complex design problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 141
    },
    {
        "category": "Architecture & Design",
        "level": "Senior",
        "question": "Do they research and recommend appropriate new technologies and architectures to support their designs?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 142
    },
    {
        "category": "Architecture & Design",
        "level": "Senior",
        "question": "Do they take on, and solve, the hardest design problems within the team?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 143
    },
    {
        "category": "Architecture & Design",
        "level": "Principal",
        "question": "Do they demonstrate superior design skills (e.g. entirely new applications, ORM, service infrastructure, reusable frameworks and/or APIs, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 144
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they demonstrate fundamental coding skills (e.g. OOP, small scale refactoring, data structures, REST, KISS, DRY, SOLID, basic patterns, threading, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 145
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they make appropriate use of third party frameworks, components and/or libraries in their code to solve problems and accelerate development?",
        "relatedPEOCapabilities": "Open Source Usage",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 146
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they make frequent, small and incremental code changes that have minimal impact on other developers or features?",
        "relatedPEOCapabilities": "Working in Small Batches",
        "relatedPEOBehaviours": "Agile",
        "role": "Test Engineer",
        "key": 147
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they write maintainable code that is well documented and includes appropriate logging?",
        "relatedPEOCapabilities": "Maintainability",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 148
    },
    {
        "category": "Coding",
        "level": "Intermediate",
        "question": "Do they write resilient code that accounts for edge cases and uses appropriate error handling and/or error recovery strategies?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 149
    },
    {
        "category": "Coding",
        "level": "Senior",
        "question": "Do they demonstrate advanced coding skills (e.g. large scale refactoring, defensive programming, parallel processing, optimization, TDD, advanced patterns, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 150
    },
    {
        "category": "Coding",
        "level": "Senior",
        "question": "Do others in the team seek out their knowledge and experience to help solve complex coding problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 151
    },
    {
        "category": "Coding",
        "level": "Senior",
        "question": "Do they take on, and solve, the hardest coding problems within the team?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 152
    },
    {
        "category": "Coding",
        "level": "Senior",
        "question": "Do they write clean and efficient code with clear flows and appropriate levels of abstraction?  ",
        "relatedPEOCapabilities": "Maintainability",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 153
    },
    {
        "category": "Coding",
        "level": "Principal",
        "question": "Do they demonstrate superior coding skills (e.g. shared library development, platform and service frameworks, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 154
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do they demonstrate fundamental testing skills (e.g. E2E UI automation, unit testing, load and performance testing, test management tools, etc.)?",
        "relatedPEOCapabilities": "Maintainability/Test Automation/Continuous Integration",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 155
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do their tests account for all expected scenarios, configurations and boundary conditions?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 156
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do they invest the effort to identify and resolve \"flaky\" automation tests  (due to inconsistent assertion timing, over reliance on test order, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 157
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do they raise issues (e.g. Defects) while verifying and validating functionality against product requirements?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 158
    },
    {
        "category": "Testing",
        "level": "Intermediate",
        "question": "Do they find Critical/High severity defects through exploratory and/or ad-hoc testing?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 159
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they demonstrate advanced testing skills (e.g. whitebox testing, usability testing, integration testing, multiple test frameworks, distributed systems, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 160
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they use test management tools or dashboards to identify, measure, manage and prioritize team module automation gaps?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 161
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they lead or contribute to database related investigations?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 162
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they provide technical guidance on performance testing strategies for functionality under test?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 163
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they participate in Planned/Emergency Production deployments and conduct before and after metrics reviews?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 164
    },
    {
        "category": "Testing",
        "level": "Senior",
        "question": "Do they lead the team in creating automation tests for their technical domain (i.e. unit, integration, E2E etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 165
    },
    {
        "category": "Testing",
        "level": "Principal",
        "question": "Do they demonstrate superior testing skills?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 166
    },
    {
        "category": "Testing",
        "level": "Principal",
        "question": "Do they introduce and/or recommend effective frameworks, solutions or testing strategies to resolve common challenges across teams?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 167
    },
    {
        "category": "Testing",
        "level": "Principal",
        "question": "Do others in the organization seek out their knowledge and experience to help solve complex testing problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 168
    },
    {
        "category": "Testing",
        "level": "Principal",
        "question": "Do they take on, and solve, the hardest testing problems across teams?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 169
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "Do they identify and analyze complex issues and determine the root cause in a timely manner and communicate the impact?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 170
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "Do they develop alternate solutions for an issue and select the most effective one for implementation?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 171
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "Do they demonstrate competence with basic debugging tools like logging, source code inspection to find where problems were introduced along with manual reproduction to isolate and analyze problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 172
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "Do they demonstrate competence with intermediate debugging tools like debuggers and inspectors to isolate and analyze problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 173
    },
    {
        "category": "Debugging",
        "level": "Intermediate",
        "question": "When debugging, designing a solution or performing review for others, do they identify opportunities to make solutions easier to troubleshoot and add them to the backlog for prioritization?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 174
    },
    {
        "category": "Debugging",
        "level": "Senior",
        "question": "Do they demonstrate competence with advanced debugging tools like core dumps, memory analyzers and automation to isolate and analyze problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 175
    },
    {
        "category": "Debugging",
        "level": "Senior",
        "question": "Do they demonstrate competence with preventative debugging tools like static analysis, fuzzers, dynamic symbol execution to prevent future problems?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 176
    },
    {
        "category": "Domain Knowledge",
        "level": "Intermediate",
        "question": "Are their designs, code and tests complete in that they identify and address all scenarios, use cases, boundary conditions and dependencies in the impacted technical domains?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 177
    },
    {
        "category": "Domain Knowledge",
        "level": "Intermediate",
        "question": "Do they contribute well thought out estimates to stories or initiatives in their technical domains and consider all aspects of the effort involved including development and testing efforts, non-functional requirements, dependencies, assumptions, contraints and risks? ",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 178
    },
    {
        "category": "Domain Knowledge",
        "level": "Senior",
        "question": "Are they seen as a recognized expert (SME) for one or more technical domains?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 179
    },
    {
        "category": "Domain Knowledge",
        "level": "Senior",
        "question": "Do they create and maintain accurate and appropriate documentation relating to the technical domains they have expertise in?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 180
    },
    {
        "category": "Domain Knowledge",
        "level": "Senior",
        "question": "Do they provide useful and timely technical domain guidance for the team during requirements gathering, design, development, testing, deployment and maintenance?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 181
    },
    {
        "category": "Domain Knowledge",
        "level": "Principal",
        "question": "Do they provide useful and timely technical domain guidance across teams during requirements gathering, design, development, testing, deployment and maintenance?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 182
    },
    {
        "category": "Product Knowledge",
        "level": "Intermediate",
        "question": "Do they take the perspective of the user when developing tests, analyzing requirements, workflows and user interface mockups?",
        "relatedPEOCapabilities": " Customer Feedback",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 183
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they work effectively with the team and product leader to identify the appropriate set of requirements, dependencies and priorties, challenge assumptions and call out and resolve any gaps?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 184
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they take a holistic view of the products when analyzing requirements in order to identify and resolve inconsistencies and incomplete/incorrect functionality?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 185
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Are they able to answer questions around product use cases, workflows and personas without consulting a product leader every time?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 186
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Are they able to articulate the business goals achieved and the value proposition for the requirements they are working on?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 187
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Are they seen as a recognized expert (SME) for one or more products?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 188
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they create and maintain accurate and appropriate documentation relating to the products they have expertise in?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 189
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they identify and propose improvements to workflows and user experience for the products they are working on?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 190
    },
    {
        "category": "Product Knowledge",
        "level": "Senior",
        "question": "Do they provide useful and timely product guidance for the team during requirements gathering, design, development, testing, deployment and maintenance?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 191
    },
    {
        "category": "Product Knowledge",
        "level": "Principal",
        "question": "Do they provide useful and timely product guidance across teams during requirements gathering, design, development, testing, deployment and maintenance?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 192
    },
    {
        "category": "Security",
        "level": "Intermediate",
        "question": "Do they complete organizationally mandated security training in a timely manner (e.g. SSDLC, OWASP, policies etc.)?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 193
    },
    {
        "category": "Security",
        "level": "Intermediate",
        "question": "Do they use the available security tools and scans appropriately to identify, record and prioritize security defects in the teams's components, modules, domains and products, pre and post deployment (e.g. Penetration scans, Fortify, SAST, DAST etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 194
    },
    {
        "category": "Security",
        "level": "Senior",
        "question": "Do they \"shift left on security\" by engaging with the team and security SMEs to identify, discuss and and mitigate security risks early in the development process?",
        "relatedPEOCapabilities": "Shift Left on Security",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 195
    },
    {
        "category": "Security",
        "level": "Senior",
        "question": "Do they leverage learning resources (e.g. Thrive, Pluralsight, security team, external sites, etc.) to stay up to date on security policies and concerns?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 196
    },
    {
        "category": "Monitoring & Observability",
        "level": "Intermediate",
        "question": "Do they instrument their work to include support for product health monitoring, alerting, usage and observation (e.g. logging, metrics etc.)?",
        "relatedPEOCapabilities": "Monitoring & Observability/Customer Feedback",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Test Engineer",
        "key": 197
    },
    {
        "category": "Monitoring & Observability",
        "level": "Intermediate",
        "question": "Do they monitor for product alerts, test and build failures and either resolve them or escalate them?",
        "relatedPEOCapabilities": "Proactive Notification/Continuous Delivery/Continuous Integration",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 198
    },
    {
        "category": "Monitoring & Observability",
        "level": "Senior",
        "question": "Do they collect data (e.g. alerts, AppD, Datadog, Pendo, performance metrics etc.) and analyze it to provide insights on SLA performance, patterns, quality and solution effectiveness? ",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Test Engineer",
        "key": 199
    },
    {
        "category": "Monitoring & Observability",
        "level": "Senior",
        "question": "Do they effectively drive and/or lead initiatives to implement the changes required to make improvements or resolve issues identified through monitoring?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Continuous Learners",
        "role": "Test Engineer",
        "key": 200
    },
    {
        "category": "Data Driven",
        "level": "Intermediate",
        "question": "Do they ask relevant questions about how they can gather data and facts to drive their conclusions?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Test Engineer",
        "key": 201
    },
    {
        "category": "Data Driven",
        "level": "Intermediate",
        "question": "Do they form a hypothesis or assertion and test them before commiting to solutions (e.g. experiments, POCs and/or mockups, etc.)?",
        "relatedPEOCapabilities": "Team Experimentation/Customer Feedback",
        "relatedPEOBehaviours": "Data-driven/Experimental",
        "role": "Test Engineer",
        "key": 202
    },
    {
        "category": "Data Driven",
        "level": "Intermediate",
        "question": "Do they communicate and seek out data to support their research (e.g. interviews, POCs and/or mockups, etc.)?",
        "relatedPEOCapabilities": "Team Experimentation/Customer Feedback",
        "relatedPEOBehaviours": "Data-driven/Experimental",
        "role": "Test Engineer",
        "key": 203
    },
    {
        "category": "Data Driven",
        "level": "Senior",
        "question": "Are they consistently using evidence-driven approaches to drive discussions and decisions on the team?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Test Engineer",
        "key": 204
    },
    {
        "category": "Data Driven",
        "level": "Senior",
        "question": "Are they performing data analysis and drawing conclusions and insights that are shared with others?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven/Transparent",
        "role": "Test Engineer",
        "key": 205
    },
    {
        "category": "Data Driven",
        "level": "Principal",
        "question": "Do they model and analyze comprehensive data and formulate \"what-if\" scenarios?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Data-driven",
        "role": "Test Engineer",
        "key": 206
    },
    {
        "category": "Networking",
        "level": "Intermediate",
        "question": "Do they cultivate relationships with their team mates, peers, SMEs, manager and stakeholders (e.g. Product Leader)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 207
    },
    {
        "category": "Networking",
        "level": "Intermediate",
        "question": "Do they leverage their network of contacts and SMEs to help answer questions, solve problems, unblock and generally accelerate development?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 208
    },
    {
        "category": "Networking",
        "level": "Senior",
        "question": "Do they cultivate relationships with both technical and business contacts at all levels within the organization  (e.g. peers, SMEs, other teams, management, Product, SaasOps, DevOps, Support, Professional Services, Security, Legal etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 209
    },
    {
        "category": "Networking",
        "level": "Senior",
        "question": "Do they introduce team members to the contacts and SMEs in their network and help them navigate who to contact and when?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 210
    },
    {
        "category": "Networking",
        "level": "Principal",
        "question": "Do they cultivate relationships with both technical and business contacts at all levels outside of the organization (e.g. vendors,  customers, consultants etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 211
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Are people comfortable working with them?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 212
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Can the team rely on them to keep their commitments?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Accountable/Results-driven",
        "role": "Test Engineer",
        "key": 213
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they provide help when requested and do they ask for help to unblock themselves?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 214
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they communicate the right progress information at the right time?\n",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Accountable/Transparent",
        "role": "Test Engineer",
        "key": 215
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they consistently attend and engage positively in team meetings and team discussions (e.g. grooming, planning, review, retrospective etc.)",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent/Agile/Continuous Learners/Courageous",
        "role": "Test Engineer",
        "key": 216
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they contribute meaningful content to team documentation (e.g. team meeting notes, RCAs, feature or design documentation, task lists, work breakdowns, decision logs, etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 217
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they engage other team members by asking questions?\n\n",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 218
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they follow-up on previously discussed items as needed in a timely fashion?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Accountable",
        "role": "Test Engineer",
        "key": 219
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they take action items from team discussions and drive them to conclusion?\n",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Accountable/Results-driven",
        "role": "Test Engineer",
        "key": 220
    },
    {
        "category": "Collaboration",
        "level": "Intermediate",
        "question": "Do they work in the open and cultivate a team mentality? ",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 221
    },
    {
        "category": "Collaboration",
        "level": "Senior",
        "question": "Do they work on and contribute to cross team or organizational initiatives?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 222
    },
    {
        "category": "Collaboration",
        "level": "Principal",
        "question": "Do they drive or take on technical leadership roles for large cross team projects or organizational initiatives?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 223
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Intermediate",
        "question": "Do they ask for, and act on, feedback on their technical deliverables (e.g. code reviews, test plan reviews, design reviews etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Continuous Learners",
        "role": "Test Engineer",
        "key": 224
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Intermediate",
        "question": "Do they ask for, and act on, coaching and feedback on their effectiveness in their role from their manager (e.g. 1:1's, performance discussions etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Continuous Learners",
        "role": "Test Engineer",
        "key": 225
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Intermediate",
        "question": "Do they provide constructive feedback on the work and effectiveness of other team members (e.g. code review, test reviews, design reviews, 1:1's, performance discussions etc.)?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 226
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Intermediate",
        "question": "How often do they accelerate discussions or decisions in the team by sharing their experiences, knowledge or insights?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 227
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Senior",
        "question": "Do they effectively lead discussions/learning sessions in order to advance the knowledge and capability of their team and to drive the development and adoption of best practices and to achieve higher standards (e.g. lunch & learns, etc.)?",
        "relatedPEOCapabilities": " Support for Learning",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 228
    },
    {
        "category": "Mentoring & Feedback",
        "level": "Principal",
        "question": "Do they effectively lead discussions/learning sessions in order to advance the knowledge and capability of the organization and to drive the development and adoption of best practices and to achieve higher standards (e.g. training sessions, lunch & learns, etc.)?",
        "relatedPEOCapabilities": " Support for Learning",
        "relatedPEOBehaviours": "Transparent",
        "role": "Test Engineer",
        "key": 229
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Are they courageous in conversations by confronting the brutal facts?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Courageous",
        "role": "Test Engineer",
        "key": 230
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Do they avoid repeat questions, take notes and capture decisions to remember discussions?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 231
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Do they demonstrate active listening by asking clarifying questions and echoing back what they heard?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 232
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Do they present confidently to audiences that include their peers and stakeholders?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 233
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Do they show good judgement and adapt their communication style and content for a mixed audience?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 234
    },
    {
        "category": "Communication",
        "level": "Intermediate",
        "question": "Is their written and oral communication clear and succinct and presented in a way to maximize understanding?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 235
    },
    {
        "category": "Communication",
        "level": "Senior",
        "question": "Do they facilitate open and honest communication and encourage others to speak up and be heard in the team?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 236
    },
    {
        "category": "Communication",
        "level": "Principal",
        "question": "Do they facilitate open and honest communication and encourage others to speak up and be heard across teams?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 237
    },
    {
        "category": "Communication",
        "level": "Principal",
        "question": "Do they present confidently to audiences that include other teams, stakeholders, executive leaders, vendors and/or customers?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 238
    },
    {
        "category": "Continuous Learning",
        "level": "Intermediate",
        "question": "Do they apply their learning to their work and consistently demonstrate growth in their skills, knowledge and capabilities?",
        "relatedPEOCapabilities": "",
        "relatedPEOBehaviours": "Continuous Learners",
        "role": "Test Engineer",
        "key": 239
    },
    {
        "category": "Continuous Learning",
        "level": "Intermediate",
        "question": "Do they take advantage of professional development and training opportunities offered by the company to maintain and develop their skills (e.g. new assignments, live & recorded training,  tour of duty, webinars, lunch and learns, Thrive, Pluralsight, Skillsoft, O'Reilly, etc.)?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 240
    },
    {
        "category": "Continuous Learning",
        "level": "Senior",
        "question": "Do they independently research and read technical books and journals, attend conferences or training and/or work on personal projects to stay abreast of emerging trends and innovative technologies?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 241
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Intermediate",
        "question": "Do they effectively apply PCC/PEO best practices and the latest organizationally sanctioned technologies, tools, techniques, processes to their work at all stages of the SDLC (i.e. requirements, design, coding, testing, deployment, support)?",
        "relatedPEOCapabilities": "Version Control/Trunk-Based Develpment/Cloud Native/Paas/Database change management/Change approval process/Disaster Recovery Testing/Limit Work in Progress/Value Stream",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 242
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Intermediate",
        "question": "Do they make meaningful contributions to RCAs and retrospectives and do they use that time effectively for improving the team?",
        "relatedPEOCapabilities": "Support for Learning",
        "relatedPEOBehaviours": "Continuous Learners/Transparent",
        "role": "Test Engineer",
        "key": 243
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Senior",
        "question": "Do they actively participate in relevant communities of practice (COP) and implement the learnings back in their own team?",
        "relatedPEOCapabilities": "Empowered Teams/Support for Learning",
        "relatedPEOBehaviours": "Continuous Learners/Transparent",
        "role": "Test Engineer",
        "key": 244
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Senior",
        "question": "Do they initiate, drive and/or lead effective initiatives within the team to advance and advocate for improvements in technical platforms and processes in order to improve quality and efficiency and to reduce costs and waste (e.g. retrospectives, RCAs, regression reviews, etc.)?",
        "relatedPEOCapabilities": "Empowered Teams",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 245
    },
    {
        "category": "Process & Continuous Improvement",
        "level": "Principal",
        "question": "Do they initiate, drive and/or lead effective initiatives within the organization to advance and advocate for improvements in technical platforms and processes in order to improve quality and efficiency and to reduce costs and waste (e.g. SIs, retrospectives, RCAs, regression reviews, etc.)?",
        "relatedPEOCapabilities": "Empowered Teams",
        "relatedPEOBehaviours": "",
        "role": "Test Engineer",
        "key": 246
    }
]

export default questionData;