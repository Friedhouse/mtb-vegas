import { baseUrl } from '../features/app/shared/baseUrl';

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        };
    });
};
