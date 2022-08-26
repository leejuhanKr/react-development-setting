import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Topbar = styled.div`
  background-color: rgb(240, 248, 255);
  border-top: 3px solid rgb(244, 130, 37);
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: center;
  a {
    font-size: 20px;
  }
  ol {
    display: flex;
  }
  & > * {
    /* background-color: black; */
    height: 100%;
  }
  li {
    padding: 0 10px 0 10px;
  }
  form {
    flex-grow: 1;
    & input {
      width: 100%;
    }
  }
`;

const BottomPadding = styled.div`
  height: 50px;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Topbar>
        <button
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          stackoverflow
        </button>
        <ol>
          <li>products</li>
        </ol>
        <form action="/search">
          <input type="text" placeholder="Search..." />
        </form>
        <ol>
          <li>avater</li>
          <li>inbox</li>
          <li>achievements</li>
          <li>help</li>
          <li>stackExchange</li>
        </ol>
      </Topbar>
      <BottomPadding />
    </>
  );
};

export default Header;
