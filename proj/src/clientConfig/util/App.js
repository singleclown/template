const { Router, Route } = ReactRouter;
const { TabBar, Icon } = SaltUI;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.tabBarItems = [
            { title: '总览', icon: "./assets/svg/tabbar/pandect.svg", activeIcon: "./assets/svg/tabbar/pandect_sel.svg" },
            { title: '详情', icon: "./assets/svg/tabbar/detail.svg", activeIcon: "./assets/svg/tabbar/detail_sel.svg", name: "detail" },
            { title: '设置', icon: "./assets/svg/tabbar/config.svg", activeIcon: "./assets/svg/tabbar/config_sel.svg", name: 'setting' }
        ];
    }
    render() {
        let onChange = (activeIndex) => {
            activeIndex == 0 && (location.hash = 'overview');
            activeIndex == 1 && (location.hash = 'detail');
            activeIndex == 2 && (location.hash = 'setup');
        };
        const tabBarStyle = {
            borderTop: '1px solid #d6d6d6'
        };
        let { titleStyle = { color: 'red' }, activeTitleStyle = { color: 'orange' }, iconStyle = { width: 30, height: 30 }, activeIconStyle = { fill: 'orange' } } = {}
        let config = { titleStyle, activeTitleStyle, iconStyle, activeIconStyle }
        let t = this;
        var activeIndex = 0;
        let pathname = location.href.replace(/[^#]*#\/([^#\/?]+)\?[\s\S]*/, '$1');
        if (pathname.indexOf('detail') != -1) {
            activeIndex = 1;
        } else if (pathname.indexOf('setup') != -1) {
            activeIndex = 2;
        } else if (pathname.indexOf('overview') != -1) {
            activeIndex = 0;
        }
        return (
            <div>
                {pathname != 'checksms' && <TabBar tabBarStyle={tabBarStyle} activeIndex={activeIndex} onChange={onChange.bind(this)}>
                    {this.tabBarItems.map((item, index) => {
                        return (
                            <TabBar.Item
                                key={index}
                                badge={item.badge}
                                title={item.title}
                                icon={item.icon}
                                activeIcon={item.activeIcon}
                                {...config}
                            >
                            </TabBar.Item>
                        )
                    })}
                </TabBar>}
                {this.props.children}
            </div>
        );
    }
}
module.exports = App;