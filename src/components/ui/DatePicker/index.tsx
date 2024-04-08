'use client';

import { useState } from 'react';
import {
  DayPicker,
  InputDayPickerProps,
  DayPickerBase,
} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ArrowIcon } from '../icons/Arrow';
import { ptBR } from 'date-fns/locale';
import { format, subDays } from 'date-fns';

const DatePicker = ({ ...props }: InputDayPickerProps & DayPickerBase) => {
  const [selected, setSelected] = useState<Date>(new Date());

  return (
    <DayPicker
      mode='single'
      className='date-picker'
      style={{
        margin: 0,
        marginTop: '1rem',
      }}
      fromMonth={subDays(new Date(), 1)}
      showOutsideDays
      locale={ptBR}
      formatters={{
        formatCaption: (date) => format(date, 'MMMM  yyy', { locale: ptBR }),
        formatWeekdayName: (date) =>
          date.toLocaleDateString('pt-BR', { weekday: 'narrow' }),
      }}
      components={{
        IconLeft: () => <ArrowIcon />,
        IconRight: () => <ArrowIcon transform={'rotate(180deg)'} />,
      }}
      disabled={[(date) => date <= subDays(new Date(), 1)]}
      selected={selected}
      onSelect={(date) => date && setSelected(date)}
      {...props}
    />
  );
};

export { DatePicker };
