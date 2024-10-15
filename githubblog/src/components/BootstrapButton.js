import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';


function BootstrapButton({ label, to }) {
  return (
    <div>
      <h1>
        <Badge bg="secondary" as={Link} to = {to}>
          {label}
        </Badge>
      </h1>
    </div>
  );
}

export default BootstrapButton;