const routes = [
    {
        id: 0,
        to: '/',
        text: 'Home',
        private: false
    },
    {
        id: 1,
        to: '/blog',
        text: 'Blog',
        private: false
    },
    {
        id: 2,
        to: '/profile',
        text: 'Profile',
        private: true
    },
    {
        id: 3,
        to: '/login',
        text: 'Login',
        private: false,
        onlyPublic: true
    },
    {
        id: 4,
        to: '/logout',
        text: 'Logout',
        private: true
    },
];

export default routes;