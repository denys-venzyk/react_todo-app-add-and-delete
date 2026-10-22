import React from 'react';
import { Todo } from '../../types/Todo';
import cn from 'classnames';

type Props = {
  todos: Todo[];
  title: string;
  onTitle: (title: string) => void;
  inputFocusRef: React.RefObject<HTMLInputElement>;
};

export const Header: React.FC<Props> = ({
  todos,
  title,
  onTitle,
  inputFocusRef,
}) => {
  const areAllTodosCompleted = todos.every(todo => todo.completed);

  return (
    <header className="todoapp__header">
      <button
        type="button"
        className={cn('todoapp__toggle-all', {
          active: areAllTodosCompleted,
          hidden: todos.length === 0,
        })}
        data-cy="ToggleAllButton"
      />

      <form>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={title}
          onChange={event => onTitle(event.target.value)}
          ref={inputFocusRef}
        />
      </form>
    </header>
  );
};
