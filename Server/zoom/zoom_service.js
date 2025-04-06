import fetch from 'node-fetch'
import base64 from "base-64"

const zoomAccountId = "VnLfodZOQ8eZXcUFcEtnlw";
const zoomClientId = "Huya1wYjRtGUrAULpbQGow";
const zoomClientSecret = "NFXQ2JdKW31Ajf5Q7qsL7Z2jLb0lh9OM";

const getAuthHeaders = ()=>{
    return{
        Authorization: `Basic ${base64.encode(`${zoomClientId}:${zoomClientSecret}`)}`,
        'Content-Type': 'application/json'
    }
}

const generateZoomAccessToken = async()=>{
    try {
        const response = await fetch(`https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${zoomAccountId}`,{
            method: "POST",
            headers: getAuthHeaders(),
        })

        const json_response = await response.json();

        return json_response?.access_token;

    } catch (error) {
        console.log("generateZoomAccessToken Error ---> ",error);
        throw error;
    }
};

const generateZoomMeeting = async()=>{
    try {
        const zoomAccessToken = await generateZoomAccessToken();
        
        const response = await fetch(
            `https://api.zoom.us/v2/users/me/meetings`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${zoomAccessToken}`
                },
                body: JSON.stringify({
                    agenda: 'My Meeting',
                    default_password: false,
                    duration: 60,
                    password: '123456',
                    settings: {
                        allow_multiple_devices: true,
                        // alternative_hosts: 'anshdubey32432@gmail.com',
                        alternative_hosts_email_notification: true,
                        breakout_room: {
                            enable: true,
                            rooms: [{
                              name: 'room1',
                              participants: [
                                'tanishdubey47@gmail.com',
                                'anshdubey32432@gmail.com',
                              ]
                            }]
                          },
                        calendar_type: 1,
                        contact_email: 'anshdubey32432@gmail.com',
                        contact_name: 'Ansh',
                        email_notification: true,
                        encryption_type: 'enhanced_encryption',
                        focus_mode: true,
                        host_video: true,
                        join_before_host: false,
                        meeting_authentication: true,
                        meeting_invitees: [{
                          email: 'anshdubey32432@gmail.com'
                        }],
                        mute_upon_entry: true,
                        participant_video: true,
                        private_meeting: true,
                        waiting_room: false,
                        watermark: false,
                        continuous_meeting_chat: {
                            enable: true,
                        },
                    },
                    start_time: new Date().toLocaleDateString(),
                    timezone: 'Asia/Kolkata',
                    topic: 'My Meeting',
                    type: 2
                })
            }
        );
        const jsonResponse = await response.json();

        console.log("generateZoomMeeting jsonRespone ---> ",jsonResponse);

    } catch (error) {
        console.log("generateZoomMeeting Error ---> ",error);
        throw error;
    }
};

generateZoomMeeting();