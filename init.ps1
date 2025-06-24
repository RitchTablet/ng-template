# Rutas base
$baseApp = "src\app"

# Core
New-Item -ItemType Directory -Force -Path "$baseApp\core\guards"
New-Item -ItemType Directory -Force -Path "$baseApp\core\interceptors"
New-Item -ItemType Directory -Force -Path "$baseApp\core\layouts"
New-Item -ItemType Directory -Force -Path "$baseApp\core\services"

# Modules/help
New-Item -ItemType Directory -Force -Path "$baseApp\modules\help\components\help-widget"
New-Item -ItemType Directory -Force -Path "$baseApp\modules\help\pages\help-page"
New-Item -ItemType Directory -Force -Path "$baseApp\modules\help\services"
New-Item -ItemType Directory -Force -Path "$baseApp\modules\help\models"

# Shared
New-Item -ItemType Directory -Force -Path "$baseApp\shared\components\button"
New-Item -ItemType Directory -Force -Path "$baseApp\shared\pipes"
New-Item -ItemType Directory -Force -Path "$baseApp\shared\directives"

# Archivos principales
Set-Content -Path "$baseApp\app.config.ts" -Value "// Configuración global de la app"
Set-Content -Path "$baseApp\app.routes.ts" -Value "// Rutas principales de la app"

# Core
Set-Content -Path "$baseApp\core\guards\auth.guard.ts" -Value "// Auth guard"
Set-Content -Path "$baseApp\core\interceptors\http.interceptor.ts" -Value "// HTTP interceptor"
Set-Content -Path "$baseApp\core\layouts\main-layout.component.ts" -Value "// Main layout component"
Set-Content -Path "$baseApp\core\services\auth.service.ts" -Value "// Auth service"
Set-Content -Path "$baseApp\core\core.module.ts" -Value "// (Opcional) Solo para providers globales"

# Module help
Set-Content -Path "$baseApp\modules\help\components\help-widget\help-widget.component.ts" -Value "// Help widget component"
Set-Content -Path "$baseApp\modules\help\pages\help-page\help-page.component.ts" -Value "// Help page component"
Set-Content -Path "$baseApp\modules\help\services\help.service.ts" -Value "// Help service"
Set-Content -Path "$baseApp\modules\help\models\help.model.ts" -Value "// Help model"
Set-Content -Path "$baseApp\modules\help\help.routes.ts" -Value "// Help routes"

# Shared
Set-Content -Path "$baseApp\shared\components\button\button.component.ts" -Value "// Button component"
Set-Content -Path "$baseApp\shared\pipes\capitalize.pipe.ts" -Value "// Capitalize pipe"
Set-Content -Path "$baseApp\shared\directives\autofocus.directive.ts" -Value "// Autofocus directive"
Set-Content -Path "$baseApp\shared\shared.module.ts" -Value "// (Opcional) Solo para providers/directivas"

Write-Host "`n✅ Estructura generada correctamente en src\app\"
