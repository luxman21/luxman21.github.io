$(document).ready(function () {
    var projects = [{
            type: 'smallItem',
            label: '2015 HackKings',
            shortContent: 'Now Android App <a href="https://github.com/luxman21/HackKings-Now"><img src="./images/GitHub-Mark-32px.png" /></a> ',
            fullContent: '',
            showMore: '',
            showLess: ''
            },
        {
            type: 'smallItem',
            label: '2015 University Project',
            shortContent: 'Data-Visualiser Android Project',
            fullContent: '',
            showMore: '',
            showLess: ''
            },
        {
            type: 'smallItem',
            label: '2015 University Project',
            shortContent: 'Sunka Game Android Project',
            fullContent: '',
            showMore: '',
            showLess: ''
            },
        {
            type: 'smallItem',
            label: '2014-2015 University Project',
            shortContent: 'Student Records Java Application',
            fullContent: '',
            showMore: '',
            showLess: ''
            },
        {
            type: 'smallItem',
            label: '2014 StudentHack',
            shortContent: 'Owlee Web Application <a href="http://jellyfish-nosoup.rhcloud.com/"> Click here </a>',
            fullContent: '',
            showMore: '',
            showLess: ''
            },

    ];

    $('#timeline-projects').timelineMe({
        items: projects
    })
});