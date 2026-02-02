'use client';

import { useState } from 'react';

export default function Home() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const lessons = [
    {
      title: "What is Voice?",
      content: `Voice in English Grammar shows whether the subject of a sentence performs or receives the action.

There are two types of voice:
• Active Voice - The subject performs the action
• Passive Voice - The subject receives the action`,
      examples: [
        { active: "The cat chases the mouse.", passive: "The mouse is chased by the cat." },
        { active: "Mary writes a letter.", passive: "A letter is written by Mary." }
      ]
    },
    {
      title: "Active Voice",
      content: `In Active Voice, the subject does the action.

Structure: Subject + Verb + Object

The focus is on WHO or WHAT does the action.`,
      examples: [
        { sentence: "John eats an apple.", subject: "John", verb: "eats", object: "an apple" },
        { sentence: "The teacher teaches students.", subject: "The teacher", verb: "teaches", object: "students" },
        { sentence: "She reads books.", subject: "She", verb: "reads", object: "books" }
      ]
    },
    {
      title: "Passive Voice",
      content: `In Passive Voice, the subject receives the action.

Structure: Subject + be (am/is/are/was/were) + Past Participle + (by + agent)

The focus is on the ACTION or what receives it.`,
      examples: [
        { sentence: "An apple is eaten by John.", subject: "An apple", verb: "is eaten", agent: "by John" },
        { sentence: "Students are taught by the teacher.", subject: "Students", verb: "are taught", agent: "by the teacher" },
        { sentence: "Books are read by her.", subject: "Books", verb: "are read", agent: "by her" }
      ]
    },
    {
      title: "How to Change Active to Passive",
      content: `Follow these steps:

1. Move the object to the beginning (it becomes the subject)
2. Add the correct form of "be" + past participle of the verb
3. Move the original subject after "by" (it becomes the agent)
4. The agent (by...) can be omitted if not important`,
      examples: [
        {
          active: "Tom kicks the ball.",
          steps: [
            "Object: 'the ball' → becomes subject",
            "Verb: 'kicks' → becomes 'is kicked'",
            "Subject: 'Tom' → becomes 'by Tom'",
            "Result: The ball is kicked by Tom."
          ]
        },
        {
          active: "They build houses.",
          steps: [
            "Object: 'houses' → becomes subject",
            "Verb: 'build' → becomes 'are built'",
            "Subject: 'They' → becomes 'by them'",
            "Result: Houses are built by them."
          ]
        }
      ]
    },
    {
      title: "When to Use Each Voice",
      content: `Use Active Voice when:
• The doer of the action is important
• You want direct, clear sentences
• Writing instructions or commands

Use Passive Voice when:
• The receiver of the action is more important
• The doer is unknown or obvious
• Writing formal or scientific texts`,
      examples: [
        { situation: "News report", active: "Someone stole the painting.", passive: "The painting was stolen. (better - focus on the painting)" },
        { situation: "Instructions", active: "You should wash your hands. (better - clear command)", passive: "Hands should be washed." },
        { situation: "Scientific", active: "We conducted the experiment.", passive: "The experiment was conducted. (better - formal)" }
      ]
    }
  ];

  const quizQuestions = [
    {
      question: "Which sentence is in Active Voice?",
      options: [
        "The cake was baked by mom.",
        "Mom bakes the cake.",
        "The cake is being baked.",
        "A cake has been baked."
      ],
      correct: 1
    },
    {
      question: "Convert to Passive Voice: 'The dog bites the man.'",
      options: [
        "The man is bitten by the dog.",
        "The man bites the dog.",
        "The dog is biting the man.",
        "The man was bite by the dog."
      ],
      correct: 0
    },
    {
      question: "Which part comes first in Passive Voice?",
      options: [
        "The verb",
        "The doer (agent)",
        "The receiver (object)",
        "The preposition 'by'"
      ],
      correct: 2
    },
    {
      question: "Identify the voice: 'English is spoken worldwide.'",
      options: [
        "Active Voice",
        "Passive Voice",
        "Neither",
        "Both"
      ],
      correct: 1
    },
    {
      question: "Convert to Active Voice: 'The letter was written by Sarah.'",
      options: [
        "Sarah writes the letter.",
        "The letter writes Sarah.",
        "Sarah wrote the letter.",
        "Sarah is writing the letter."
      ],
      correct: 2
    }
  ];

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex });
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) correct++;
    });
    return correct;
  };

  const styles = {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    },
    header: {
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '30px',
      borderRadius: '10px',
      marginBottom: '30px',
      textAlign: 'center'
    },
    title: {
      margin: '0 0 10px 0',
      fontSize: '2.5em'
    },
    subtitle: {
      margin: 0,
      fontSize: '1.2em',
      opacity: 0.9
    },
    nav: {
      display: 'flex',
      gap: '10px',
      marginBottom: '30px',
      flexWrap: 'wrap'
    },
    navButton: {
      flex: 1,
      minWidth: '120px',
      padding: '15px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'all 0.3s'
    },
    navButtonActive: {
      backgroundColor: '#3498db',
      color: 'white'
    },
    navButtonInactive: {
      backgroundColor: 'white',
      color: '#333',
      border: '2px solid #ddd'
    },
    lessonCard: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    },
    lessonTitle: {
      color: '#2c3e50',
      marginTop: 0,
      fontSize: '2em',
      borderBottom: '3px solid #3498db',
      paddingBottom: '10px'
    },
    content: {
      fontSize: '1.1em',
      lineHeight: '1.8',
      whiteSpace: 'pre-line',
      color: '#333',
      marginBottom: '20px'
    },
    exampleBox: {
      backgroundColor: '#ecf0f1',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '15px',
      borderLeft: '4px solid #3498db'
    },
    exampleTitle: {
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '10px',
      fontSize: '1.1em'
    },
    exampleText: {
      margin: '8px 0',
      fontSize: '1em'
    },
    activeVoice: {
      color: '#27ae60',
      fontWeight: 'bold'
    },
    passiveVoice: {
      color: '#e74c3c',
      fontWeight: 'bold'
    },
    navigationButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '30px'
    },
    button: {
      padding: '15px 30px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    primaryButton: {
      backgroundColor: '#3498db',
      color: 'white'
    },
    secondaryButton: {
      backgroundColor: '#95a5a6',
      color: 'white'
    },
    quizCard: {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    },
    question: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#2c3e50'
    },
    option: {
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      cursor: 'pointer',
      border: '2px solid #ddd',
      transition: 'all 0.3s',
      fontSize: '1em'
    },
    optionSelected: {
      backgroundColor: '#3498db',
      color: 'white',
      borderColor: '#3498db'
    },
    optionCorrect: {
      backgroundColor: '#27ae60',
      color: 'white',
      borderColor: '#27ae60'
    },
    optionIncorrect: {
      backgroundColor: '#e74c3c',
      color: 'white',
      borderColor: '#e74c3c'
    },
    results: {
      backgroundColor: '#2ecc71',
      color: 'white',
      padding: '30px',
      borderRadius: '10px',
      textAlign: 'center',
      fontSize: '1.5em',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>📚 English Grammar: Voice</h1>
        <p style={styles.subtitle}>Learn Active and Passive Voice - Beginner Level</p>
      </div>

      <div style={styles.nav}>
        {lessons.map((lesson, index) => (
          <button
            key={index}
            style={{
              ...styles.navButton,
              ...(currentLesson === index ? styles.navButtonActive : styles.navButtonInactive)
            }}
            onClick={() => {
              setCurrentLesson(index);
              setShowResults(false);
            }}
          >
            Lesson {index + 1}
          </button>
        ))}
        <button
          style={{
            ...styles.navButton,
            ...(currentLesson === 5 ? styles.navButtonActive : styles.navButtonInactive)
          }}
          onClick={() => {
            setCurrentLesson(5);
            setShowResults(false);
            setQuizAnswers({});
          }}
        >
          Quiz
        </button>
      </div>

      {currentLesson < 5 ? (
        <div style={styles.lessonCard}>
          <h2 style={styles.lessonTitle}>{lessons[currentLesson].title}</h2>
          <div style={styles.content}>{lessons[currentLesson].content}</div>

          <div>
            <h3 style={{ color: '#2c3e50' }}>Examples:</h3>
            {currentLesson === 0 && lessons[currentLesson].examples.map((ex, i) => (
              <div key={i} style={styles.exampleBox}>
                <div style={styles.exampleText}>
                  <span style={styles.activeVoice}>Active:</span> {ex.active}
                </div>
                <div style={styles.exampleText}>
                  <span style={styles.passiveVoice}>Passive:</span> {ex.passive}
                </div>
              </div>
            ))}

            {currentLesson === 1 && lessons[currentLesson].examples.map((ex, i) => (
              <div key={i} style={styles.exampleBox}>
                <div style={styles.exampleText}>{ex.sentence}</div>
                <div style={styles.exampleText}>
                  • Subject: <strong>{ex.subject}</strong> (does the action)
                </div>
                <div style={styles.exampleText}>
                  • Verb: <strong>{ex.verb}</strong>
                </div>
                <div style={styles.exampleText}>
                  • Object: <strong>{ex.object}</strong> (receives the action)
                </div>
              </div>
            ))}

            {currentLesson === 2 && lessons[currentLesson].examples.map((ex, i) => (
              <div key={i} style={styles.exampleBox}>
                <div style={styles.exampleText}>{ex.sentence}</div>
                <div style={styles.exampleText}>
                  • Subject: <strong>{ex.subject}</strong> (receives the action)
                </div>
                <div style={styles.exampleText}>
                  • Verb: <strong>{ex.verb}</strong>
                </div>
                <div style={styles.exampleText}>
                  • Agent: <strong>{ex.agent}</strong> (does the action)
                </div>
              </div>
            ))}

            {currentLesson === 3 && lessons[currentLesson].examples.map((ex, i) => (
              <div key={i} style={styles.exampleBox}>
                <div style={styles.exampleTitle}>
                  <span style={styles.activeVoice}>Active:</span> {ex.active}
                </div>
                {ex.steps.map((step, j) => (
                  <div key={j} style={{ ...styles.exampleText, marginLeft: '20px' }}>
                    {j + 1}. {step}
                  </div>
                ))}
              </div>
            ))}

            {currentLesson === 4 && lessons[currentLesson].examples.map((ex, i) => (
              <div key={i} style={styles.exampleBox}>
                <div style={styles.exampleTitle}>{ex.situation}:</div>
                {ex.active && <div style={styles.exampleText}>
                  <span style={styles.activeVoice}>Active:</span> {ex.active}
                </div>}
                {ex.passive && <div style={styles.exampleText}>
                  <span style={styles.passiveVoice}>Passive:</span> {ex.passive}
                </div>}
              </div>
            ))}
          </div>

          <div style={styles.navigationButtons}>
            <button
              style={{ ...styles.button, ...styles.secondaryButton }}
              onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
              disabled={currentLesson === 0}
            >
              ← Previous
            </button>
            <button
              style={{ ...styles.button, ...styles.primaryButton }}
              onClick={() => setCurrentLesson(Math.min(5, currentLesson + 1))}
            >
              {currentLesson === 4 ? 'Take Quiz →' : 'Next →'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div style={styles.lessonCard}>
            <h2 style={styles.lessonTitle}>📝 Test Your Knowledge</h2>
            <p style={styles.content}>Answer all questions and submit to see your results!</p>
          </div>

          {quizQuestions.map((q, qIndex) => (
            <div key={qIndex} style={styles.quizCard}>
              <div style={styles.question}>
                {qIndex + 1}. {q.question}
              </div>
              {q.options.map((option, oIndex) => {
                let optionStyle = styles.option;

                if (showResults) {
                  if (oIndex === q.correct) {
                    optionStyle = { ...styles.option, ...styles.optionCorrect };
                  } else if (quizAnswers[qIndex] === oIndex) {
                    optionStyle = { ...styles.option, ...styles.optionIncorrect };
                  }
                } else if (quizAnswers[qIndex] === oIndex) {
                  optionStyle = { ...styles.option, ...styles.optionSelected };
                }

                return (
                  <div
                    key={oIndex}
                    style={optionStyle}
                    onClick={() => !showResults && handleQuizAnswer(qIndex, oIndex)}
                  >
                    {String.fromCharCode(65 + oIndex)}. {option}
                    {showResults && oIndex === q.correct && ' ✓'}
                  </div>
                );
              })}
            </div>
          ))}

          {!showResults ? (
            <button
              style={{ ...styles.button, ...styles.primaryButton, width: '100%', marginTop: '20px' }}
              onClick={() => setShowResults(true)}
            >
              Submit Quiz
            </button>
          ) : (
            <div style={styles.results}>
              <div>Your Score: {calculateScore()} / {quizQuestions.length}</div>
              <div style={{ fontSize: '0.8em', marginTop: '10px' }}>
                {calculateScore() === quizQuestions.length ? 'Perfect! You mastered Voice!' :
                 calculateScore() >= 3 ? 'Great job! Keep practicing!' :
                 'Review the lessons and try again!'}
              </div>
              <button
                style={{ ...styles.button, ...styles.secondaryButton, marginTop: '20px' }}
                onClick={() => {
                  setShowResults(false);
                  setQuizAnswers({});
                }}
              >
                Retry Quiz
              </button>
            </div>
          )}

          <div style={styles.navigationButtons}>
            <button
              style={{ ...styles.button, ...styles.secondaryButton }}
              onClick={() => setCurrentLesson(4)}
            >
              ← Back to Lessons
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
