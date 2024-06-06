import bcrypt from 'bcrypt';

export default async function comparePasswords(userInputPassword: string, storedHashedPassword: string): Promise<boolean> {
    try {
        return await bcrypt.compare(userInputPassword, storedHashedPassword);
    } catch (err) {
        throw new Error('Error comparing passwords');
    }
}
