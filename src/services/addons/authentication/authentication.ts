export class AuthenticationService {
  public static async authenticate(moduleId: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          moduleId: moduleId,
          token: '74vv7v276231gfbywf',
          userId: '8rfb37fgv6b21y',
        });
      }, 1000); // 1 second delay
    });
  }
}
