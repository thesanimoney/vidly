import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export default async function hashPassword(password: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    } catch (err) {
        throw new Error('Error hashing password');
    }
}
