import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dkacxbbwh', 
    api_key: '182463543584545', 
    api_secret: '**********' 
});

module.exports = { cloudinary };