import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Functions = ({ onContentClear, onDelete, onClickHandler }) => (
    <section className="functions">
        < Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        < Button text="&larr;" clickHandler={onDelete} />
        < Button text="." clickHandler={onClickHandler} />
    </section>
)
Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClickHandler: PropTypes.func.isRequired
}

export default Functions