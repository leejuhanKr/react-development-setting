import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LeftSidebar = styled.div`
  background-color: antiquewhite;
  width: 164px;
  height: 200px;
  position: sticky;
  top: 50px;
  /* border-right: solid 1px rgb(35,38,41); */
`;

const Bold = styled.div`
  font-size: 20px;
  margin-top: 15px;
`;

const Label = ({ name, link }) => {
  return (
    <li>
      <Link to={link}>{name}</Link>
    </li>
  );
};

const data = [
  { name: 'Questions', link: '/questions' },
  { name: 'Tags', link: '/tags' },
  { name: 'Users', link: '/users' },
  { name: 'Companies', link: '/jobs/companies' },
];

const Nav = () => {
  return (
    <LeftSidebar>
      <ol>
        <li>
          <Link to="/">
            <Bold>Home</Bold>
          </Link>
        </li>
        <li>
          <Bold>Public</Bold>
          <ol>
            {data.map(({ name, link }) => (
              <Label key={name} name={name} link={link} />
            ))}
          </ol>
        </li>
      </ol>
    </LeftSidebar>
  );
};

export default Nav;
