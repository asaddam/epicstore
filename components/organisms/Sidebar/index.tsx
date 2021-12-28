import Footer from "./Footer";
import Profile from "./Profile";
import MenuItem from "./MenuItem";

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
            <MenuItem title="Overview" icon="overview" active={activeMenu === 'overview'} href="/member" />
            <MenuItem title="Transactions" icon="transactions" active={activeMenu === 'transactions'} href="/member/transactions" />
            <MenuItem title="Messages" icon="messages" href="/member/messages" />
            <MenuItem title="Card" icon="card" href="/member/card" />
            <MenuItem title="Rewards" icon="reward" href="/member/rewards" />
            <MenuItem title="Settings" icon="settings" active={activeMenu === 'settings'} href="/member/edit-profile" />
            <MenuItem title="Logout" icon="logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
