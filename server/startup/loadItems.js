Meteor.startup(function () {
    if (Items.find().count() === 0) {
        /*var items = [
            {
                name: 'Item1',
                description: 'this is a sample item',
                number: 1
            },
            {
                name: 'Item2',
                description: 'this is a sample item',
                number: 2
            },
            {
                name: 'Item3',
                description: 'this is a sample item',
                number: 3
            },
            {
                name: 'Item4',
                description: 'this is a sample item',
                number: 4
            },
            {
                name: 'Item5',
                description: 'this is a sample item',
                number: 5
            },
            {
                name: 'Item6',
                description: 'this is a sample item',
                number: 6
            },
            {
                name: 'Item7',
                description: 'this is a sample item',
                number: 7
            },
            {
                name: 'Item8',
                description: 'this is a sample item',
                number: 8
            },
            {
                name: 'Item9',
                description: 'this is a sample item',
                number: 9
            },
            {
                name: 'Item10',
                description: 'this is a sample item',
                number: 10
            },
            {
                name: 'Item11',
                description: 'this is a sample item',
                number: 11
            },
            {
                name: 'Item12',
                description: 'this is a sample item',
                number: 12
            },
            {
                name: 'Item13',
                description: 'this is a sample item',
                number: 13
            },
            {
                name: 'Item14',
                description: 'this is a sample item',
                number: 14
            },
            {
                name: 'Item15',
                description: 'this is a sample item',
                number: 15
            }
        ];*/

        for (var i = 1; i <= 100; i++) {
            var item = {
                name: 'Item'+ i.toString(),
                description: 'this is a sample item',
                number: i
            }
            Items.insert(item);
        }
    }
});