const age: number = 15;
const friendSalaries: number[] = [6000, 4000, 5000, 12000, 4000];
// no problem if updated/pushed items type is number
friendSalaries.push(13000);
friendSalaries[1] = 5000;
// throw error if updated/pushed items type is not number
// friendSalaries.push('13000');
// friendSalaries[1] = '13000';

const friends: string[] = ['omuk', 'tomuk', 'chomuk'];
// no problem if updated/pushed items type is string
friends.push('fahim');
friends[1] = 'omuk 2';
// throw error if updated/pushed items type is not string
// friends.push(1000);
// friends[1] = 13000;
