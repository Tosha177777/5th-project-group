import React from 'react';
import classNames from 'classnames';
import * as calcul from './calcul';
import { StyledCalendar } from './calendar.styled';

export default class Calendar extends React.Component {
  static defaultProps = {
    years: [
      2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035,
      2036, 2037, 2038, 2039, 2040,
    ],
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    weekDayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    onChange: Function.prototype,
  };

  state = {
    date: new Date(),
    selectedDate: null,
  };

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }

  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);

    this.setState({ date });
  };
  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);

    this.setState({ date });
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;

    const date = new Date(year, month);

    this.props.onChange(date);
  };

  handleDayClick = (date) => {
    this.setState({ selectedDate: date });

    this.props.onChange(date);
  };

  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const { currentDate, selectedDate } = this.state;
    const monthData = calcul.getMonthData(this.year, this.month);
    //
    return (
      <StyledCalendar>
        <div>
          <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

          <select
            ref={(element) => (this.monthSelect = element)}
            value={this.month}
            className="select"
            onChange={this.handleSelectChange}
          >
            {monthNames.map((name, index) => (
              <option key={name} value={index}>
                {name}
              </option>
            ))}
          </select>

          <select
            ref={(element) => (this.yearSelect = element)}
            value={this.year}
            className="select"
            onChange={this.handleSelectChange}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
        </div>

        <table>
          <thead>
            <tr>
              {weekDayNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
            <tbody>
              {monthData.map((week, index) => (
                <tr key={index}>
                  {week.map((date, index) =>
                    date ? (
                      <td
                        key={index}
                        className={classNames('day', {
                          today: calendar.areEqual(date, currentDate),
                          selected: calendar.areEqual(date, selectedDate),
                        })}
                        onClick={() => this.handleDayClick(date)}
                      >
                        {date.geDate()}
                      </td>
                    ) : (
                      <td key={index} />
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </thead>
        </table>
      </StyledCalendar>
    );
  }
}
