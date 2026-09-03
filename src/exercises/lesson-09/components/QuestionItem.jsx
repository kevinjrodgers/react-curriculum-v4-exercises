import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { dispatch, state } = useContext(SurveyContext);
  console.log(`Before dispatch is: ${state.ui.editingQuestionId}`);
  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    console.log('TODO: Implement edit functionality');
    console.log(`question.id: ${question.id}`);
    // Hint: Use SET_EDITING_QUESTION action
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: question.id,
      },
    });
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    console.log('TODO: Implement delete functionality');
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
    const userAnswer = window.confirm(
      'Are you sure you want to delete this question?'
    );
    if (userAnswer) {
      console.log('user confirmed yes');
      dispatch({
        type: 'DELETE_QUESTION',
        payload: {
          id: question.id,
        },
      });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {dispatch.editingQuestionId === question.id ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        {state.ui.editingQuestionId === question.id ? (
          <form>
            <input
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />
            <button
              type="submit"
              onClick={(e) => {
                //setWorkingText(question.question);
                e.preventDefault();
                dispatch({
                  type: 'UPDATE_QUESTION_TEXT',
                  payload: {
                    id: question.id,
                    newText: workingText,
                  },
                });
                dispatch({
                  type: 'SET_EDITING_QUESTION',
                  payload: {
                    questionId: null,
                  },
                });
              }}
            >
              Save
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch({
                  type: 'SET_EDITING_QUESTION',
                  payload: {
                    questionId: null,
                  },
                });
                //setWorkingText(originalText);
                //setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </form>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                <span className={styles['option-text']}>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
