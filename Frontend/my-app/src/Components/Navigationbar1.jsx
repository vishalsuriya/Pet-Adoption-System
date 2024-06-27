import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";

const Navigationbar1 = () => {
  return (
    <Nav justify >
      <Nav.Item>
        <div className="Paste-button">
          <Dropdown className="bg-success">
            <Dropdown.Toggle className="button bg-success border-success">Dogs and Puppies</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-content">
              <Dropdown.Item>Labrador Retriever</Dropdown.Item>
              <Dropdown.Item>German Shepherd</Dropdown.Item>
              <Dropdown.Item>Golden Retriever</Dropdown.Item>
              <Dropdown.Item>Bulldog</Dropdown.Item>
              <Dropdown.Item>Poodle</Dropdown.Item>
              <Dropdown.Item>Beagle</Dropdown.Item>
              <Dropdown.Item>Boxer</Dropdown.Item>
              <Dropdown.Item>Dachshund</Dropdown.Item>
              <Dropdown.Item>Siberian Husky</Dropdown.Item>
              <Dropdown.Item>Chihuahua</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Nav.Item>
      <Nav.Item>
        <div className="Paste-button">
          <Dropdown className="bg-success">
            <Dropdown.Toggle className="button bg-success border-success">Cats and Kittens</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-content">
              <Dropdown.Item>Maine Coon</Dropdown.Item>
              <Dropdown.Item>Persian</Dropdown.Item>
              <Dropdown.Item>Siamese</Dropdown.Item>
              <Dropdown.Item>Ragdoll</Dropdown.Item>
              <Dropdown.Item>British Shorthair</Dropdown.Item>
              <Dropdown.Item>Bengal</Dropdown.Item>
              <Dropdown.Item>Sphynx</Dropdown.Item>
              <Dropdown.Item>Abyssinian</Dropdown.Item>
              <Dropdown.Item>Scottish Fold</Dropdown.Item>
              <Dropdown.Item>Norwegian Forest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Nav.Item>
    </Nav>
  );
};

export default Navigationbar1;
