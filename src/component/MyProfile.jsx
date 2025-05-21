// import React, { useRef, useState } from 'react';
// import {
//   Avatar,
//   Box,
//   Button,
//   Typography,
//   Paper,
//   Grid,
//   IconButton,
//   TextField,
//   MenuItem,
// } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import EditIcon from '@mui/icons-material/Edit';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import PersonIcon from '@mui/icons-material/Person';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';

// function MyProfile() {
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);

//   const [isEditing, setIsEditing] = useState(false);

//   const [profile, setProfile] = useState({
//     name: 'Vikash Sain',
//     email: 'sainvikash1507@gmail.com',
//     phone: '+91 8696015017',
//     gender: 'Male',
//     active: true,
//     created_at: '2024-01-15T10:30:00Z',
//   });

//   const [avatar, setAvatar] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleEditToggle = () => setIsEditing((prev) => !prev);

//   const handleUpdate = () => {
//     console.log('Updated Profile:', profile);
//     setIsEditing(false);
//   };

//   const handleAvatarClick = () => {
//     if (isEditing) fileInputRef.current.click();
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setAvatar(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAvatarRemove = (e) => {
//     e.stopPropagation();
//     setAvatar(null);
//   };

//   return (
//     <Box>
//       <Header />
//       <Button
//         startIcon={<ArrowBackIcon />}
//         onClick={() => navigate(-1)}
//         sx={{ margin: 2 }}
//       >
//         Back
//       </Button>

//       <Paper elevation={3} sx={{ p: 4, maxWidth: 700, margin: 'auto' }}>
//         {/* Profile Picture and Name */}
//         <Box display="flex" alignItems="center" gap={2}>
//           <Box
//             position="relative"
//             onClick={handleAvatarClick}
//             sx={{ cursor: isEditing ? 'pointer' : 'default' }}
//           >
//             <Avatar
//               sx={{ width: 72, height: 72, bgcolor: 'green' }}
//               src={avatar}
//             >
//               {!avatar && profile.name.charAt(0)}
//             </Avatar>

//             {isEditing && (
//               <>
//                 <IconButton
//                   size="small"
//                   sx={{
//                     position: 'absolute',
//                     bottom: 0,
//                     right: 0,
//                     bgcolor: 'white',
//                     border: '1px solid #ccc',
//                   }}
//                 >
//                   <EditIcon fontSize="small" />
//                 </IconButton>

//                 {avatar && (
//                   <Button
//                     variant="text"
//                     color="error"
//                     size="small"
//                     onClick={handleAvatarRemove}
//                     sx={{
//                       position: 'absolute',
//                       top: -10,
//                       right: 0,
//                       textTransform: 'none',
//                     }}
//                   >
//                     Remove
//                   </Button>
//                 )}
//               </>
//             )}

//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               hidden
//               onChange={handleAvatarChange}
//             />
//           </Box>

//           <Box>
//             {isEditing ? (
//               <TextField
//                 name="name"
//                 label="Name"
//                 variant="outlined"
//                 size="small"
//                 value={profile.name}
//                 onChange={handleChange}
//               />
//             ) : (
//               <Typography variant="h6">{profile.name}</Typography>
//             )}
//             <IconButton size="small" onClick={handleEditToggle}>
//               <EditIcon />
//             </IconButton>
//           </Box>
//         </Box>

//         {/* Editable Fields */}
//         <Grid container spacing={2} mt={2}>
//           {/* Email */}
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <EmailIcon color="disabled" />
//               {isEditing ? (
//                 <TextField
//                   name="email"
//                   label="Email"
//                   fullWidth
//                   size="small"
//                   value={profile.email}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <Box>
//                   <Typography>{profile.email}</Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     Email
//                   </Typography>
//                 </Box>
//               )}
//             </Box>
//           </Grid>

//           {/* Phone */}
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <PhoneAndroidIcon color="disabled" />
//               {isEditing ? (
//                 <TextField
//                   name="phone"
//                   label="Phone"
//                   fullWidth
//                   size="small"
//                   value={profile.phone}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <Box>
//                   <Typography>{profile.phone}</Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     Phone
//                   </Typography>
//                 </Box>
//               )}
//             </Box>
//           </Grid>

//           {/* Gender */}
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <PersonIcon color="disabled" />
//               {isEditing ? (
//                 <TextField
//                   select
//                   name="gender"
//                   label="Gender"
//                   fullWidth
//                   size="small"
//                   value={profile.gender}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="Male">Male</MenuItem>
//                   <MenuItem value="Female">Female</MenuItem>
//                   <MenuItem value="Other">Other</MenuItem>
//                 </TextField>
//               ) : (
//                 <Box>
//                   <Typography>{profile.gender}</Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     Gender
//                   </Typography>
//                 </Box>
//               )}
//             </Box>
//           </Grid>

//           {/* Active (always read-only) */}
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center" gap={1}>
//               {profile.active ? (
//                 <CheckCircleIcon color="success" />
//               ) : (
//                 <CancelIcon color="error" />
//               )}
//               <Box>
//                 <Typography>{profile.active ? 'Active' : 'Inactive'}</Typography>
//                 <Typography variant="caption" color="text.secondary">
//                   Status
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>

//           {/* Created At (read-only) */}
//           <Grid item xs={12}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <CalendarTodayIcon color="disabled" />
//               <Box>
//                 <Typography>
//                   {new Date(profile.created_at).toLocaleDateString()}
//                 </Typography>
//                 <Typography variant="caption" color="text.secondary">
//                   Created At
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Action Buttons */}
//         <Box mt={4}>
//           {isEditing ? (
//             <Button variant="contained" onClick={handleUpdate}>
//               Save
//             </Button>
//           ) : (
//             <Button variant="contained" onClick={handleEditToggle}>
//               Edit
//             </Button>
//           )}
//         </Box>
//       </Paper>
//     </Box>
//   );
// }

// export default MyProfile;

// import React, { useRef, useState, useEffect } from 'react';
// import {
//   Avatar,
//   Box,
//   Button,
//   Typography,
//   Paper,
//   Grid,
//   IconButton,
//   TextField,
//   MenuItem,
// } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import EditIcon from '@mui/icons-material/Edit';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import PersonIcon from '@mui/icons-material/Person';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';

// function MyProfile() {
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);

