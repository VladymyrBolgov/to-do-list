import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { setStatusFilter } from '../../redux/filtersSlice';

// export const StatusFilter = () => {
//   return (
//     <div className={css.wrapper}>
//       <Button>All</Button>
//       <Button>Active</Button>
//       <Button>Completed</Button>
//     </div>
//   );
// };

export const StatusFilter = () => {
  const dispatch = useDispatch();
  // Получаем значение фильтра из состояния Redux
  //   const filter = useSelector(getStatusFilter);

  const filter = useSelector(state => state.statusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
