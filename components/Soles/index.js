import { format } from 'date-fns';
import SolCard from '../SolCard'

const Soles = ({ weatherDataSoles, range, selectSol }) =>
  weatherDataSoles
    .filter((sol) => {
      if (
        range === undefined ||
        range.from === undefined ||
        range.to === undefined
      ) {
        return (
          sol.terrestrial_date >=
          format(
            new Date(new Date().setDate(new Date().getDate() - 14)),
            'yyyy-MM-dd'
          )
        );
      } else if (range.from !== undefined && range.to === undefined) {
        return sol.terrestrial_date == format(range.from, 'yyyy-MM-dd');
      } else if (range.from === range.to) {
        return sol.terrestrial_date === format(range.from, 'yyyy-MM-dd');
      } else if (range.from !== range.to) {
        return (
          sol.terrestrial_date >= format(range.from, 'yyyy-MM-dd') &&
          sol.terrestrial_date <= format(range.to, 'yyyy-MM-dd')
        );
      }
    })
    .map((sol) => {
      return (
        <li
          key={sol.id}
          className="rounded-md p-4 m-2 cursor-pointer"
          onMouseOver={() => selectSol(sol)}
        >
          <SolCard sol={sol} />
        </li>
      );
    });

export default Soles;
