import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// size : large, medium, small
function Button({
    children,
    size,
    color,
    outline,
    fullWidth,
    className,
    ...rest
}) {
    return (
        <button
            className={classNames(
                'Button',
                size,
                color,
                {
                    outline,
                    fullWidth,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
    outline: '',
    fullWidth: '',
};
// -> function Button( { size = 'medium'} )
// 또는 -> classNames('Button', size || 'medium' )
// 으로도 사용 가능하다.

export default Button;

// return <button className={['Button', size].join(' ')}>{children}</button>;
// 템플릿 리터럴
// return <button className={`Button ${size}`}>{children}</button>;

// yarn add classnames
/*
    classNames('foo bar'); -> 'foo bar'
*/
