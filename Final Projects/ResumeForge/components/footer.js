export function footer() {
    return `
        
       <footer class="bg-slate-700 text-white border-t mt-16">
    <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- Brand -->
        <div>
            <h2 class="text-2xl font-bold mb-4">Resume Forge AI</h2>
            <p class="text-gray-400 text-sm hover:text-white leading-relaxed">
                Build professional resumes in minutes using smart AI-powered templates.
                Designed for students, developers, and professionals.
            </p>
        </div>

        <!-- Product -->
        <div>
            <h3 class="font-semibold mb-4">Product</h3>
            <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="#" class="hover:text-white">Templates</a></li>
                <li><a href="#" class="hover:text-white">AI Builder</a></li>
                <li><a href="#" class="hover:text-white">Pricing</a></li>
                <li><a href="#" class="hover:text-white">Features</a></li>
            </ul>
        </div>

        <!-- Company -->
        <div>
            <h3 class="font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="#" class="hover:text-white">About Us</a></li>
                <li><a href="#" class="hover:text-white">Contact</a></li>
                <li><a href="#" class="hover:text-white">Careers</a></li>
                <li><a href="#" class="hover:text-white">Blog</a></li>
            </ul>
        </div>

        <!-- Legal -->
        <div>
            <h3 class="font-semibold mb-4">Legal</h3>
            <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" class="hover:text-white">Terms of Service</a></li>
                <li><a href="#" class="hover:text-white">Refund Policy</a></li>
            </ul>
        </div>

    </div>

    <!-- Bottom Section -->
    <div class="border-t">
        <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 Resume Forge AI. All rights reserved.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
                <a href="#" class="hover:text-white">LinkedIn</a>
                <a href="#" class="hover:text-white">Twitter</a>
                <a href="#" class="hover:text-white">GitHub</a>
            </div>
        </div>
    </div>
</footer>
`;
}
