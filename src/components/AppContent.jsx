import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../routes';
import Nav from './nav/Nav';

// const Layout = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

const Container = styled.div`
  background-color: beige;
  width: 1264px;
  display: flex;
  height: 1000px;
`;

const AppContainer = styled.div`
  width: 100%;
  background-color: whitesmoke;
`;

const Loading = <div>loading..</div>;

const AppContent = () => {
  return (
    <Container>
      <Nav />
      <AppContainer>
        <Suspense fallback={Loading}>
          <Routes>
            {routes.map(route => (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            ))}
          </Routes>
        </Suspense>
      </AppContainer>
    </Container>
  );
};

export default AppContent;
