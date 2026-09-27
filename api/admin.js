ROCKET - نسخة Vercel/GitHub الجاهزة

1) ارفع index.html ومجلد api إلى Repository على GitHub.
2) اربط الـRepository بمشروع Vercel.
3) في Vercel > Settings > Environment Variables أضف:
   ADMIN_PASSWORD = Elsaro5
   GITHUB_TOKEN = GitHub Fine-grained Personal Access Token
4) امنح الـToken صلاحية Contents: Read and write للمستودع المطلوب فقط.
5) اعمل Redeploy من Vercel.
6) افتح المتجر واضغط 5 مرات على شعار Rocket للدخول إلى الأدمن.
7) في تبويب GitHub اكتب Owner وRepository وBranch وFile Path فقط. لا يوجد Token داخل الموقع.

مهم:
- لا تضع GITHUB_TOKEN داخل index.html.
- نسخة المتجر تستخدم LocalStorage للسلة والإعدادات المحلية.
- مزامنة المنتجات مع GitHub تتم عبر /api/admin على Vercel.
