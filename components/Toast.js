import { StyledToastContainer } from './StyledComponents';
import useStore from '../hooks/useStore';

const Toast = props => {
  const toasts = useStore(state => state.toasts);

  return (
    <>
      <StyledToastContainer>
        {toasts
          .filter(toast => toast.shown)
          .map(toast => (
            <div key={toast.id}>
              <p>{toast.description}</p>
            </div>
          ))}
      </StyledToastContainer>
    </>
  );
};

export default Toast;
