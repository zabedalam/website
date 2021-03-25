import React, { useCallback, useState, useEffect, useRef, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logo from '../../assets/images/logo.png';
import { withRouter } from 'react-router-dom';
import { LanguageContext } from '../../context/languageContext';
//import './index.css';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        boxShadow: theme.shadows[6],
        backgroundColor: theme.palette.common.white,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            flexGrow: 1,
        },
    },
    headerOptions: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
    },
    menuButtonText: {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: 'bold',
    },
    logo: {
        margin: 'auto',
        maxWidth: '20%',
        maxHeight: '20%',
    },
    burgerMenu: {
        fontSize: '50px',
    },
}));

const Nav = (props: any) => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    //For Language
    const {
        state: { language },
        dispatch: { setLanguage, translate },
    } = useContext(LanguageContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownEl = useRef<HTMLUListElement>(null);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL: any) => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = (pageURL: any) => {
        history.push(pageURL);
    };

    const menuItems = [
        {
            menuTitle: 'Home',
            pageURL: '/',
        },
        {
            menuTitle: 'Donate',
            pageURL: '/donate',
        },
        {
            menuTitle: 'Signup',
            pageURL: '/signup',
        },
        {
            menuTitle: 'Login',
            pageURL: '/login',
        },
        {
            menuTitle: 'Contributor',
            pageURL: '/contributor',
        },
    ];
    const handleClickOutside = useCallback(
        (e) => {
            if (showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
                setShowDropdown(false);
            }
        },
        [showDropdown, setShowDropdown, dropdownEl],
    );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const chooseLanguageHandler = (value: string) => {
        console.log(value);
        setShowDropdown(false);
        setLanguage(value);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <div>
                        <img src={logo} className={classes.logo} alt="logo" />
                    </div>

                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="primary"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon className={classes.burgerMenu} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map((menuItem, index) => {
                                    const { menuTitle, pageURL } = menuItem;
                                    return (
                                        <MenuItem key={index} onClick={() => handleMenuClick(pageURL)}>
                                            {menuTitle}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>
                    ) : (
                        <div className={classes.headerOptions}>
                            <Button
                                color="primary"
                                className={classes.menuButtonText}
                                onClick={() => handleButtonClick('/')}
                            >
                                {translate('HOME')}
                            </Button>
                            <Button
                                className={classes.menuButtonText}
                                color="primary"
                                onClick={() => handleButtonClick('/donate')}
                            >
                                {translate('DONATE')}
                            </Button>
                            <Button
                                color="primary"
                                className={classes.menuButtonText}
                                onClick={() => handleButtonClick('/contributor')}
                            >
                                {translate('Contributor')}
                            </Button>
                            <Button
                                className={classes.menuButtonText}
                                color="primary"
                                onClick={() => handleButtonClick('/signup')}
                            >
                                {' '}
                                {translate('SIGNUP')}
                            </Button>
                            <Button
                                color="primary"
                                className={classes.menuButtonText}
                                onClick={() => handleButtonClick('/login')}
                            >
                                {' '}
                                {translate('LOGIN')}
                            </Button>
                            {/* <div className="header_nav_lang">
                                <p className="selected" onClick={() => setShowDropdown(!showDropdown)}>
                                    {language}
                                </p>
                                {showDropdown && (
                                    <ul className="dropdown" ref={dropdownEl}>
                                        <li onClick={() => chooseLanguageHandler('EN')}>EN</li>
                                        <li onClick={() => chooseLanguageHandler('DA')}>DE</li>
                                    </ul>
                                )}
                            </div> */}
                            <Button
                                color="primary"
                                className={classes.menuButtonText}
                                onClick={() => chooseLanguageHandler('EN')}
                            >
                                EN
                            </Button>
                            <Button
                                color="secondary"
                                className={classes.menuButtonText}
                                onClick={() => chooseLanguageHandler('DA')}
                            >
                                DA
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Nav);
