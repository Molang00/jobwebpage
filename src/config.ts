import dotenv from 'dotenv';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const REACT_APP_FILE_DOWNLOAD_URL = process.env.REACT_APP_FILE_DOWNLOAD_URL;

export { NODE_ENV, REACT_APP_API_URL, REACT_APP_FILE_DOWNLOAD_URL };
