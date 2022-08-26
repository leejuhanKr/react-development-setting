import styled from 'styled-components';

const Sitefooter = styled.div`
  width: 100%;
  background-color: rgb(35, 38, 41);
  // will deleted
  height: 322px;
  span {
    color: rgb(145, 153, 161);
  }
`;

const Footer = () => {
  return (
    <Sitefooter>
      <span>STACK OVERFLOW</span>
      <div>
        <span>Questions</span>
        <span>help</span>
      </div>
    </Sitefooter>
  );
};

export default Footer;
