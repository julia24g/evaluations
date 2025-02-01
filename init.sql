\c mydatabase;

CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255),
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    managerId INT, 
    CONSTRAINT fk_manager FOREIGN KEY (managerId) REFERENCES users(userId) ON DELETE SET NULL
);

CREATE TABLE assessment (
    assessmentId SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    status VARCHAR(50) NOT NULL,
    answers TEXT,
    CONSTRAINT fk_assessment_user FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);

CREATE TABLE category (
    categoryId SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE question (
    questionId SERIAL PRIMARY KEY,
    role VARCHAR(100) NOT NULL,
    levelId VARCHAR(100) NOT NULL,
    categoryId INT NOT NULL,
    questionText TEXT NOT NULL,
    CONSTRAINT fk_questions_category FOREIGN KEY (categoryId) REFERENCES category(categoryId) ON DELETE CASCADE
);

CREATE TABLE comment (
    commentId SERIAL PRIMARY KEY,
    questionId INT NOT NULL,
    assessmentId INT NOT NULL,
    userId INT NOT NULL,
    commentText TEXT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    CONSTRAINT fk_comments_question FOREIGN KEY (questionId) REFERENCES question(questionId) ON DELETE CASCADE,
    CONSTRAINT fk_comments_evaluation FOREIGN KEY (assessmentId) REFERENCES assessment(assessmentId) ON DELETE CASCADE,
    CONSTRAINT fk_comments_user FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);