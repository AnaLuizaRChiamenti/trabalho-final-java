import taskType from './taskType';

type userType = {
    email: string;
    password: string;
    tasks: taskType[];
};

export default userType;
