import MenuList from "./MenuList";
import "./style.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      menu item
      <MenuList list={menus} />
    </div>
  );
}
