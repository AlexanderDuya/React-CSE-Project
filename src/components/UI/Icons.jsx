import PropTypes from 'prop-types';
import './Icons.scss';

export default function Icon({ children }) {
  return <div className="Icon">{children}</div>;
}

Icon.propTypes = {
  children: PropTypes.node,
};

function Collapse() {
  return (
    <Icon className="IconCollapse">
      <img src="https://img.icons8.com/material-sharp/24/000000/collapse-arrow.png" alt="Collapse icon" />
    </Icon>
  );
}

function Cross() {
  return (
    <Icon className="IconCross">
      <img src="https://img.icons8.com/material-outlined/24/undefined/delete-sign.png" alt="Cross icon" />
    </Icon>
  );
}

function Database() {
  return (
    <Icon className="IconDatabase">
      <img src="https://img.icons8.com/ios-filled/50/000000/database.png" alt="Database icon" />
    </Icon>
  );
}

function Expand() {
  return (
    <Icon className="IconExpand">
      <img src="https://img.icons8.com/material-sharp/24/000000/expand-arrow.png" alt="Expand icon" />
    </Icon>
  );
}

function Group() {
  return (
    <Icon className="Icon IconGroup">
      <img src="https://img.icons8.com/ios-filled/50/undefined/conference-call.png" alt="Group icon" />
    </Icon>
  );
}

function List() {
  return (
    <Icon className="IconList">
      <img src="https://img.icons8.com/material-sharp/24/undefined/list.png" alt="List icon" />
    </Icon>
  );
}

function Pen() {
  return (
    <Icon className="IconPen">
      <img src="https://img.icons8.com/ios-glyphs/30/undefined/edit--v1.png" alt="Pen icon" />
    </Icon>
  );
}

function Plus() {
  return (
    <Icon className="IconPlus">
      <img
        src="https://img.icons8.com/external-basicons-line-edtgraphics/50/undefined/external-add-ui-basic-basicons-line-edtgraphics-2.png"
        alt="Pen icon"
      />
    </Icon>
  );
}

function RedCross() {
  return (
    <Icon className="IconRedCross">
      <img src="https://img.icons8.com/color/48/undefined/delete-sign--v1.png" alt="Red cross icon" />
    </Icon>
  );
}

function RedHeart() {
  return (
    <Icon className="IconRedHeart">
      <img src="https://img.icons8.com/emoji/48/undefined/red-heart.png" alt="Red heart icon" />
    </Icon>
  );
}

function Tick() {
  return (
    <Icon className="IconTick">
      <img src="https://img.icons8.com/material-outlined/24/undefined/checkmark--v1.png" alt="Tick icon" />
    </Icon>
  );
}

function Trash() {
  return (
    <Icon className="IconTrash">
      <img src="https://img.icons8.com/ios-glyphs/30/undefined/filled-trash.png" alt="Trash icon" />
    </Icon>
  );
}

function Acknowledge() {
  return (
    <p className="IconAcknowledge">
      All icons by&nbsp;
      <a href="https://icons8.com">Icons8</a>
    </p>
  );
}

// -----------------------------------------
// Compose Icon Object /////////////////////
// -----------------------------------------

Icon.Collapse = Collapse;
Icon.Cross = Cross;
Icon.Database = Database;
Icon.Expand = Expand;
Icon.Group = Group;
Icon.List = List;
Icon.Pen = Pen;
Icon.Plus = Plus;
Icon.RedCross = RedCross;
Icon.RedHeart = RedHeart;
Icon.Tick = Tick;
Icon.Trash = Trash;
Icon.Acknowledge = Acknowledge;
