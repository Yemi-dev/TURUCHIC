import Sample from 'pages/Sample';
import ErrorBoundary from 'ui/components/ErrorBoundary';

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Sample />
    </ErrorBoundary>
  );
};

export default App;
