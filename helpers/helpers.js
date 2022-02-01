import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const Bcrypt = {
  async hashPassword(password) {
    const salt = 10;

    const hashedPassword = await bcrypt.hash(password, salt);

    return await hashedPassword;
  },

  async comparePassword(password, hashedPassword) {
    const comparedPassword = await bcrypt.compare(password, hashedPassword);

    return await comparedPassword;
  },
};

export async function generateToken(data) {
  const token = await jwt.sign(data, process.env.SECRET, { expiresIn: '60d' });
  return token;
}

// export function formatPlaylists(arr) {
//   return arr.map(({ title, songs, playlistId, followCount }) => {
//     return {
//       title: title,
//       playlistId: playlistId,
//       followCount: followCount,
//       songs: songs.split(','),
//     };
//   });
// }
