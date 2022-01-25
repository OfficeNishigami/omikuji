import { Page, List, ListItem, Icon } from 'react-onsenui';

import pjson from '../../package.json';

type Props = {
  onReload: () => void;
  onConfirm: () => void;
};

export const SideBar = (props: Props) => (
  <Page>
    <List className="drawer">
      <div className="drawer-header">
        <p>お神籤</p>
        <p>v{pjson.version}</p>
      </div>
      <ListItem tappable onClick={props.onReload}>
        <div className="left">
          <Icon icon="md-refresh" style={{ color: '#007aff' }} size={24} />
        </div>
        <div className="center sidebar-text">リセットする</div>
      </ListItem>
      <ListItem tappable onClick={props.onConfirm}>
        <div className="left">
          <Icon icon="md-delete" style={{ color: '#e91e63' }} size={24} />
        </div>
        <div className="center sidebar-text">履歴を消去</div>
      </ListItem>
    </List>
  </Page>
);
