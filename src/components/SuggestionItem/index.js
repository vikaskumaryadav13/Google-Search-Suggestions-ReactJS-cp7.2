// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onClickSuggestion} = props
  const {suggestion} = suggestionDetails
  const suggestionAsSearch = () => {
    onClickSuggestion(suggestion)
  }
  return (
    <li className="suggestion-Item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        className="suggestion-icon-button"
        type="button"
        onClick={suggestionAsSearch}
      >
        <img
          alt="arrow"
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
