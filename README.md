# API Endpoints

## Authentication

 - `POST /api/user/register` with { email, username, firstname, lastname, password } for new user registration.

- `POST /api/user/login` with { username, password } for user login

- `POST /api/user/whoami` with { userID } to fetch user details

## Questions

- `GET /api/question/ten` to fetch class 10 test questions

- `GET /api/question/twelve` to fetch class 12 test questions

- `GET /api/question/btech` to fetch btech test questions

- `GET /api/question/graduate` to fetch graduate test questions

## Result

- `PUT /api/result/ten` with { username, resultMap: { gender, maths, physics, chemistry, biology, social, verbal, boardTen, boardTwelve, studyHours, tution, learningMethod, socialPreference, extracurricular, approach, jobPreference, research, logical, quantitaive, analytical, verbal } } to fetch class 10 result

- `PUT /api/result/twelve` with { username, resultMap: { gender, boardTwelve, stream, maths, phyOrAcc, chemOrBs, stream, verbal,studyHours, tution, entrance, learningMethod, socialPreference, extracurricular, approach, jobPreference, research, logical, quantitative, analytical, verbal } } to fetch class 12 result

- `PUT /api/result/btech` with { username, resultMap: { gender, stream, maths, physics, chemistry, other, favouriteSubject, likedTopicMath, likedTopicPhy, exhibition, figure, programmingKnowledge, studyHours, softwareJob, IES, work, preferredSubject, PSU, learningMethod, socialpreference, reason, revision, difficulty, bookRefer, extracurricular, approach, logical, quantitative, analytical, verbal } } to fetch btech result

- `PUT /api/result/graduate` with { username, resultMap: { os, algorithms, programming, software, networks, electronics, architecture, maths, verbal, logicl, hours, hackathons, codingSkill, publicSpeaking, workLongTime, selfLearning, extraCourses, certifications, workshops, talentTest, languageSkills, memory, subject, career, jobOrStudies, company, seniors, games, behaviour, managementOrTechnical, salaryOrWork, hardOrSmart, teams, introvert } } to fetch graduate result

## Jobs

- `GET /api/jobs?keyword=<prediction-from-graduate-model>` to fetch job info