//   const [isEditing, setIsEditing] = useState(false);
//   const [avatar, setAvatar] = useState(null);
//   const [profile, setProfile] = useState(null);

//   // Fetch profile data

//   useEffect(() => {
//     fetch('http://localhost:3000/users/55')
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProfile(data);
//       })
//       .catch((error) => {
//         console.error('Failed to fetch profile:', error);
//       });
//   }, []);
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleEditToggle = () => setIsEditing((prev) => !prev);

//   const handleUpdate = () => {
//     fetch('http://localhost:3000/users/55', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(profile),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log('Profile updated:', data);
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         console.error('Update failed:', error);
//       });
//   };
  

//   const handleAvatarClick = () => {
//     if (isEditing) fileInputRef.current.click();
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setAvatar(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAvatarRemove = (e) => {
//     e.stopPropagation();
//     setAvatar(null);
//   };

//   if (!profile) return <Typography align="center">Loading...</Typography>;

//   return (
//     <Box>
//       <Header />
//       <Button
//         startIcon={<ArrowBackIcon />}
//         onClick={() => navigate(-1)}
//         sx={{ margin: 2 }}
//       >
//         Back
//       </Button>

//       <Paper elevation={3} sx={{ p: 4, maxWidth: 700, margin: 'auto' }}>
//         {/* Profile Picture and Name */}
//         <Box display="flex" alignItems="center" gap={2}>
//           <Box
//             position="relative"
//             onClick={handleAvatarClick}
//             sx={{ cursor: isEditing ? 'pointer' : 'default' }}
//           >
//             <Avatar
//               sx={{ width: 72, height: 72, bgcolor: 'green' }}
//               src={avatar}
//             >
//               {!avatar && profile.name.charAt(0)}
//             </Avatar>

//             {isEditing && (
//               <>
//                 <IconButton
//                   size="small"
//                   sx={{
//                     position: 'absolute',
//                     bottom: 0,
//                     right: 0,
//                     bgcolor: 'white',
//                     border: '1px solid #ccc',
//                   }}
//                 >
//                   <EditIcon fontSize="small" />
//                 </IconButton>

//                 {avatar && (
//                   <Button
//                     variant="text"
//                     color="error"
//                     size="small"
//                     onClick={handleAvatarRemove}
//                     sx={{
//                       position: 'absolute',
//                       top: -10,
//                       right: 0,
//                       textTransform: 'none',
//                     }}
//                   >
//                     Remove
//                   </Button>
//                 )}
//               </>
//             )}

//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               hidden
//               onChange={handleAvatarChange}
//             />
//           </Box>

//           <Box>
//             {isEditing ? (
//               <TextField
//                 name="name"
//                 label="Name"
//                 variant="outlined"
//                 size="small"
//                 value={profile.name}
//                 onChange={handleChange}
//               />
//             ) : (
//               <Typography variant="h6">{profile.name}</Typography>
//             )}
//             <IconButton size="small" onClick={handleEditToggle}>
//               <EditIcon />
//             </IconButton>
//           </Box>
//         </Box>

//         {/* Editable Fields */}
//         <Grid container spacing={2} mt={2}>
//           {/* Email */}
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <EmailIcon color="disabled" />
//               {isEditing ? (
//                 <TextField
//                   name="email"
//                   label="Email"
//                   fullWidth
//                   size="small"
//                   value={profile.email}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <Box>
//                   <Typography>{profile.email}</Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     Email
//                   </Typography>
//                 </Box>
//               )}
//             </Box>
//           </Grid>

//           {/* Phone */}
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <PhoneAndroidIcon color="disabled" />
//               {isEditing ? (
//                 <TextField
//                   name="phone"
//                   label="Phone"
//                   fullWidth
//                   size="small"
//                   value={profile.phone}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <Box>
//                   <Typography>{profile.phone}</Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     Phone
//                   </Typography>
//                 </Box>
//               )}
//             </Box>
//           </Grid>

//           {/* Gender */}
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <PersonIcon color="disabled" />
//               {isEditing ? (
//                 <TextField
//                   select
//                   name="gender"
//                   label="Gender"
//                   fullWidth
//                   size="small"
//                   value={profile.gender}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="Male">Male</MenuItem>
//                   <MenuItem value="Female">Female</MenuItem>
//                   <MenuItem value="Other">Other</MenuItem>
//                 </TextField>
//               ) : (
//                 <Box>
//                   <Typography>{profile.gender}</Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     Gender
//                   </Typography>
//                 </Box>
//               )}
//             </Box>
//           </Grid>

//           {/* Active (read-only) */}
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center" gap={1}>
//               {profile.active ? (
//                 <CheckCircleIcon color="success" />
//               ) : (
//                 <CancelIcon color="error" />
//               )}
//               <Box>
//                 <Typography>{profile.active ? 'Active' : 'Inactive'}</Typography>
//                 <Typography variant="caption" color="text.secondary">
//                   Status
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>

//           {/* Created At (read-only) */}
//           <Grid item xs={12}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <CalendarTodayIcon color="disabled" />
//               <Box>
//                 <Typography>
//                   {new Date(profile.created_at).toLocaleDateString()}
//                 </Typography>
//                 <Typography variant="caption" color="text.secondary">
//                   Created At
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Action Buttons */}
//         <Box mt={4}>
//           {isEditing ? (
//             <Button variant="contained" onClick={handleUpdate}>
//               Save
//             </Button>
//           ) : (
//             <Button variant="contained" onClick={handleEditToggle}>
//               Edit
//             </Button>
//           )}
//         </Box>
//       </Paper>
//     </Box>
//   );
// }

// export default MyProfile;

import React, { useRef, useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  IconButton,
  TextField,
  MenuItem,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function MyProfile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [profile, setProfile] = useState(null);

  // Fetch profile data from localStorage userId
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }

    fetch(`http://localhost:3000/users/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.error('Failed to fetch profile:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditToggle = () => setIsEditing((prev) => !prev);

  const handleUpdate = () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }

    fetch(`http://localhost:3000/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Profile updated:', data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Update failed:', error);
      });
  };

  const handleAvatarClick = () => {
    if (isEditing) fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarRemove = (e) => {
    e.stopPropagation();
    setAvatar(null);
  };

  if (!profile) return <Typography align="center">Loading...</Typography>;

  return (
    <Box>
      <Header />
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ margin: 2 }}
      >
        Back
      </Button>

      <Paper elevation={3} sx={{ p: 4, maxWidth: 700, margin: 'auto' }}>
        {/* Profile Picture and Name */}
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            position="relative"
            onClick={handleAvatarClick}
            sx={{ cursor: isEditing ? 'pointer' : 'default' }}
          >
            <Avatar
              sx={{ width: 72, height: 72, bgcolor: 'green' }}
              src={avatar}
            >
              {!avatar && profile.name.charAt(0)}
            </Avatar>

            {isEditing && (
              <>
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    bgcolor: 'white',
                    border: '1px solid #ccc',
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>

                {avatar && (
                  <Button
                    variant="text"
                    color="error"
                    size="small"
                    onClick={handleAvatarRemove}
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: 0,
                      textTransform: 'none',
                    }}
                  >
                    Remove
                  </Button>
                )}
              </>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleAvatarChange}
            />
          </Box>

          <Box>
            {isEditing ? (
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                size="small"
                value={profile.name}
                onChange={handleChange}
              />
            ) : (
              <Typography variant="h6">{profile.name}</Typography>
            )}
            <IconButton size="small" onClick={handleEditToggle}>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Editable Fields */}
        <Grid container spacing={2} mt={2}>
          {/* Email */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon color="disabled" />
              {isEditing ? (
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  size="small"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <Box>
                  <Typography>{profile.email}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Email
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>

          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <PhoneAndroidIcon color="disabled" />
              {isEditing ? (
                <TextField
                  name="phone"
                  label="Phone"
                  fullWidth
                  size="small"
                  value={profile.full_phone_number}
                  onChange={handleChange}
                />
              ) : (
                <Box>
                  <Typography>{profile.full_phone_number}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Phone
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>

          {/* Gender */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <PersonIcon color="disabled" />
              {isEditing ? (
                <TextField
                  select
                  name="gender"
                  label="Gender"
                  fullWidth
                  size="small"
                  value={profile.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              ) : (
                <Box>
                  <Typography>{profile.gender}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Gender
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>

          {/* Active */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              {profile.active ? (
                <CheckCircleIcon color="success" />
              ) : (
                <CancelIcon color="error" />
              )}
              <Box>
                <Typography>{profile.active ? 'Active' : 'Inactive'}</Typography>
                <Typography variant="caption" color="text.secondary">
                  Status
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Created At */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarTodayIcon color="disabled" />
              <Box>
                <Typography>
                  {new Date(profile.created_at).toLocaleDateString()}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Created At
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box mt={4}>
          {isEditing ? (
            <Button variant="contained" onClick={handleUpdate}>
              Save
            </Button>
          ) : (
            <Button variant="contained" onClick={handleEditToggle}>
              Edit
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default MyProfile;
