import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x819550e53f9C12aa33fF5DB2EC76e16b50822FB7'
);

export default instance;