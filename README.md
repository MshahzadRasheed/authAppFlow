# React Native Authentication App

A React Native application demonstrating authentication functionality using React Context API for state management. This app includes login, signup, and home screens with form validation and persistent authentication.

## Features

- **Authentication Flow**: Complete login and signup functionality
- **State Management**: React Context API for global authentication state
- **Form Validation**: Real-time validation with error messages
- **Persistent Authentication**: Users stay logged in using AsyncStorage
- **Password Visibility Toggle**: Eye icon to show/hide password
- **Responsive UI**: Clean and intuitive user interface
- **Navigation**: Seamless navigation between screens
- **Splash Screen**:All screen shots are in Screenshot folder

## Screenshots

[Add screenshots of your app here]

## Prerequisites

Before running this project, make sure you have:

- Node.js (>= 18)
- React Native development environment set up
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)
- An Android emulator or physical device
- iOS Simulator or physical device (macOS only)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd react-native-auth-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies (macOS only)**
   ```bash
   cd ios && pod install && cd ..
   ```

## Running the App

### Android
```bash
# Start Metro bundler
npm start

# In a new terminal, run Android app
npm run android
```

### iOS (macOS only)
```bash
# Start Metro bundler
npm start

# In a new terminal, run iOS app
npm run ios
```

## Project Structure

```
src/
├── screenShots/              # Screen shots of application ()
├── components/          # Reusable UI components
├── containers/          # Screen components
│   ├── Login/          # Login screen
│   ├── Signup/         # Signup screen
│   └── Home/           # Home screen
├── context/            # React Context providers
│   └── AuthContext.tsx # Authentication context
├── constants/          # App constants
├── navigator/          # Navigation configuration
├── theme/              # Theme and styling
└── util/               # Utility functions
```

## Authentication Flow

### Login Screen
- Email and password input fields
- Form validation for email format and required fields
- Error handling for invalid credentials
- Navigation to signup screen
- Password visibility toggle

### Signup Screen
- Name, email, and password input fields
- Form validation including:
  - Required field validation
  - Email format validation
  - Password minimum length (6 characters)
- Navigation to login screen
- Password visibility toggle

### Home Screen
- Display logged-in user's information
- Logout functionality
- Protected route (only accessible when authenticated)

## State Management

The app uses React Context API for managing authentication state:

```typescript
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
}
```

## Form Validation

### Login Validation
- Email: Required, valid email format
- Password: Required

### Signup Validation
- Name: Required
- Email: Required, valid email format
- Password: Required, minimum 6 characters

## Persistence

The app uses AsyncStorage to persist authentication state:
- User data is saved to device storage on successful login/signup
- Authentication state is restored when the app is reopened
- User data is cleared on logout

## Test Credentials

For testing the login functionality, use:
- **Email**: `test@example.com`
- **Password**: `password123`

## Dependencies

### Main Dependencies
- `react-native`: Core React Native framework
- `@react-navigation/native`: Navigation library
- `@react-navigation/native-stack`: Stack navigator
- `@react-native-async-storage/async-storage`: Local storage
- `react-native-safe-area-context`: Safe area handling
- `react-native-screens`: Native screen components

### Development Dependencies
- `@types/react`: TypeScript definitions
- `typescript`: TypeScript support
- `eslint`: Code linting
- `prettier`: Code formatting

## API Integration

Currently, the app uses mock authentication. To integrate with a real API:

1. Replace the mock functions in `AuthContext.tsx`
2. Add your API endpoints
3. Handle real authentication responses
4. Add proper error handling for network requests

## Customization

### Styling
- Modify theme files in `src/theme/`
- Update component styles in respective style files
- Colors and typography can be customized globally

### Validation Rules
- Update validation logic in screen components
- Add custom validation rules as needed
- Modify error messages in string constants

## Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npx react-native start --reset-cache
   ```

2. **Android build issues**
   ```bash
   cd android && ./gradlew clean && cd ..
   npm run android
   ```

3. **iOS build issues**
   ```bash
   cd ios && pod install && cd ..
   npm run ios
   ```

4. **AsyncStorage issues**
   - Make sure AsyncStorage is properly linked
   - Check platform-specific installation steps

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact [your-email@example.com]
